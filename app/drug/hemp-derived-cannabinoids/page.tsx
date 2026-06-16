'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function HempDerivedCannabinoidsPage() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-green-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link href="/education">
            <button className="mb-4 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded transition">← Back to Education</button>
          </Link>
          <h1 className="text-5xl font-bold text-green-700 mb-2">Hemp-Derived Cannabinoids</h1>
          <p className="text-xl text-gray-600">Delta-8, Delta-10, THC-V, and Other Legal Alternatives</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Hemp-derived cannabinoids are legal compounds extracted or synthesized from hemp plants. While they are often marketed as "legal alternatives" to traditional THC, they still carry significant health risks and are largely unregulated.
          </p>
          <p className="text-lg text-gray-700 font-bold">
            For more detailed information, click{' '}
            <a 
              href="https://www.samhsa.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>

        <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Hemp-Derived Cannabinoids</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Delta-8 THC</h4>
              <p className="text-gray-700">Slightly less potent than Delta-9 THC. Produces mild psychoactive effects and feelings of relaxation. Often marketed as a legal high.</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Delta-10 THC</h4>
              <p className="text-gray-700">Similar effects to Delta-8 with potentially stimulating properties. May produce energy and euphoria rather than sedation.</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-gray-900 mb-2">THC-V (Tetrahydrocannabivarin)</h4>
              <p className="text-gray-700">May suppress appetite and is often marketed for weight loss. Produces minimal psychoactive effects at low doses but can be psychoactive at higher doses.</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-gray-900 mb-2">THC-O</h4>
              <p className="text-gray-700">A synthetic cannabinoid derived from hemp. Potentially more potent than Delta-9 THC. Effects are unpredictable and can be intense.</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-gray-900 mb-2">HHC (Hexahydrocannabinol)</h4>
              <p className="text-gray-700">Semi-synthetic cannabinoid with effects comparable to Delta-9 THC. Long-term effects unknown as it's relatively new to the market.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Short-Term Effects</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Euphoria or relaxation</li>
            <li>• Altered perception and time distortion</li>
            <li>• Increased appetite</li>
            <li>• Dry mouth and red eyes</li>
            <li>• Impaired memory and concentration</li>
            <li>• Anxiety or paranoia (in some users)</li>
            <li>• Increased heart rate</li>
            <li>• Coordination problems</li>
          </ul>
        </div>

        <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Risks & Dangers</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span><strong>Lack of regulation:</strong> Products are unregulated and often mislabeled with inaccurate potency levels</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span><strong>Contamination risk:</strong> Products may contain harmful additives, pesticides, or heavy metals</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span><strong>Unpredictable potency:</strong> Delta-8, Delta-10, and THC-O can be significantly more potent than expected</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span><strong>Synthetic cannabinoid risks:</strong> THC-O and other synthetic variants carry unknown long-term health effects</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span><strong>Mental health effects:</strong> Can trigger anxiety, paranoia, or psychosis in vulnerable individuals</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span><strong>May fail drug tests:</strong> Some hemp-derived cannabinoids may still test positive on standard drug screening</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span><strong>Medication interactions:</strong> Can interfere with prescription medications and blood thinners</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Signs of Use</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Red or bloodshot eyes</li>
            <li>• Dry mouth</li>
            <li>• Impaired coordination or motor skills</li>
            <li>• Dilated pupils</li>
            <li>• Increased appetite</li>
            <li>• Drowsiness or lethargy</li>
            <li>• Difficulty concentrating</li>
            <li>• Anxiety or paranoia</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Support & Resources</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Talk to a healthcare provider if experiencing adverse effects</li>
            <li>✓ Be honest about use—medical professionals are there to help, not judge</li>
            <li>✓ For substance use concerns, call <a href="tel:211" className="font-bold text-green-700 underline">2-1-1</a> for local resources</li>
            <li>✓ SAMHSA National Helpline: 1-800-662-4357 (free, confidential, 24/7)</li>
            <li>✓ Connect with community support groups</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Know the Risks, Make Informed Choices</h3>
          <p className="mb-6 text-lg">Just because something is legal doesn&apos;t mean it&apos;s safe. Education and harm reduction are key to protecting your health.</p>
          <Link href="/education">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-3 rounded transition">Back to Education Resources</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
