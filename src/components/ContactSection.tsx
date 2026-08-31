import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Check, Loader2 } from 'lucide-react';
import { hours } from '@/data';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'sending' | 'sent';

export default function ContactSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated submission — wired to a real backend later.
    window.setTimeout(() => setStatus('sent'), 1100);
  };

  return (
    <section id="contact" className="relative bg-ink-900 py-24 sm:py-32">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center">
          <p className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-ember-400" />
            Find Us
            <span className="h-px w-8 bg-ember-400" />
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-50 sm:text-5xl">
            Come share a <span className="italic text-ember-400">table.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info card */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-3xl border border-white/5 bg-ink-800/60 p-7 backdrop-blur-sm">
              <h3 className="font-display text-xl font-semibold text-ink-50">
                Pizzeria Express
              </h3>

              <ul className="mt-6 flex flex-col gap-5 text-[15px]">
                <li className="flex items-start gap-3.5 text-ink-200">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ember-400" strokeWidth={1.75} />
                  <span>
                    14 Forge Lane
                    <br />
                    Hackney Wick, London E9 5LN
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-ink-200">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-ember-400" strokeWidth={1.75} />
                  <a href="tel:+442071234567" className="transition-colors hover:text-ink-50">
                    +44 20 7123 4567
                  </a>
                </li>
              </ul>

              <div className="mt-7 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2.5 text-ember-400">
                  <Clock className="h-4 w-4" strokeWidth={1.75} />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Opening Hours
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm text-ink-300"
                    >
                      <span>{h.day}</span>
                      <span
                        className={
                          h.time === 'Closed'
                            ? 'text-ink-400'
                            : 'font-medium text-ink-100'
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/5">
              <iframe
                title="Pizzeria Express location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.037%2C51.543%2C-0.017%2C51.553&layer=mapnik&marker=51.548%2C-0.027"
                className="h-full min-h-[220px] w-full grayscale invert-[0.92] contrast-[0.95] opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          {/* Reservation form */}
          <div id="reserve" className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl border border-white/5 bg-ink-800/60 p-7 backdrop-blur-sm sm:p-9"
            >
              <h3 className="font-display text-2xl font-semibold text-ink-50">
                Reserve a table
              </h3>
              <p className="mt-2 text-sm text-ink-300">
                Tell us when you're coming and we'll hold a spot by the fire.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Jane Dough"
                    className="form-input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="jane@email.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Date" htmlFor="date">
                  <input id="date" name="date" required type="date" className="form-input" />
                </Field>
                <Field label="Time" htmlFor="time">
                  <input id="time" name="time" required type="time" className="form-input" />
                </Field>
                <Field label="Guests" htmlFor="guests">
                  <select id="guests" name="guests" required defaultValue="2" className="form-input">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                    <option value="9+">9+ guests</option>
                  </select>
                </Field>
                <Field label="Phone (optional)" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 20 0000 0000"
                    className="form-input"
                  />
                </Field>
              </div>

              <Field label="Notes (optional)" htmlFor="notes" className="mt-5">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Allergies, celebrations, seating preferences…"
                  className="form-input resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-ember-500/25 transition-all duration-300 hover:bg-ember-400 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {status === 'idle' && <span>Request Reservation →</span>}
                {status === 'sending' && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <Check className="h-4 w-4" />
                    Request received — we'll be in touch
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.875rem;
          background: rgba(12, 10, 9, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #e9e4df;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .form-input::placeholder { color: #7a6f64; }
        .form-input:focus {
          outline: none;
          border-color: #ea8a32;
          box-shadow: 0 0 0 3px rgba(234, 138, 50, 0.15);
          background: rgba(12, 10, 9, 0.9);
        }
        .form-input option { background: #1c1815; color: #e9e4df; }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = '',
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-ink-300"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
