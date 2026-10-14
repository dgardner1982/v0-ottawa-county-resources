import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, GraduationCap, HeartPulse, Map, MapPin, Phone, ShieldCheck, Siren } from 'lucide-react';
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
  title: 'Free Naloxone (Narcan) Locations | Ottawa County Recovery Alliance',
  description:
    'Find free naloxone (Narcan) kits and training across Ottawa County, Michigan, plus what to do in case of an overdose.',
};

const locations = [
  {
    name: 'Community Mental Health of Ottawa County - Holland',
    address: '347 Hoover Blvd, Holland, MI 49423',
    phone: '616-393-4489',
    hours: 'M-F 8a-5p',
    details: 'Free Naloxone kits available.',
  },
  {
    name: 'Corewell Health - Grand Haven',
    address: '15100 Whittaker Way, Grand Haven, MI 49417',
    phone: '(616) 935-6250',
    hours: 'Call for hours',
    details: 'Free Naloxone kits available.',
  },
  {
    name: 'Corewell Health - Zeeland',
    address: '8333 Felch St, Zeeland, MI 49464',
    phone: '(616) 772-4644',
    hours: 'Open 24 hours',
    details: 'Free Naloxone kits available.',
  },
  {
    name: 'Momentum Center - Grand Haven',
    address: '401 N 7th St, Grand Haven, MI 49417',
    phone: '(616) 414-9111',
    hours: 'Monday through Friday, 9:00 AM – 4:00 PM',
    details: 'Free Naloxone kits available. Email: hello@momentumcentergh.org',
  },
  {
    name: 'Ottawa County Jail - Lobby',
    address: '12220 Fillmore Ave, West Olive, MI 49426',
    phone: '616-786-4140',
    hours: '24 hour access',
    details: 'Naloxone kits available for free in jail lobby in vending machine.',
  },
  {
    name: 'Reach for Recovery - Grand Haven',
    address: '420 Washington Ave, Grand Haven, MI 49417',
    phone: '616-842-2420',
    hours: 'M-F 8a-5p',
    details: 'Free Naloxone Kits available.',
  },
  {
    name: 'Reach for Recovery - Holland',
    address: '483 Century Lane, Holland, MI 49424',
    phone: '616-396-5284',
    hours: 'M-F 8a-5p',
    details: 'Free Naloxone Kits available.',
  },
  {
    name: 'Samaritas',
    address: '2416 Van Ommen Dr, Holland, MI 49424',
    phone: '616-350-7781',
    hours: 'Call for hours',
    details: 'Free Naloxone kits available.',
  },
  {
    name: 'Sobar Recovery Community Center',
    address: '347 Hoover Blvd, Holland, MI 49423',
    phone: '(616) 377-5792',
    hours: '24 hour access',
    details: 'Free Naloxone kits available in newspaper box outside main entrance.',
  },
];

const overdoseSteps = [
  'Call 911 immediately',
  'If naloxone is available, administer it (nasal spray or injection into outer thigh muscle)',
  'Give rescue breathing for 3 minutes (1 breath every 5 seconds)',
  'If person has not responded, administer second dose of naloxone and continue rescue breathing',
  'If individual responds to the naloxone, place person in recovery position (on their side)',
  'Stay with the person until emergency responders arrive',
  'Tell responders what was taken and when, if known',
];

const reasons = [
  { icon: HeartPulse, text: 'Naloxone (Narcan) reverses opioid overdose in minutes' },
  { icon: ShieldCheck, text: 'It has no risk of abuse and is safe for anyone to use' },
  { icon: MapPin, text: 'Available for free at all locations listed below' },
];

