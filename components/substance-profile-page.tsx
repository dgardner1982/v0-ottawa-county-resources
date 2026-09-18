'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

type Profile = {
  name: string;
  subtitle: string;
  accent: string;
  soft: string;
  mechanismTitle: string;
  mechanism: string;
  highlightTitle: string;
  highlight: string;
  signs: string[];
  shortTerm: string[];
  longTerm: string[];
  riskTitle: string;
  risk: string;
  emergency: string;
  emergencyNote: string;
};

export function SubstanceProfilePage({ profile }: { profile: Profile }) {
  const tabs = [
    ['Signs of Use', profile.signs],
    ['Short Term', profile.shortTerm],
    ['Long Term', profile.longTerm],
  ] as const;

  return (
    <>
      <div className="bg-red-600 px-4 py-3 text-center font-bold text-white">CALL <a href="tel:211" className="underline">2-1-1</a> FOR LOCAL RESOURCES · LIFE-THREATENING EMERGENCIES: <a href="tel:911" className="underline">9-1-1</a></div>
      <header className="border-b-2 border-teal-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center">
          <p className={`text-sm font-bold uppercase tracking-[0.3em] ${profile.accent}`}>Substance education guide</p>
          <h1 className={`text-6xl font-bold ${profile.accent}`}>{profile.name}</h1>
          <p className="max-w-3xl text-2xl text-gray-600">{profile.subtitle}</p>
          <Link href="/education" className="rounded-lg bg-gray-700 px-6 py-2 font-bold text-white transition hover:bg-gray-800">Back to Education</Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="mb-10 grid gap-8 md:grid-cols-2">
          <div className={`rounded-lg border-l-8 ${profile.accent.replace('text-', 'border-')} bg-white p-8 shadow-sm`}>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{profile.mechanismTitle}</h2>
            <p className="leading-relaxed text-gray-700">{profile.mechanism}</p>
          </div>
          <div className={`rounded-lg ${profile.accent.replace('text-', 'bg-')} p-8 text-center text-white`}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Key point</h2>
            <p className="text-3xl font-bold">{profile.highlightTitle}</p>
            <p className="mt-3 leading-relaxed">{profile.highlight}</p>
          </div>
        </section>
        <section className="mb-10 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Recognize the effects</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {tabs.map(([title, items]) => (
              <div key={title}>
                <h3 className={`mb-4 text-xl font-bold ${profile.accent}`}>{title}</h3>
                <ul className="space-y-3 text-gray-700">{items.map((item) => <li key={item} className={`border-l-4 ${profile.accent.replace('text-', 'border-')} ${profile.soft} p-3`}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-8 md:grid-cols-2">
          <div className={`rounded-lg border-t-8 ${profile.accent.replace('text-', 'border-')} ${profile.soft} p-8`}>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{profile.riskTitle}</h2>
            <p className="leading-relaxed text-gray-700">{profile.risk}</p>
          </div>
          <div className="rounded-lg border-t-8 border-red-600 bg-red-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-red-800">Identifying an emergency</h2>
            <p className="mb-4 text-gray-700">{profile.emergency}</p>
            <p className="rounded bg-red-100 p-3 text-sm font-bold uppercase text-red-900">{profile.emergencyNote}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export type { Profile };

export const profiles = {
  alcohol: { name: 'Alcohol', subtitle: 'CNS Depressant & GABA-A Positive Allosteric Modulator', accent: 'text-amber-700', soft: 'bg-amber-50', mechanismTitle: 'Origins & Action', mechanism: 'Ethanol enhances GABA-mediated inhibition while suppressing excitatory NMDA glutamate receptors, producing central nervous system depression, motor impairment, and cognitive slowing.', highlightTitle: 'Alcoholic blackout', highlight: 'Anterograde amnesia can occur when rapid blood alcohol elevation blocks hippocampal NMDA receptors.', signs: ['Unsteady gait or loss of balance', 'Slurred speech and delayed responses', 'Involuntary eye movements', 'Facial flushing and bloodshot eyes', 'Lowered inhibitions', 'Loss of fine motor skills'], shortTerm: ['Mild euphoria and disinhibition', 'Impaired motor control', 'Nausea and gastric irritation', 'Heat loss from vasodilation', 'Cognitive slowing', 'Respiratory depression at high BAC'], longTerm: ['Liver cirrhosis and failure', 'Wernicke-Korsakoff syndrome', 'Cardiomyopathy and arrhythmias', 'Increased gastrointestinal cancer risk', 'Severe physical dependence', 'Cerebral cortical atrophy'], riskTitle: 'Hepatic & neurotoxicity', risk: 'Chronic heavy ethanol consumption can cause fatty liver, hepatitis, and cirrhosis. Thiamine deficiency can cause Wernicke-Korsakoff syndrome and permanent memory loss.', emergency: 'Unconsciousness, breathing under 8 breaths per minute, clammy skin, or continuous vomiting while stuporous require immediate help.', emergencyNote: 'Risk: Delirium tremens and fatal respiratory depression' } satisfies Profile,
  'crack-cocaine': { name: 'Crack Cocaine', subtitle: 'CNS Stimulant & Freebase Monoamine Reuptake Inhibitor', accent: 'text-red-700', soft: 'bg-red-50', mechanismTitle: 'Origins & Inhalation', mechanism: 'Crack is the freebase form of cocaine hydrochloride. Inhalation produces near-instant pulmonary absorption and a rapid flood of dopamine that reinforces repeated use.', highlightTitle: 'The rush & crash', highlight: 'The intense euphoria lasts about five minutes and is followed by a steep crash that can drive compulsive redosing.', signs: ['Dilated pupils', 'Charred fingers or lips', 'Rapid, hyper-vigilant speech', 'Sweating and hypertension', 'Intense paranoia', 'Immediate depressive crash'], shortTerm: ['Instant euphoric energy rush', 'Severe vasoconstriction', 'Heart rate and blood pressure spike', 'Suppressed fatigue and hunger', 'Anxiety and paranoid psychosis', 'Dysphoria and craving'], longTerm: ['Crack lung and alveolar hemorrhage', 'Coronary artery disease', 'Heart attack or stroke', 'Severe dental decay', 'Dopamine receptor down-regulation', 'Chronic paranoid psychosis'], riskTitle: 'Crack lung & cardiotoxicity', risk: 'Inhaled thermal products can damage alveolar membranes, causing acute lung injury and hemorrhage. Severe coronary vasoconstriction can cause a sudden heart attack.', emergency: 'Crushing chest pain, extreme hyperthermia, violent paranoia, or seizures require emergency care.', emergencyNote: 'Hazard: Cocaethylene formation when combined with alcohol' } satisfies Profile,
  mdma: { name: 'MDMA', subtitle: 'Empathogen, Entactogen & Monoamine Transporter Substrate', accent: 'text-pink-700', soft: 'bg-pink-50', mechanismTitle: 'Origins & Mechanism', mechanism: 'MDMA reverses monoamine transporters, especially SERT, increasing serotonin, dopamine, and oxytocin and producing empathy, sociability, and sensory enhancement.', highlightTitle: 'Tuesday blues', highlight: 'Temporary depletion of serotonin stores can contribute to low mood 48–72 hours after use.', signs: ['Severe pupil dilation', 'Jaw clenching and lip biting', 'Involuntary eye movements', 'Profuse sweating and elevated skin temperature', 'Unusual tactile affection and empathy', 'Heightened light and sound sensitivity'], shortTerm: ['Emotional openness and warmth', 'Heightened sensory perception', 'Elevated heart rate and blood pressure', 'Urinary retention', 'Dry mouth and appetite loss', 'Fatigue, depression, and insomnia afterward'], longTerm: ['Serotonergic axon terminal damage', 'Down-regulation of serotonin receptors', 'Verbal working-memory deficits', 'Mood and anxiety disorders', 'Sleep disruption'], riskTitle: 'Hyperthermia & hyponatremia', risk: 'MDMA can disrupt thermoregulation and water balance. Dancing, heat, and excessive water intake increase the risk of heatstroke or hyponatremia.', emergency: 'Temperature above 104°F, confusion, muscle rigidity, severe headache, vomiting, or altered consciousness require emergency care.', emergencyNote: 'Fatal risk: Serotonin syndrome with SSRIs or MAOIs' } satisfies Profile,
  psilocybin: { name: 'Psilocybin', subtitle: 'Tryptamine Psychedelic & 5-HT2A Agonist', accent: 'text-emerald-700', soft: 'bg-emerald-50', mechanismTitle: 'Origins & Action', mechanism: 'Psilocybin is converted into psilocin, which acts on 5-HT2A receptors and temporarily reduces rigid self-referential processing, changing perception and perspective.', highlightTitle: 'DMN suppression', highlight: 'Temporary changes in default-mode network activity can produce altered self-perception and ego dissolution.', signs: ['Dilated pupils', 'Yawning, watery eyes, and runny nose', 'Uncontrollable laughter or crying', 'Visual surfaces that appear to move', 'Motor ataxia and disorientation', 'Altered time perception'], shortTerm: ['Geometric visual imagery', 'Synesthesia', 'Nausea during onset', 'Emotional catharsis', 'Ego-boundary dissolution', 'Acute anxiety or panic'], longTerm: ['Increased openness', 'Possible reduction in depressive symptoms in clinical settings', 'Rare persistent visual disturbances', 'Possible psychosis precipitation in vulnerable people'], riskTitle: 'Foraging hazards', risk: 'Confusing Psilocybe species with deadly amatoxin-containing mushrooms can cause fatal liver failure.', emergency: 'Acute panic, disorientation, terror, or dangerous confusion call for a quiet environment, calm communication, and emergency help when safety is at risk.', emergencyNote: 'Danger: Severe seizures when combined with lithium' } satisfies Profile,
  lsd: { name: 'LSD', subtitle: 'Ergoline Psychedelic & 5-HT2A Agonist', accent: 'text-violet-700', soft: 'bg-violet-50', mechanismTitle: 'Origins & Conformation', mechanism: 'LSD is an extremely potent ergoline derivative active in micrograms. Its interaction with 5-HT2A receptors contributes to an unusually long duration of action.', highlightTitle: 'Receptor trapping', highlight: 'A molecular lid over the binding site helps LSD continue stimulating serotonin receptors for many hours.', signs: ['Pronounced pupil dilation', 'Goosebumps and sweating', 'Muscle tremors and jaw tightness', 'Extended wakefulness', 'Fixation on geometric textures', 'Rapidly shifting emotions'], shortTerm: ['Geometric visuals and tracers', 'Distortion of time', 'Synesthesia', 'Mild heart-rate and temperature elevation', 'Deep conceptual thinking', 'Acute panic or a bad trip'], longTerm: ['Changes in values or worldview', 'Hallucinogen persisting perception disorder', 'Possible psychosis precipitation', 'Rapid tolerance that resets over several days'], riskTitle: 'Adulterants & NBOMe warning', risk: 'Pure LSD is generally odorless and tasteless. Bitter tabs may indicate dangerous synthetic substitutes such as NBOMe compounds.', emergency: 'Severe disorientation, combativeness, or panic require reducing sensory stimulation and seeking emergency help if safety is threatened.', emergencyNote: 'Fatal risk: Grand mal seizures when combined with lithium' } satisfies Profile,
  suboxone: { name: 'Suboxone', subtitle: 'Buprenorphine (Partial Opioid Agonist) + Naloxone (Antagonist)', accent: 'text-cyan-700', soft: 'bg-cyan-50', mechanismTitle: 'Origins & Mechanism', mechanism: 'Suboxone combines buprenorphine, a high-affinity partial mu-opioid agonist, with naloxone to reduce opioid cravings and discourage injection misuse.', highlightTitle: 'The ceiling effect', highlight: 'Buprenorphine activation plateaus, which lowers—but does not eliminate—the risk of severe respiratory depression when used as directed.', signs: ['Constricted pupils', 'Mild sedation in people without tolerance', 'Improved functioning without withdrawal', 'Dry mouth, sweating, and constipation', 'Reduced opioid cravings'], shortTerm: ['Suppression of withdrawal and cravings', 'Pain relief', 'Mild euphoria in non-tolerant users', 'Dizziness, nausea, and lightheadedness', 'Mild respiratory depression', 'Reduced gastrointestinal motility'], longTerm: ['Physical dependence and prolonged withdrawal', 'Stabilization and harm reduction', 'Dental decay from sublingual exposure', 'Mild hormonal suppression'], riskTitle: 'Precipitated withdrawal hazard', risk: 'If taken while full opioids such as fentanyl or heroin are active, buprenorphine can displace them from receptors and trigger sudden severe withdrawal.', emergency: 'Coma, pinpoint pupils, or shallow breathing—especially when mixed with sedatives—require 911 and naloxone.', emergencyNote: 'Note: Multiple naloxone doses may be needed' } satisfies Profile,
};
