import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type ProjectCardProps = {
  name: string
  tool: string
  description: string
  href: string
}

export function ProjectCard({ name, tool, description, href }: ProjectCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition-[border-color,transform] duration-200 hover:border-accent/40 hover:scale-[1.01]"
    >
      <p className="font-mono text-xs font-medium text-accent">{tool}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        View Project
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  )
}
