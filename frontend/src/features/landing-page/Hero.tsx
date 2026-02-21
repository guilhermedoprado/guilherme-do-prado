import { Mail } from 'lucide-react'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../../assets/images/guilherme-do-prado-picture.jpg';



export default function Hero({ t }: { t: any }) {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-hero-gradient px-4 pt-20 pb-10 overflow-hidden">
      
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/grain.svg')]"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto" data-aos="fade-up">
        <div className="mb-8 p-1 rounded-full border-4 border-white/30 shadow-2xl">
          <img 
            src={profilePic}
            alt="Guilherme do Prado" 
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Guilherme do Prado
        </h1>
        <p className="text-xl md:text-2xl opacity-90 font-medium mb-8 max-w-2xl">
          {t.hero.role}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.hero.tags.map((tag: string, index: number) => (
            <span key={index} className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          <SocialLink 
            href="https://github.com/guilhermedoprado" 
            icon={<FaGithub size={24} />} 
          />
          <SocialLink 
            href="https://linkedin.com/in/guidoprado" 
            icon={<FaLinkedin size={24} />} 
          />
          <SocialLink 
            href="mailto:contact@guilhermedoprado.com" 
            icon={<Mail size={24} />} 
          />
        </div>
      </div>
    </header>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full border-2 border-white/30 bg-white/10 hover:bg-white hover:text-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
  >
    {icon}
  </a>
);
