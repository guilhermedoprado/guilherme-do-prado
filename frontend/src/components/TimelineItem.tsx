type ImpactCallout = {
  line1: string
  line2: string
}

type TimelineItemProps = {
  company: string
  title: string
  dates: string
  bullets: readonly string[]
  isLast?: boolean
  impactCallout?: ImpactCallout
}

export function TimelineItem({
  company,
  title,
  dates,
  bullets,
  isLast,
  impactCallout,
}: TimelineItemProps) {
  return (
    <li className={`relative pl-8 md:pl-10 ${isLast ? 'pb-0' : 'pb-12'}`}>
      <span
        className="absolute left-[-5px] top-7 size-3 rounded-full border-2 border-border bg-paper md:top-8"
        aria-hidden
      />
      <article className="rounded-lg border border-border bg-surface p-6 shadow-sm transition-[border-color,transform] duration-200 hover:border-muted hover:scale-[1.01]">
        <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
        <p className="mt-1 text-base font-medium text-blue-600">{title}</p>
        <p className="mt-2 font-mono text-sm text-gray-400">{dates}</p>

        {impactCallout && (
          <aside className="mt-6 border-l-2 border-blue-400 bg-blue-50 px-4 py-3 text-sm text-gray-800 shadow-sm">
            <p className="font-medium leading-snug">{impactCallout.line1}</p>
            <p className="mt-1 leading-snug text-gray-600">{impactCallout.line2}</p>
          </aside>
        )}

        <ul className="mt-6 space-y-2 border-l-2 border-blue-200 pl-4">
          {bullets.map((b) => (
            <li key={b} className="text-sm leading-[1.7] text-gray-600">
              {b}
            </li>
          ))}
        </ul>
      </article>
    </li>
  )
}
