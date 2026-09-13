function resolveBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, '')
  }
  return 'https://lastbusstop.co'
}

export const site = {
  name: 'Last Bus Stop',
  handle: '@lastbusstop.co',
  tagline: 'The final destination for your tech, design, and sourcing needs.',
  email: 'nelsonemmanuel006@gmail.com',
  whatsapp: '+232 79 826 564',
  whatsappDigits: '23279826564',
  baseUrl: resolveBaseUrl(),
  socials: [] as Array<{ label: string; href: string }>,
}

export const whatsappUrl = `https://wa.me/${site.whatsappDigits}`