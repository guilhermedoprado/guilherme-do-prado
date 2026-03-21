type SkillTier = 1 | 2 | 3

type SkillBadgeProps = {
  children: React.ReactNode
  tier: SkillTier
}

const tierClass: Record<SkillTier, string> = {
  1: 'border-transparent bg-gray-900 text-white shadow-sm hover:border-gray-800 hover:bg-gray-900',
  2: 'border border-gray-400 bg-transparent text-gray-700 hover:border-gray-500',
  3: 'border border-gray-200 bg-transparent text-gray-400 hover:border-gray-300',
}

export function SkillBadge({ children, tier }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-[border-color,transform,opacity] duration-200 hover:scale-[1.01] ${tierClass[tier]}`}
    >
      {children}
    </span>
  )
}
