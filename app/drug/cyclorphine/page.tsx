'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function CyclorphinePage() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-teal-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="text-7xl">💊</div>
            <h1 className="text-6xl font-bold text-teal-700">Cyclorphine</h1>
            <p className="text-2xl text-gray-600">Understanding the Risks & Effects</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/education">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
              ← Back to Education
            </button>
          </Link>
        </div>

        <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Potency Level: EXTREME</h3>
          <p className="text-lg text-gray-700 mb-3">
            Cyclorphine is an extremely potent synthetic opioid, significantly stronger than fentanyl. It poses severe overdose and death risk, particularly in the illicit drug supply where doses are uncontrolled.
          </p>
          <p className="text-lg text-gray-700 font-bold">
            Cyclorphine is approximately 2,000-5,000 times more potent than morphine, making it one of the most dangerous opioids in existence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Short-Term Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Intense euphoria and pain relief</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Severe drowsiness and sedation</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Pinpoint pupils</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Nausea and vomiting</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Respiratory depression (slowed breathing)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Effects begin within minutes</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Risks</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>EXTREMELY HIGH overdose and death risk - even tiny amounts can be fatal</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe respiratory depression and respiratory arrest</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Hypoxia (oxygen deprivation) leading to brain damage or death</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Rapid onset physical dependence</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe withdrawal symptoms upon cessation</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Fatal when combined with alcohol, benzodiazepines, or other CNS depressants</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Routes of Administration</h2>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li className="flex gap-3 items-start">
              <span className="font-bold">Injection:</span>
              <span>Effects in seconds to minutes. HIGHEST OVERDOSE RISK. Often found in street drug supply.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold">Inhalation/Smoking:</span>
              <span>Effects rapid. Difficult to control dose, extremely dangerous.</span>
            </li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognizing Overdose</h2>
          <ul className="space-y-2 text-gray-700 ml-4 mb-6">
            <li>• Unconsciousness or unresponsiveness</li>
            <li>• Extremely slow or stopped breathing</li>
            <li>• Gasping for breath or choking sounds</li>
            <li>• Blue lips, fingernails, or skin</li>
            <li>• Pinpoint pupils</li>
            <li>• Cold, clammy skin</li>
          </ul>
          <p className="font-bold text-lg text-red-700">Call 9-1-1 immediately if overdose is suspected. Administer naloxone (Narcan) if available. Multiple doses may be needed due to cyclorphine's extreme potency.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-gray-700 mb-4">Recovery is possible. Reach out to these resources:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• Text HOME to 741741 for Crisis Text Line support</li>
            <li>• Narcotics Anonymous: <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">na.org</a></li>
            <li>• SAMHSA National Helpline: 1-800-662-4357 (free, confidential, 24/7)</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link href="/education">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition mx-auto">
              ← Back to Education
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
