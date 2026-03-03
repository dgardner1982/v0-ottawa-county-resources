'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function XylazinePage() {
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
            <h1 className="text-6xl font-bold text-teal-700">Xylazine (Tranq)</h1>
            <p className="text-2xl text-gray-600">The Emerging Overdose Threat</p>
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/abc836076155" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-purple-100 border-4 border-purple-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">EMERGING CRISIS</h2>
          <p className="text-lg text-purple-900 font-bold mb-4">Xylazine is rapidly becoming mixed into opioid supplies, creating a new overdose emergency. It's called "Tranq" or "Tranq Dope" on the street.</p>
          <ul className="space-y-2 text-purple-900 ml-4">
            <li>• Xylazine is a veterinary sedative NOT approved for human use</li>
            <li>• It's being mixed into heroin, fentanyl, and cocaine</li>
            <li>• Naloxone does NOT reverse xylazine overdose</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Profound sedation and drowsiness</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Extreme lowering of blood pressure and heart rate</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Reduced pain sensation</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>Respiratory depression</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 font-bold">•</span>
                <span>"Nods" (drooping down but not losing consciousness)</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Critical Dangers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Creates "refractory overdose" when mixed with fentanyl</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Naloxone cannot fully reverse xylazine overdose</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe skin wounds and infections at injection sites</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Extreme withdrawal symptoms when stopping use</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Long withdrawal period (weeks to months)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Xylazine Withdrawal</h2>
          <p className="text-gray-700 mb-4">Unlike typical opioid withdrawal, xylazine withdrawal includes:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Severe anxiety and paranoia</li>
            <li>• Intense muscle aches and pain</li>
            <li>• Extreme sweating</li>
            <li>• High blood pressure and heart rate</li>
            <li>• Can last weeks to months</li>
            <li>• Treatment: Medical supervision essential</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Warning Signs of Xylazine Use</h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Large, slow-healing wounds or abscesses</li>
            <li>• Extreme sleepiness ("nodding off")</li>
            <li>• Very low blood pressure</li>
            <li>• Slow heart rate and labored breathing</li>
            <li>• Severe withdrawal symptoms when not using</li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overdose Response</h2>
          <p className="text-gray-700 mb-4 font-bold">If someone is unresponsive:</p>
          <ol className="space-y-3 text-gray-700 ml-4 mb-6">
            <li className="font-bold">1. Call 9-1-1 IMMEDIATELY</li>
            <li className="font-bold">2. Give Narcan if available (may help if opioid is also present)</li>
            <li className="font-bold">3. Position person on their side if breathing</li>
            <li className="font-bold">4. Start CPR if trained and not breathing</li>
            <li className="font-bold">5. Medical support and oxygen may be needed</li>
          </ol>
          <p className="text-red-700 font-bold">Xylazine overdose requires immediate emergency medical care.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• SAMHSA National Helpline: <a href="tel:18009627332" className="text-green-700 font-bold">1-800-662-4357</a></li>
            <li>• Narcotics Anonymous: <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">na.org</a></li>
            <li>• Medical detoxification programs with xylazine expertise</li>
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
