import { Briefcase, LineChart, School, User } from 'lucide-react';

export default function Features({ t }: { t: any }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20 space-y-24">
      
      {/* 1. Sobre Mim */}
      <section id="resumo" data-aos="fade-up">
        <SectionTitle icon={<User />} title={t.sections.about.title} />
        <div className="bg-white rounded-2xl p-10 shadow-lg shadow-slate-200/50 border border-slate-100 text-lg text-slate-600 leading-relaxed text-center">
          <p className="mb-6" dangerouslySetInnerHTML={{ __html: t.sections.about.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.sections.about.p2 }} />
        </div>
      </section>

      {/* 2. Trajetória */}
      <section id="experiencia" data-aos="fade-up">
        <SectionTitle icon={<Briefcase />} title={t.sections.exp.title} />
        <div className="bg-white rounded-2xl p-10 shadow-lg shadow-slate-200/50 border border-slate-100 space-y-8">
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

      {/* 3. Habilidades Universais (Procurement & Data) */}
      <section id="habilidades" data-aos="fade-up">
        <SectionTitle icon={<LineChart />} title={t.sections.skills.title} />
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard 
            title="Procurement & Sourcing" 
            skills={['Strategic Sourcing', 'RFI / RFQ / RFP', 'TCO Analysis', 'Supplier Relationship Mgt (SRM)', 'Procure-to-Pay (P2P)']} 
          />
          <SkillCard 
            title="Data Analytics & Tools" 
            skills={['Advanced Excel', 'Power BI (DAX)', 'Python (Pandas)', 'ERP Systems', 'Spend Analytics']} 
          />
        </div>
      </section>

      {/* 4. Formação */}
      <section id="formacao" data-aos="fade-up">
        <SectionTitle icon={<School />} title={t.sections.edu.title} />
        <div className="bg-white rounded-2xl p-10 shadow-lg shadow-slate-200/50 border border-slate-100 space-y-6">
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

const SectionTitle = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex flex-col items-center mb-12">
    <div className="p-4 bg-slate-100 text-[#1B2A4A] rounded-full mb-4 shadow-sm">
      {icon}
    </div>
    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h2>
    <div className="w-12 h-1.5 bg-[#1B2A4A] mt-4 rounded-full"></div>
  </div>
);

const ExperienceItem = ({ role, company, date, desc }: any) => (
  <div className="relative border-l-4 border-[#1B2A4A] pl-6 py-2 ml-2">
    <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#1B2A4A] border-4 border-white"></div>
    <h3 className="text-xl font-bold text-slate-800 leading-tight">{company}</h3>
    <p className="text-[#1B2A4A] font-semibold mt-1 mb-1">{role}</p>
    <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-medium">{date}</p>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const EducationItem = ({ institution, course, period }: any) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between border-b last:border-0 border-slate-100 pb-5 last:pb-0 pt-2">
    <div>
      <h3 className="text-lg font-bold text-slate-800">{institution}</h3>
      <p className="text-slate-600 font-medium">{course}</p>
    </div>
    <span className="text-sm font-semibold text-[#1B2A4A] bg-slate-100 px-4 py-1.5 rounded-full mt-3 md:mt-0 w-fit">
      {period}
    </span>
  </div>
);

const SkillCard = ({ title, skills }: any) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <h3 className="font-bold text-xl mb-6 text-slate-800 border-b border-slate-100 pb-3">{title}</h3>
    <div className="flex flex-wrap gap-2.5">
      {skills.map((s: string) => (
        <span key={s} className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:bg-[#1B2A4A] hover:text-white transition-colors cursor-default">
          {s}
        </span>
      ))}
    </div>
  </div>
);
