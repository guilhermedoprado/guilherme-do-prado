import { Mail } from 'lucide-react'; 
import { FaLinkedin } from 'react-icons/fa';
import profilePic from '../../assets/images/guilherme-do-prado-picture.jpg';

export default function Hero({ t }: { t: any }) {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#121E38] to-[#1B2A4A] px-4 pt-20 pb-10 overflow-hidden">
      
      {/* Textura sutil para dar acabamento premium */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/grain.svg')]"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto" data-aos="fade-up">
        <div className="mb-8 p-1 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
          <img 
            src={profilePic}
            alt="Guilherme do Prado" 
            // O object-cover garante que a imagem preencha a div.
            // O scale-150 dá o zoom na foto.
            // O translate-y-[-10%] (ou o ajuste que precisar) puxa a foto pra cima, compensando o teto branco.
            className="w-full h-full object-cover scale-[1.45] -translate-y-13 md:-translate-y-15 hover:scale-[1.8] transition-transform duration-500 rounded-full"
          />
        </div>


        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">
          Guilherme do Prado
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 font-medium mb-8 max-w-2xl">
          {t.hero.role}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.hero.tags.map((tag: string, index: number) => (
            <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 text-slate-100">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
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
    className="p-4 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-[#1B2A4A] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
  >
    {icon}
  </a>
);
