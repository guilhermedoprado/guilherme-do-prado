import { site } from '../data/site'
import { ProjectCard } from './ProjectCard'

export function PortfolioSection() {
  const { title, subtitle, projects } = site.portfolioPreview
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border bg-surface py-24 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-0">
        <h2
          id="projects-heading"
          className="text-fluid-section font-bold tracking-tight text-ink"
        >
          {title}
        </h2>
        <p className="text-fluid-body mt-4 max-w-2xl text-muted">{subtitle}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              name={p.name}
              tool={p.tool}
              description={p.description}
              href={p.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
