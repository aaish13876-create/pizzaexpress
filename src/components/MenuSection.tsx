import { pizzas } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function MenuSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="menu" className="relative bg-ink-950 py-24 sm:py-32">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="section-eyebrow">
              <span className="h-px w-8 bg-ember-400" />
              The Menu
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-50 sm:text-5xl">
              A short list.
              <br />
              <span className="italic text-ember-400">Done right.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-300">
            We don't do fifty varieties. We do a handful, obsessively. Each one
            built on the same slow dough and cooked in the same hot fire.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {pizzas.map((pizza, i) => (
            <article
              key={pizza.id}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-ink-900 transition-all duration-500 hover:border-white/10"
              style={{
                animationDelay: `${0.1 + i * 0.1}s`,
                opacity: visible ? undefined : 0,
                animation: visible
                  ? `fade-up 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s forwards`
                  : undefined,
              }}
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                {pizza.tag && (
                  <span className="absolute left-5 top-5 rounded-full bg-ember-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-950 backdrop-blur-sm">
                    {pizza.tag}
                  </span>
                )}
                <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-ink-50 text-ink-950 shadow-lg">
                  <span className="font-display text-lg font-semibold">
                    ${pizza.price}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-semibold text-ink-50">
                  {pizza.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
                  {pizza.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#reserve"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ember-400 transition-colors hover:text-ember-300"
          >
            See the full menu in-store
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
