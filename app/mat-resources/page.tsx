'use client';

import { useState } from 'react';
import { CalendarCheck, CheckCircle2, Clock, Globe, MapPin, Phone, Pill, Stethoscope } from 'lucide-react';
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

interface MATProvider {
  name: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  info: string;
}

interface Medication {
  name: string;
  brands?: string;
  what: string;
  does: string;
  use: string;
}

function PhoneLink({ phoneNumber }: { phoneNumber: string }) {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handlePhoneClick}
      className="cursor-pointer text-lg font-black text-teal-300 underline-offset-4 hover:text-white hover:underline"
      title="Call, or copy the phone number on a computer"
    >
      {phoneNumber}
      {copied && <span className="ml-2 text-sm font-bold text-amber-300">(Copied!)</span>}
    </button>
  );
}

const MAT_PROVIDERS: MATProvider[] = [
  {
    name: 'Western Michigan Comprehensive Treatment Center',
    address: '3584 Fairlanes Ave SW STE 2, Grandville, MI 49418',
    phone: '(616) 797-2124',
    website: 'ctcprograms.com',
    hours: 'Mon–Fri 6:00 AM – 11:30 AM, Sat 6:30 AM – 9:30 AM',
    info: 'Major provider of outpatient medication-assisted treatment for adults struggling with opioid use disorder. Offers methadone, Suboxone, and buprenorphine.',
  },
  {
    name: 'Eastside Outpatient Services',
    address: '445 E Sherman Blvd, Muskegon, MI 49444',
    phone: '(231) 739-4359',
    website: 'eastsidesac.com',
    hours: 'Mon–Fri 6:30 AM – 11:00 AM, Sat 8:00 AM – 10:00 AM',
    info: 'Located just north of Ottawa County, provides liquid methadone treatment coupled with counseling and rehabilitative services in a safe environment.',
  },
  {
    name: 'Cherry Health – Muskegon Recovery Center',
    address: '1611 Oak Ave, Muskegon, MI 49442',
    phone: '(231) 767-1921',
    website: 'cherryhealth.org',
    hours: 'Mon–Fri 6:15 AM – 2:00 PM, Sat 6:30 AM – 10:30 AM',
    info: 'Offers comprehensive MAT services including methadone and buprenorphine, integrated with individual and group therapy sessions.',
  },
  {
    name: 'Holland Hospital Behavioral Health, Outpatient',
    address: '854 Washington Ave STE 330, Holland, MI 49423',
    phone: '(616) 355-3926',
    website: 'hollandhospital.org',
    hours: 'Mon–Thu 7:30 AM – 9:00 PM, Fri 7:30 AM – 5:00 PM',
    info: 'Hospital-based outpatient behavioral health program offering buprenorphine and naltrexone alongside intensive outpatient services.',
  },
  {
    name: 'Reach for Recovery',
    address: '483 Century Ln, Holland, MI 49423',
    phone: '(616) 396-5284',
    website: 'reachforrecovery.org',
    hours: 'Mon–Fri 8:00 AM – 5:00 PM',
    info: 'Formerly known as OAR, provides outpatient and residential medication-assisted services tailored for both men and women in the Holland area.',
  },
  {
    name: 'Pine Rest Holland Clinic',
    address: '926 S. Washington #210, Holland, MI 49423',
    phone: '(616) 820-3780',
    website: 'pinerest.org',
    hours: 'M-Th 8:30 AM – 8:00 PM, Fri 8:30 AM – 3:00 PM',
    info: 'Comprehensive mental health and substance recovery services including medication-assisted treatment with psychiatric support.',
  },
];

