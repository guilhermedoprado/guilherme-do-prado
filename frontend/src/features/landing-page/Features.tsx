import { Briefcase, Code, School, User } from 'lucide-react';

export default function Features({ t }: { t: any }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      
      {/* 1. Sobre Mim */}
      <section id="resumo" data-aos="fade-up">
        <SectionTitle icon={<User />} title={t.sections.about.title} />
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-lg text-gray-600 leading-relaxed text-center">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.sections.about.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.sections.about.p2 }} />
        </div>
      </section>

      {/* 2. Trajetória (Lendo do JSON Traduzido) */}
      <section id="experiencia" data-aos="fade-up">
        <SectionTitle icon={<Briefcase />} title={t.sections.exp.title} />
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 space-y-8">
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

      {/* 3. Habilidades (Essas podem ficar fixas pois Tech é universal) */}
      <section id="habilidades" data-aos="fade-up">
        <SectionTitle icon={<Code />} title={t.sections.skills.title} />
        <div className="grid md:grid-cols-2 gap-6">
          <SkillCard 
            title="Frontend" 
            skills={['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Vite']} 
          />
          <SkillCard 
            title="Backend & Tools" 
            skills={['ASP.NET Core (C#)', 'RESTful APIs', 'EFCore/PostgreSQL', 'Git/GitHub', 'Docker']} 
          />
        </div>
      </section>

      {/* 4. Formação (Lendo do JSON Traduzido) */}
      <section id="formacao" data-aos="fade-up">
        <SectionTitle icon={<School />} title={t.sections.edu.title} />
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 space-y-6">
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

    </main>
  );
}

// ... (Mantenha os componentes auxiliares SectionTitle, ExperienceItem, etc. iguais ao anterior)
// ... (Remova a const translations e type Lang deste arquivo, pois agora importamos do context.ts)
const SectionTitle = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex flex-col items-center mb-10">
    <div className="p-3 bg-blue-100 text-primary rounded-full mb-3 shadow-sm">
      {icon}
    </div>
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    <div className="w-16 h-1 bg-primary mt-2 rounded-full"></div>
  </div>
);

const ExperienceItem = ({ role, company, date, desc }: any) => (
  <div className="relative border-l-4 border-primary pl-6 py-1 ml-2">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
    <h3 className="text-xl font-bold text-gray-800 leading-tight">{company}</h3>
    <p className="text-primary font-semibold mb-1">{role}</p>
    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide text-xs">{date}</p>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const EducationItem = ({ institution, course, period }: any) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between border-b last:border-0 border-gray-100 pb-4 last:pb-0">
    <div>
      <h3 className="text-lg font-bold text-gray-800">{institution}</h3>
      <p className="text-primary font-medium">{course}</p>
    </div>
    <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
      {period}
    </span>
  </div>
);

const SkillCard = ({ title, skills }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <h3 className="font-bold text-lg mb-4 text-gray-800 border-b pb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((s: string) => (
        <span key={s} className="px-3 py-1 bg-blue-50 text-primary-dark rounded-full text-sm font-medium border border-blue-100">
          {s}
        </span>
      ))}
    </div>
  </div>
);
