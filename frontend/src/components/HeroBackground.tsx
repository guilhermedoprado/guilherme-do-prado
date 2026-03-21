/** Subtle geometric backdrop — thin grid, no gradients. */
export function HeroBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-border opacity-[0.45]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <g fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.7">
        <path d="M0,55 Q180,20 360,55 T720,55" />
        <path d="M0,85 Q200,50 400,85 T800,85" />
        <path d="M0,115 Q160,80 320,115 T640,115" />
      </g>
    </svg>
  )
}
