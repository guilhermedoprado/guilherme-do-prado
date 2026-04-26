import { BarChart3 } from 'lucide-react'

type EmbedConfig =
  | { type: 'powerbi'; src: string }
  | { type: 'qlik'; src: string }
  | { type: 'web'; src: string }
  | 'powerbi'
  | 'qlik'
  | 'web'

type ProjectEmbedProps = {
  platform: EmbedConfig
}

export function ProjectEmbed({ platform }: ProjectEmbedProps) {
  // Se for objeto com src, renderiza o iframe real
  if (typeof platform === 'object' && 'src' in platform) {
    return (
      <div
        className="relative mt-4 w-full overflow-hidden rounded-lg border border-border shadow-sm"
        style={{ paddingTop: '62.25%' }}
      >
        <iframe
          src={platform.src}
          title="Dashboard embed"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>
    )
  }

  // Fallback: placeholder para projetos ainda não publicados
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
          <span className="size-2 animate-pulse rounded-full bg-blue-500" aria-hidden />
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