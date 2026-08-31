import { galleryImages } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-ink-950 py-24 sm:py-32">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-eyebrow">
              <span className="h-px w-8 bg-ember-400" />
              From the Oven
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-50 sm:text-5xl">
              The <span className="italic text-ember-400">craft</span>, in pictures
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-300">
            A look inside the kitchen, the dough, and the fire that feeds it all.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[240px]">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${img.span}`}
              style={{
                opacity: visible ? undefined : 0,
                animation: visible
                  ? `scale-in 0.7s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s forwards`
                  : undefined,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-medium text-ink-50 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
