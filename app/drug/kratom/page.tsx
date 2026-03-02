'use client';

import Link from 'next/link';

export default function KratomPage() {
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
            <div className="text-7xl">🍃</div>
            <h1 className="text-6xl font-bold text-teal-700">Kratom</h1>
            <p className="text-2xl text-gray-600">Understanding This Botanical Substance</p>
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/01aeefcc3ac1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-green-100 border-4 border-green-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-4">WHAT IS KRATOM?</h2>
          <p className="text-lg text-green-900 mb-4">Kratom is a tropical plant (Mitragyna speciosa) from Southeast Asia. The leaves contain alkaloids that produce opioid-like and stimulant effects. In the U.S., kratom is legal in most states but not FDA-approved.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>At lower doses: stimulant effects (energy, focus)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>At higher doses: sedative effects (relaxation, pain relief)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Mild euphoria</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Duration: 2-5 hours</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Taken as powder, capsules, or tea</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Concerns</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Addiction potential - similar to opioids</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Withdrawal symptoms when stopping</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>No quality control - contents vary significantly</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Often contaminated with other substances</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Liver toxicity reported with heavy use</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kratom Strains</h2>
          <p className="text-gray-700 mb-4">Different kratom strains are marketed with different effects (Red, Green, White, Yellow). However:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Scientific evidence for differences is limited</li>
            <li>• Marketing is largely unregulated</li>
            <li>• Actual alkaloid content varies wildly</li>
            <li>• Same product can vary between batches</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kratom Withdrawal</h2>
          <p className="text-gray-700 mb-4">Users who stop after regular use may experience:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Muscle aches and pain</li>
            <li>• Anxiety and irritability</li>
            <li>• Sweating</li>
            <li>• Sleep disturbance</li>
            <li>• Duration: Usually 3-7 days but can be longer</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kratom + Other Drugs = Danger</h2>
          <p className="text-gray-700 mb-4 font-bold">Kratom mixed with other substances increases overdose risk:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Kratom + Opioids = severe respiratory depression</li>
            <li>• Kratom + Benzodiazepines = overdose risk</li>
            <li>• Kratom + Alcohol = organ damage</li>
            <li>• Kratom + Stimulants = cardiac problems</li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kratom Overdose</h2>
          <ul className="space-y-2 text-gray-700 ml-4 mb-6">
            <li>• Seizures</li>
            <li>• Loss of consciousness</li>
            <li>• Severe liver injury</li>
            <li>• Respiratory depression (especially with other drugs)</li>
          </ul>
          <p className="text-red-700 font-bold">Call 9-1-1 immediately if overdose is suspected.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-gray-700 mb-4">If you're struggling with kratom use:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• SAMHSA National Helpline: <a href="tel:18009627332" className="text-green-700 font-bold">1-800-662-4357</a></li>
            <li>• Narcotics Anonymous: <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">na.org</a></li>
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
