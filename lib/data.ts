import {
  CodeXml,
  Gem,
  Globe,
  MessageCircle,
  Palette,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  copy: string
  time: string
  featured?: boolean
  image?: string
  imageAlt?: string
}

export const services: Service[] = [
  {
    slug: 'web-development',
    icon: CodeXml,
    title: 'Web & App Development',
    copy: 'Sites, dashboards, and automations built by developers who reply to your messages. Scope agreed up front, builds shipped in stages.',
    time: '3–7 business days',
    featured: true,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Code editor on a laptop — the web and app builds we ship',
  },
  {
    slug: 'graphic-design',
    icon: Palette,
    title: 'Custom Graphic Design',
    copy: 'Logos, packaging, and brand assets with source files and a documented rationale. Revisions included, no silent retention.',
    time: '1–4 business days',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Designer crafting brand and interface mockups',
  },
  {
    slug: 'product-sourcing',
    icon: ShoppingBag,
    title: 'Product Sourcing',
    copy: 'Hard-to-find goods and verified vendors, with quotes, lead times, and QC checklists put in writing before you commit.',
    time: '2–5 business days',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Container and production logistics — supplier verification',
  },
  {
    slug: 'priority-assistance',
    icon: MessageCircle,
    title: 'Priority Assistance',
    copy: 'A direct line to someone who moves when the clock is running. For time-sensitive asks where a slow reply costs real money.',
    time: '< 15 min first reply',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Support team at workstations — priority assistance on demand',
  },
  {
    slug: 'digital-strategy',
    icon: Globe,
    title: 'Digital Strategy',
    copy: 'A clear next move for your business — practical roadmaps and working sessions, not forty-slide decks of vague ambition.',
    time: '3–5 business days',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Analytics dashboard on a laptop — digital strategy and roadmap',
  },
  {
    slug: 'premium-concierge',
    icon: Gem,
    title: 'Premium Concierge',
    copy: 'High-touch requests where details and discretion matter. Handled personally by the founder, start to finish.',
    time: 'By brief',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A personal team working together — your concierge service',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export interface WhyPoint {
  icon: LucideIcon
  title: string
  copy: string
}

export const whyPoints: WhyPoint[] = [
  { icon: CodeXml, title: 'Direct execution', copy: 'You talk to the developer or designer doing the work — no account managers, no hand-offs.' },
  { icon: MessageCircle, title: 'Replies, not silence', copy: 'One direct line to the person on the job. Messages get answers, usually within minutes.' },
  { icon: Gem, title: 'Committed timelines', copy: 'A realistic schedule set before work starts — and you are told the moment anything shifts.' },
  { icon: Globe, title: 'Transparent pricing', copy: 'You know what it costs and what the deliverables are before you commit a cent.' },
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
    copy: 'Took our v1 landing page and rebuilt it into a proper onboarding flow. One call to lock scope, a staged build over six working days, and updates that arrived without me chasing.',
    service: 'Web & App Development',
    project: 'SaaS onboarding rebuild · 2025',
  },
  {
    name: 'Amara Diallo',
    role: 'Owner, NEST & CO apparel',
    copy: 'Licensed three verified packaging suppliers in under a week — quote comparisons, lead times, and QC checklists all in a single WhatsApp thread we both kept.',
    service: 'Product Sourcing',
    project: 'Packaging suppliers · Since 2024',
    featured: true,
  },
  {
    name: 'Kwame Mensah',
    role: 'Brand Lead, Halcyon Studio',
    copy: 'Logo, packaging, and a 12-template social kit delivered with source files and a short reasoning document inside four working days. Clean hand-off, paid once.',
    service: 'Custom Graphic Design',
    project: 'Brand package · 2025',
  },
]

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why us' },
  { href: '#proof', label: 'Proof' },
  { href: '/faq', label: 'FAQ' },
]

export const stats = [
  { value: '<15', suffix: 'm', label: 'Typical first reply' },
  { value: '100', suffix: '%', label: 'Direct, operator-to-client' },
  { value: '3–7', suffix: ' days', label: 'Standard turnaround window' },
]

export const serviceOptions = [
  'Web & App Development',
  'Custom Graphic Design',
  'Product Sourcing',
  'Priority Assistance',
  'Digital Strategy',
  'Premium Concierge',
]

export const budgetOptions = ['Under $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+']