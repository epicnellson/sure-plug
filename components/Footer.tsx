import { Mail, MessageCircle, PlugZap } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { site, whatsappUrl } from '@/lib/site'

const footerLinks = [
  ...navLinks.filter((l) => l.href !== '#faq'),
  { href: `mailto:${site.email}`, label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-[.18em] text-white">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-background shadow-[0_0_18px_hsl(var(--primary)/.3)]">
              <PlugZap className="size-3.5" />
            </span>
            {site.name.toUpperCase()}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{site.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-primary">
          <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          Accepting new clients
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-muted-foreground">
        <span>© 2026 {site.name}</span>

        <div className="flex items-center gap-5">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {social.label}
            </a>
          ))}

          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 transition hover:text-white"
          >
            <Mail className="size-3.5" />
            {site.email}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-white"
          >
            <MessageCircle className="size-3.5" />
            {site.whatsapp}
          </a>
        </div>
      </div>
    </footer>
  )
}