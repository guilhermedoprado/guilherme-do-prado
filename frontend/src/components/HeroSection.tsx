import { Link } from 'react-router-dom'
import { ChevronDown, Download, Linkedin, MapPin } from 'lucide-react'
import { HeroBackground } from './HeroBackground'
import { site } from '../data/site'

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[85vh] max-h-[900px] flex-col items-center justify-center px-4 pb-20 pt-28 sm:px-6"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <h1
          id="hero-heading"
          className="text-fluid-hero font-bold tracking-tight text-ink"
        >
          {site.name}
        </h1>
        <p className="text-fluid-role mx-auto mt-4 max-w-2xl font-semibold tracking-tight text-ink/90">
          {site.title}
        </p>
        <p className="text-fluid-body mx-auto mt-6 inline-flex max-w-xl flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-muted shadow-sm">
          <MapPin className="size-4 shrink-0 text-accent" aria-hidden />
          <span>{site.locationLine}</span>
        </p>
        <p className="text-fluid-tagline mx-auto mt-8 max-w-xl font-normal leading-relaxed text-muted">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/portfolio"
            className="text-fluid-body inline-flex items-center justify-center rounded-lg border border-border bg-accent px-5 py-2.5 font-semibold text-white shadow-sm transition-[border-color,transform] duration-200 hover:border-accent hover:scale-[1.01] hover:bg-accent/95"
          >
            {site.hero.ctaPortfolio}
          </Link>
          <a
            href="/cv.pdf"
            download
            className="text-fluid-body inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-semibold text-ink shadow-sm transition-[border-color,transform] duration-200 hover:border-accent/40 hover:scale-[1.01]"
          >
            <Download className="size-4 shrink-0" aria-hidden />
            {site.hero.ctaCv}
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-body inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-semibold text-ink shadow-sm transition-[border-color,transform] duration-200 hover:border-accent/40 hover:scale-[1.01]"
          >
            <Linkedin className="size-4 shrink-0" aria-hidden />
            {site.hero.ctaLinkedIn}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gray-400 transition-colors hover:text-gray-600"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={20} aria-hidden />
      </a>
    </section>
  )
}
