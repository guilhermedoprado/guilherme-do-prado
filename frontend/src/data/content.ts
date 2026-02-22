export type Lang = 'pt-BR' | 'en-US';

export const translations = {
  'pt-BR': {
    nav: { profile: 'Perfil', portfolio: 'Portfólio' },
    hero: {
      role: 'Desenvolvedor Full Stack | C# · ASP.NET Core · React | Eng. Produção UFSC',
      tags: ['C# / ASP.NET Core', 'React / TypeScript', 'PostgreSQL / Docker', 'MITx Supply Chain'],
    },
    sections: {
      about: {
        title: 'Sobre Mim',
        p1: 'Desenvolvedor Full Stack com foco em <strong>C#, ASP.NET Core, React e TypeScript</strong>. Estudante de Engenharia de Produção Mecânica (UFSC) com MicroMasters em Supply Chain Management pelo MIT.',
        p2: 'Dois anos de experiência em Procurement me deram visão de negócio que aplico diretamente no desenvolvimento: entendo o problema antes de escrever a primeira linha de código. Esse contexto acelera minha curva em modelagem de dados, lógica de backend e construção de produtos com propósito real.',
      },
      skills: { title: 'Habilidades Técnicas' },
      exp: {
        title: 'Trajetória Profissional',
        items: [
          {
            role: 'Consultor de Procurement & Dados',
            company: 'Hennemann Supply Chain Consulting',
            date: 'Mai 2023 - Jun 2025',
            desc: 'Desenvolvimento de dashboards em Power BI e Excel para KPIs de compras (Lead Time, Spend, OTIF). Gestão de pedidos via ERP com integração ao financeiro. Análises de TCO e modelagem de dados para decisões estratégicas de fornecimento.',
          },
        ],
      },
      edu: {
        title: 'Formação Acadêmica',
        items: [
          {
            inst: 'UFSC - Univ. Federal de Santa Catarina',
            course: 'Engenharia de Produção Mecânica',
            period: '2020 - 2026 (Em andamento)',
          },
          {
            inst: 'MITx MicroMasters',
            course: 'Supply Chain Management',
            period: '2023 - 2024',
          },
        ],
      },
      links: {
        title: 'Conecte-se Comigo',
        github: 'GitHub',
        githubDesc: 'Repositórios e contribuições open-source.',
        linkedin: 'LinkedIn',
        linkedinDesc: 'Networking e trajetória profissional.',
        email: 'E-mail',
        emailDesc: 'Contate-me para parcerias.',
      },
      portfolio: {
        title: 'Portfólio',
        subtitle: 'Projetos de desenvolvimento web full stack.',
        comingSoon: 'Links e detalhes disponíveis em breve.',
        projects: {
          heatsphere: {
            desc: 'Plataforma web para criação de notas e uso de ferramentas interativas no aprendizado de transmissão de calor. Backend em ASP.NET Core, frontend em React + TypeScript, banco PostgreSQL e containerização com Docker.',
            status: 'EdTech',
          },
          valuePrisma: {
            desc: 'Dashboard de inteligência de procurement com análise de Spend, classificação ABC de fornecedores e simulação de cenários de custo. Construído com C# e React, hospedado na Azure.',
            status: 'Analytics',
          },
          headyne: {
            desc: 'E-commerce de fones de ouvido com catálogo de produtos, carrinho, checkout integrado com Stripe e painel de pedidos. Stack full stack com ASP.NET Core e React.',
            status: 'E-commerce',
          },
        },
      },
    },
    footer: {
      madeWith: 'Desenvolvido com',
      by: 'por Guilherme do Prado.',
    },
  },

  'en-US': {
    nav: { profile: 'Profile', portfolio: 'Portfolio' },
    hero: {
      role: 'Full Stack Developer | C# · ASP.NET Core · React | Production Eng. UFSC',
      tags: ['C# / ASP.NET Core', 'React / TypeScript', 'PostgreSQL / Docker', 'MITx Supply Chain'],
    },
    sections: {
      about: {
        title: 'About Me',
        p1: 'Full Stack Developer focused on <strong>C#, ASP.NET Core, React, and TypeScript</strong>. Mechanical Production Engineering student at UFSC with a MicroMasters in Supply Chain Management from MIT.',
        p2: 'Two years in Procurement gave me a business-first mindset I apply directly to development: I understand the problem before writing the first line of code. That context accelerates my curve in data modeling, backend logic, and building products with real-world purpose.',
      },
      skills: { title: 'Technical Skills' },
      exp: {
        title: 'Professional Path',
        items: [
          {
            role: 'Procurement & Data Consultant',
            company: 'Hennemann Supply Chain Consulting',
            date: 'May 2023 - Jun 2025',
            desc: 'Built Power BI and Excel dashboards for procurement KPIs (Lead Time, Spend, OTIF). Managed end-to-end purchase orders via ERP with finance integration. Conducted TCO analyses and data modeling for strategic sourcing decisions.',
          },
        ],
      },
      edu: {
        title: 'Education',
        items: [
          {
            inst: 'UFSC - Federal Univ. of Santa Catarina',
            course: 'Mechanical Production Engineering',
            period: '2020 - 2026 (Ongoing)',
          },
          {
            inst: 'MITx MicroMasters',
            course: 'Supply Chain Management',
            period: '2023 - 2024',
          },
        ],
      },
      links: {
        title: 'Connect',
        github: 'GitHub',
        githubDesc: 'Repositories and open-source contributions.',
        linkedin: 'LinkedIn',
        linkedinDesc: 'Networking and professional journey.',
        email: 'Email',
        emailDesc: "Let's talk about opportunities.",
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Full stack web development projects.',
        comingSoon: 'Links and details available soon.',
        projects: {
          heatsphere: {
            desc: 'Web platform for note-taking and interactive tools for heat transfer learning. Backend in ASP.NET Core, frontend in React + TypeScript, PostgreSQL database, containerized with Docker.',
            status: 'EdTech',
          },
          valuePrisma: {
            desc: 'Procurement intelligence dashboard with Spend Analysis, supplier ABC classification, and cost scenario simulation. Built with C# and React, hosted on Azure.',
            status: 'Analytics',
          },
          headyne: {
            desc: 'Headphone e-commerce with product catalog, cart, Stripe-integrated checkout, and order management panel. Full stack with ASP.NET Core and React.',
            status: 'E-commerce',
          },
        },
      },
    },
    footer: {
      madeWith: 'Built with',
      by: 'by Guilherme do Prado.',
    },
  },
};