const OUD_MEDICATIONS: Medication[] = [
  {
    name: 'Buprenorphine',
    brands: 'Suboxone, Subutex, Sublocade',
    what: 'A partial opioid agonist.',
    does: 'Activates opioid receptors enough to relieve cravings and withdrawal symptoms. Its ceiling effect means higher doses do not increase euphoria or respiratory depression. Suboxone also includes naloxone to discourage injection.',
    use: 'Prescribed by certified healthcare providers in office-based settings or clinics, or administered as a monthly extended-release injection.',
  },
  {
    name: 'Methadone',
    what: 'A long-acting full opioid agonist.',
    does: 'Fully binds to opioid receptors, eliminating cravings and withdrawal for 24 to 36 hours. Its slow action provides stability without the rapid spikes that trigger a high.',
    use: 'Highly regulated and dispensed daily through federally certified Opioid Treatment Programs.',
  },
  {
    name: 'Naltrexone',
    brands: 'Vivitrol, Revia',
    what: 'A full opioid antagonist.',
    does: 'Blocks opioid receptors, so using opioids while taking it does not produce euphoric effects or pain relief.',
    use: 'Used for relapse prevention after a complete detox period, typically 7 to 14 days opioid-free. It is commonly administered as a monthly intramuscular injection.',
  },
];

const AUD_MEDICATIONS: Medication[] = [
  {
    name: 'Naltrexone',
    brands: 'Vivitrol, Revia',
    what: 'An opioid and endorphin receptor antagonist.',
    does: 'Blocks the pleasurable buzz and euphoric reward of drinking. This dulls cravings and reduces the likelihood of heavy drinking episodes.',
    use: 'Available as a daily oral pill or a monthly extended-release intramuscular injection. It can be initiated while someone is still drinking or after detox.',
  },
  {
    name: 'Acamprosate',
    brands: 'Campral',
    what: 'A neurochemical stabilizer.',
    does: 'Rebalances glutamate and GABA activity disrupted by chronic alcohol use. It relieves protracted withdrawal symptoms like restlessness, anxiety, and sleep disturbances to help prevent relapse.',
    use: 'Taken orally three times daily. It is started after detoxification and is intended for individuals aiming for total abstinence.',
  },
  {
    name: 'Disulfiram',
    brands: 'Antabuse',
    what: 'An alcohol metabolism inhibitor.',
    does: 'Blocks the enzyme that breaks down acetaldehyde. Consuming alcohol causes rapid, unpleasant reactions such as flushing, nausea, headache, and palpitations.',
    use: 'Taken as a daily oral pill. It functions as a psychological deterrent for individuals committed to abstinence and requires medical supervision.',
  },
];

const BASICS = [
  { name: 'Methadone', text: 'A synthetic opioid that prevents withdrawal and reduces cravings' },
  { name: 'Buprenorphine (Suboxone)', text: "A partial opioid agonist that's safer and has lower overdose risk" },
  { name: 'Naltrexone', text: 'An opioid antagonist that blocks the effects of opioids' },
  { name: 'Counseling & Support', text: 'Behavioral therapy and peer support are essential components' },
];

const STEPS = [
  { name: 'Contact a provider', text: 'Call any of the MAT providers listed above to learn about their programs' },
  { name: 'Initial assessment', text: "You'll undergo an evaluation to determine the best treatment plan" },
  { name: 'Medication selection', text: 'Discuss with your provider which medication is right for you' },
  { name: 'Begin treatment', text: 'Start your medication and attend counseling sessions regularly' },
  { name: 'Ongoing support', text: 'Continue with therapy and support groups for best outcomes' },
];

const BENEFITS = [
  'Reduces cravings and withdrawal symptoms',
  'Decreases illicit drug use',
  'Improves retention in treatment',
  'Reduces risk of overdose',
  'Improves employment and social outcomes',
  'Safe and effective when used as prescribed',
  'Allows for stable, productive life',
];

