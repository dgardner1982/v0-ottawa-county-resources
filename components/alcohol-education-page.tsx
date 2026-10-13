'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

const effects = [
  ['Mild impairment', 'BAC 0.02%–0.05%', 'Slight mood elevation, mild relaxation, subtle coordination changes, and reduced social hesitation.'],
  ['Moderate impairment', 'BAC 0.06%–0.15%', 'Slurred speech, balance loss, slowed reaction time, blurred vision, and significantly diminished judgment.'],
  ['Severe intoxication', 'BAC 0.16%–0.30%', 'Memory blackouts, severe motor-control loss, sensory dulling, nausea, vomiting, and emotional volatility.'],
  ['Life-threatening', 'BAC 0.31%+', 'Loss of consciousness, depressed breathing, hypothermia, coma, and possible cardiac or respiratory arrest.'],
] as const;

const longTerm = [
  ['Neurological system', 'Prolonged exposure can reduce brain volume, especially in the prefrontal cortex and hippocampus. Nutritional deficits can add chronic neurological damage.'],
  ['Hepatic system', 'Steatosis (fatty liver) may reverse with abstinence; alcoholic hepatitis inflames and damages tissue; cirrhosis permanently replaces healthy liver tissue with scar tissue.'],
  ['Cardiovascular system', 'Heavy drinking can elevate blood pressure, weaken the heart muscle, cause arrhythmias, and increase stroke risk.'],
  ['Cancer and immunity', 'Ethanol and acetaldehyde are Group 1 human carcinogens. Alcohol exposure raises risk for cancers of the mouth, pharynx, esophagus, liver, colon, and breast, while suppressing immune defenses.'],
] as const;

