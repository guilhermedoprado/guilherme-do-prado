import { useState, useEffect } from 'react';
import { type Lang } from '../../data/content';

interface HeaderProps {
  currentLang: Lang;
  setLang: (lang: Lang) => void;
  t: any;
}

export default function Header({ currentLang, setLang, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBaseClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out";
  const navBgClass = scrolled 
    ? "bg-white/95 backdrop-blur-md shadow-md py-6"
    : "bg-transparent py-8";

  const textClass = scrolled ? "text-gray-800" : "text-white";
  const hoverClass = scrolled ? "hover:text-primary" : "hover:text-gray-300";

  return (
    <nav className={`${navBaseClass} ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-end gap-12">
        
        <div className={`hidden md:flex gap-8 ${textClass}`}>
          <a 
            href="#resumo" 
            className={`text-base font-extrabold uppercase tracking-widest transition-colors ${hoverClass}`}
          >
            {t.nav?.profile || 'Perfil'} 
          </a>
          <a 
            href="#portfolio" 
            className={`text-base font-extrabold uppercase tracking-widest transition-colors ${hoverClass}`}
          >
            {t.nav?.portfolio || 'Portfólio'}
          </a>
        </div>

        <div className={`flex gap-1 p-1 rounded-lg border transition-colors ${
          scrolled ? 'border-gray-200 bg-gray-100/50' : 'border-white/30 bg-white/10'
        }`}>
          {(['pt-BR', 'en-US', 'cs-CZ'] as Lang[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLang(lang)}
              className={`
                px-3 py-1.5 rounded-md text-xs font-bold transition-all uppercase
                ${currentLang === lang 
                  ? 'bg-primary text-white shadow-sm' // Selecionado: Azul e Branco
                  : `${scrolled ? 'text-gray-600 hover:bg-gray-200' : 'text-white hover:bg-white/20'}` // Não selecionado
                }
              `}
            >
              {lang === 'pt-BR' ? 'PT' : lang === 'en-US' ? 'EN' : 'CZ'}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}
