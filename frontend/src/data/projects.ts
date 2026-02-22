export interface Project {
  id: string;
  title: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  detailsUrl: string;
}

export const projects: Project[] = [
  {
    id: 'heatsphere',
    title: 'HeatSphere',
    tags: ['React', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
    imageUrl: '/projects/heatsphere-thumb.jpg',
    liveUrl: 'https://heatsphere.guilhermedoprado.com',
    detailsUrl: '/projects/heatsphere',
  },
  {
    id: 'valuePrisma',
    title: 'Value Prisma',
    tags: ['C#', 'React', 'Azure', 'TypeScript'],
    imageUrl: '/projects/value-prisma-thumb.jpg',
    liveUrl: 'https://valueprisma.guilhermedoprado.com',
    detailsUrl: '/projects/value-prisma',
  },
  {
    id: 'headyne',
    title: 'Headyne',
    tags: ['React', 'TypeScript', 'ASP.NET Core', 'Stripe'],
    imageUrl: '/projects/headyne-thumb.jpg',
    liveUrl: 'https://headyne.guilhermedoprado.com',
    detailsUrl: '/projects/headyne',
  },
];