function MedicationGroup({ title, tone, medications }: { title: string; tone: 'orange' | 'purple'; medications: Medication[] }) {
  const toneClasses =
    tone === 'orange'
      ? 'border-orange-300/30 bg-gradient-to-br from-orange-500/15 to-slate-900/60 text-orange-200'
      : 'border-fuchsia-300/30 bg-gradient-to-br from-fuchsia-500/15 to-slate-900/60 text-fuchsia-200';
  return (
    <div className={`rounded-[1.75rem] border p-6 sm:p-8 ${toneClasses}`}>
      <h4 className="font-mono text-sm font-bold uppercase tracking-[0.2em]">{title}</h4>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {medications.map((med) => (
          <article key={`${title}-${med.name}`} className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_14px_30px_-20px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1 hover:border-teal-300/50">
            <h5 className="text-2xl font-black tracking-tight text-white">{med.name}</h5>
            {med.brands && <p className="mt-1 text-sm font-bold text-teal-300">{med.brands}</p>}
            <dl className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <div>
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-teal-200">What it is</dt>
                <dd>{med.what}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-teal-200">What it does</dt>
                <dd>{med.does}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-teal-200">Use</dt>
                <dd>{med.use}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function MATResourcesPage() {
  return (
    <>
      <EmergencyBar />

      <PageHero
        accent="cyan"
        eyebrow="Evidence-based recovery resources"
        title="Medication Assisted"
        highlight="Treatment"
        icon={Stethoscope}
        description="Medication Assisted Treatment (MAT) combines FDA-approved medications with counseling and behavioral therapies to treat opioid use disorder and alcohol use disorder. It is one of the most effective evidence-based treatment approaches available."
        back={{ href: '/', label: 'Back to resources' }}
        actions={
          <>
            <PillLink href="#providers" accent="cyan">
              Find a provider
            </PillLink>
            <PillLink href="#medications" accent="cyan" variant="ghost">
              Understand the medications
            </PillLink>
          </>
        }
        aside={
          <div className="grid gap-4">
            {BASICS.map((item) => (
              <div key={item.name} className={`${darkCardClass} flex items-start gap-4 p-5`}>
                <IconTile accent="cyan" icon={Pill} />
                <div>
                  <p className="text-lg font-black">{item.name}</p>
                  <p className="text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        }
      />

      <main className="bg-[#d9f0ee]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Callout accent="teal" title="Medicated Assisted Treatment (MAT)">
            <p>
              Medication-Assisted Treatment (MAT) incorporates medications such as methadone, buprenorphine, and naltrexone alongside
              behavioral therapy and wraparound support services. By addressing both the physical and psychological dimensions of
              opioid and alcohol use disorders, MAT strengthens treatment retention and fosters sustained personal stability.
            </p>
          </Callout>

          <section id="medications" aria-labelledby="mat-details-heading" className="mt-20 scroll-mt-24">
            <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-[#123b46] text-white shadow-[0_24px_55px_-30px_rgba(2,8,23,0.9)]">
              <div className="px-6 py-10 sm:px-10">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-teal-300">Treatment and recovery options</p>
                <h2 id="mat-details-heading" className="mt-2 text-balance text-4xl font-black tracking-tight sm:text-5xl">
                  Understanding MAT medications
                </h2>
                <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
                  Medicated Assisted Treatment (MAT), increasingly referred to as MOUD (Medications for Opioid Use Disorder) or MAUD
                  (Medications for Alcohol Use Disorder), combines FDA-approved medications with counseling, behavioral therapies, and
                  social support services.
                </p>
              </div>

              <div className="space-y-8 px-6 pb-10 sm:px-10">
                <div className="rounded-2xl border border-teal-300/25 bg-teal-300/10 p-6">
                  <h3 className="text-2xl font-black tracking-tight">How MAT supports recovery</h3>
                  <p className="mt-3 leading-8 text-slate-200">
                    Rather than substituting one drug for another, MAT helps normalize brain chemistry, blocks the euphoric effects of
                    substances, relieves severe physiological cravings, and prevents withdrawal without inducing a high.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">Medications used in MAT</h3>
                  <p className="mt-2 max-w-3xl text-slate-300">
                    Medication choices are made with a qualified healthcare provider and are part of a broader recovery plan.
                  </p>
                </div>

                <MedicationGroup title="1. Opioid Use Disorder (OUD)" tone="orange" medications={OUD_MEDICATIONS} />
                <MedicationGroup title="2. Alcohol Use Disorder (AUD)" tone="purple" medications={AUD_MEDICATIONS} />

                <p className="rounded-2xl border border-amber-300/40 bg-amber-300/10 p-5 leading-7 text-amber-100">
                  <strong className="text-amber-200">Important:</strong> Treatment should be individualized with a qualified healthcare
                  professional. Do not start, stop, or change medication without medical guidance.
                </p>
              </div>
            </div>
          </section>

          <section id="providers" className="mt-20 scroll-mt-24">
            <SectionHeading eyebrow="Ottawa County and nearby" title="Find a treatment provider" />
            <div className="grid gap-6 lg:grid-cols-2">
              {MAT_PROVIDERS.map((provider, idx) => (
                <article
                  key={provider.name}
                  style={{ animationDelay: `${idx * 90}ms` }}
                  className={`${darkCardClass} animate-slide-in-up flex flex-col p-8 hover:border-teal-300/50 hover:shadow-[0_22px_40px_-20px_rgba(45,212,191,0.55)]`}
                >
                  <div className="flex items-start gap-4">
                    <IconTile accent="teal" icon={Stethoscope} />
                    <h3 className="text-balance text-2xl font-black leading-tight tracking-tight">{provider.name}</h3>
                  </div>
                  <p className="mt-5 leading-7 text-slate-300">{provider.info}</p>

                  <ul className="mt-6 space-y-4 text-slate-200">
                    <li className="flex items-start gap-3">
                      <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-300" />
                      <span>{provider.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-teal-300" />
                      <PhoneLink phoneNumber={provider.phone} />
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-300" />
                      <span>{provider.hours}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Globe aria-hidden="true" className="h-5 w-5 shrink-0 text-teal-300" />
                      <a
                        href={`https://${provider.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-teal-300 underline-offset-4 hover:text-white hover:underline"
                      >
                        {provider.website}
                      </a>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-teal-700 via-cyan-600 to-slate-900 p-8 text-white shadow-[0_24px_55px_-30px_rgba(13,148,136,0.8)]">
              <div className="flex items-center gap-4">
                <CalendarCheck aria-hidden="true" className="h-8 w-8 text-teal-200" />
                <h3 className="text-3xl font-black tracking-tight">Getting started with MAT</h3>
              </div>
              <p className="mt-4 leading-7 text-white/90">
                If you or someone you know is struggling with opioid addiction, MAT can be an effective path to recovery:
              </p>
              <ol className="mt-5 space-y-3">
                {STEPS.map((step, idx) => (
                  <li key={step.name} className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 leading-7 backdrop-blur">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-mono text-sm font-black text-teal-700">
                      {idx + 1}
                    </span>
                    <span>
                      <strong>{step.name}:</strong> {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-orange-600 via-amber-600 to-slate-950 p-8 text-white shadow-[0_24px_55px_-30px_rgba(217,119,6,0.8)]">
              <h3 className="text-3xl font-black tracking-tight">Benefits of Medicated Assisted Treatment</h3>
              <ul className="mt-6 space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-lg leading-7">
                    <CheckCircle2 aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-amber-200" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Callout accent="fuchsia" title="Need additional support?" className="mt-20">
            <p>
              MAT works best when combined with counseling, peer support, and other recovery services. Check out our other resources
              for comprehensive support.
            </p>
            <div className="flex flex-wrap gap-4 pt-3">
              <PillLink href="/" accent="fuchsia">
                Browse all resources
              </PillLink>
              <PillLink href="/support-groups" accent="fuchsia" variant="ghost">
                Find a support group
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
