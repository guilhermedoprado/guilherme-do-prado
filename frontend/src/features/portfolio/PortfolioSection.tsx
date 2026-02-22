import { projects } from '../../data/projects.ts';
import { Clock } from 'lucide-react';

export default function PortfolioSection({ t }: { t: any }) {
  return (
      <section id="portfolio" className="py-32 bg-[#1E0F4A] border-t border-purple-900/50 relative overflow-hidden">

        {/* Glow de fundo sutil */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">

          <div className="flex flex-col items-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 tracking-tight">
              {t.sections.portfolio.title}
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-purple-400 to-purple-600 mt-6 rounded-full" />
            <p className="mt-8 text-purple-200/80 text-center text-xl max-w-2xl font-medium">
              {t.sections.portfolio.subtitle}
            </p>
          </div>

          <div className="grid gap-10">
            {projects.map((project) => {
              const projectT = t.sections.portfolio.projects[project.id];
              if (!projectT) return null;

              return (
                  <div
                      key={project.id}
                      className="bg-[#2D1B69]/30 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group"
                      data-aos="fade-up"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-3xl font-extrabold text-white">
                            {project.title}
                          </h3>
                          <span className="text-xs font-bold text-purple-200 bg-purple-500/20 px-4 py-1.5 rounded-full border border-purple-500/30 tracking-wide uppercase">
                            {projectT.status}
                            </span>
                        </div>

                        <p className="mt-4 text-purple-100/90 leading-relaxed text-lg max-w-3xl">
                          {projectT.desc}
                        </p>

                        <div className="flex flex-wrap gap-2.5 mt-8">
                          {project.tags.map((tag) => (
                              <span
                                  key={tag}
                                  className="text-sm font-semibold text-purple-100 bg-[#1E0F4A]/60 px-4 py-2 rounded-xl border border-purple-500/20 shadow-inner"
                              >
                                {tag}
                              </span>
                          ))}
                        </div>
                      </div>

                      {/* BADGE DE AVAILABLE SOON AO INVÉS DO BOTÃO */}
                      <div className="shrink-0 flex items-center gap-3 px-6 py-4 bg-purple-900/40 border border-purple-500/30 rounded-2xl h-fit w-fit lg:mt-0 mt-4">
                        <Clock className="text-purple-300 animate-pulse" size={20} />
                        <span className="text-purple-200 font-bold text-sm">
                            {t.sections.portfolio.comingSoon || 'Available Soon'}
                        </span>
                      </div>

                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
