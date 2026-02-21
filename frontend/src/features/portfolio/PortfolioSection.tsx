import { ExternalLink } from 'lucide-react';

export default function PortfolioSection({ t }: { t: any }) {
  
  const projects = [
    {
      id: 'spendAnalysis',
      title: 'Spend Analysis Dashboard',
      tags: ['Power BI', 'DAX', 'Data Visualization'],
      demoUrl: '#', // TODO: Inserir link do iframe do Power BI ou rota para /portfolio futuramente
      status: 'Analytics',
      description: t.sections.portfolio.projects.spendAnalysis.desc 
    },
    {
      id: 'costOptimization',
      title: 'TCO & Savings Simulator',
      tags: ['Python', 'Pandas', 'Advanced Excel'],
      demoUrl: '#', // TODO: Inserir link do Jupyter Notebook ou rota 
      status: 'Modeling',
      description: t.sections.portfolio.projects.costOptimization.desc
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-100 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="flex flex-col items-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{t.sections.portfolio.title}</h2>
          <div className="w-12 h-1.5 bg-[#1B2A4A] mt-4 rounded-full"></div>
          <p className="mt-6 text-slate-600 text-center text-lg max-w-2xl">
            {t.sections.portfolio.subtitle}
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300" data-aos="fade-up">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    {project.title}
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {project.status}
                    </span>
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-[#1B2A4A] bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 px-6 py-3 bg-[#1B2A4A] text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-md"
                >
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
