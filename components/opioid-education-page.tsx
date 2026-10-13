'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

type OpioidKind = 'hydrocodone' | 'hydromorphone';

const guides = {
  hydrocodone: {
    title: 'Hydrocodone',
    subtitle: '(Vicodin, Norco, Lortab)',
    intro: 'A semi-synthetic opioid used for moderate-to-severe pain, with serious respiratory, counterfeit-pill, and acetaminophen toxicity risks.',
    classification: 'Semi-synthetic morphinan opioid and Schedule II narcotic analgesic. It is a full mu-opioid receptor agonist that reduces pain signaling and can suppress respiratory drive in the brainstem.',
    context: 'Prescribed for acute or chronic pain and sometimes cough suppression. Combination tablets commonly pair hydrocodone with 325 mg of acetaminophen; unregulated pills may contain fentanyl or nitazene analogues.',
    effects: [['Therapeutic / low', 'Pain relief, mild relaxation, somnolence, constricted pupils, dry mouth, and a mild blood-pressure decrease.'], ['High / non-prescribed', 'Euphoria, mental clouding, nodding, pinpoint pupils, nausea, itching, urinary retention, and slowed bowel motility.'], ['Severe toxicity', 'Unresponsiveness, respiratory arrest, agonal breathing, cold clammy skin, and profound cyanosis.']],
    risks: [['Rapid tolerance and dependence', 'Abrupt cessation can cause intense aches, sweating, nausea, diarrhea, insomnia, and dysphoria.'], ['Acetaminophen liver injury', 'Taking multiple combination pills can exceed 4 grams of acetaminophen in 24 hours and cause acute liver failure.'], ['Endocrine and pain changes', 'Long-term use may suppress sex hormones, reduce bone density, and paradoxically heighten pain sensitivity.'], ['Counterfeit-pill hazard', 'Street tablets marked to resemble Vicodin or Norco may contain illicit fentanyl, nitazenes, or unknown binders.']],
    interactions: 'Combining hydrocodone with benzodiazepines, alcohol, gabapentin, or pregabalin can multiply sedation and respiratory depression.',
  },
  hydromorphone: {
    title: 'Hydromorphone',
    subtitle: '(Dilaudid)',
    intro: 'A high-potency Schedule II opioid with a fast onset, rapid dependence risk, and severe respiratory-depression potential.',
    classification: 'A semi-synthetic hydrogenated ketone analog of morphine and potent full mu-opioid receptor agonist. It is approximately four to seven times more potent than morphine orally and up to ten times more potent parenterally.',
    context: 'Used in hospitals and outpatient care for severe surgical, burn, oncology, or breakthrough pain. Tablets, liquids, extended-release capsules, and injectable forms exist; counterfeit pills may contain metonitazene or protonitazene.',
    effects: [['Therapeutic / low', 'Rapid analgesia, physical calming, mild somnolence, constricted pupils, mild hypotension, and dry mouth.'], ['High / non-prescribed', 'An intense rush, heavy sedation, mental clouding, pinpoint pupils, nausea, itching, constipation, and urinary hesitancy.'], ['Severe toxicity', 'Stupor, loss of consciousness, respiratory arrest, cyanosis, limp muscles, and hypothermia.']],
    risks: [['Rapid high-threshold dependence', 'Dependence can develop quickly, with severe withdrawal often beginning within 12 to 24 hours after cessation.'], ['Brain oxygen injury', 'A non-fatal overdose can cause hypoxic-anoxic encephalopathy, memory loss, tremors, and executive dysfunction.'], ['Injection-related hazards', 'Crushed tablets can introduce insoluble binders, increasing risks of pulmonary talcosis, endocarditis, and thrombosis.'], ['Gastrointestinal dysmotility', 'Severe inhibition of peristalsis can cause painful fecal impaction and bowel perforation.']],
    interactions: 'Benzodiazepines, alcohol, xylazine, and medetomidine can intensify respiratory suppression, hypotension, bradycardia, and deep sedation.',
  },
} as const;

