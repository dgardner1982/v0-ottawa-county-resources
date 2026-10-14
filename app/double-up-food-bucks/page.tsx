import type { Metadata } from 'next';
import { Apple, MapPin, ShoppingBasket, Snowflake, Store, Timer, Wheat } from 'lucide-react';
import { Footer } from '@/components/footer';
import {
  BackPill,
  Callout,
  EmergencyBar,
  IconTile,
  PageHero,
  PillLink,
  SectionHeading,
  darkCardClass,
} from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Double Up Food Bucks 2026 | Ottawa County Recovery Alliance',
  description:
    'Double your SNAP dollars on fresh produce. Participating farmers markets and grocery stores in Ottawa County, plus how to use the 2026 program.',
};

const updates = [
  {
    icon: Wheat,
    title: 'Unlimited Earn & Spend',
    text: 'The previous $20 per day limit has been removed. You can now earn and spend an unlimited amount of Double Up Food Bucks on fresh or frozen fruits and vegetables when using your Bridge Card.',
  },
  {
    icon: Snowflake,
    title: 'Frozen Produce Inclusion',
    text: 'You can now use Double Up Food Bucks for frozen fruits and vegetables, provided they have no added salt, sugar, or fats.',
  },
  {
    icon: Timer,
    title: 'Expiration Rules',
    text: 'Any benefits earned in 2025 expired on April 1, 2026. Moving forward, benefits earned in 2026 are available for 90 days from the date they were earned.',
  },
];

const markets = [
  { name: 'Holland Farmers Market', location: '150 W. 8th St, Holland', schedule: 'Wed & Sat, 8 AM – 2 PM (May–Oct)' },
  { name: 'Grand Haven Farmers Market', location: '300 N. Harbor Dr, Grand Haven', schedule: 'Wed & Sat, 8 AM – 1 PM (May–Oct)' },
  { name: 'Terra Square Farmers Market', location: '3380 Chicago Dr, Hudsonville', schedule: 'Wed, 9 AM – 1 PM (June–Sept)' },
  { name: 'Spring Lake Farm & Garden', location: '225 E. Exchange Ave, Spring Lake', schedule: 'Thu, 9 AM – 2 PM (June–Oct)' },
];

const stores = [
  { name: 'Family Fare (Holland)', address: '1185 S. Washington Ave & 993 Butternut Dr' },
  { name: 'Family Fare (Hudsonville)', address: '5221 Cherry Ave' },
  { name: 'Family Fare (Zeeland)', address: '9479 Riley St' },
];

const howTo = [
  {
    icon: Apple,
    title: 'At a farmers market',
    steps: [
      'Go to the Information Booth first',
      'Swipe your Bridge Card for the amount you want to spend',
      'You will receive wooden tokens (for any SNAP-eligible food) and an equal amount of silver tokens (specifically for Michigan-grown fruits and vegetables)',
    ],
  },
  {
    icon: ShoppingBasket,
    title: 'At a grocery store',
    steps: [
      'Use your Bridge Card to buy fresh or frozen produce',
      'The system will automatically track your earnings on your store loyalty account or provide a coupon for your next visit',
    ],
  },
];

export default function DoubleUpFoodBucksPage() {
  return (
    <>
      <EmergencyBar />

      <PageHero
        accent="amber"
        eyebrow="SNAP match program"
        title="Double Up Food Bucks"
        highlight="2026"
        icon={Apple}
        description='The "2 for 1" program you are looking for is the Double Up Food Bucks (DUFB) program. In 2026, significant updates make it even easier for Ottawa County families to access fresh produce.'
        back={{ href: '/', label: 'Back to resources' }}
        actions={
          <>
            <PillLink href="#markets" accent="amber">
              Find a market
            </PillLink>
            <PillLink href="#how-to" accent="amber" variant="ghost">
              How it works
            </PillLink>
          </>
        }
      />

      <main className="bg-[#d9f0ee]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeading eyebrow="What changed" title="Major 2026 program updates">
            Making fresh produce more affordable for Ottawa County families.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {updates.map(({ icon, title, text }, idx) => (
              <article
                key={title}
                style={{ animationDelay: `${idx * 90}ms` }}
                className={`${darkCardClass} animate-slide-in-up p-8 hover:border-amber-300/50 hover:shadow-[0_22px_40px_-20px_rgba(251,191,36,0.55)]`}
              >
                <IconTile accent="amber" icon={icon} />
                <h3 className="mt-5 text-2xl font-black tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>

          <section id="markets" className="mt-20 scroll-mt-24">
            <SectionHeading eyebrow="Seasonal" title="Participating farmers markets in Ottawa County">
              Most farmers markets use a token system. You visit the information booth, tell them how much you want to spend from your
              Bridge Card, and they will match that amount with silver Double Up tokens.
            </SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2">
              {markets.map((market, idx) => (
                <article
                  key={market.name}
                  style={{ animationDelay: `${idx * 70}ms` }}
                  className={`${darkCardClass} animate-slide-in-up flex items-start gap-5 p-7 hover:border-amber-300/50 hover:shadow-[0_22px_40px_-20px_rgba(251,191,36,0.55)]`}
                >
                  <IconTile accent="amber" icon={Store} />
                  <div>
                    <h3 className="text-xl font-black tracking-tight">{market.name}</h3>
                    <p className="mt-2 flex items-start gap-2 text-slate-300">
                      <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                      {market.location}
                    </p>
                    <p className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-sm font-bold text-amber-200">
                      {market.schedule}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <SectionHeading eyebrow="Loyalty card or receipt coupon" title="Participating grocery stores">
              In grocery stores, the program usually works through a loyalty card (like the Yes Card) or an automatic coupon printed
              on your receipt.
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-3">
              {stores.map((store) => (
                <article
                  key={store.name}
                  className="group rounded-[1.35rem] border border-white/80 bg-white p-7 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.8)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_48px_-26px_rgba(217,119,6,0.6)]"
                >
                  <IconTile accent="amber" icon={ShoppingBasket} />
                  <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">{store.name}</h3>
                  <p className="mt-2 text-slate-700">{store.address}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="how-to" className="mt-20 scroll-mt-24">
            <SectionHeading eyebrow="Step by step" title="How to use the program" />
            <div className="grid gap-6 lg:grid-cols-2">
              {howTo.map(({ icon: Icon, title, steps }) => (
                <div key={title} className="rounded-[1.75rem] bg-gradient-to-br from-amber-600 via-orange-600 to-slate-950 p-8 text-white shadow-[0_24px_55px_-30px_rgba(217,119,6,0.8)]">
                  <div className="flex items-center gap-4">
                    <Icon aria-hidden="true" className="h-8 w-8 text-amber-200" />
                    <h3 className="text-2xl font-black tracking-tight">{title}</h3>
                  </div>
                  <ol className="mt-6 space-y-3">
                    {steps.map((step, idx) => (
                      <li key={step} className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 leading-7 backdrop-blur">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-mono text-sm font-black text-orange-700">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <Callout accent="teal" title="Ready to start stretching your food budget?" className="mt-20">
            <p>
              Visit your nearest participating farmers market or grocery store today to start earning Double Up Food Bucks on fresh
              produce!
            </p>
            <div className="pt-3">
              <PillLink href="/" accent="teal">
                Back to Ottawa County Resources
              </PillLink>
            </div>
          </Callout>

          <div className="mt-14 flex justify-center">
            <BackPill href="/">Back to resources</BackPill>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
