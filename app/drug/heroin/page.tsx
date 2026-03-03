'use client';

import Link from 'next/link';

export default function HeroinPage() {
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
            <div className="text-7xl">💉</div>
            <h1 className="text-6xl font-bold text-teal-700">Heroin</h1>
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
        <div className="bg-amber-100 border-l-4 border-amber-700 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/49a0c74c0de0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-amber-100 border-l-4 border-amber-700 p-6 rounded-lg mb-8">
          <Link href="/street-names/heroin">
            <button className="w-full text-lg bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-lg transition">
              View Street Names
            </button>
          </Link>
        </div>
        <div className="bg-amber-100 border-4 border-amber-700 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">CRITICAL INFORMATION</h2>
          <p className="text-lg text-amber-900 font-bold mb-4">Heroin is an extremely addictive opioid that carries severe health risks including overdose and death.</p>
          <ul className="space-y-2 text-amber-900 ml-4">
            <li>• Sometimes mixed with fentanyl, increasing overdose risk</li>
            <li>• Can be injected, snorted, or smoked</li>
            <li>• Creates rapid physical and psychological dependence</li>
            <li>• Withdrawal is extremely uncomfortable but not typically fatal</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-amber-50 border-l-4 border-amber-700 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Short-Term Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-amber-700 font-bold">•</span>
                <span>Intense euphoria and rush</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-700 font-bold">•</span>
                <span>Drowsiness and sedation</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-700 font-bold">•</span>
                <span>Slowed breathing and heart rate</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-700 font-bold">•</span>
                <span>Clouded thinking and impaired cognition</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-700 font-bold">•</span>
                <span>Constricted pupils</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Risks & Dangers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Respiratory depression leading to overdose death</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Infectious diseases from injection (HIV, Hepatitis C)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Collapsed veins and infections at injection sites</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Rapid onset of addiction (often after first use)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe withdrawal symptoms</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs of Heroin Use</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Constricted (pinpoint) pupils</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Sudden drowsiness or nodding off</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Injection marks, bruises, or track marks</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Slurred speech and impaired coordination</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Sudden behavioral changes or secrecy</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Paraphernalia: spoons, lighters, straws, tourniquet</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">If Someone Overdoses</h2>
          <ol className="space-y-3 text-gray-700 ml-4">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold">1.</span>
              <span>Call 911 immediately</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold">2.</span>
              <span>Administer naloxone (Narcan) if available</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold">3.</span>
              <span>Place person in recovery position (on their side)</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold">4.</span>
              <span>Do not leave the person alone</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold">5.</span>
              <span>Ohio has a Good Samaritan law protecting those seeking help</span>
            </li>
          </ol>
        </div>

        <div className="text-center mt-12">
          <Link href="/education">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition mx-auto">
              ← Back to Education
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
