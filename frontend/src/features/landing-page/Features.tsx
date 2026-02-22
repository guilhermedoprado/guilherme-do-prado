import { Briefcase, Code2, Database, Github, Linkedin, Mail, School, User } from 'lucide-react';

export default function Features({ t }: { t: any }) {
    return (
        <main className="max-w-6xl mx-auto px-4 py-20 space-y-32">

            {/* 1. Sobre Mim */}
            <section id="resumo" data-aos="fade-up">
                <SectionTitle icon={<User />} title={t.sections.about.title} />
                <div className="bg-[#2D1B69]/40 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-500/20 text-lg text-purple-100 leading-relaxed text-center relative overflow-hidden group">
                    {/* Efeito de luz sutil no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12"></div>
                    <p className="mb-6 relative z-10" dangerouslySetInnerHTML={{ __html: t.sections.about.p1 }} />
                    <p className="relative z-10" dangerouslySetInnerHTML={{ __html: t.sections.about.p2 }} />
                </div>
            </section>

            {/* 2. Habilidades Técnicas (NOVO DESIGN 10/10) */}
            <section id="habilidades" data-aos="fade-up">
                <SectionTitle icon={<Code2 />} title={t.sections.skills.title} />
                <div className="grid md:grid-cols-2 gap-8">
                    <SkillCard
                        icon={<Code2 className="text-purple-300" size={28} />}
                        title="Backend & Architecture"
                        skills={['C#', 'ASP.NET Core', 'Entity Framework', 'REST APIs', 'PostgreSQL', 'Docker']}
                        gradient="from-purple-900/40 to-[#1E0F4A]/60"
                    />
                    <SkillCard
                        icon={<Database className="text-blue-300" size={28} />}
                        title="Frontend & Data"
                        skills={['React', 'TypeScript', 'Tailwind CSS', 'Power BI (DAX)', 'Advanced Excel', 'Spend Analytics']}
                        gradient="from-[#1E0F4A]/60 to-purple-900/40"
                    />
                </div>
            </section>

            {/* 3. Trajetória */}
            <section id="experiencia" data-aos="fade-up">
                <SectionTitle icon={<Briefcase />} title={t.sections.exp.title} />
                <div className="bg-[#2D1B69]/40 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-500/20 space-y-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
                    {t.sections.exp.items.map((item: any, index: number) => (
                        <ExperienceItem
                            key={index}
                            role={item.role}
                            company={item.company}
                            date={item.date}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </section>

            {/* 4. Formação */}
            <section id="formacao" data-aos="fade-up">
                <SectionTitle icon={<School />} title={t.sections.edu.title} />
                <div className="bg-[#2D1B69]/40 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-500/20 space-y-6">
                    {t.sections.edu.items.map((item: any, index: number) => (
                        <EducationItem
                            key={index}
                            institution={item.inst}
                            course={item.course}
                            period={item.period}
                        />
                    ))}
                </div>
            </section>

            {/* 5. Links / Contato (NOVO) */}
            <section id="links" data-aos="fade-up">
                <SectionTitle icon={<User />} title={t.sections.links?.title || 'Connect'} />
                <div className="grid md:grid-cols-3 gap-6">
                    <LinkCard
                        href="https://github.com/guilhermedoprado"
                        icon={<Github size={32} />}
                        title={t.sections.links?.github || 'GitHub'}
                        desc={t.sections.links?.githubDesc || 'Code & Projects'}
                    />
                    <LinkCard
                        href="https://linkedin.com/in/guidoprado"
                        icon={<Linkedin size={32} />}
                        title={t.sections.links?.linkedin || 'LinkedIn'}
                        desc={t.sections.links?.linkedinDesc || 'Professional Network'}
                    />
                    <LinkCard
                        href="mailto:contact@guilhermedoprado.com"
                        icon={<Mail size={32} />}
                        title={t.sections.links?.email || 'Email'}
                        desc={t.sections.links?.emailDesc || 'Get in touch'}
                    />
                </div>
            </section>

        </main>
    );
}

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className="flex flex-col items-center mb-16">
        <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-800/20 text-purple-300 rounded-2xl mb-6 shadow-inner border border-purple-500/30 rotate-3 hover:rotate-0 transition-transform duration-300">
            {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 tracking-tight">{title}</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-purple-400 to-purple-600 mt-6 rounded-full opacity-80"></div>
    </div>
);

const ExperienceItem = ({ role, company, date, desc }: any) => (
    <div className="relative border-l-2 border-purple-500/30 pl-8 py-2 ml-3 group">
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1E0F4A] border-2 border-purple-400 group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        <h3 className="text-2xl font-bold text-white leading-tight mb-1">{company}</h3>
        <p className="text-purple-300 font-semibold text-lg mb-2">{role}</p>
        <p className="text-xs text-purple-400/80 mb-4 uppercase tracking-widest font-bold">{date}</p>
        <p className="text-purple-100/90 leading-relaxed text-lg">{desc}</p>
    </div>
);

const EducationItem = ({ institution, course, period }: any) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between border-b last:border-0 border-purple-500/10 pb-6 last:pb-0 pt-3 group">
        <div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">{institution}</h3>
            <p className="text-purple-200/80 font-medium mt-1">{course}</p>
        </div>
        <span className="text-sm font-bold text-purple-200 bg-purple-500/10 px-5 py-2 rounded-xl mt-4 md:mt-0 w-fit border border-purple-500/20 shadow-inner">
            {period}
        </span>
    </div>
);

const SkillCard = ({ title, skills, icon, gradient }: any) => (
    <div className={`bg-gradient-to-br ${gradient} backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-500/20 hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>

        <div className="flex items-center gap-4 mb-8 border-b border-purple-500/20 pb-5">
            <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="font-extrabold text-2xl text-white">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
            {skills.map((s: string) => (
                <span
                    key={s}
                    className="px-4 py-2 bg-[#1E0F4A]/50 text-purple-100 rounded-xl text-sm font-semibold border border-purple-500/20 hover:bg-purple-500 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-default"
                >
                    {s}
                </span>
            ))}
        </div>
    </div>
);

const LinkCard = ({ href, icon, title, desc }: any) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center p-8 bg-[#2D1B69]/40 backdrop-blur-md rounded-3xl border border-purple-500/20 hover:bg-purple-900/40 hover:border-purple-400/50 hover:-translate-y-2 transition-all duration-300 group"
    >
        <div className="p-4 bg-purple-500/10 text-purple-300 rounded-full mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-purple-200/70 text-sm">{desc}</p>
    </a>
);
