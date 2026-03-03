'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function MethamphetaminePage() {
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
            <div className="text-7xl">⚡</div>
            <h1 className="text-6xl font-bold text-teal-700">Methamphetamine</h1>
            <p className="text-2xl text-gray-600">Understanding Crystal Meth & Its Dangers</p>
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-orange-100 border-l-4 border-orange-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information about Methamphetamine, click{' '}
            <a 
              href="https://gemini.google.com/share/1adafde78b48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Short-Term Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">•</span>
                <span>Increased wakefulness and physical activity</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">•</span>
                <span>Rapid heart rate, increased blood pressure and body temperature</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">•</span>
                <span>Dilated pupils and loss of appetite</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">•</span>
                <span>Sleep disturbances and paranoia</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">•</span>
                <span>Intense euphoria followed by severe crash</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-600 font-bold">•</span>
                <span>Effects can last 8-24 hours</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Risks</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe addiction - one of the most addictive drugs known</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Heart attack, stroke, and seizures</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>"Meth mouth" - severe dental decay and tooth loss</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Skin infections and "meth mites" (hallucinations of bugs)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe cognitive damage and psychosis</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Premature aging of the skin and brain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Long-Term Consequences</h2>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li className="flex gap-3 items-start">
              <span className="font-bold">Neurological:</span>
              <span>Significant damage to dopamine production, lasting behavioral changes, severe depression</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold">Physical:</span>
              <span>Cardiovascular disease, respiratory problems, extreme weight loss, premature aging</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold">Psychological:</span>
              <span>Chronic paranoia, anxiety, hallucinations, and increased suicide risk</span>
            </li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognizing Overdose</h2>
          <ul className="space-y-2 text-gray-700 ml-4 mb-6">
            <li>• Chest pain or extreme difficulty breathing</li>
            <li>• Uncontrolled seizures</li>
            <li>• Loss of consciousness</li>
            <li>• Extreme hyperthermia (body temperature over 106°F)</li>
            <li>• Kidney failure symptoms</li>
          </ul>
          <p className="font-bold text-lg text-red-700">Call 9-1-1 immediately. Methamphetamine overdose is a medical emergency.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-gray-700 mb-4">Recovery from methamphetamine is challenging but possible with support:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• Narcotics Anonymous: <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">na.org</a></li>
            <li>• SMART Recovery: <a href="https://www.smartrecovery.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">smartrecovery.org</a></li>
            <li>• Medication-Assisted Treatment (MAT) programs available in Ottawa County</li>
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
