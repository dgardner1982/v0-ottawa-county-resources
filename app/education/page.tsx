'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState('guides');
  
  const guides = [
    { name: "Fentanyl", icon: "⚠️", link: "https://gemini.google.com/share/cd77a5e1d45a" },
    { name: "Xylazine (Tranq)", icon: "💊", link: "https://gemini.google.com/share/5a6094e7467b" },
    { name: "Stimulants", icon: "⚡", link: "https://gemini.google.com/share/5fced2f07209" },
    { name: "Synthetic Cannabinoids", icon: "🌿", link: "https://gemini.google.com/share/9bb8e42a5cb7" },
    { name: "Emerging Drugs", icon: "🔬", link: "https://gemini.google.com/share/2a26f1e97b40" },
    { name: "Drug Interactions", icon: "🚫", link: "https://gemini.google.com/share/ee3fd2cc103a" },
  ];

  const drugInfo = {
    stimulants: {
      title: "Stimulants: Methamphetamine & Cocaine",
      effects: ["Increased heart rate", "Elevated blood pressure", "Rapid breathing", "Dilated pupils", "Euphoria followed by crash"],
      risks: ["59% of overdose deaths involve stimulants (2021-2024)", "Cardiac arrest and stroke", "Severe anxiety and paranoia", "Nasal damage (if snorted)", "Rapid addiction potential"]
    },
    fentanyl: {
      title: "Fentanyl Crisis",
      effects: ["Extreme pain relief", "Drowsiness", "Shallow breathing", "Low blood pressure", "Dangerous respiratory depression"],
      risks: ["70% of overdose deaths involved fentanyl (2023-2024)", "50-100x more potent than morphine", "High overdose risk even in small doses", "Often mixed with other substances", "Naloxone not always effective when mixed"]
    },
    xylazine: {
      title: "Xylazine (Tranq): The Growing Threat",
      effects: ["Sedation and drowsiness", "Low blood pressure", "Slow heart rate", "Reduced pain sensation", "Respiratory depression"],
      risks: ["Frequently mixed with fentanyl", "Creates refractory overdoses", "Naloxone often cannot fully reverse", "Skin wounds and infections", "Severe withdrawal symptoms"]
    },
    sevenOH: {
      title: "7-OH-Mitragynine & Benzodiazepines (7-OH)",
      effects: ["Sedation and relaxation", "Euphoria", "Pain relief", "Muscle relaxation", "Impaired coordination"],
      risks: ["Emerging counterfeit in pressed pills", "Often mixed with opioids unknowingly", "High addiction potential", "Overdose when combined with alcohol or opioids", "Withdrawal symptoms can be severe"]
    },
    duster: {
      title: "Inhalants (Duster, Air Freshener, Poppers)",
      effects: ["Euphoria and intoxication", "Dizziness and disorientation", "Hallucinations", "Rapid heart rate", "Lowered inhibitions"],
      risks: ["Sudden death syndrome (sudden cardiac arrest)", "Permanent brain damage with repeated use", "Organ damage (liver, kidneys)", "Asphyxiation risk", "Overdose occurs quickly and unpredictably"]
    },
    nitrous: {
      title: "Nitrous Oxide (N2O, Whippits, Nos)",
      effects: ["Brief euphoria and dissociation", "Altered perception", "Dizziness and lightheadedness", "Rapid onset (seconds)", "Effects wear off quickly"],
      risks: ["Vitamin B12 depletion leading to nerve damage", "Spinal cord damage with frequent use", "Loss of coordination and balance", "Hypoxia (oxygen deprivation)", "Risk of falls and injuries"]
    }
  };

  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-teal-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
                alt="Ottawa County Recovery Alliance"
                className="h-full w-full object-contain"
                style={{ maxHeight: '288px', maxWidth: '288px' }}
              />
              <div>
                <h1 className="text-4xl font-bold text-teal-700">Education & Resources</h1>
                <p className="text-gray-600">Substance Guides & Harm Reduction</p>
              </div>
            </div>
            <Link href="/">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2 rounded transition">Directory</button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-3">Knowledge Saves Lives</h2>
          <p className="text-lg">Learn about emerging substances, recognize dangers, and discover paths to recovery. This information is for harm reduction and education based on current CDC and public health data.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('guides')}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'guides'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            External Guides
          </button>
          <button
            onClick={() => setActiveTab('infograph')}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'infograph'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Drug Information & Effects
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'support'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Resources & Support
          </button>
        </div>

        {/* External Guides Tab */}
        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {guides.map((guide, idx) => (
              <a
                key={idx}
                href={guide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 border-b-4 border-teal-500 transition transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{guide.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.name}</h3>
                <p className="text-teal-600 font-semibold">Read Guide →</p>
              </a>
            ))}
          </div>
        )}

        {/* Interactive Infograph Tab */}
        {activeTab === 'infograph' && (
          <div className="space-y-8 mb-12">
            {/* Stimulants Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-8 border-orange-500">
              <div className="bg-orange-100 p-6 border-b-2 border-orange-300">
                <h3 className="text-3xl font-bold text-gray-900">⚡ {drugInfo.stimulants.title}</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Short-Term Effects</h4>
                    <ul className="space-y-3">
                      {drugInfo.stimulants.effects.map((effect, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-orange-500 font-bold text-lg">●</span>
                          <span className="text-gray-700">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-700 mb-4">Health Risks</h4>
                    <ul className="space-y-3">
                      {drugInfo.stimulants.risks.map((risk, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-red-600 font-bold text-lg">⚠️</span>
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fentanyl Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-8 border-red-500">
              <div className="bg-red-100 p-6 border-b-2 border-red-300">
                <h3 className="text-3xl font-bold text-gray-900">⚠️ {drugInfo.fentanyl.title}</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Effects</h4>
                    <ul className="space-y-3">
                      {drugInfo.fentanyl.effects.map((effect, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-red-500 font-bold text-lg">●</span>
                          <span className="text-gray-700">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-700 mb-4">Critical Dangers</h4>
                    <ul className="space-y-3">
                      {drugInfo.fentanyl.risks.map((risk, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-red-600 font-bold text-lg">⚠️</span>
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Xylazine Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-8 border-purple-500">
              <div className="bg-purple-100 p-6 border-b-2 border-purple-300">
                <h3 className="text-3xl font-bold text-gray-900">💊 {drugInfo.xylazine.title}</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Effects</h4>
                    <ul className="space-y-3">
                      {drugInfo.xylazine.effects.map((effect, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-purple-500 font-bold text-lg">●</span>
                          <span className="text-gray-700">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-700 mb-4">Emerging Threat</h4>
                    <ul className="space-y-3">
                      {drugInfo.xylazine.risks.map((risk, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-red-600 font-bold text-lg">⚠️</span>
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 7-OH Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-8 border-indigo-500">
              <div className="bg-indigo-100 p-6 border-b-2 border-indigo-300">
                <h3 className="text-3xl font-bold text-gray-900">🔬 {drugInfo.sevenOH.title}</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Effects</h4>
                    <ul className="space-y-3">
                      {drugInfo.sevenOH.effects.map((effect, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-indigo-500 font-bold text-lg">●</span>
                          <span className="text-gray-700">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-700 mb-4">Critical Dangers</h4>
                    <ul className="space-y-3">
                      {drugInfo.sevenOH.risks.map((risk, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-red-600 font-bold text-lg">⚠️</span>
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Duster Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-8 border-pink-500">
              <div className="bg-pink-100 p-6 border-b-2 border-pink-300">
                <h3 className="text-3xl font-bold text-gray-900">💨 {drugInfo.duster.title}</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Effects</h4>
                    <ul className="space-y-3">
                      {drugInfo.duster.effects.map((effect, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-pink-500 font-bold text-lg">●</span>
                          <span className="text-gray-700">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-700 mb-4">Deadly Dangers</h4>
                    <ul className="space-y-3">
                      {drugInfo.duster.risks.map((risk, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-red-600 font-bold text-lg">⚠️</span>
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Nitrous Oxide Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-8 border-cyan-500">
              <div className="bg-cyan-100 p-6 border-b-2 border-cyan-300">
                <h3 className="text-3xl font-bold text-gray-900">😶 {drugInfo.nitrous.title}</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Effects</h4>
                    <ul className="space-y-3">
                      {drugInfo.nitrous.effects.map((effect, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-cyan-500 font-bold text-lg">●</span>
                          <span className="text-gray-700">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-700 mb-4">Long-Term Risks</h4>
                    <ul className="space-y-3">
                      {drugInfo.nitrous.risks.map((risk, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-red-600 font-bold text-lg">⚠️</span>
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources & Support Tab */}
        {activeTab === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Overdose Prevention</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Recognize signs: unresponsiveness, blue lips, slow breathing</li>
                <li>✓ Call 9-1-1 immediately - Good Samaritan protection applies</li>
                <li>✓ Use Narcan if available - it reverses opioid overdoses</li>
                <li>✓ Place person in recovery position</li>
                <li>✓ Stay until emergency services arrive</li>
              </ul>
            </div>

            <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Harm Reduction</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Never use alone - have someone with you</li>
                <li>✓ Start with small test dose if using new supplies</li>
                <li>✓ Use sterile equipment every time</li>
                <li>✓ Keep emergency contacts accessible</li>
                <li>✓ Seek professional help - treatment works</li>
              </ul>
            </div>

            <div className="bg-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Medication-Assisted Treatment (MAT)</li>
                <li>✓ Support groups for community and accountability</li>
                <li>✓ Residential treatment programs</li>
                <li>✓ Outpatient services</li>
                <li>✓ Mental health support</li>
              </ul>
            </div>

            <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support for Loved Ones</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Set healthy boundaries with compassion</li>
                <li>✓ Learn about addiction as a medical condition</li>
                <li>✓ Encourage professional help</li>
                <li>✓ Take care of your own mental health</li>
                <li>✓ Join support groups (Al-Anon, Nar-Anon)</li>
              </ul>
            </div>
          </div>
        )}

        <div className="bg-teal-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Help?</h3>
          <p className="mb-6 text-lg">Recovery is possible. Find resources and support in Ottawa County.</p>
          <Link href="/">
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Browse Recovery Resources</button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">Ottawa County Recovery Alliance</p>
          <p className="text-gray-300 text-sm">Crisis Support: 2-1-1 for Resources | 988 for Suicide Crisis | 9-1-1 for Emergencies</p>
          <p className="text-gray-400 text-xs mt-4">Information based on CDC data and current public health research (2026)</p>
        </div>
      </footer>
    </>
  );
}
