import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { mkdir, appendFile } from 'node:fs/promises'
import { join } from 'node:path'
import { serviceOptions, budgetOptions } from '@/lib/data'
import { sanitizeRequest, validateRequest } from '@/lib/validation'
import { notifyNewRequest } from '@/lib/notify'
import { checkRateLimit } from '@/lib/rate-limit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DATA_DIR = join(process.cwd(), '.data')
const REQUESTS_FILE = join(DATA_DIR, 'requests.jsonl')

function clientIp(request: Request): string | null {
  const fwd = request.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0]?.trim() || null
  return request.headers.get('x-real-ip')
}

async function persist(record: unknown) {
  await mkdir(DATA_DIR, { recursive: true })
  await appendFile(REQUESTS_FILE, `${JSON.stringify(record)}\n`, 'utf8')
}

export async function POST(request: Request) {
  const ip = clientIp(request)
  const limit = checkRateLimit(ip ?? 'unknown')
  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: `Too many requests. Please wait ${limit.retryAfterSeconds}s and try again.`,
      },
      {
        status: 429,
        headers: { 'Retry-After': String(limit.retryAfterSeconds) },
      },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 })
  }

  const input = (body ?? {}) as Record<string, unknown>
  const form = sanitizeRequest({
    name: input.name,
    contact: input.contact,
    service: input.service,
    budget: input.budget,
    details: input.details,
  })

  if (!serviceOptions.includes(form.service)) form.service = ''
  if (!budgetOptions.includes(form.budget)) form.budget = ''

  const errors = validateRequest(form)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  const record = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ip: ip ?? undefined,
    request: form,
  }

  await persist(record).catch((err) => {
    console.error('[api/request] failed to persist:', err)
  })

  const notify = await notifyNewRequest(record)
  const delivered = notify.filter((n) => n.ok)
  const failed = notify.filter((n) => !n.ok)

  for (const n of failed) {
    console.error(`[api/request] ${n.channel} notification failed:`, n.detail)
  }

  return NextResponse.json(
    {
      ok: true,
      id: record.id,
      notify: { channels: delivered.map((n) => n.channel), delivered: delivered.length > 0 },
    },
    { status: 201 },
  )
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Method not allowed.' }, { status: 405 })
}