import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

type NavBarProps = {
  variant?: 'home' | 'portfolio'
}

const sectionLinks = [
  { href: '/#about', label: 'About', id: 'about' as const },
  { href: '/#experience', label: 'Experience', id: 'experience' as const },
  { href: '/#projects', label: 'Projects', id: 'projects' as const },
  { href: '/#skills', label: 'Skills & Tools', id: 'skills' as const },
  { href: '/#education', label: 'Education', id: 'education' as const },
  { href: '/#contact', label: 'Contact', id: 'contact' as const },
] as const

const SCROLL_OFFSET = 120

export function NavBar({ variant = 'home' }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<(typeof sectionLinks)[number]['id']>(
    sectionLinks[0].id
  )

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)

      if (variant !== 'home') return

      let current: (typeof sectionLinks)[number]['id'] = sectionLinks[0].id
      for (const { id } of sectionLinks) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (y + SCROLL_OFFSET >= top) current = id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  const solidNav =
    variant === 'portfolio' || scrolled
      ? 'border-b border-gray-100 bg-white/80 py-3 shadow-sm backdrop-blur-md'
      : 'border-b border-transparent bg-paper/70 py-5 backdrop-blur-sm'

  const linkBase = 'text-sm transition-colors'
  const linkInactive = `${linkBase} font-normal text-gray-500 hover:text-gray-800`
  const linkActive = `${linkBase} font-medium border-b-2 border-blue-500 pb-0.5 text-gray-900`

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${solidNav}`}>
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
        >
          Guilherme do Prado
        </Link>

        {variant === 'portfolio' && (
          <Link
            to="/"
            className="hidden text-sm font-medium text-gray-500 transition-colors hover:text-gray-800 sm:inline"
          >
            ← Back to Home
          </Link>
        )}

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {variant === 'home' &&
            sectionLinks.map(({ href, label, id }) => (
              <a
                key={href}
                href={href}
                className={activeId === id ? linkActive : linkInactive}
              >
                {label}
              </a>
            ))}
          {variant === 'home' && (
            <Link
              to="/portfolio"
              className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
            >
              Portfolio
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {variant === 'home' ? (
            <>
              <Link
                to="/portfolio"
                className="text-sm font-semibold text-blue-600"
              >
                Portfolio
              </Link>
              <button
                type="button"
                className="rounded-md border border-gray-200 p-2 text-gray-900 shadow-sm"
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
                <span className="sr-only">Menu</span>
              </button>
            </>
          ) : (
            <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-800">
              ← Home
            </Link>
          )}
        </div>
      </div>

      {variant === 'home' && open && (
        <div
          id="mobile-nav"
          className="border-t border-gray-100 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-[1100px] flex-col gap-3">
            {sectionLinks.map(({ href, label, id }) => (
              <a
                key={href}
                href={href}
                className={
                  activeId === id
                    ? 'text-sm font-medium text-gray-900'
                    : 'text-sm font-normal text-gray-500'
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
