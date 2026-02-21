export type Lang = 'pt-BR' | 'en-US' | 'de-DE';

export const translations = {
  'pt-BR': {
    nav: { profile: 'Perfil', portfolio: 'Portfólio' },
    hero: {
      role: 'Analista de Compras | Eng. Produção UFSC | MITx',
      tags: ['Strategic Sourcing', 'Power BI & Excel', 'Gestão de Fornecedores', 'Inglês C1'],
    },
    sections: {
      about: {
        title: 'Sobre Mim',
        p1: 'Estudante de <strong>Engenharia de Produção Mecânica (UFSC)</strong> com MicroMasters em Supply Chain Management pelo MIT.',
        p2: 'Profissional de Procurement com experiência prática em RFI/RFQ/RFP, ciclo Procure-to-Pay e análise de dados (Power BI/Excel) para otimização de custos e decisões estratégicas.',
      },
      skills: { title: 'Habilidades Técnicas' },
      exp: { 
        title: 'Trajetória Profissional',
        items: [
          {
            role: 'Consultor de Procurement',
            company: 'Hennemann Supply Chain Consulting',
            date: 'Mai 2023 - Jun 2025',
            desc: 'Condução de processos de RFI/RFQ/RFP, gestão de pedidos via ERP (P2P), análises de TCO e criação de dashboards em Power BI/Excel para monitoramento de KPIs.'
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
        title: 'Portfólio de Procurement & Dados',
        subtitle: 'Projetos focados em inteligência de compras, análise de custos e visualização de dados.',
        projects: {
          spendAnalysis: {
            desc: 'Dashboard interativo em Power BI demonstrando Análise de Spend, Curva ABC de fornecedores e monitoramento de OTIF e Lead Time.'
          },
          costOptimization: {
            desc: 'Modelagem de dados em Excel Avançado e Python (Pandas) para simulação de cenários de TCO (Total Cost of Ownership) e savings.'
          }
        }
      }
    },
  },
  'en-US': {
    nav: { profile: 'Profile', portfolio: 'Portfolio' },
    hero: {
      role: 'Procurement Analyst | Production Eng. UFSC | MITx',
      tags: ['Strategic Sourcing', 'Power BI & Excel', 'Supplier Management', 'English C1'],
    },
    sections: {
      about: {
        title: 'About Me',
        p1: '<strong>Mechanical Production Engineering student (UFSC)</strong> with a MicroMasters in Supply Chain Management from MIT.',
        p2: 'Procurement professional with hands-on experience in RFI/RFQ/RFP, Procure-to-Pay cycles, and data analysis (Power BI/Excel) for cost optimization and strategic decision-making.',
      },
      skills: { title: 'Technical Skills' },
      exp: { 
        title: 'Professional Path',
        items: [
          {
            role: 'Procurement Consultant',
            company: 'Hennemann Supply Chain Consulting',
            date: 'May 2023 - Jun 2025',
            desc: 'Led RFI/RFQ/RFP processes, managed end-to-end POs via ERP (P2P), conducted TCO analyses, and built Power BI/Excel dashboards for KPI monitoring.'
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
        title: 'Procurement & Data Portfolio',
        subtitle: 'Projects focused on purchasing intelligence, cost analysis, and data visualization.',
        projects: {
          spendAnalysis: {
            desc: 'Interactive Power BI Dashboard showcasing Spend Analysis, supplier ABC classification, and OTIF / Lead Time monitoring.'
          },
          costOptimization: {
            desc: 'Advanced Excel and Python (Pandas) data modeling for Total Cost of Ownership (TCO) scenarios and savings simulation.'
          }
        }
      }
    }
  },
  'de-DE': {
    nav: { profile: 'Profil', portfolio: 'Portfolio' },
    hero: {
      role: 'Einkäufer (Procurement Analyst) | Wirtschaftsingenieurwesen (UFSC) | MITx',
      tags: ['Strategic Sourcing', 'Power BI & Excel', 'Lieferantenmanagement', 'Englisch C1'],
    },
    sections: {
      about: {
        title: 'Über Mich',
        p1: 'Student des <strong>Wirtschaftsingenieurwesens (UFSC)</strong> mit einem MicroMasters in Supply Chain Management vom MIT.',
        p2: 'Einkaufsspezialist mit praktischer Erfahrung in RFI/RFQ/RFP, Procure-to-Pay-Prozessen und Datenanalyse (Power BI/Excel) zur Kostenoptimierung und strategischen Entscheidungsfindung.',
      },
      skills: { title: 'Technische Fähigkeiten' },
      exp: { 
        title: 'Berufserfahrung',
        items: [
          {
            role: 'Procurement Consultant (Einkaufsberater)',
            company: 'Hennemann Supply Chain Consulting',
            date: 'Mai 2023 - Jun 2025',
            desc: 'Durchführung von RFI/RFQ/RFP-Prozessen, End-to-End-Bestellabwicklung im ERP (P2P), TCO-Analysen und Erstellung von Power BI/Excel-Dashboards zur KPI-Überwachung.'
          }
        ]
      },
      edu: { 
        title: 'Ausbildung',
        items: [
          {
            inst: 'UFSC - Federal Univ. of Santa Catarina',
            course: 'Maschinenbau & Wirtschaftsingenieurwesen',
            period: '2020 - 2026 (Laufend)'
          },
          {
            inst: 'MITx MicroMasters',
            course: 'Supply Chain Management',
            period: '2023 - 2024'
          }
        ]
      },
      footer: {
        madeWith: 'Erstellt mit',
        by: 'von Guilherme do Prado.'
      },
      portfolio: {
        title: 'Procurement & Data Portfolio',
        subtitle: 'Projekte mit Fokus auf Einkaufsintelligenz, Kostenanalyse und Datenvisualisierung.',
        projects: {
          spendAnalysis: {
            desc: 'Interaktives Power BI-Dashboard zur Ausgabenanalyse (Spend Analysis), ABC-Lieferantenklassifizierung und Überwachung von OTIF und Lieferzeiten.'
          },
          costOptimization: {
            desc: 'Datenmodellierung mit Advanced Excel und Python (Pandas) zur Simulation von Total Cost of Ownership (TCO)-Szenarien und Einsparungen.'
          }
        }
      }
    }
  }
};
