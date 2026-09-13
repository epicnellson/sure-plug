import { Mail, MessageCircle } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { site, whatsappUrl } from '@/lib/site'
import { BrandMark } from './brand'

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-[.18em] text-white">
              <BrandMark glyphClassName="size-3.5" />
              {site.name.toUpperCase()}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{site.tagline}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.16em] text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Accepting new requests
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground/60">
                Explore
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground/60">
                Company
              </p>
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-white"
              >
                <Mail className="size-3.5" />
                {site.email}
              </a>
            </div>

            {site.socials.length > 0 && (
              <div className="flex flex-col gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground/60">
                  Socials
                </p>
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-xs font-semibold text-primary transition hover:bg-primary/20 hover:shadow-[0_0_24px_hsl(var(--primary)/.25)]"
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Operated with a real human on the other end
          </span>
        </div>
      </div>
    </footer>
  )
}