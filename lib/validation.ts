export interface RequestForm {
  name: string
  contact: string
  service: string
  budget: string
  details: string
}

export type RequestErrors = Partial<Record<keyof RequestForm, string>>

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const PHONE_RE = /^[+]?[\d\s\-().]{7,}$/

export const NAME_MAX = 120
export const CONTACT_MAX = 160
export const DETAILS_MAX = 2000

export function validateRequest(form: RequestForm): RequestErrors {
  const errors: RequestErrors = {}

  const name = form.name?.trim() ?? ''
  if (!name) errors.name = 'Please tell us your name.'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.'
  else if (name.length > NAME_MAX) errors.name = `Name must be at most ${NAME_MAX} characters.`

  const contact = (form.contact ?? '').trim()
  if (!contact) errors.contact = 'An email or WhatsApp number is required.'
  else if (contact.length > CONTACT_MAX) errors.contact = `Contact must be at most ${CONTACT_MAX} characters.`
  else if (contact.includes('@')) {
    if (!EMAIL_RE.test(contact)) errors.contact = "That email address doesn't look right."
  } else if (!PHONE_RE.test(contact.replace(/\s/g, ''))) {
    errors.contact = "That phone number doesn't look right."
  }

  if (!form.service) errors.service = 'Pick a service category.'
  if (!form.budget) errors.budget = 'Pick a budget range.'

  const details = form.details?.trim() ?? ''
  if (!details) errors.details = 'Give us a few details about the work.'
  else if (details.length < 10) errors.details = 'Details should be at least 10 characters.'
  else if (details.length > DETAILS_MAX) errors.details = `Details must be at most ${DETAILS_MAX} characters.`

  return errors
}

export function sanitizeRequest(input: Record<string, unknown>): RequestForm {
  const val = (v: unknown) => (typeof v === 'string' ? v : '')
  return {
    name: val(input.name).trim().slice(0, NAME_MAX),
    contact: val(input.contact).trim().slice(0, CONTACT_MAX),
    service: val(input.service),
    budget: val(input.budget),
    details: val(input.details).slice(0, DETAILS_MAX),
  }
}