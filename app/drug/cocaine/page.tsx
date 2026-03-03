'use client';

import Link from 'next/link';

export default function CocainePage() {
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
            <div className="text-7xl">❄️</div>
            <h1 className="text-6xl font-bold text-teal-700">Cocaine</h1>
            <p className="text-2xl text-gray-600">Understanding the Risks & Effects</p>
          <div className="space-y-2">
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
            <Link href="/street-names/cocaine">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition ml-0 md:ml-2">
                🏷️ Street Names
              </button>
            </Link>
          </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information about Cocaine, click{' '}
            <a 
              href="https://gemini.google.com/share/02618a942962" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Short-Term Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Extreme euphoria and confidence</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Rapid heart rate and elevated blood pressure</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Increased body temperature and sweating</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Dilated pupils and hyperactivity</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Decreased appetite and sleep</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Effects last 5-30 minutes depending on route</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Risks</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Cocaine is involved in 59% of overdose deaths involving stimulants</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Heart attack and stroke (even in first-time users)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Seizures and respiratory failure</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe anxiety, paranoia, and psychological dependence</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Nasal damage (if snorted), lung damage (if smoked)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Rapid addiction potential - highly addictive substance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Routes of Administration</h2>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li className="flex gap-3 items-start">
              <span className="font-bold">Snorting:</span>
              <span>Effects in 1-3 minutes, lasts 15-30 minutes. Can damage nasal tissue.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold">Smoking (crack):</span>
              <span>Effects in seconds, lasts 5-10 minutes. Highly addictive form.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold">Injection:</span>
              <span>Effects in 15-30 seconds, lasts 5-10 minutes. Highest overdose risk.</span>
            </li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognizing Overdose</h2>
          <ul className="space-y-2 text-gray-700 ml-4 mb-6">
            <li>• Chest pain or pressure</li>
            <li>• Difficulty breathing</li>
            <li>• Loss of consciousness</li>
            <li>• Extreme hypertension or hypotension</li>
            <li>• Uncontrolled seizures</li>
            <li>• Hyperthermia (dangerously high body temperature)</li>
          </ul>
          <p className="font-bold text-lg text-red-700">Call 9-1-1 immediately if overdose is suspected. Naloxone (Narcan) does not reverse cocaine overdose.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-gray-700 mb-4">Recovery is possible. Reach out to these resources:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• Text HOME to 741741 for Crisis Text Line support</li>
            <li>• Narcotics Anonymous: <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">na.org</a></li>
            <li>• Cocaine Anonymous: <a href="https://www.ca.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">ca.org</a></li>
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

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">Ottawa County Recovery Alliance</p>
          <p className="text-gray-300 text-sm">Crisis Support: 2-1-1 for Resources | 988 for Suicide Crisis | 9-1-1 for Emergencies</p>
        </div>
      </footer>
    </>
  );
}
