'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function PCPPage() {
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
            <div className="text-7xl">⛔</div>
            <h1 className="text-6xl font-bold text-teal-700">PCP (Phencyclidine)</h1>
            <p className="text-2xl text-gray-600">Extreme Danger & Violent Behavior</p>
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-red-100 border-l-4 border-red-700 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/23c977d4ff21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-red-200 border-4 border-red-700 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-900 mb-4">EXTREME DANGER WARNING</h2>
          <p className="text-lg text-red-900 font-bold mb-4">PCP is one of the most dangerous illegal drugs, frequently causing severe psychosis, superhuman strength, and violent behavior.</p>
          <ul className="space-y-2 text-red-900 ml-4">
            <li>• Can cause extreme violence and self-harm</li>
            <li>• Users often feel superhuman strength and pain-free</li>
            <li>• Often laced on marijuana, tobacco, or other drugs</li>
            <li>• Effects are unpredictable and can last for days</li>
            <li>• Frequent users develop severe psychological problems</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 border-l-4 border-red-700 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-700 font-bold">•</span>
                <span>Severe dissociation and detachment</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-700 font-bold">•</span>
                <span>Hallucinations and delusions</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-700 font-bold">•</span>
                <span>Feeling of superhuman strength and invincibility</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-700 font-bold">•</span>
                <span>Complete insensitivity to pain</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-700 font-bold">•</span>
                <span>Rapid or slow movements and bizarre behavior</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Risks & Dangers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Extreme violent and aggressive behavior</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe injury to self and others</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Respiratory depression and overdose death</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Severe long-term psychological damage</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Persistent psychosis and flashbacks</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs of PCP Use</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Sudden aggression or violent outbursts</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Blank stare and rigid body movements</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Excessive strength and seemingly feeling no pain</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Bizarre or irrational behavior</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Disorientation and confusion</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-yellow-600 font-bold">→</span>
              <span>Fever and rapid heart rate</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">If Someone Is Under the Influence of PCP</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">1.</span>
              <span>Call 911 immediately - PCP emergencies are dangerous</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">2.</span>
              <span>Do NOT try to restrain or fight with the person</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">3.</span>
              <span>Keep a safe distance - they may become violent</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">4.</span>
              <span>Stay calm and avoid sudden movements or loud noises</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">5.</span>
              <span>Do not give the person any substances</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-600 font-bold">6.</span>
              <span>Wait for emergency services - hospitalization is necessary</span>
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
