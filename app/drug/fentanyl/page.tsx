'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function FentanylPage() {
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
            <div className="text-7xl">⚠️</div>
            <h1 className="text-6xl font-bold text-teal-700">Fentanyl</h1>
            <p className="text-2xl text-gray-600">The Leading Cause of Overdose Deaths</p>
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
        <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information about Fentanyl, click{' '}
            <a 
              href="https://gemini.google.com/share/772d700f160f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg mb-8">
          <Link href="/street-names/fentanyl">
            <button className="w-full text-lg bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition">
              View Street Names
            </button>
          </Link>
        </div>
        <div className="bg-red-100 border-4 border-red-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-900 mb-4">CRITICAL INFORMATION</h2>
          <p className="text-lg text-red-900 font-bold mb-4">Fentanyl is involved in 70% of all overdose deaths in the United States. It is often mixed into other drugs without users' knowledge.</p>
          <ul className="space-y-2 text-red-900 ml-4">
            <li>• Fentanyl is 50-100 times more potent than morphine</li>
            <li>• 2 milligrams can be lethal (equivalent to a few grains of salt)</li>
            <li>• It's frequently mixed into cocaine, heroin, counterfeit pills, and methamphetamine</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Extreme pain relief and sedation</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Drowsiness and confusion</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Shallow, slow breathing</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Pinpoint pupils</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Loss of consciousness</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">•</span>
                <span>Death from respiratory depression</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why It's So Dangerous</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Extreme potency - tiny variations in amount can be lethal</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Often mixed into other drugs without knowledge</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Naloxone (Narcan) may not fully reverse fentanyl overdose</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Multiple doses of Naloxone may be needed</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Rapid onset - overdose can happen in minutes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fentanyl Mixed in Other Drugs</h2>
          <p className="text-gray-700 mb-4 font-bold">Fentanyl is commonly found in:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Heroin (increasingly common)</li>
            <li>• Cocaine (causing stimulant + opioid overdoses)</li>
            <li>• Counterfeit pills (Xanax, Oxycontin, Adderall looking pills)</li>
            <li>• Methamphetamine</li>
            <li>• Counterfeit benzodiazepines</li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overdose Response - CRITICAL</h2>
          <p className="text-gray-700 mb-4 font-bold">If someone is unresponsive and NOT BREATHING:</p>
          <ol className="space-y-3 text-gray-700 ml-4 mb-6">
            <li className="font-bold">1. Call 9-1-1 IMMEDIATELY</li>
            <li className="font-bold">2. Administer Narcan (naloxone) to the nose or into muscle</li>
            <li className="font-bold">3. Start CPR if trained - push hard and fast on chest</li>
            <li className="font-bold">4. Administer second dose of Narcan after 2-3 minutes if no response</li>
            <li className="font-bold">5. Continue CPR until EMS arrives</li>
            <li className="font-bold">6. Stay with the person - do NOT leave</li>
          </ol>
          <p className="text-red-700 font-bold">Good Samaritan Laws protect those who call 911 during overdose emergencies.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-gray-700 mb-4">If you or someone you know is struggling with opioid use:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• SAMHSA National Helpline: <a href="tel:18009627332" className="text-green-700 font-bold">1-800-662-4357</a> (free, confidential, 24/7)</li>
            <li>• Narcotics Anonymous: <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">na.org</a></li>
            <li>• Medication-Assisted Treatment (MAT) - proven effective for opioid addiction</li>
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
