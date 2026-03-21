import { site } from '../data/site'
import { skillTier } from '../lib/skillTier'
import { SkillBadge } from './SkillBadge'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border bg-surface py-24 sm:px-6"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-0">
        <h2
          id="skills-heading"
          className="text-fluid-section font-bold tracking-tight text-ink"
        >
          {site.skills.title}
        </h2>
        <div className="mt-12 space-y-10">
          {site.skills.groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} tier={skillTier(item)}>
                    {item}
                  </SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
