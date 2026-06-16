'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function NitazinePage() {
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
            <h1 className="text-6xl font-bold text-teal-700">Nitazine</h1>
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

        <div className="bg-yellow-100 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Potency Level: HIGH</h3>
          <p className="text-lg text-gray-700 mb-6">
            Nitazines are a powerful type of opioid with high overdose risk, especially when combined with other substances. They have become increasingly prevalent in the illicit drug supply. The term "nitazines" is an umbrella classification that includes several different synthetic opioid analogs, each with varying levels of potency. Common varieties include Metonitazene, Isotonitazene (ISO), Protonitazene, N-Desethyl Isotonitazene, and Etonitazene—all of which carry significant overdose dangers.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg">
              <thead>
                <tr className="bg-yellow-200">
                  <th className="border border-yellow-400 px-4 py-3 text-left font-bold text-gray-900">Nitazene Analog</th>
                  <th className="border border-yellow-400 px-4 py-3 text-left font-bold text-gray-900">Potency vs Morphine</th>
                  <th className="border border-yellow-400 px-4 py-3 text-left font-bold text-gray-900">Potency vs Fentanyl</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-yellow-400 px-4 py-3 font-semibold text-gray-800">Metonitazene</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~100x more potent</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">Roughly equal</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-yellow-400 px-4 py-3 font-semibold text-gray-800">Protonitazene</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~200-300x more potent</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~3x more potent</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-yellow-400 px-4 py-3 font-semibold text-gray-800">Isotonitazene ("ISO")</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~500-800x more potent</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~5-9x more potent</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-yellow-400 px-4 py-3 font-semibold text-gray-800">N-Desethyl Isotonitazene</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~1,000-1,400x more potent</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~20x more potent</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-yellow-400 px-4 py-3 font-semibold text-gray-800">Etonitazene / N-Pyrrolidino Etonitazene</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~1,500x more potent</td>
                  <td className="border border-yellow-400 px-4 py-3 text-gray-700">~10-40x more potent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Short-Term Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Extreme sedation and drowsiness</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Difficulty staying awake or unconsciousness</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Memory loss and confusion</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Impaired coordination and slurred speech</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Respiratory depression (slowed breathing)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Effects last several hours</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Risks</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Overdose potential significantly increased when combined with other opioids, benzodiazepines, or alcohol</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe respiratory depression leading to death</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Loss of consciousness and coma</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Physical and psychological dependence</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Vulnerability to assault or injury while sedated</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Possible organ damage with long-term use</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Routes of Administration</h2>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li className="flex gap-3 items-start">
              <span className="font-bold">Ingestion (pills/tablets):</span>
              <span>Effects in 30-60 minutes, lasts 4-8 hours. Often found in counterfeit prescription pills.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold">Injection:</span>
              <span>Effects in minutes, highest overdose risk. Often mixed with opioids.</span>
            </li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognizing Overdose</h2>
          <ul className="space-y-2 text-gray-700 ml-4 mb-6">
            <li>• Extreme sedation or unconsciousness</li>
            <li>• Slow or stopped breathing</li>
            <li>• Blue lips or fingertips</li>
            <li>• Loss of responsiveness</li>
            <li>• Pinpoint pupils</li>
            <li>• Limp body</li>
          </ul>
          <p className="font-bold text-lg text-red-700">Call 9-1-1 immediately if overdose is suspected. Naloxone (Narcan) may help if opioids are present, but will not reverse nitazine alone.</p>
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
