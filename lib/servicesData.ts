export interface ServiceUseCase {
  title: string
  copy: string
}

export interface ServiceStep {
  title: string
  copy: string
}

export interface ServiceDeliverable {
  title: string
  copy: string
}

export interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  overview: string
  useCases: ServiceUseCase[]
  included: string[]
  steps: ServiceStep[]
  turnaround: string
  pricing: string
  deliverables: ServiceDeliverable[]
  quote?: {
    copy: string
    by: string
    project: string
  }
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'web-development',
    title: 'Web & App Development',
    subtitle: 'Sites, dashboards, and automations built by a developer who picks up the message.',
    overview:
      'You describe what the work should do; we write exactly what will be built, what it costs, and when you will see it — before a single line is typed. Builds ship in stages so you can watch progress instead of waiting for a big reveal at the end.',
    useCases: [
      {
        title: 'Landing pages & marketing sites',
        copy: 'Conversion-focused pages with the copy and structure decided up front, deployed to your own domain.',
      },
      {
        title: 'Dashboards & internal tools',
        copy: 'Admin panels, reporting screens, and back-office tools that give your team their own direct line to the data.',
      },
      {
        title: 'Automations & integrations',
        copy: 'Connecting your forms, payments, WhatsApp, and email so the jobs run themselves instead of living in your inbox.',
      },
      {
        title: 'Web apps & MVP builds',
        copy: 'The first real version of your product — shipped fast, cleanly scoped, and built to grow without a rewrite.',
      },
    ],
    included: [
      'Scope agreed and locked in writing before work starts',
      'Staged build — you see progress after every milestone',
      'A direct line to the developer on the job, not a queue',
      'Responsive, dark-mode-friendly, accessible front-end',
      'Source code and deployment handoff when you launch',
      '7-day defect window with free fixes included',
    ],
    steps: [
      {
        title: 'Brief & scope',
        copy: 'Tell us what needs to work. We turn it into a plain-English build spec.',
      },
      {
        title: 'Quote & timeline',
        copy: 'Fixed price and delivery date in writing. You approve before anything starts.',
      },
      {
        title: 'Staged build',
        copy: 'Milestone after milestone, with updates and screenshots you can actually test.',
      },
      {
        title: 'Review & fixes',
        copy: 'You flag anything off within the defect window and it is fixed at no extra cost.',
      },
      {
        title: 'Launch & handoff',
        copy: 'Deploy, credentials, source — everything you need to own it fully going forward.',
      },
    ],
    turnaround: '3–7 business days for a typical build',
    pricing: 'From $350 — fixed quote approved before work starts',
    deliverables: [
      {
        title: 'Startup v1 launch',
        copy: 'Landing page plus a customer portal with payments — scoped in one call, shipped in six working days, updates arrived unprompted.',
      },
      {
        title: 'Internal reporting tool',
        copy: 'A dashboard that replaced a weekly spreadsheet sprint for a growing operations team.',
      },
      {
        title: 'WhatsApp automation',
        copy: 'An order-notification flow that cut the founder out of the forwarding chain entirely.',
      },
    ],
    quote: {
      copy: 'Took our v1 landing page and rebuilt it into a proper onboarding flow. One call to lock scope, a staged build over six working days, and updates that arrived without me chasing.',
      by: 'Femi Ojo',
      project: 'Founder, Rivergrove (SaaS)',
    },
  },
  {
    slug: 'graphic-design',
    title: 'Custom Graphic Design',
    subtitle: 'Logos, packaging, and brand systems with source files — and the thinking behind them.',
    overview:
      'Every asset is delivered with the editable source files and a short document explaining the choices, so you are never locked in and never guessing at the reasoning. Revisions are built into the scope, and nothing is silently re-used elsewhere.',
    useCases: [
      {
        title: 'Brand identity & logos',
        copy: 'Marks, color systems, and typography built to survive print, packaging, and a phone screen.',
      },
      {
        title: 'Packaging & labels',
        copy: 'Shelf-ready packaging and label designs with print specs the supplier can run with.',
      },
      {
        title: 'Social & ad creatives',
        copy: 'Small-batch creative kits sized for every platform, so your feed and your ads stay consistent.',
      },
      {
        title: 'Print & marketing collateral',
        copy: 'Flyers, brochures, menus, and one-page sell sheets that look as sharp in hand as on screen.',
      },
    ],
    included: [
      'Editable source files — never a locked or borrowed design',
      'A short rationale doc explaining every design decision',
      'Revisions included in the agreed scope',
      'Print-ready specs when needed (bleed, trim, color)',
      'No silent retention — the work is yours to use',
    ],
    steps: [
      {
        title: 'Brief & references',
        copy: 'What you like, what you hate, and where the asset has to live.',
      },
      {
        title: 'Direction & draft',
        copy: 'A first full draft on a clear timeline, not a scatter of half-ideas.',
      },
      {
        title: 'Refine',
        copy: 'Structured revision rounds until it clears the bar you set.',
      },
      {
        title: 'Deliver & hand off',
        copy: 'Final files plus sources, specs, and a note on how it works in the wild.',
      },
    ],
    turnaround: '1–4 business days per asset',
    pricing: 'From $200 — flat scope, no hourly clock-watching',
    deliverables: [
      {
        title: 'Full brand package',
        copy: 'Logo, packaging, and a 12-template social kit delivered with source files and a reasoning document inside four working days.',
      },
      {
        title: 'Packaging refresh',
        copy: 'A renamed label system with print specs a local supplier picked up with zero back-and-forth.',
      },
      {
        title: 'Launch creative kit',
        copy: 'Ad and social sizes from one master design, consistent across every platform.',
      },
    ],
    quote: {
      copy: 'Logo, packaging, and a 12-template social kit delivered with source files and a short reasoning document inside four working days. Clean hand-off, paid once.',
      by: 'Kwame Mensah',
      project: 'Brand Lead, Halcyon Studio',
    },
  },
  {
    slug: 'product-sourcing',
    title: 'Product Sourcing',
    subtitle: 'Hard-to-find goods and verified vendors — quotes, lead times, and QC in writing before you commit.',
    overview:
      'We find and vet the supplier, request and compare quotes, and hand you everything in writing before you commit a cent. Every recommendation comes with a QC checklist and the direct contact of whoever you will be dealing with — no mystery brokers.',
    useCases: [
      {
        title: 'Vehicle & Fleet Spare Parts',
        copy: 'Genuine and compatible parts for cars, trucks, and fleet maintenance, with fitment and compatibility checked before purchase.',
      },
      {
        title: 'Industrial Machinery Components',
        copy: 'Bearings, motors, hydraulics, and replacement components for plant machinery — spec-matched, not guessed.',
      },
      {
        title: 'Cold Room & Refrigeration Equipment',
        copy: 'Compressors, condensers, and refrigeration units with capacity ratings verified before you pay.',
      },
      {
        title: 'Electronics & Hard-to-Find Hardware',
        copy: 'Semiconductors, connectors, and niche components sourced from verified global channels.',
      },
    ],
    included: [
      'Vendor shortlist with references you can check',
      'Written quotes with lead times from multiple suppliers',
      'QC checklist agreed for every item before you commit',
      'Freight, payment, and duty terms spelled out up front',
      'Sample coordination when the order is large enough',
    ],
    steps: [
      {
        title: 'Spec the requirement',
        copy: 'Exact item, quantities, and must-have quality bar in plain language.',
      },
      {
        title: 'Source & shortlist',
        copy: 'We pull verified vendors and compare them on price, lead time, and track record.',
      },
      {
        title: 'Quote comparison',
        copy: 'Everything in one written thread — pricing, lead times, and shipping options side by side.',
      },
      {
        title: 'Verify before you pay',
        copy: 'A QC checklist is agreed per item so you and the supplier are holding each other to the same bar.',
      },
      {
        title: 'Track to handover',
        copy: 'We stay on the thread from order to delivery so you are not chasing anyone alone.',
      },
    ],
    turnaround: '2–5 business days to your first verified quote',
    pricing: 'From $150 research fee — credited against your first order',
    deliverables: [
      {
        title: 'Fleet parts order',
        copy: 'Genuine spares for a commercial fleet sourced and quoted within the week, with fitment confirmed before purchase.',
      },
      {
        title: 'Cold room rebuild',
        copy: 'Compressor and condenser units for a refrigeration refit, capacity-verified and delivered on schedule.',
      },
      {
        title: 'Electronics restock',
        copy: 'Hard-to-find hardware sourced from overseas channels with freight and duty costs itemized in writing.',
      },
    ],
    quote: {
      copy: 'Licensed three verified packaging suppliers in under a week — quote comparisons, lead times, and QC checklists all in a single WhatsApp thread we both kept.',
      by: 'Amara Diallo',
      project: 'Owner, NEST & CO apparel',
    },
  },
  {
    slug: 'priority-assistance',
    title: 'Priority Assistance',
    subtitle: 'A direct line to someone who moves when the clock is running.',
    overview:
      'For the requests where a slow reply costs real money — urgent fixes, same-day paper, or a deal that needs a body in motion. You get a first reply in under 15 minutes and one clear owner who stays on it until it is resolved.',
    useCases: [
      {
        title: 'Time-sensitive escalations',
        copy: 'A reply or a fix that cannot wait for a ticket queue — marked and answered first.',
      },
      {
        title: 'Same-day document or tech fixes',
        copy: 'Forms, files, spreadsheets, and small site fixes handled the same day you raise them.',
      },
      {
        title: 'Urgent coordination & follow-ups',
        copy: 'Chasing vendors, clients, or institutions on your behalf with polite persistence.',
      },
      {
        title: 'Last-mile approvals',
        copy: 'Getting sign-offs, corrections, and confirmations over the line before the deadline bites.',
      },
    ],
    included: [
      'First reply in under 15 minutes on business hours',
      'One clear owner from start to finish — no hand-offs',
      'Same-day resolution for most requests',
      'You keep the same direct thread after the job is done',
    ],
    steps: [
      {
        title: 'Raise it urgent',
        copy: 'Send the request and mark it URGENT — it jumps the queue.',
      },
      {
        title: '15-minute reply',
        copy: 'A human confirms the ask and the timeframe it can be solved in.',
      },
      {
        title: 'Resolution',
        copy: 'The same person stays on it and closes it out, keeping you updated.',
      },
    ],
    turnaround: '< 15 min first reply — most resolved same day',
    pricing: 'From $75 per session — flat, agreed before you raise it',
    deliverables: [
      {
        title: 'Investor deadline rescue',
        copy: 'A last-minute data pack pulled together and formatted the same afternoon it was demanded.',
      },
      {
        title: 'Vendor chase',
        copy: 'A delayed supplier moved from silence to a confirmed dispatch date within hours.',
      },
      {
        title: 'Mid-launch fix',
        copy: 'A payment form failure on a live page diagnosed and fixed while customers were still visiting.',
      },
    ],
  },
  {
    slug: 'digital-strategy',
    title: 'Digital Strategy',
    subtitle: 'A clear next move for your business — roadmaps and working sessions, not vague ambition.',
    overview:
      'We skip the forty-slide deck and give you a practical next move: an audit of what is actually holding you back, a 90-day roadmap with owners and dates, and a working session to pressure-test it. You leave with a plan you can hand to your team or operators.',
    useCases: [
      {
        title: 'Go-to-market plans',
        copy: 'Positioning, channels, and the first 90 days of motion for a launch or relaunch.',
      },
      {
        title: 'Website & funnel audits',
        copy: 'A page-by-page read of where leads drop, with the fixes ranked by impact.',
      },
      {
        title: 'Pricing & packaging',
        copy: 'A pricing structure and offer design that stops leaving money on the table.',
      },
      {
        title: 'Automation & workflow redesign',
        copy: 'Mapping the manual jobs that can be automated and what it takes to build them.',
      },
    ],
    included: [
      'A working session with direct access, not a recorded webinar',
      '90-day roadmap with clear owners and dates',
      'Audit action list ranked by impact versus effort',
      'The actual docs — no decks buried in a drive',
    ],
    steps: [
      {
        title: 'Audit session',
        copy: 'We review your current funnel, pricing, and operations together.',
      },
      {
        title: 'Find the leverage point',
        copy: 'The one or two things that move the needle more than everything else.',
      },
      {
        title: 'Roadmap & handoff',
        copy: 'A dated plan with owners, so the next step is obvious.',
      },
    ],
    turnaround: '3–5 business days to your first roadmap',
    pricing: 'From $400 per engagement',
    deliverables: [
      {
        title: 'Funnel audit',
        copy: 'A ranked action list that turned a leaking checkout into a planned fix list for the quarter.',
      },
      {
        title: 'Pricing redesign',
        copy: 'New packaging and tiers that gave a service business room to raise rates without churn.',
      },
      {
        title: 'Launch roadmap',
        copy: 'A 90-day go-to-market plan with dates and owners ready to hand to the team.',
      },
    ],
  },
  {
    slug: 'premium-concierge',
    title: 'Premium Concierge',
    subtitle: 'High-touch requests where details and discretion matter — handled by the founder, start to finish.',
    overview:
      'Some requests do not fit a catalog — executive assistance, discreet coordination, one-off research, or something you would rather not explain three times. These are handled personally by the founder with a fixed scope agreed before work begins.',
    useCases: [
      {
        title: 'Executive assistance',
        copy: 'Travel, bookings, research, and scheduling handled with the attention the word executive implies.',
      },
      {
        title: 'Vendor & service negotiation',
        copy: 'Someone who gets quotes lowered and terms improved without burning relationships.',
      },
      {
        title: 'Confidential project coordination',
        copy: 'A single discreet point of contact across vendors, freelancers, and timelines.',
      },
      {
        title: 'End-to-end project oversight',
        copy: 'The founder tracks a full delivery from brief to handover and clears blockers personally.',
      },
    ],
    included: [
      'Handled personally by the founder — no hand-offs',
      'Discretion as the default setting, always',
      'Fixed scope and price agreed before work begins',
      'A single thread from start to finish',
    ],
    steps: [
      {
        title: 'Private brief',
        copy: 'Share it on whatever channel you trust — it stays in one thread.',
      },
      {
        title: 'Scope & commit',
        copy: 'A fixed scope, price, and timeline in writing before anything moves.',
      },
      {
        title: 'Execute & report',
        copy: 'The founder executes directly and keeps you updated end to end.',
      },
    ],
    turnaround: 'Kickoff same day — timeline by brief',
    pricing: 'Fixed scope from $250, agreed in advance',
    deliverables: [
      {
        title: 'Closed-door coordination',
        copy: 'A confidential vendor negotiation completed with terms improved and one clean summary at the end.',
      },
      {
        title: 'One-off research',
        copy: 'Market and supplier research delivered as a decision-ready brief, not a folder of links.',
      },
      {
        title: 'Full delivery oversight',
        copy: 'A cross-vendor project seen through from brief to handover without the client juggling anyone.',
      },
    ],
  },
]

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((detail) => detail.slug === slug)
}