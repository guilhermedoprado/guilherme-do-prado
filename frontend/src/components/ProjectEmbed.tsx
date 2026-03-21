import { BarChart3 } from 'lucide-react'

type Platform = 'powerbi' | 'qlik' | 'web'

type ProjectEmbedProps = {
  platform: Platform
}

export function ProjectEmbed({ platform }: ProjectEmbedProps) {
  const toolName =
    platform === 'powerbi'
      ? 'Power BI'
      : platform === 'qlik'
        ? 'Qlik Sense'
        : 'Value Prisma'

  return (
    <div
      className="mt-4 flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50/80 px-6 shadow-sm"
      aria-label="Project preview placeholder"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="relative flex items-center gap-2">
          <span
            className="size-2 animate-pulse rounded-full bg-blue-500"
            aria-hidden
          />
          <span className="sr-only">Loading preview</span>
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm">
          <BarChart3 className="h-6 w-6 stroke-[1.5]" aria-hidden />
        </div>
        <p className="font-mono text-sm font-semibold text-gray-900">{toolName}</p>
        <p className="max-w-md text-sm leading-relaxed text-gray-600">
          Dashboard will be embedded here once published. Check back soon.
        </p>
      </div>
    </div>
  )
}
