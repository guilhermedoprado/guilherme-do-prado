import { site } from '../data/site'
import headshot from '../assets/images/cv_photo.jpg'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-paper py-24 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="about-heading"
          className="text-fluid-section font-bold tracking-tight text-ink"
        >
          {site.about.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 items-center gap-16 md:grid-cols-[2fr_3fr]">
          <figure className="mx-auto flex w-full max-w-[280px] flex-col items-center md:mx-0">
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full border-2 border-gray-100 bg-gray-100 shadow-md ring-1 ring-black/[0.04]">
              <img
                src={headshot}
                alt="Guilherme do Prado, procurement analyst"
                width={560}
                height={560}
                loading="lazy"
                decoding="async"
                className="size-full origin-[45%_42%] scale-[1.15] object-cover object-[25%_90%]"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-gray-500">
              {site.about.photoCaption}
            </figcaption>
          </figure>

          <div className="space-y-6 text-left">
            {site.about.paragraphs.map((p) => (
              <p key={p} className="text-fluid-body max-w-none text-pretty text-gray-800">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
