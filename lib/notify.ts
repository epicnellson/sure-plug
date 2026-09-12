import type { RequestForm } from './validation'

export interface NotifyResult {
  channel: 'webhook' | 'telegram' | 'resend' | 'none'
  ok: boolean
  detail?: string
}

export interface RequestRecord {
  id: string
  receivedAt: string
  ip?: string
  request: RequestForm
}

function formatPayload(record: RequestRecord) {
  const { name, contact, service, budget, details } = record.request
  return {
    id: record.id,
    receivedAt: record.receivedAt,
    ip: record.ip ?? null,
    name,
    contact,
    service,
    budget,
    details,
  }
}

function formatTelegramText(payload: ReturnType<typeof formatPayload>) {
  return [
    'NEW REQUEST — SurePlug',
    '',
    `Name: ${payload.name}`,
    `Contact: ${payload.contact}`,
    `Service: ${payload.service}`,
    `Budget: ${payload.budget}`,
    '',
    `Details:\n${payload.details}`,
    '',
    `Received: ${payload.receivedAt} (id ${payload.id})`,
  ].join('\n')
}

function formatEmailHtml(payload: ReturnType<typeof formatPayload>) {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 0;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 0;color:#111827;vertical-align:top;word-break:break-word">${value}</td></tr>`
  return [
    '<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto">',
    '<h2 style="color:#059669;margin:0 0 16px">New request on SurePlug</h2>',
    '<table style="border-collapse:collapse;width:100%">',
    row('Request', `<code>${esc(payload.id)}</code>`),
    row('Received', esc(payload.receivedAt)),
    row('Name', esc(payload.name)),
    row('Contact', esc(payload.contact)),
    row('Service', esc(payload.service)),
    row('Budget', esc(payload.budget)),
    row('Details', `<pre style="margin:0;font-family:inherit;white-space:pre-wrap">${esc(payload.details)}</pre>`),
    '</table></div>',
  ].join('')
}

async function postJson(url: string, body: unknown, headers: Record<string, string>, timeoutMs = 10000) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      signal: controller.signal,
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      return `${res.status} ${res.statusText}${text ? ` — ${text.slice(0, 200)}` : ''}`
    }
    return null
  } finally {
    clearTimeout(timer)
  }
}

async function notifyWebhook(payload: ReturnType<typeof formatPayload>): Promise<string | null> {
  const url = process.env.REQUEST_WEBHOOK_URL?.trim()
  if (!url) return 'not configured'
  const secret = process.env.REQUEST_WEBHOOK_SECRET?.trim()
  return postJson(url, payload, secret ? { Authorization: `Bearer ${secret}` } : {})
}

async function notifyTelegram(payload: ReturnType<typeof formatPayload>, timeoutMs = 8000): Promise<string | null> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim()
  const chat = process.env.TELEGRAM_CHAT_ID?.trim()
  if (!token || !chat) return 'not configured'
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text: formatTelegramText(payload), parse_mode: 'HTML' }),
      signal: controller.signal,
    })
    if (!res.ok) return `${res.status} ${res.statusText}`
    return null
  } finally {
    clearTimeout(timer)
  }
}

async function notifyResend(payload: ReturnType<typeof formatPayload>, timeoutMs = 10000): Promise<string | null> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const to = process.env.REQUEST_NOTIFY_EMAIL?.trim()
  if (!apiKey || !to) return 'not configured'
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.REQUEST_NOTIFY_FROM || `SurePlug <onboarding@resend.dev>`,
        to,
        subject: `New request: ${payload.service} — ${payload.name}`,
        html: formatEmailHtml(payload),
      }),
      signal: controller.signal,
    })
    if (!res.ok) return `${res.status} ${res.statusText}`
    return null
  } finally {
    clearTimeout(timer)
  }
}

export async function notifyNewRequest(record: RequestRecord): Promise<NotifyResult[]> {
  const payload = formatPayload(record)
  const attempts: Array<{ channel: NotifyResult['channel']; run: () => Promise<string | null> }> = [
    { channel: 'webhook', run: () => notifyWebhook(payload) },
    { channel: 'telegram', run: () => notifyTelegram(payload) },
    { channel: 'resend', run: () => notifyResend(payload) },
  ]

  const results: NotifyResult[] = []
  for (const attempt of attempts) {
    const detail = await attempt.run().catch((err: unknown) => err instanceof Error ? err.message : 'unknown error')
    if (detail === null) {
      results.push({ channel: attempt.channel, ok: true })
    } else if (detail !== 'not configured') {
      results.push({ channel: attempt.channel, ok: false, detail })
    }
  }
  if (results.length === 0) results.push({ channel: 'none', ok: true })
  return results
}