function SectionHeading({ eyebrow, children, inverted = false }: { eyebrow: string; children: React.ReactNode; inverted?: boolean }) {
  return (
    <div className="mb-7">
      <p className={`mb-2 font-mono text-xs font-bold uppercase tracking-[0.22em] ${inverted ? 'text-cyan-300' : 'text-cyan-700'}`}>{eyebrow}</p>
      <h2 className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${inverted ? 'text-white' : 'text-slate-950'}`}>{children}</h2>
    </div>
  );
}

export function AlcoholEducationPage() {
  return (
    <div className="min-h-screen bg-[#41cfdf] text-slate-950">
      <div className="bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-cyan-100">
        Call <a className="font-bold text-white underline underline-offset-4" href="tel:211">2-1-1</a> for local resources · Life-threatening emergencies: <a className="font-bold text-white underline underline-offset-4" href="tel:911">9-1-1</a>
      </div>

      <header className="px-5 pb-10 pt-8 sm:px-8 sm:pt-12">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6 py-10 text-white shadow-[0_24px_38px_-20px_rgba(2,8,23,0.95)] sm:px-12 sm:py-14">
          <Link href="/education" className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 hover:text-white">← Back to education guides</Link>
          <div className="mt-10 max-w-4xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Substance education guide</p>
            <h1 className="mt-4 text-pretty text-5xl font-bold tracking-tight sm:text-7xl">Alcohol</h1>
            <p className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">Understanding physiology, immediate risks, long-term consequences, dependence, and verified paths to help.</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-5 pb-16 sm:px-8 lg:pb-20">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10">
            <SectionHeading eyebrow="01 · How it works">What alcohol is and how it works</SectionHeading>
            <div className="space-y-5 text-base leading-7 text-slate-700">
              <p>Alcohol, specifically ethanol, is a central nervous system depressant. It may initially feel stimulating because it lowers inhibition, but biologically it slows communication throughout the nervous system.</p>
              <p>Alcohol crosses the blood-brain barrier and changes key chemical messengers:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-cyan-50 p-5"><h3 className="font-bold text-slate-950">GABA</h3><p className="mt-2 text-sm leading-6 text-slate-700">Amplifies the brain&apos;s primary inhibitory neurotransmitter, producing relaxation, sedation, and temporary anxiety reduction.</p></div>
                <div className="rounded-2xl bg-cyan-50 p-5"><h3 className="font-bold text-slate-950">Glutamate</h3><p className="mt-2 text-sm leading-6 text-slate-700">Suppresses the primary excitatory neurotransmitter, slowing cognition, impairing memory formation, and delaying reflexes.</p></div>
              </div>
            </div>
          </article>
          <aside className="rounded-3xl bg-slate-950 p-7 text-white shadow-[0_18px_28px_-16px_rgba(2,8,23,0.9)] sm:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Metabolism</p>
            <h2 className="mt-4 text-3xl font-bold">About one standard drink per hour</h2>
            <p className="mt-5 leading-7 text-slate-300">The liver primarily metabolizes alcohol using alcohol dehydrogenase. Coffee, cold showers, and exercise cannot speed this process.</p>
            <div className="mt-7 border-t border-slate-700 pt-6 text-sm leading-6 text-cyan-100">One standard drink: 12 oz regular beer, 5 oz wine, or 1.5 oz of 80-proof spirits.</div>
          </aside>
        </section>

        <section className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10">
          <SectionHeading eyebrow="02 · Immediate effects">Short-term effects and immediate dangers</SectionHeading>
          <p className="mb-7 max-w-3xl leading-7 text-slate-700">Effects vary with biological sex, body mass, hydration, food intake, and rate of consumption. Blood alcohol concentration can continue rising after drinking stops.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {effects.map(([title, bac, description]) => <article key={title} className="rounded-2xl bg-slate-950 p-6 text-white shadow-[0_14px_20px_-12px_rgba(2,8,23,0.9)]"><p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{bac}</p><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 leading-6 text-slate-300">{description}</p></article>)}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-red-50 p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.55)] sm:p-10">
            <SectionHeading eyebrow="Medical emergency">Alcohol poisoning</SectionHeading>
            <p className="leading-7 text-slate-700">High concentrations of alcohol can suppress the brainstem, which controls breathing and heart rate. Warning signs include slow breathing (fewer than eight breaths per minute), irregular breathing with gaps of ten seconds or more, cold or clammy pale or bluish skin, vomiting while unconscious, and seizures.</p>
            <div className="mt-6 rounded-2xl bg-red-600 p-5 font-bold leading-6 text-white">Call 911 immediately. Do not leave an unconscious person alone or assume they can sleep it off.</div>
          </article>
          <article className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10">
            <SectionHeading eyebrow="Immediate risks">Behavioral and physical harm</SectionHeading>
            <p className="leading-7 text-slate-700">Alcohol reduces the prefrontal cortex&apos;s ability to assess risk. Intoxication is strongly associated with traumatic injury, motor vehicle collisions, drownings, and physical altercations.</p>
          </article>
        </section>

        <section className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10">
          <SectionHeading eyebrow="03 · Long-term consequences">Chronic health effects</SectionHeading>
          <div className="grid gap-4 md:grid-cols-2">{longTerm.map(([title, description]) => <article key={title} className="rounded-2xl bg-cyan-50 p-6"><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-700">{description}</p></article>)}</div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-slate-950 p-7 text-white shadow-[0_18px_28px_-16px_rgba(2,8,23,0.9)] sm:p-10">
            <SectionHeading eyebrow="04 · Dependence" inverted>Tolerance and withdrawal</SectionHeading>
            <div className="space-y-5 leading-7 text-slate-300"><p><strong className="text-white">Tolerance:</strong> The nervous system adapts to frequent exposure, requiring larger quantities to produce effects previously achieved with smaller amounts.</p><p><strong className="text-white">Dependence and withdrawal:</strong> Abruptly stopping heavy, chronic drinking can cause tremors, sweating, rapid heart rate, severe anxiety, seizures, or delirium tremens. Medical support may be necessary.</p></div>
          </article>
          <article className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10"><SectionHeading eyebrow="Developing brain">Alcohol and brain development</SectionHeading><p className="leading-7 text-slate-700">The brain continues developing until approximately age 25. Heavy exposure during this period can disrupt neural circuits involved in impulse control, decision-making, and emotional balance, increasing the likelihood of alcohol use disorder later in life.</p></article>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-slate-950 to-cyan-950 p-7 text-white shadow-[0_22px_34px_-18px_rgba(2,8,23,0.95)] sm:p-10"><SectionHeading eyebrow="Verified resources" inverted>Seeking help</SectionHeading><div className="grid gap-5 md:grid-cols-2"><div><h3 className="text-xl font-bold">SAMHSA National Helpline</h3><p className="mt-2 leading-7 text-slate-300">1-800-662-4357 · Free, confidential, 24/7 treatment referral and information.</p></div><div><h3 className="text-xl font-bold">National Institute on Alcohol Abuse and Alcoholism</h3><a className="mt-2 inline-block text-cyan-200 underline underline-offset-4" href="https://rethinkingdrinking.niaaa.nih.gov" target="_blank" rel="noreferrer">rethinkingdrinking.niaaa.nih.gov</a></div></div><p className="mt-8 border-t border-slate-700 pt-6 font-semibold text-cyan-100">In any acute emergency or suspected poisoning: call 911 immediately.</p></section>
      </main>
      <Footer />
    </div>
  );
}

export default AlcoholEducationPage;
