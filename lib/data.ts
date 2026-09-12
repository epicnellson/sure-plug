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
}

export const services: Service[] = [
  { icon: CodeXml, title: 'Tech & Web Development', copy: 'Fast, polished builds for products, websites, and automations that need to ship.', time: '3–7 days' },
  { icon: Palette, title: 'Custom Graphic Design', copy: 'Brand systems, social assets, and launch-ready creative with a sharp point of view.', time: '1–3 days' },
  { icon: ShoppingBag, title: 'Product Sourcing', copy: 'Hard-to-find products, vendors, and reliable delivery channels—tracked end to end.', time: '24–48 hrs' },
  { icon: MessageCircle, title: 'Priority Assistance', copy: 'A direct line to someone who can make the right move when the clock is running.', time: '< 15 mins' },
  { icon: Globe, title: 'Digital Strategy', copy: 'Clear direction, practical roadmaps, and the next best action for your business.', time: '2–5 days' },
  { icon: Gem, title: 'Premium Concierge', copy: 'A flexible operator for high-touch requests where details and discretion matter.', time: 'By brief' },
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
  copy: string
  service: string
}

export const testimonials: Testimonial[] = [
  { name: 'Jordan M.', copy: 'The plug delivered exactly what I needed, ahead of schedule. No chasing, no surprises.', service: 'Web Development' },
  { name: 'Aaliyah R.', copy: 'The design was clean, fast, and instantly made our brand look more established.', service: 'Brand Design' },
  { name: 'Chris T.', copy: 'Finally, a vendor who communicates like a professional. Already sending my next request.', service: 'Product Sourcing' },
]

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why us' },
  { href: '#proof', label: 'Proof' },
  { href: '#faq', label: 'FAQ' },
]

export const stats = [
  { value: '500', suffix: '+', label: 'Requests completed' },
  { value: '100', suffix: '%', label: 'Satisfaction rate' },
  { value: '<15m', suffix: '', label: 'Avg. response' },
]

export const serviceOptions = [
  'Tech & Web Development',
  'Custom Graphic Design',
  'Product Sourcing',
  'Priority Assistance',
]

export const budgetOptions = ['Under $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+']