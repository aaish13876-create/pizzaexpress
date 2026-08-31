import { Flame, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const socials = [
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Twitter', href: '#', Icon: Twitter },
  { label: 'YouTube', href: '#', Icon: Youtube },
];

const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'The Dough', href: '#process' },
  { label: 'Find Us', href: '#contact' },
  { label: 'Reserve', href: '#reserve' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-px py-16">
        <div className="flex flex-col items-center gap-10 text-center">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember-500 text-ink-950 shadow-lg shadow-ember-500/30 transition-transform group-hover:scale-105">
              <Flame className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-ink-50">
              Pizzeria<span className="text-ember-400">Express</span>
            </span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-300 transition-colors hover:text-ink-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all duration-300 hover:border-ember-500/40 hover:bg-ember-500/10 hover:text-ember-400"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Pizzeria Express. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with
            <Flame className="h-3.5 w-3.5 text-ember-500" fill="currentColor" />
            and slow dough.
          </p>
        </div>
      </div>
    </footer>
  );
}
