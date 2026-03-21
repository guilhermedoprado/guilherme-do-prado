type Status = 'in-development' | 'concept' | 'live'

const labels: Record<Status, string> = {
  'in-development': 'In Development',
  concept: 'Concept / In Progress',
  live: 'Live',
}

type StatusBadgeProps = {
  status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-accent-subtle px-3 py-1 text-xs font-semibold tracking-wide text-accent">
      {labels[status]}
    </span>
  )
}
