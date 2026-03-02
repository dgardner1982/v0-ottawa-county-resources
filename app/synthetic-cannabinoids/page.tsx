'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function SyntheticCannabinoidsPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [activeImpact, setActiveImpact] = useState('brain');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = (content: string) => {
    setModalContent(content);
    setShowModal(true);
  };

  const chemicalTypes = [
    { name: "JWH-018", info: "The original synthetic cannabinoid. Far more potent than THC with a high risk of seizures." },
    { name: "JWH-073", info: "Often found in 'Spice' mixtures; known for causing intense confusion and agitation." },
    { name: "UR-144", info: "Associated with acute kidney injury and cardiovascular complications." },
    { name: "XLR-11", info: "A fluorinated variant linked specifically to reports of kidney damage in users." },
    { name: "AKB48 (APINACA)", info: "Powerful indazole-based compound known for inducing severe paranoia." },
    { name: "STS-135", info: "Synthetic analog causing rapid heart rate and respiratory distress." },
    { name: "MDMB-CHMICA", info: "Highly potent; linked to numerous hospitalizations and fatal overdoses in Europe." },
    { name: "5F-PB-22", info: "Frequently sprayed on herbal materials; linked to severe nausea and tremors." },
    { name: "AB-FUBINACA", info: "Created for pharmaceutical research but diverted; linked to mass casualty incidents." },
    { name: "MAB-CHMINACA", info: "Known for causing extreme violent behavior and severe neurological impairment." }
  ];

  const impactData = {
    brain: {
      title: "Psychological Lockdown",
      desc: "Extreme panic attacks, intense paranoia, and vivid hallucinations that can lead to temporary psychosis.",
      risks: ["Seizures", "Detachment from Reality"]
    },
    heart: {
      title: "Cardiovascular Stress",
      desc: "Rapid, irregular heartbeats (tachycardia) and chest pain. Significant risk of myocardial infarction.",
      risks: ["Heart Attacks", "Hypertension"]
    },
    kidneys: {
      title: "Acute Renal Failure",
      desc: "Metabolic toxicity leads to rapid organ stress, severe dehydration, and potential kidney shutdown.",
      risks: ["Organ Damage", "Severe Vomiting"]
    }
  };

  const openNamesModal = () => {
    setModalContent('names');
    setShowModal(true);
  };

  const openTypesModal = () => {
    setModalContent('types');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-teal-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-8 text-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
              alt="Ottawa County Recovery Alliance"
              className="h-80 w-80 object-contain"
            />
            
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-teal-700">Education & Resources</h1>
              <p className="text-3xl text-gray-700 font-semibold">Substance Guides & Harm Reduction</p>
            </div>
            
            <div className="flex gap-6 flex-wrap justify-center pt-4">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Resources</button>
              </Link>
              <Link href="/education">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Education</button>
              </Link>
              <Link href="/support-groups">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Support Groups</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10" ref={contentRef}>
        {/* Back Button - Top */}
        <div className="mb-8">
          <Link href="/education">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
              ← Back to Education
            </button>
          </Link>
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-80vh overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-6 right-6 text-gray-400 hover:text-black">
                <span className="text-2xl">✕</span>
              </button>

              {modalContent === 'names' && (
                <>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">Street Name Variants</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[...streetNames.main, ...streetNames.variants].map((name, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg text-sm font-semibold text-slate-700 border border-slate-100">{name}</div>
                    ))}
                  </div>
                  <p className="mt-8 text-xs text-slate-400 italic">Names are constantly changing as manufacturers attempt to bypass drug identification protocols.</p>
                </>
              )}

              {modalContent === 'types' && (
                <>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">10 Common Synthetic Types</h2>
                  <div className="space-y-4">
                    {chemicalTypes.map((type, idx) => (
                      <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-slate-50">
                        <h4 className="font-bold text-amber-600 mb-1 text-lg">{type.name}</h4>
                        <p className="text-slate-600 text-sm">{type.info}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Section 1: Historical Context */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">01</div>
            <h2 className="text-3xl font-bold text-slate-800">Historical & Scientific Context</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-slate-900 mb-2">The Research Origins</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ironically, these compounds began in legitimate laboratories. In the 1980s and 90s, researchers like John W. Huffman developed them to study the cannabinoid system. They were never intended for human consumption but were later diverted by illicit labs for mass production.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-slate-900 mb-2">Why Are They Popular?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Accessibility and evasion drive their use. They are often marketed as "legal highs" and, until recently, did not show up on standard drug tests. This made them popular among individuals in professions with strict testing or those seeking a cheaper, more accessible alternative.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-red-500 shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-slate-900 mb-2">Why So Dangerous?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unlike natural THC (a partial agonist), synthetics are "Full Agonists." They bind to brain receptors with total saturation. Additionally, the lack of CBD (which naturally tempers THC's effects) means there is no biological "brake" to prevent toxic overstimulation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Potency Gap */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">02</div>
            <h2 className="text-3xl font-bold text-slate-800">The Potency Disparity</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">Natural THC</span>
                  <span className="text-sm text-slate-400">Baseline</span>
                </div>
                <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-amber-400" style={{width: '5%'}}></div></div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold uppercase tracking-widest text-red-600">Synthetic Compounds</span>
                  <span className="text-sm text-red-600">Up to 100x Stronger</span>
                </div>
                <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-amber-400 to-red-600" style={{width: '100%'}}></div></div>
              </div>
              <p className="text-sm text-slate-500 italic mt-6">
                *Full agonists: unlike natural cannabis, these chemicals activate brain receptors at 100% capacity.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-600">Engineered Uncertainty</h3>
              <p className="leading-relaxed text-slate-600">
                Manufacturers utilize "Chemical Evasion," shifting molecular structures to bypass laws. Click below to explore the variants and common chemical types.
              </p>
              <div className="flex gap-4">
                <button onClick={() => handleModalOpen('names')} className="flex-1 bg-white p-4 rounded-xl text-center border border-slate-200 hover:border-amber-500 hover:shadow-md transition">
                  <div className="text-2xl mb-2">🏷️</div>
                  <span className="text-xs uppercase font-bold text-slate-800">Street Names</span>
                </button>
                <button onClick={() => handleModalOpen('types')} className="flex-1 bg-white p-4 rounded-xl text-center border border-slate-200 hover:border-amber-500 hover:shadow-md transition">
                  <div className="text-2xl mb-2">🧪</div>
                  <span className="text-xs uppercase font-bold text-slate-800">Common Types</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Clinical Impact */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">03</div>
            <h2 className="text-3xl font-bold text-slate-800">Clinical Impact Map</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-slate-50 rounded-3xl p-8 shadow-md">
              <div className="flex justify-center">
                <svg viewBox="0 0 200 400" className="w-32 h-64 text-slate-300">
                  <path d="M100,20 C80,20 70,40 70,60 C70,80 80,95 100,95 C120,95 130,80 130,60 C130,40 120,20 100,20 Z" fill="currentColor"/>
                  <path d="M70,100 L130,100 L140,220 L60,220 Z" fill="currentColor"/>
                  <path d="M60,225 L85,380 L95,380 L95,225 Z" fill="currentColor"/>
                  <path d="M105,225 L105,380 L115,380 L140,225 Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="flex gap-2 mt-8 justify-center flex-wrap">
                <button onClick={() => setActiveImpact('brain')} className="text-xs font-bold px-3 py-2 rounded-full border" style={{backgroundColor: activeImpact === 'brain' ? '#f59e0b' : 'white', borderColor: activeImpact === 'brain' ? '#f59e0b' : '#e2e8f0', color: activeImpact === 'brain' ? 'white' : 'black'}}>Brain</button>
                <button onClick={() => setActiveImpact('heart')} className="text-xs font-bold px-3 py-2 rounded-full border" style={{backgroundColor: activeImpact === 'heart' ? '#f59e0b' : 'white', borderColor: activeImpact === 'heart' ? '#f59e0b' : '#e2e8f0', color: activeImpact === 'heart' ? 'white' : 'black'}}>Heart</button>
                <button onClick={() => setActiveImpact('kidneys')} className="text-xs font-bold px-3 py-2 rounded-full border" style={{backgroundColor: activeImpact === 'kidneys' ? '#f59e0b' : 'white', borderColor: activeImpact === 'kidneys' ? '#f59e0b' : '#e2e8f0', color: activeImpact === 'kidneys' ? 'white' : 'black'}}>Systemic</button>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-md">
              <h3 className="text-4xl font-bold mb-4 text-slate-900 uppercase tracking-tighter">{impactData[activeImpact as keyof typeof impactData].title}</h3>
              <p className="text-xl text-slate-500 leading-relaxed mb-6">{impactData[activeImpact as keyof typeof impactData].desc}</p>
              <div className="grid grid-cols-2 gap-4">
                {impactData[activeImpact as keyof typeof impactData].risks.map((risk, idx) => (
                  <div key={idx} className="p-4 border-l-4 border-red-500 bg-slate-50">
                    <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Critical Risk</span>
                    {risk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Emergency Protocol */}
        <section className="mb-20">
          <div className="bg-red-50 p-10 rounded-3xl border border-red-100 shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2 text-red-600">EMERGENCY PROTOCOL</h2>
                <p className="text-slate-600">Toxicity levels can spike instantly. Follow this sequence.</p>
              </div>
              <div className="bg-red-600 text-white px-10 py-6 rounded-2xl text-center shadow-lg">
                <span className="block text-3xl font-bold">9-1-1</span>
                <span className="text-xs uppercase tracking-widest font-bold">Call Immediately</span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="text-amber-500 font-bold text-lg mb-2 block">01</span>
                <h4 className="font-bold mb-1 text-slate-800">Assess</h4>
                <p className="text-xs text-slate-500">Check for unresponsiveness or extreme agitation.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="text-amber-500 font-bold text-lg mb-2 block">02</span>
                <h4 className="font-bold mb-1 text-slate-800">Airway</h4>
                <p className="text-xs text-slate-500">Turn user on their side if vomiting occurs.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="text-amber-500 font-bold text-lg mb-2 block">03</span>
                <h4 className="font-bold mb-1 text-slate-800">Safe Space</h4>
                <p className="text-xs text-slate-500">Clear area of hazards; do not physically restrain.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="text-amber-500 font-bold text-lg mb-2 block">04</span>
                <h4 className="font-bold mb-1 text-slate-800">Identify</h4>
                <p className="text-xs text-slate-500">Provide any drug samples or wrappers to EMS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button - Bottom */}
        <div className="mt-12 text-center">
          <Link href="/education">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition mx-auto">
              ← Back to Education
            </button>
          </Link>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto text-center py-20 border-t border-slate-200 mt-20">
        <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest font-bold">Health Education & Safety</p>
        <p className="text-xs text-slate-400">These chemicals are dangerous, unpredictable laboratory substances.</p>
      </footer>
    </>
  );
}
