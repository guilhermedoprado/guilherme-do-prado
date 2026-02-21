export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string; // O subdomínio
  detailsUrl: string; // A rota interna
}

export const projects: Project[] = [
  {
    id: 'heatsphere',
    title: 'HeatSphere',
    description: 'Plataforma de criação de notas e utilização de ferramentas para aprendizado de transmissão de calor.',
    tags: ['React', 'ASP.NET Core', 'PostgreSQL'],
    imageUrl: '/projects/heatsphere-thumb.jpg', // Coloque na pasta public
    liveUrl: 'https://heatsphere.guilhermedoprado.com',
    detailsUrl: '/projects/heatsphere'
  },
  {
    id: 'value-prisma',
    title: 'Value Prisma',
    description: 'Sistema de gestão de finanças pessoais com foco em visualização de dados e insights para otimização de gastos.',
    tags: ['C#', 'React', 'Azure'],
    imageUrl: '/projects/value-prisma-thumb.jpg',
    liveUrl: 'https://valueprisma.guilhermedoprado.com',
    detailsUrl: '/projects/value-prisma'
  }
];
