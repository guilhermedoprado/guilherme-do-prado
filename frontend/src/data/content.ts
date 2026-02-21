export type Lang = 'pt-BR' | 'en-US' | 'cs-CZ';

export const translations = {
  'pt-BR': {
    nav: { profile: 'Perfil', portfolio: 'Portfólio' },
    hero: {
      role: 'Full Stack Developer | React + ASP.NET | Eng. Produção UFSC',
      tags: ['React', 'ASP.NET Core', 'PostgreSQL', 'Inglês C1'],
    },
    sections: {
      about: {
        title: 'Sobre Mim',
        p1: 'Estudante de <strong>Engenharia de Produção Mecânica (UFSC)</strong> em transição para desenvolvimento de software.',
        p2: 'Foco em resolver problemas complexos de negócios com arquitetura limpa e código performático.',
      },
      skills: { title: 'Habilidades Técnicas' },
      exp: { 
        title: 'Trajetória Profissional',
        items: [
          {
            role: 'Estudante Full-time',
            company: 'Desenvolvimento Full Stack',
            date: 'Jan 2026 - Presente',
            desc: 'Foco intensivo em React (Frontend) e ASP.NET Core (Backend).'
          },
          {
            role: 'Consultor Supply Chain',
            company: 'Hennemann Consulting',
            date: 'Mai 2023 - Jun 2025',
            desc: 'Análise de dados, negociação estratégica e otimização de processos de compras.'
          }
        ]
      },
      edu: { 
        title: 'Formação Acadêmica',
        items: [
          {
            inst: 'UFSC - Univ. Federal de Santa Catarina',
            course: 'Engenharia de Produção Mecânica',
            period: '2020 - 2026 (Em andamento)'
          },
          {
            inst: 'Educative.io & Coursera',
            course: 'ASP.NET Backend & Meta Frontend',
            period: '2026 - Presente'
          },
          {
            inst: 'MITx MicroMasters',
            course: 'Supply Chain Management',
            period: '2023 - 2024'
          }
        ]
      },
       footer: {
      madeWith: 'Desenvolvido com',
      by: 'por Guilherme do Prado.'
    },
      portfolio: {
        title: 'Portfólio',
        subtitle: 'Projetos focados em arquitetura limpa e regras de negócio complexas.',
        projects: {
          heatsphere: {
            desc: 'Plataforma para note-taking e ferramentas auxiliares no aprendizado de transmissão de calor.'
          },
          valueprisma: {
            desc: 'Sistema de gerenciamento de finanças pessoais com dashboards interativos para insights e otimização de gastos.'
          }
        }
      }
    },
  },
  'en-US': {
    nav: { profile: 'Profile', portfolio: 'Portfolio' },
    hero: {
      role: 'Full Stack Developer | React + ASP.NET | Production Eng. UFSC',
      tags: ['React', 'ASP.NET Core', 'PostgreSQL', 'English C1'],
    },
    sections: {
      about: {
        title: 'About Me',
        p1: '<strong>Mechanical Production Engineering student (UFSC)</strong> transitioning to software development.',
        p2: 'Focused on solving complex business problems with clean architecture and high-performance code.',
      },
      skills: { title: 'Technical Skills' },
      exp: { 
        title: 'Professional Path',
        items: [
          {
            role: 'Full-time Student',
            company: 'Full Stack Development',
            date: 'Jan 2026 - Present',
            desc: 'Intensive focus on React (Frontend) and ASP.NET Core (Backend).'
          },
          {
            role: 'Supply Chain Consultant',
            company: 'Hennemann Consulting',
            date: 'May 2023 - Jun 2025',
            desc: 'Data analysis, strategic negotiation, and procurement process optimization.'
          }
        ]
      },
      edu: { 
        title: 'Education',
        items: [
          {
            inst: 'UFSC - Federal Univ. of Santa Catarina',
            course: 'Mechanical Production Engineering',
            period: '2020 - 2026 (Ongoing)'
          },
          {
            inst: 'Educative.io & Coursera',
            course: 'ASP.NET Backend & Meta Frontend',
            period: '2026 - Present'
          },
          {
            inst: 'MITx MicroMasters',
            course: 'Supply Chain Management',
            period: '2023 - 2024'
          }
        ]
      },
    footer: {
      madeWith: 'Built with',
      by: 'by Guilherme do Prado.'
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Projects focused on clean architecture and complex business rules.',
        projects: {
          heatsphere: {
            desc: 'Note-taking platform with auxiliary tools for learning heat transfer concepts.'
          },
          valueprisma: {
            desc: 'Personal finance management system with interactive dashboards for insights and expense optimization.'
          }
        }
      }
    }
  },
  'cs-CZ': {
    nav: { profile: 'Profil', portfolio: 'Portfolio' },
    hero: {
      role: 'Full Stack Vývojář | React + ASP.NET | Výrobní Inženýrství',
      tags: ['React', 'ASP.NET Core', 'PostgreSQL', 'Angličtina C1'],
    },
    sections: {
      about: {
        title: 'O mně',
        p1: 'Student <strong>Strojního Průmyslového Inženýrství (UFSC)</strong> přecházející na vývoj softwaru.',
        p2: 'Zaměřeno na řešení složitých obchodních problémů s čistou architekturou a výkonným kódem.',
      },
      skills: { title: 'Technické Dovednosti' },
      exp: { 
        title: 'Profesní Dráha',
        items: [
          {
            role: 'Student na plný úvazek',
            company: 'Full Stack Vývoj',
            date: 'Led 2026 - Současnost',
            desc: 'Intenzivní zaměření na React (Frontend) a ASP.NET Core (Backend).'
          },
          {
            role: 'Konzultant dodavatelského řetězce',
            company: 'Hennemann Consulting',
            date: 'Kvě 2023 - Čer 2025',
            desc: 'Analýza dat, strategické vyjednávání a optimalizace nákupních procesů.'
          }
        ]
      },
      edu: { 
        title: 'Vzdělání',
        items: [
          {
            inst: 'UFSC - Federální Univerzita Santa Catarina',
            course: 'Strojní Průmyslové Inženýrství',
            period: '2020 - 2026 (Probíhá)'
          },
          {
            inst: 'Educative.io & Coursera',
            course: 'ASP.NET Backend & Meta Frontend',
            period: '2026 - Současnost'
          },
          {
            inst: 'MITx MicroMasters',
            course: 'Supply Chain Management',
            period: '2023 - 2024'
          }
        ]
      },
         footer: {
      madeWith: 'Vytvořeno pomocí',
      by: 'od Guilherme do Prado.'
    },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Projekty zaměřené na čistou architekturu a komplexní obchodní pravidla.',
        projects: {
          heatsphere: {
            desc: 'Platforma pro psaní poznámek a pomocné nástroje pro výuku přenosu tepla.'
          },
          valueprisma: {
            desc: 'Systém správy osobních financí s interaktivními dashboardy pro přehledy a optimalizaci výdajů.'
          }
        }
      }
    }
  }
};
