import {
  BadgeCheck,
  CodeXml,
  Gem,
  Globe,
  MessageCircle,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  copy: string
  time: string
  featured?: boolean
}

export const services: Service[] = [
  { icon: CodeXml, title: 'Web & App Development', copy: 'Sites, dashboards, and automations that actually ship — built by devs who reply to your messages.', time: '3–7 days', featured: true },
  { icon: Palette, title: 'Custom Graphic Design', copy: 'Logos, packaging, and brand assets with a point of view. You get source files, not excuses.', time: '1–3 days' },
  { icon: ShoppingBag, title: 'Product Sourcing', copy: 'Hard-to-find goods and reliable vendors, with quotes, lead times, and QC checks in writing.', time: '24–48 hrs' },
  { icon: MessageCircle, title: 'Priority Assistance', copy: 'A direct line to someone who moves when the clock is running. For time-sensitive, out-of-the-box asks.', time: '< 15 mins' },
  { icon: Globe, title: 'Digital Strategy', copy: 'A clear next move for your business — practical roadmaps, not 40-slide decks of vague ambition.', time: '2–5 days' },
  { icon: Gem, title: 'Premium Concierge', copy: 'High-touch requests where details and discretion matter. Handled personally, start to finish.', time: 'By brief' },
]

export interface WhyPoint {
  icon: LucideIcon
  title: string
  copy: string
}

export const whyPoints: WhyPoint[] = [
  { icon: BadgeCheck, title: 'Verified quality', copy: 'Every operator is vetted for craft, communication, and follow-through.' },
  { icon: Phone, title: 'Direct communication', copy: 'Talk to the person doing the work. Fast answers, clear next steps.' },
  { icon: ShieldCheck, title: 'Guaranteed delivery', copy: 'A shared brief, visible milestones, and no disappearing acts.' },
  { icon: Search, title: 'Transparent pricing', copy: 'Know what it costs and what you get before work starts.' },
]

export interface Testimonial {
  name: string
  role: string
  copy: string
  service: string
  project: string
  featured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: 'Femi Ojo',
    role: 'Founder, Rivergrove (SaaS)',
    copy: 'Rebuilt our landing page and onboarding in nine days. Signups doubled the first week after launch and he was still picking up calls at 9pm.',
    service: 'Web & App Development',
    project: 'SaaS landing + onboarding · 2025',
  },
  {
    name: 'Amara Diallo',
    role: 'Owner, NEST & CO apparel',
    copy: 'Sourced three manufacturers in China in under 48 hours — samples, prices, and inspection reports all in one WhatsApp thread. Saved me weeks of cold emails.',
    service: 'Product Sourcing',
    project: 'Wholesale suppliers · Since 2024',
    featured: true,
  },
  {
    name: 'Kwame Mensah',
    role: 'Brand Lead, Halcyon Studio',
    copy: 'The full brand package — logo, packaging, and social templates — landed in three days with source files and a naming rationale. Rare to get this polished this fast.',
    service: 'Custom Graphic Design',
    project: 'Brand package launch · 2025',
  },
]

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why us' },
  { href: '#proof', label: 'Proof' },
  { href: '/faq', label: 'FAQ' },
]

export const stats = [
  { value: '1,000', suffix: '+', label: 'Requests completed' },
  { value: '200', suffix: '+', label: 'Vetted operators' },
  { value: '<15', suffix: 'm', label: 'Avg. first reply' },
]

export const serviceOptions = [
  'Web & App Development',
  'Custom Graphic Design',
  'Product Sourcing',
  'Priority Assistance',
]

export const budgetOptions = ['Under $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+']