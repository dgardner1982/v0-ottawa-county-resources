'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function MedetomidinePage() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-indigo-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="text-7xl">💊</div>
            <h1 className="text-6xl font-bold text-indigo-700">Medetomidine</h1>
            <p className="text-2xl text-gray-600">Rhino Tranq</p>
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-indigo-100 border-l-4 border-indigo-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Estimated to be 100 to 200 times more potent than xylazine. It triggers profound central nervous system depression far exceeding standard street adulterants.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/0802dddcda86" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-indigo-100 border-4 border-indigo-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">EMERGING CRISIS</h2>
          <p className="text-lg text-indigo-900 font-bold mb-4">Medetomidine is a powerful veterinary sedative being illicitly used and mixed into drug supplies, creating serious overdose risks.</p>
          <ul className="space-y-2 text-indigo-900 ml-4">
            <li>• Medetomidine is a veterinary anesthetic NOT approved for human use</li>
            <li>• It&apos;s being mixed into opioid supplies and other street drugs</li>
            <li>• It causes extreme sedation and respiratory depression</li>
            <li>• Requires immediate emergency medical attention for overdose</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Extreme sedation and drowsiness</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Significant decrease in heart rate and blood pressure</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Muscle relaxation and weakness</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Respiratory depression</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Loss of consciousness with high doses</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Critical Dangers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe respiratory depression leading to death</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Dangerous when combined with opioids or CNS depressants</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Can cause cardiac arrhythmias and heart failure</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>High overdose potential due to unknown purity</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Unpredictable effects when mixed with other substances</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medetomidine Overdose Symptoms</h2>
          <p className="text-gray-700 mb-4">Signs of medetomidine overdose include:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Extreme sedation or unconsciousness</li>
            <li>• Severe slowed breathing (potentially stopping)</li>
            <li>• Very low heart rate and blood pressure</li>
            <li>• Blue lips or fingertips (cyanosis)</li>
            <li>• Unresponsiveness to stimulation</li>
            <li>• Requires immediate emergency medical care</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Warning Signs of Medetomidine Use</h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Extreme drowsiness unresponsive to stimulation</li>
            <li>• Pinpoint pupils</li>
            <li>• Very slow breathing and heart rate</li>
            <li>• Cold, clammy skin</li>
            <li>• Lack of responsiveness</li>
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
            <li className="font-bold">5. Medical support and oxygen are essential</li>
          </ol>
          <p className="text-red-700 font-bold">Medetomidine overdose requires immediate emergency medical care.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• SAMHSA National Helpline: <a href="tel:18009627332" className="text-green-700 font-bold">1-800-662-4357</a></li>
            <li>• Narcotics Anonymous: <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">na.org</a></li>
            <li>• Emergency poison control: <a href="tel:18002221222" className="text-green-700 font-bold">1-800-222-1222</a></li>
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
