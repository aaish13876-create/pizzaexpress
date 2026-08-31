import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/29626982/pexels-photo-29626982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Pizza baking with open flames in a wood-fired oven"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/55 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/30" />
      </div>

      {/* Content */}
      <div className="container-px relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <p
            className="section-eyebrow animate-fade-in"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <span className="h-px w-8 bg-ember-400" />
            Wood-Fired Artisanal Pizzeria
          </p>
          <h1
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-50 animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Slow dough.
            <br />
            Hot fire.
            <br />
            <span className="italic text-ember-400">No shortcuts.</span>
          </h1>
          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Forty-eight-hour sourdough, hand-crushed Campania tomatoes, and a
            900°F oak-fired oven. Every pizza is blistered in ninety seconds —
            and worth every hour of the wait.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            <a
              href="#reserve"
              className="group inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-ember-500/30 transition-all duration-300 hover:bg-ember-400 hover:-translate-y-0.5"
            >
              Reserve a Table
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-ink-50 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              View the Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-300 transition-colors hover:text-ink-100 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
