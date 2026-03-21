import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10 sm:px-6">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-0">
        <p className="order-1 text-center text-muted sm:order-none sm:text-left">
          © 2026 {site.footer.copyright}
        </p>
        <div className="order-2 flex flex-wrap items-center justify-center gap-1 text-muted sm:order-none">
          <Link to="/portfolio" className="font-medium text-gray-700 hover:text-blue-600">
            Portfolio
          </Link>
          <span className="text-gray-300" aria-hidden>
            ·
          </span>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            LinkedIn
          </a>
          <span className="text-gray-300" aria-hidden>
            ·
          </span>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            GitHub
          </a>
        </div>
        <p className="order-3 text-center text-xs text-gray-300 sm:order-none sm:ml-auto sm:text-right">
          {site.footer.builtWith}
        </p>
      </div>
    </footer>
  )
}