export function OpioidEducationPage({ kind }: { kind: OpioidKind }) {
  const guide = guides[kind];
  return <div className="min-h-screen bg-[#41cfdf] text-slate-950">
    <div className="bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-cyan-100">Call <a href="tel:211" className="font-bold text-white underline underline-offset-4">2-1-1</a> for local resources · Life-threatening emergencies: <a href="tel:911" className="font-bold text-white underline underline-offset-4">9-1-1</a></div>
    <header className="px-5 pb-10 pt-8 sm:px-8 sm:pt-12"><div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6 py-10 text-white shadow-[0_24px_38px_-20px_rgba(2,8,23,0.95)] sm:px-12 sm:py-14"><Link href="/education" className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 hover:text-white">← Back to education guides</Link><div className="mt-10 max-w-4xl"><p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Opioid education guide</p><h1 className="mt-4 text-pretty text-5xl font-bold tracking-tight sm:text-7xl">{guide.title} <span className="text-cyan-300">{guide.subtitle}</span></h1><p className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">{guide.intro}</p></div></div></header>
    <main className="mx-auto max-w-6xl space-y-8 px-5 pb-16 sm:px-8 lg:pb-20">
      <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]"><article className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10"><Heading eyebrow="01 · Classification">How {guide.title.toLowerCase()} works</Heading><p className="leading-7 text-slate-700">{guide.classification}</p></article><aside className="rounded-3xl bg-slate-950 p-7 text-white shadow-[0_18px_28px_-16px_rgba(2,8,23,0.9)] sm:p-10"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Clinical and street context</p><h2 className="mt-4 text-3xl font-bold">Know what the product may contain</h2><p className="mt-5 leading-7 text-slate-300">{guide.context}</p></aside></section>
      <section className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10"><Heading eyebrow="02 · Acute effects">Effects by exposure level</Heading><div className="grid gap-4 md:grid-cols-3">{guide.effects.map(([level, description]) => <article key={level} className="rounded-2xl bg-slate-950 p-6 text-white shadow-[0_14px_20px_-12px_rgba(2,8,23,0.9)]"><p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{level}</p><p className="mt-4 leading-7 text-slate-200">{description}</p></article>)}</div></section>
      <section className="grid gap-8 lg:grid-cols-2"><article className="rounded-3xl bg-red-50 p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.55)] sm:p-10"><Heading eyebrow="Medical emergency">Recognizing opioid overdose</Heading><p className="leading-7 text-slate-700">Pinpoint pupils, profound unresponsiveness, slow or absent breathing, gurgling, blue or gray skin, or limp extremities require immediate help.</p><div className="mt-6 rounded-2xl bg-red-600 p-5 font-bold leading-6 text-white">Call 911. Give naloxone if available, repeat a dose in two to three minutes if normal breathing does not return, provide rescue breathing, and place the person in the recovery position once breathing is restored.</div></article><article className="rounded-3xl bg-slate-950 p-7 text-white shadow-[0_18px_28px_-16px_rgba(2,8,23,0.9)] sm:p-10"><Heading eyebrow="Dangerous combinations" inverted>Polydrug interactions</Heading><p className="leading-7 text-slate-300">{guide.interactions}</p><p className="mt-5 leading-7 text-slate-300">Never mix opioids with other sedatives or use an unverified pill. Tell emergency responders what may have been taken.</p></article></section>
      <section className="rounded-3xl bg-white p-7 shadow-[0_18px_28px_-16px_rgba(2,8,23,0.75)] sm:p-10"><Heading eyebrow="03 · Long-term consequences">Health effects of prolonged heavy use</Heading><div className="grid gap-4 md:grid-cols-2">{guide.risks.map(([title, description]) => <article key={title} className="rounded-2xl bg-cyan-50 p-6"><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-700">{description}</p></article>)}</div></section>
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 to-cyan-950 p-7 text-white shadow-[0_22px_34px_-18px_rgba(2,8,23,0.95)] sm:p-10"><Heading eyebrow="Verified resources" inverted>Need help?</Heading><div className="grid gap-5 md:grid-cols-2"><div><h3 className="text-xl font-bold">SAMHSA National Helpline</h3><p className="mt-2 leading-7 text-slate-300">1-800-662-4357 · Free, confidential, 24/7 treatment referral and information.</p></div><div><h3 className="text-xl font-bold">Emergency help</h3><p className="mt-2 leading-7 text-slate-300">For slow or absent breathing, loss of consciousness, or suspected overdose, call 911 immediately and use naloxone if available.</p></div></div></section>
    </main><Footer />
  </div>;
}

function Heading({ eyebrow, children, inverted = false }: { eyebrow: string; children: React.ReactNode; inverted?: boolean }) { return <div className="mb-7"><p className={`mb-2 font-mono text-xs font-bold uppercase tracking-[0.22em] ${inverted ? 'text-cyan-300' : 'text-cyan-700'}`}>{eyebrow}</p><h2 className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${inverted ? 'text-white' : 'text-slate-950'}`}>{children}</h2></div>; }

export default OpioidEducationPage;
