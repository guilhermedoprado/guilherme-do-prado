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
    ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100"
    : "bg-transparent py-8";

  const textClass = scrolled ? "text-slate-800" : "text-slate-100";
  const hoverClass = scrolled ? "hover:text-[#1B2A4A]" : "hover:text-white";

  return (
    <nav className={`${navBaseClass} ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-end gap-12">
        
        <div className={`hidden md:flex gap-8 ${textClass}`}>
          <a 
            href="#resumo" 
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${hoverClass}`}
          >
            {t.nav?.profile || 'Perfil'} 
          </a>
          <a 
            href="#portfolio" 
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${hoverClass}`}
          >
            {t.nav?.portfolio || 'Portfólio'}
          </a>
        </div>

        <div className={`flex gap-1 p-1 rounded-lg border transition-colors ${
          scrolled ? 'border-slate-200 bg-slate-100/50' : 'border-white/20 bg-white/5'
        }`}>
          {(['pt-BR', 'en-US', 'de-DE'] as Lang[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLang(lang)}
              className={`
                px-3 py-1.5 rounded-md text-xs font-bold transition-all uppercase tracking-wide
                ${currentLang === lang 
                  ? 'bg-[#1B2A4A] text-white shadow-sm' 
                  : `${scrolled ? 'text-slate-600 hover:bg-slate-200' : 'text-slate-300 hover:bg-white/20'}` 
                }
              `}
            >
              {lang === 'pt-BR' ? 'PT' : lang === 'en-US' ? 'EN' : 'DE'}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}