export default function NaloxoneLocations() {
  return (
    <>
      <EmergencyBar />

      <PageHero
        accent="red"
        eyebrow="Free overdose reversal kits"
        title="Naloxone (Narcan)"
        highlight="Locations"
        icon={HeartPulse}
        description="Find free naloxone kits and training in Ottawa County. Naloxone is a life-saving medication that reverses opioid overdose."
        back={{ href: '/', label: 'Back to resources' }}
        actions={
          <>
            <PillLink href="#locations" accent="red">
              Find a kit near you
            </PillLink>
            <PillLink href="#overdose" accent="red" variant="ghost">
              Overdose response steps
            </PillLink>
          </>
        }
        aside={
          <div className="grid gap-4">
            {reasons.map(({ icon, text }) => (
              <div key={text} className={`${darkCardClass} flex items-center gap-5 p-5`}>
                <IconTile accent="red" icon={icon} />
                <p className="text-lg font-semibold leading-snug text-slate-100">{text}</p>
              </div>
            ))}
          </div>
        }
      />

      <main className="bg-[#d9f0ee]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${darkCardClass} flex flex-col items-start gap-5 p-8`}>
              <IconTile accent="cyan" icon={Map} />
              <h2 className="text-balance text-2xl font-black tracking-tight">Ottawa County map of free naloxone locations</h2>
              <p className="text-slate-300">See every Ottawa County pickup point on an interactive map.</p>
              <PillLink href="/ottawa-county-map" accent="cyan" className="mt-auto">
                View Ottawa County map
              </PillLink>
            </div>
            <div className={`${darkCardClass} flex flex-col items-start gap-5 p-8`}>
              <IconTile accent="teal" icon={Map} />
              <h2 className="text-balance text-2xl font-black tracking-tight">Statewide map of free naloxone locations</h2>
              <p className="text-slate-300">Traveling? Find free naloxone anywhere in Michigan.</p>
              <PillLink
                href="https://www.google.com/maps/d/u/0/embed?mid=1W-AhICd89o-740l0rUlEbLMUmJNSPyU&ehbc=2E312F&ll=42.97444424797593%2C-85.59040682815237&z=10"
                accent="teal"
                external
                className="mt-auto"
              >
                View state map
              </PillLink>
            </div>
          </div>

          <Callout accent="teal" title="Interested in being trained on naloxone administration?" className="mt-10">
            <p>
              Learn to recognize the signs and symptoms of overdose, risk factors from overdose and responding to an overdose with
              naloxone.
            </p>
            <p>To schedule a naloxone training, contact:</p>
            <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <GraduationCap aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-teal-200" />
                <div className="text-base leading-7">
                  <p className="text-xl font-black text-white">Daniel Gardner</p>
                  <p>Community Mental Health of Ottawa County</p>
                  <p>
                    <a href="mailto:dgardner@miottawa.org" className="font-bold text-teal-200 underline underline-offset-4 hover:text-white">
                      dgardner@miottawa.org
                    </a>
                  </p>
                  <p>
                    <a href="tel:616-393-4489" className="font-bold text-teal-200 underline underline-offset-4 hover:text-white">
                      616-393-4489
                    </a>
                  </p>
                  <p className="mt-2 italic text-white/80">We offer training for individuals, groups and businesses.</p>
                </div>
              </div>
            </div>
          </Callout>

          <section id="locations" className="mt-20 scroll-mt-24">
            <SectionHeading eyebrow="Pick up a kit" title="Free naloxone kit locations">
              Every location below offers naloxone at no cost. Call ahead to confirm hours.
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {locations.map((location, idx) => (
                <article
                  key={location.name}
                  style={{ animationDelay: `${Math.min(idx * 60, 480)}ms` }}
                  className={`${darkCardClass} animate-slide-in-up flex flex-col p-7 hover:border-red-300/50 hover:shadow-[0_22px_40px_-20px_rgba(248,113,113,0.55)]`}
                >
                  <h3 className="text-balance text-xl font-black leading-snug tracking-tight text-white">{location.name}</h3>
                  <ul className="mt-5 space-y-3 text-base text-slate-200">
                    <li className="flex items-start gap-3">
                      <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-red-300" />
                      <span>{location.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-red-300" />
                      <a href={`tel:${location.phone}`} className="font-bold text-teal-300 underline-offset-4 hover:text-white hover:underline">
                        {location.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-red-300" />
                      <span>{location.hours}</span>
                    </li>
                  </ul>
                  <p className="mt-auto border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">{location.details}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="overdose" className="mt-20 scroll-mt-24">
            <Callout accent="red" title="What to do in case of overdose">
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {overdoseSteps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-base leading-7 backdrop-blur">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-mono text-sm font-black text-red-700">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 flex items-start gap-3 text-base italic text-white/85">
                <Siren aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                Good Samaritan Laws protect people who call 911 for overdose emergencies. You will not get in trouble for seeking help.
              </p>
            </Callout>
          </section>

          <div className="mt-14 flex justify-center">
            <BackPill href="/">Back to resources</BackPill>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
