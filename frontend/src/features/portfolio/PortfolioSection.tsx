import { FaGithub } from 'react-icons/fa';

export default function PortfolioSection({ t }: { t: any }) {
  
  // Agora os dados fixos são apenas ID, links e tags. O texto vem do 't'
  const projects = [
    {
      id: 'heatsphere',
      title: 'HeatSphere',
      tags: ['React', 'ASP.NET Core', 'PostgreSQL'],
      repoUrl: 'https://github.com/guilhermedoprado/heatsphere',
      status: 'Dev',
      // Mapeamos o texto do objeto 't' usando a chave do projeto
      description: t.sections.portfolio.projects.heatsphere.desc 
    },
    {
      id: 'value-prisma',
      title: 'Value Prisma',
      tags: ['C#', 'React', 'Azure'],
      repoUrl: 'https://github.com/guilhermedoprado/value-prisma',
      status: 'Dev',
      description: t.sections.portfolio.projects.valueprisma.desc
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="flex flex-col items-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">{t.sections.portfolio.title}</h2>
          <div className="w-16 h-1 bg-primary mt-2 rounded-full"></div>
          <p className="mt-4 text-gray-600 text-center">
            {t.sections.portfolio.subtitle}
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    {project.title}
                    <span className="text-xs font-normal text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      {project.status}
                    </span>
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-transform hover:-translate-y-1"
                >
                  <FaGithub size={18} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
