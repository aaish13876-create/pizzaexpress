import { processSteps } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function ProcessSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-ember-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-ember-800/10 blur-3xl" />

      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: heading + image */}
          <div className="relative">
            <p className="section-eyebrow">
              <span className="h-px w-8 bg-ember-400" />
              How We Do It
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-5xl">
              Three things we
              <br />
              <span className="italic text-ember-400">refuse to rush.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-300">
              Great pizza isn't a recipe — it's a discipline. Everything that
              matters happens before the pizza ever sees the fire.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/5">
              <img
                src="https://images.pexels.com/photos/15735160/pexels-photo-15735160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Hands kneading pizza dough on a floured surface"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-5">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative rounded-3xl border border-white/5 bg-ink-800/60 p-7 backdrop-blur-sm transition-all duration-500 hover:border-ember-500/30 hover:bg-ink-800"
                  style={{
                    opacity: visible ? undefined : 0,
                    animation: visible
                      ? `fade-up 0.7s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.12}s forwards`
                      : undefined,
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ember-500/10 text-ember-400 transition-colors group-hover:bg-ember-500/20">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-sm font-medium text-ember-400/70">
                          {step.number}
                        </span>
                        <span className="h-px flex-1 bg-white/5" />
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-ink-50">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-ink-300">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
