export const site = {
  name: 'Guilherme do Prado',

  title: 'Procurement Analyst · Mechanical Production Engineer · Strategic Sourcing',

  locationLine: 'Florianópolis, Brazil — Open to relocation to Germany 🇩🇪',

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
      'I am a procurement analyst and mechanical production engineer — a combination that lets me work both sides of the sourcing table: I read technical specs, challenge supplier assumptions on materials and manufacturing processes, and bring that rigour into cost analysis and negotiation.',

      'My day-to-day combines purchasing operations with data: Power BI and Qlik Sense dashboards for spend visibility and supplier KPIs, RFQ and RFP cycles, TCO modelling, and three-way matching discipline so finance and operations stay aligned.',

      'I am currently based in Brazil and actively building toward a role in Germany, where I want to contribute to industrial organisations — particularly in the automotive, energy, and capital goods sectors — operating in European and global supplier markets. I communicate fluently in English and am actively learning German.',

      'If you are looking for someone who understands both the technical and commercial sides of procurement, I would be glad to connect.',
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
          'Cost Analysis / TCO',
          'RFQ / RFP',
          'Three-way Matching',
          'Category Management',
        ],
      },
      {
        label: 'Analytics & Data',
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
        label: 'Engineering',
        items: [
          'Mechanical Production Engineering',
          'Manufacturing Processes',
          'Technical Specification Review',
          'Bill of Materials (BOM)',
        ],
      },
      {
        label: 'Collaboration',
        items: [
          'Cross-functional Collaboration',
          'Stakeholder Management',
          'Process Improvement',
          'Supplier Development',
        ],
      },
      {
        label: 'Languages',
        items: [
          'Portuguese (Native)',
          'English (Fluent — C1)',
          'German (Learning — A1, targeting B2)',
          'Spanish (B1)',
        ],
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
          'Built procurement KPI dashboards (lead time, spend, OTIF) in Power BI and Qlik Sense, reducing ad-hoc data requests from leadership and improving review cadence.',
          'Managed purchase-to-pay flows in ERP with finance alignment; supported three-way matching and accrual discussions, reducing invoice exceptions.',
          'Contributed to TCO models and category views used in sourcing decisions, supporting savings in the mid–high five figures EUR range on selected initiatives.',
        ],
        impactCallout: {
          line1: 'Mid–high five figures EUR',
          line2: 'in sourcing savings on selected initiatives',
        },
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

  portfolioPreview: {
    title: 'Projects',
    subtitle: 'Procurement dashboards and data case studies — full breakdowns on the portfolio page.',
    projects: [
      {
        id: 'industrial-procurement-dashboard',
        name: 'Industrial Procurement Dashboard',
        tool: 'Power BI',
        description: 'Spend analysis across mechanical, metal, and energy categories — supplier ranking, PO tracking, and cost deviation alerts.',
        href: '/portfolio#industrial-procurement-dashboard',
      },
      {
        id: 'supplier-performance',
        name: 'Supplier Performance Dashboard',
        tool: 'Qlik Sense',
        description: 'OTD, quality rejections, lead time variance, and price deviation — monitored at supplier and category level.',
        href: '/portfolio#supplier-performance',
      },
    ],
  },

  portfolio: {
    back: 'Back to Home',
    projects: [
      {
        id: 'industrial-procurement-dashboard',
        title: 'Industrial Procurement Dashboard',
        status: 'in-development' as const,
        description:
          'Spend analysis across mechanical, metal, and energy categories — supplier ranking, PO tracking, and cost deviation alerts.',
        embed: 'powerbi' as const,
        tags: ['Power BI', 'DAX', 'Procurement Analytics'],
      },
      {
        id: 'supplier-performance',
        title: 'Supplier Performance Dashboard',
        status: 'in-development' as const,
        description:
          'Supplier KPI tracking — OTD, quality rejection rate, lead time variance, price deviation, and OTIF monitored at supplier and category level.',
        embed: 'qlik' as const,
        tags: ['Qlik Sense', 'Supplier Management', 'KPIs'],
      },
    ],
  },

  contact: {
    title: 'Contact',
    note: 'Open to procurement and supply chain roles — remote, hybrid, or relocation to Germany 🇩🇪. Based in Brazil 🇧🇷 · Usually replies within 48 hours.',
    email: 'contact@guilhermedoprado.com',
    linkedin: 'https://linkedin.com/in/guidoprado',
    github: 'https://github.com/guilhermedoprado',
  },

  footer: {
    copyright: 'Guilherme do Prado',
    builtWith: 'Built with React + TypeScript',
  },
} as const