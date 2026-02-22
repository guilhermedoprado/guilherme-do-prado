import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importei o FaGithub aqui
import profilePic from '../../assets/images/guilherme-do-prado-picture.jpg';

export default function Hero({ t }: { t: any }) {
  return (
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#1E0F4A] via-[#2D1B69] to-[#3D2280] px-4 pt-20 pb-10 overflow-hidden">

        {/* Textura sutil para dar acabamento premium */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/grain.svg')]"></div>

        {/* Glow decorativo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-8 p-1 rounded-full border-4 border-purple-400/30 shadow-2xl shadow-purple-900/50 overflow-hidden w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
            <img
                src={profilePic}
                alt="Guilherme do Prado"
                className="w-full h-full object-cover scale-[1.0] -translate-y-13 md:-translate-y-15 hover:scale-[1.35] transition-transform duration-500 rounded-full"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">
            Guilherme do Prado
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 font-medium mb-8 max-w-2xl">
            {t.hero.role}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {t.hero.tags.map((tag: string, index: number) => (
                <span
                    key={index}
                    className="px-4 py-2 bg-purple-500/15 backdrop-blur-md rounded-full text-sm font-medium border border-purple-400/25 text-purple-100"
                >
              {tag}
            </span>
            ))}
          </div>

          {/* Adicionei o GitHub aqui! Trio de links completo */}
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
        className="p-4 rounded-full border border-purple-400/25 bg-purple-500/10 hover:bg-purple-400 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center"
    >
      {icon}
    </a>
);
