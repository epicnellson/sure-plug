function resolveBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, '')
  }
  return 'https://sureplug.co'
}

export const site = {
  name: 'Sure Plug',
  handle: '@sureplug.co',
  tagline: 'Fast, verified, and 100% reliable. Direct execution with zero middleman delays.',
  email: 'nelsonemmanuel006@gmail.com',
  whatsapp: '+232 79 826 564',
  whatsappDigits: '23279826564',
  baseUrl: resolveBaseUrl(),
  socials: [] as Array<{ label: string; href: string }>,
}

export const whatsappUrl = `https://wa.me/${site.whatsappDigits}`