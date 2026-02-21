import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { translations, type Lang } from '../data/content';
import LandingContainer from '../features/LandingContainer';
import Header from '../features/landing-page/Header';
import Hero from '../features/landing-page/Hero';
import Features from '../features/landing-page/Features';
import PortfolioSection from '../features/portfolio/PortfolioSection';
import Footer from '../features/landing-page/Footer';

export default function Home() {
  
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('language') as Lang;
    const valid: Lang[] = ['pt-BR', 'en-US', 'cs-CZ'];
    return valid.includes(saved) ? saved : 'pt-BR';
  });

  const t = translations[lang] || translations['pt-BR']; 

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLangChange = (l: Lang) => {
    setLang(l);
    localStorage.setItem('language', l);
  }

  return (
    <LandingContainer>
      
      <Header currentLang={lang} setLang={handleLangChange} t={t} />
      
      <Hero t={t} />
      <Features t={t} />
      <PortfolioSection t={t} />
      <Footer t={t} />
    </LandingContainer>
  );
}
