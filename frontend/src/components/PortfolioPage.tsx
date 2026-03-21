import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BarChart3, ExternalLink } from 'lucide-react'
import { site } from '../data/site'
import { ProjectEmbed } from './ProjectEmbed'
import { StatusBadge } from './StatusBadge'

type PortfolioProject = (typeof site.portfolio.projects)[number]

function hasGithub(
  p: PortfolioProject
): p is PortfolioProject & { githubHref: string; githubLabel: string } {
  return 'githubHref' in p && typeof p.githubHref === 'string'
}

function hasFeatures(
  p: PortfolioProject
): p is PortfolioProject & {
  features: readonly { readonly icon: string; readonly label: string }[]
} {
  return 'features' in p && Array.isArray((p as { features?: unknown }).features)
}

const accentBorder: Record<string, string> = {
  'spend-analytics': 'border-l-yellow-400',
  'supplier-performance': 'border-l-green-500',
  'value-prisma': 'border-l-blue-600',
}

const accentIconWrap: Record<string, string> = {
  'spend-analytics': 'border-yellow-300 bg-yellow-400/20 text-yellow-800',
  'supplier-performance': 'border-green-400 bg-green-500/15 text-green-800',
  'value-prisma': 'border-blue-500 bg-blue-600/10 text-blue-700',
}

export function PortfolioPage() {
  const { hash } = useLocation()

  useEffect(() => {
    const raw = hash.replace(/^#/, '')
    if (!raw) return
    const el = document.getElementById(raw)
    if (el) {
      const t = window.setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
      return () => window.clearTimeout(t)
    }
  }, [hash])

  return (
    <main className="bg-paper pb-24 pt-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <header className="border-b border-border pb-10 pt-8">
          <h1 className="text-fluid-section font-bold tracking-tight text-ink">
            Portfolio
          </h1>
          <p className="text-fluid-body mt-4 max-w-2xl text-muted">
            Procurement analytics dashboards and an internal tooling concept — embeds go live as
            environments are published.
          </p>
        </header>

        <div className="divide-y divide-border">
          {site.portfolio.projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className={`scroll-mt-28 border-l-4 py-16 pl-6 first:pt-12 ${accentBorder[project.id] ?? 'border-l-gray-300'} border-solid`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border shadow-sm ${accentIconWrap[project.id] ?? 'border-gray-200 bg-gray-100 text-gray-600'}`}
                    aria-hidden
                  >
                    <BarChart3 className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <h2 className="text-fluid-section font-semibold tracking-tight text-ink">
                    {project.title}
                  </h2>
                </div>
                <StatusBadge status={project.status} />
              </div>
              <p className="text-fluid-body mt-6 max-w-3xl text-gray-800">{project.description}</p>

              {hasFeatures(project) && (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.features.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm"
                    >
                      <span className="text-base" aria-hidden>
                        {f.icon}
                      </span>
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {'callout' in project && project.callout && (
                <aside className="mt-8 rounded-lg border border-border bg-accent-subtle/40 p-5 text-sm leading-relaxed text-ink shadow-sm">
                  {project.callout}
                </aside>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {hasGithub(project) && (
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  {project.githubLabel}
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              )}

              <details className="mt-8 rounded-lg border border-border bg-surface shadow-sm open:shadow-sm">
                <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex items-center gap-2">
                    Interactive preview
                    <span className="text-xs font-normal text-muted">(expand)</span>
                  </span>
                </summary>
                <div className="border-t border-border px-4 pb-4">
                  <ProjectEmbed platform={project.embed} />
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
