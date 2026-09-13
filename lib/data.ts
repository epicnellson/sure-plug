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
    icon: CodeXml,
    title: 'Web & App Development',
    copy: 'Sites, dashboards, and automations built by developers who reply to your messages. Scope agreed up front, builds shipped in stages.',
    time: '3–7 business days',
    featured: true,
    image: 'https://fastly.picsum.photos/id/984/640/420.jpg?hmac=c7hfJ3FpuQMMiQWXOCeb1Iv-hKgVk7ufTWTWlPfNX30',
    imageAlt: 'Developer workspace writing code for a client web or app build',
  },
  {
    icon: Palette,
    title: 'Custom Graphic Design',
    copy: 'Logos, packaging, and brand assets with source files and a documented rationale. Revisions included, no silent retention.',
    time: '1–4 business days',
    image: 'https://fastly.picsum.photos/id/807/640/420.jpg?hmac=-d3g8MX7c8d0MjkzcF_c14bd58ogJFamWgN6M7pRB34',
    imageAlt: 'Designer drafting a brand palette on a drawing tablet',
  },
  {
    icon: ShoppingBag,
    title: 'Product Sourcing',
    copy: 'Hard-to-find goods and verified vendors, with quotes, lead times, and QC checklists put in writing before you commit.',
    time: '2–5 business days',
    image: 'https://fastly.picsum.photos/id/988/640/420.jpg?hmac=Qboq1DNFwht6MJrsR0t98pwKb_vgezhHwBRd9gdnL4c',
    imageAlt: 'Packaged products ready for supplier verification',
  },
  {
    icon: MessageCircle,
    title: 'Priority Assistance',
    copy: 'A direct line to someone who moves when the clock is running. For time-sensitive asks where a slow reply costs real money.',
    time: '< 15 min first reply',
    image: 'https://fastly.picsum.photos/id/230/640/420.jpg?hmac=88_38ZPRYpzsW6-x_OUmyqcDDtf4b1wbP1ageGn2P4I',
    imageAlt: 'Hands replying to a client message on a phone at a desk',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    copy: 'A clear next move for your business — practical roadmaps and working sessions, not forty-slide decks of vague ambition.',
    time: '3–5 business days',
    image: 'https://fastly.picsum.photos/id/961/640/420.jpg?hmac=D-MWYMcInl8TM0O1Bqgliti5oy4I8Cwqjg2tNBlA5rc',
    imageAlt: 'Strategy notes and a roadmap sketched on a whiteboard',
  },
  {
    icon: Gem,
    title: 'Premium Concierge',
    copy: 'High-touch requests where details and discretion matter. Handled personally by the founder, start to finish.',
    time: 'By brief',
    image: 'https://fastly.picsum.photos/id/1055/640/420.jpg?hmac=cLSIhpT4Stk4xtqBZMV7KPaaXOVa5fpu9P1fhkJtk7o',
    imageAlt: 'Close-up of a polished premium product detail',
  },
]

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
]

export const budgetOptions = ['Under $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+']