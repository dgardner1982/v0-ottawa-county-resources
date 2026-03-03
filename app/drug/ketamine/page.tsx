'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function KetaminePage() {
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
            <div className="text-7xl">🧪</div>
            <h1 className="text-6xl font-bold text-teal-700">Ketamine</h1>
            <p className="text-2xl text-gray-600">Dissociative Drug & Emerging Threat</p>
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
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/434c55c850da" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-indigo-100 border-4 border-indigo-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">CRITICAL INFORMATION</h2>
          <p className="text-lg text-indigo-900 font-bold mb-4">Ketamine is a powerful dissociative anesthetic used medically but increasingly misused recreationally and in drug-facilitated crimes.</p>
          <ul className="space-y-2 text-indigo-900 ml-4">
            <li>• Causes dissociation and disconnection from body and reality</li>
            <li>• Used in date rape and sexual assault</li>
            <li>• Can cause temporary paralysis at high doses</li>
            <li>• Frequent use can damage bladder and urinary tract</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Dissociation and out-of-body experiences</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Distorted perception of time and space</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Hallucinations and altered visual perception</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Numbness and temporary inability to move</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Increased heart rate and blood pressure</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Risks & Dangers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Vulnerability to sexual assault during use</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Respiratory depression at high doses</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Bladder dysfunction and urinary tract damage</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Memory loss and cognitive impairment</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Potential for addiction with repeated use</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs of Ketamine Use</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Sudden confusion or disorientation</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Inability to move or respond verbally</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Blank stare or glassy eyes</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Dilated pupils and rapid eye movements</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Sudden drowsiness or lack of awareness</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Memory gaps or blackouts after social events</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Tips</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">•</span>
              <span>Never leave drinks unattended at parties or bars</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">•</span>
              <span>Go out with trusted friends and watch out for each other</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">•</span>
              <span>If someone shows unexplained symptoms, seek immediate help</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">•</span>
              <span>Know the signs of drug-facilitated assault</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
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
