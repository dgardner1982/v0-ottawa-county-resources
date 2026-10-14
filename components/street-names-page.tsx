import { AlertTriangle, CheckCircle2, Info, MessageSquareText } from 'lucide-react';
import { Footer } from '@/components/footer';
import {
  BackPill,
  Callout,
  EmergencyBar,
  PageHero,
  PillLink,
  SectionHeading,
  type Accent,
} from '@/components/site-chrome';

export type StreetNamesInfoItem = { label?: string; text: string };

export type StreetNamesProps = {
  substance: string;
  guideHref: string;
  guideLabel?: string;
  accent?: Accent;
  intro: string;
  heading?: string;
  names: string[];
  info?: {
    title: string;
    tone: 'warning' | 'bullets';
    items: StreetNamesInfoItem[];
  };
  note?: string;
};

const defaultNote =
  "Names are constantly changing as users and manufacturers create new variants. If you encounter unfamiliar terms being used in connection with substance use, it's worth investigating further.";

export function StreetNamesPage({
  substance,
  guideHref,
  guideLabel,
  accent = 'teal',
  intro,
  heading,
  names,
  info,
  note,
}: StreetNamesProps) {
  const uniqueNames = Array.from(new Set(names));
  const backLabel = guideLabel ?? `Back to ${substance} guide`;

  return (
    <>
      <EmergencyBar />

      <PageHero
        accent={accent}
        eyebrow="Street names reference"
        title={substance}
        highlight="street names"
        icon={MessageSquareText}
        description={intro}
        back={{ href: guideHref, label: backLabel }}
        actions={
          <PillLink href="#names" accent={accent}>
            Browse {uniqueNames.length} names
          </PillLink>
        }
      />

      <main className="bg-[#d9f0ee]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <section id="names" className="scroll-mt-24">
            <SectionHeading eyebrow={`${uniqueNames.length} known names`} title={heading ?? 'Common street names'} />
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {uniqueNames.map((name, idx) => (
                <li
                  key={name}
                  style={{ animationDelay: `${Math.min(idx * 25, 500)}ms` }}
                  className="resource-card animate-slide-in-up rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 px-5 py-4 text-center font-bold text-white shadow-[0_14px_20px_-10px_rgba(2,8,23,0.85)] transition duration-300 hover:-translate-y-1.5 hover:border-teal-300/60 hover:text-teal-200 hover:shadow-[0_18px_30px_-14px_rgba(45,212,191,0.6)]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </section>

          {info && (
            <Callout accent={info.tone === 'warning' ? 'red' : accent} title={info.title} className="mt-20">
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {info.items.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-base leading-7 backdrop-blur"
                  >
                    {info.tone === 'warning' ? (
                      <AlertTriangle aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-amber-300" />
                    ) : (
                      <CheckCircle2 aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-white/90" />
                    )}
                    <span>
                      {item.label && <strong className="mr-1 text-white">{item.label}</strong>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Callout>
          )}

          <aside className="mt-12 flex items-start gap-5 rounded-[1.35rem] border border-white/80 bg-white p-7 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.8)]">
            <Info aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-teal-700" />
            <p className="text-lg leading-8 text-slate-800">{note ?? defaultNote}</p>
          </aside>

          <div className="mt-14 flex justify-center">
            <BackPill href={guideHref}>{backLabel}</BackPill>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
