import { site } from '../data/site'

export function EducationSection() {
  const { title, items } = site.education
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-border bg-paper py-24 sm:px-6"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-0">
        <h2
          id="education-heading"
          className="text-fluid-section font-bold tracking-tight text-ink"
        >
          {title}
        </h2>
        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <article
              key={`${item.institution}-${item.dates}`}
              className="rounded-lg border border-border bg-surface p-6 shadow-sm transition-[border-color,transform] duration-200 hover:border-muted hover:scale-[1.01]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900">{item.institution}</h3>
                  <p className="mt-1 text-base font-medium text-blue-600">{item.credential}</p>
                  <p className="mt-2 text-sm text-muted">{item.location}</p>
                </div>
                <p className="shrink-0 font-mono text-sm text-gray-400 sm:pt-0.5 sm:text-right">
                  {item.dates}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
