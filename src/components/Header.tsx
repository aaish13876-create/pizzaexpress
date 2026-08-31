import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'The Dough', href: '#process' },
  { label: 'Find Us', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-ink-950 shadow-lg shadow-ember-500/30 transition-transform group-hover:scale-105">
            <Flame className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink-50">
            Pizzeria<span className="text-ember-400">Express</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-ink-200 transition-colors hover:text-ink-50"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#reserve"
            className="hidden rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-ember-500/25 transition-all duration-300 hover:bg-ember-400 hover:shadow-ember-400/40 hover:-translate-y-0.5 sm:inline-block"
          >
            Reserve
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-100 transition-colors hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px mt-3 flex flex-col gap-1 rounded-2xl border border-white/5 bg-ink-900/95 p-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-100 transition-colors hover:bg-white/5 hover:text-ink-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-ember-500 px-4 py-3 text-center text-base font-semibold text-ink-950"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  );
}
