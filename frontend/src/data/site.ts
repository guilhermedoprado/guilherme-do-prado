/** Site copy — procurement profile, English (Stockholm / EU audience). */

export const site = {
  name: 'Guilherme do Prado',
  title: 'Procurement Analyst · Strategic Sourcing · Cost Optimization',
  locationLine: 'Florianópolis, Brazil — Open to relocation to Sweden 🇸🇪',
  tagline:
    'I turn spend data and supplier relationships into measurable savings, clearer contracts, and more resilient supply.',
  hero: {
    ctaPortfolio: 'View Portfolio',
    ctaCv: 'Download CV',
    ctaLinkedIn: 'LinkedIn',
  },
  about: {
    title: 'About',
    photoCaption: 'Guilherme do Prado · Procurement Analyst',
    paragraphs: [
      'I am a procurement analyst with a strong analytical backbone: I work from spend visibility and supplier behaviour to decisions that hold up in cross-functional reviews. My background combines hands-on purchasing operations with reporting in Power BI, Qlik Sense, and advanced Excel — always with an eye on total cost, risk, and service level.',
      'I have supported strategic sourcing initiatives, RFQ and RFP cycles, contract follow-up, and three-way matching discipline so finance and operations stay aligned. I am comfortable challenging assumptions with data, and I know when to escalate versus when to negotiate.',
      'I am currently based in Brazil and actively interested in roles in Sweden, especially in the Stockholm area, where I want to contribute to mature procurement organisations and European supplier markets. I communicate fluently in English and am strengthening Swedish (B1 in progress).',
      'If you need someone who can structure category spend, monitor supplier performance, and communicate clearly with stakeholders, I would be glad to connect.',
    ],
  },
  skills: {
    title: 'Skills & Tools',
    groups: [
      {
        label: 'Procurement',
        items: [
          'Strategic Sourcing',
          'Supplier Management',
          'Contract Negotiation',
          'Cost Analysis',
          'RFQ / RFP',
          'Three-way Matching',
        ],
      },
      {
        label: 'Analytics & data',
        items: [
          'Power BI',
          'Qlik Sense',
          'Excel (Advanced)',
          'SQL',
          'Python',
          'ERP Systems',
        ],
      },
      {
        label: 'Collaboration',
        items: [
          'Cross-functional collaboration',
          'Stakeholder management',
          'Process improvement',
          'Supplier development',
        ],
      },
      {
        label: 'Languages',
        items: [
          'Portuguese (Native)',
          'English (Fluent)',
          'Swedish (B1 — in progress)',
          'Spanish (B1)',
        ],
      },
    ],
  },
  education: {
    title: 'Education & Certifications',
    items: [
      {
        institution: 'UFSC — Federal University of Santa Catarina',
        location: 'Florianópolis, Brazil',
        credential: 'B.Sc. Mechanical Production Engineering',
        dates: '2020 — 2026 (expected)',
      },
      {
        institution: 'MITx — MicroMasters Program',
        location: 'Online',
        credential: 'Supply Chain Management',
        dates: '2023 — 2024',
      },
    ],
  },
  experience: {
    title: 'Experience',
    roles: [
      {
        company: 'Hennemann Supply Chain Consulting',
        title: 'Procurement & Data Consultant',
        dates: 'May 2023 — Jun 2025',
        bullets: [
          'Built procurement KPI dashboards (lead time, spend, OTIF) in Power BI and Excel, improving review cadence with leadership by [X%] fewer ad-hoc data requests.',
          'Managed purchase-to-pay flows in ERP with finance alignment; supported three-way matching and accrual discussions, reducing invoice exceptions by approximately [X%].',
          'Contributed to TCO models and category views used in sourcing decisions, with illustrative savings in the mid–high five figures EUR on selected initiatives.',
        ],
        impactCallout: {
          line1: '📊  Mid-high five figures EUR in sourcing',
          line2: 'savings on selected initiatives',
        },
      },
    ],
  },
  portfolioPreview: {
    title: 'Projects',
    subtitle: 'Dashboards and an internal procurement tool — full case studies on the portfolio page.',
    projects: [
      {
        id: 'spend-analytics',
        name: 'Spend Analytics Dashboard',
        tool: 'Power BI',
        description: 'Category spend, supplier concentration, and savings tracking in one view.',
        href: '/portfolio#spend-analytics',
      },
      {
        id: 'supplier-performance',
        name: 'Supplier Performance Dashboard',
        tool: 'Qlik Sense',
        description: 'OTD, quality rejections, lead time variance, and price deviation monitoring.',
        href: '/portfolio#supplier-performance',
      },
      {
        id: 'value-prisma',
        name: 'Value Prisma',
        tool: 'React App',
        description: 'Lightweight RFQ, supplier comparison, matching, and PO tracking for lean teams.',
        href: '/portfolio#value-prisma',
      },
    ],
  },
  contact: {
    title: 'Contact',
    note:
      'Open to procurement and analytics roles — remote, hybrid, or relocation to Sweden. 🟢 Based in Brazil 🇧🇷; available for remote work and relocation to Stockholm 🇸🇪 — I usually reply within 48 hours.',
    email: 'contact@guilhermedoprado.com',
    linkedin: 'https://linkedin.com/in/guidoprado',
    github: 'https://github.com/guilhermedoprado',
  },
  footer: {
    copyright: 'Guilherme do Prado',
    builtWith: 'Built with React + TypeScript',
  },
  portfolio: {
    back: 'Back to Home',
    projects: [
      {
        id: 'spend-analytics',
        title: 'Spend Analytics Dashboard',
        status: 'in-development' as const,
        description:
          'Procurement spend visibility dashboard tracking category spend, supplier concentration, and savings realization.',
        embed: 'powerbi' as const,
        tags: ['Power BI', 'DAX', 'Procurement Analytics'],
      },
      {
        id: 'supplier-performance',
        title: 'Supplier Performance Dashboard',
        status: 'in-development' as const,
        description:
          'Supplier KPI tracking — OTD, quality rejection rate, lead time variance, price deviation.',
        embed: 'qlik' as const,
        tags: ['Qlik Sense', 'Supplier Management', 'KPIs'],
      },
      {
        id: 'value-prisma',
        title: 'Value Prisma',
        status: 'concept' as const,
        description:
          'Modular procurement platform for small and mid-sized companies. Built around four workspaces — Control Tower, Market Intelligence, Smart Sourcing, and Supplier & Logistics — each focused on a distinct procurement layer, keeping data visibility clean and decisions fast.',
        callout:
          'Designed to replace the "ugly ERP" experience: no license fees, no feature bloat — just the workflows lean procurement teams actually use.',
        embed: 'web' as const,
        tags: ['React', 'TypeScript', 'C#', 'ASP.NET Core', 'Python', 'Procurement Tool'],
        githubLabel: 'View on GitHub →',
        githubHref: 'https://github.com/guilhermedoprado',
        features: [
          { icon: '🏠', label: 'Control Tower' },
          { icon: '📊', label: 'Market Intelligence' },
          { icon: '🛒', label: 'Smart Sourcing' },
          { icon: '🌍', label: 'Supplier & Logistics' },
          { icon: '🐍', label: 'Python Microservices' },
          { icon: '🏷️', label: 'No ERP license needed' },
        ],
      },
    ],
  },
} as const
