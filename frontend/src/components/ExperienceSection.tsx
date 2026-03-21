import { site } from '../data/site'
import { TimelineItem } from './TimelineItem'

export function ExperienceSection() {
  const roles = site.experience.roles
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border bg-paper py-24 sm:px-6"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-0">
        <h2
          id="experience-heading"
          className="text-fluid-section font-bold tracking-tight text-ink"
        >
          {site.experience.title}
        </h2>
        <ol className="relative mt-14 ml-1.5 list-none border-l border-border md:ml-2">
          {roles.map((role, i) => (
            <TimelineItem
              key={`${role.company}-${role.title}`}
              company={role.company}
              title={role.title}
              dates={role.dates}
              bullets={role.bullets}
              isLast={i === roles.length - 1}
              impactCallout={'impactCallout' in role ? role.impactCallout : undefined}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
