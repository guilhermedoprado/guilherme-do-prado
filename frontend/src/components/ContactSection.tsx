import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site'

export function ContactSection() {
  const { title, note, email, linkedin, github } = site.contact
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-gray-200 bg-gray-50 py-24 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-0">
        <h2
          id="contact-heading"
          className="text-fluid-section font-bold tracking-tight text-ink"
        >
          {title}
        </h2>
        <p className="text-fluid-body mt-4 max-w-2xl leading-relaxed text-gray-700">{note}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="text-fluid-body inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 font-semibold text-ink shadow-sm transition-[border-color,transform] duration-200 hover:border-accent/40 hover:scale-[1.01]"
          >
            <Mail className="size-4 shrink-0" aria-hidden />
            {email}
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-body inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 font-semibold text-ink shadow-sm transition-[border-color,transform] duration-200 hover:border-accent/40 hover:scale-[1.01]"
          >
            <Linkedin className="size-4 shrink-0" aria-hidden />
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-body inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 font-semibold text-ink shadow-sm transition-[border-color,transform] duration-200 hover:border-accent/40 hover:scale-[1.01]"
          >
            <Github className="size-4 shrink-0" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
