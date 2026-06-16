'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function HempDerivedCannabinoids() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/education">
            <button className="text-green-600 hover:text-green-700 font-semibold mb-4 flex items-center gap-2">
              ← Back to Education
            </button>
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Hemp-Derived Cannabinoids</h1>
          <p className="text-xl text-gray-600">Delta-8, Delta-10, THC-V, THC-O, and Other Legal Compounds</p>
        </div>

        {/* Overview */}
        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">What Are Hemp-Derived Cannabinoids?</h3>
          <p className="text-lg text-gray-700">
            Hemp-derived cannabinoids are compounds extracted or synthesized from hemp plants and are legal under federal law. While marketed as a safe alternative to Delta-9 THC, these products remain largely unregulated, often mislabeled, and can contain harmful contaminants. Common types include Delta-8 THC, Delta-10 THC, THC-V, THC-O, and HHC.
          </p>
        </div>

        {/* Detailed Information */}
        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/389b769f762d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>

        {/* Common Types */}
        <div className="bg-white p-8 rounded-lg border-l-4 border-green-500 mb-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Hemp-Derived Cannabinoids</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">•</span>
              <span><strong>Delta-8 THC:</strong> Slightly less potent than Delta-9, produces mild psychoactive effects and relaxation</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">•</span>
              <span><strong>Delta-10 THC:</strong> Similar effects to Delta-8 with potential stimulating properties</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">•</span>
              <span><strong>THC-V:</strong> May suppress appetite, often marketed for weight loss with minimal psychoactive effects</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">•</span>
              <span><strong>THC-O:</strong> Synthetic cannabinoid derived from hemp, potentially more potent than Delta-9</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">•</span>
              <span><strong>HHC:</strong> Semi-synthetic cannabinoid with effects comparable to Delta-9 THC</span>
            </li>
          </ul>
        </div>

        {/* Short-Term Effects */}
        <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Short-Term Effects</h3>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Impaired memory and concentration</li>
            <li>• Altered perception and judgment</li>
            <li>• Anxiety or paranoia</li>
            <li>• Increased heart rate</li>
            <li>• Red or dry eyes</li>
            <li>• Drowsiness or lethargy</li>
            <li>• Impaired motor coordination</li>
          </ul>
        </div>

        {/* Health Risks */}
        <div className="bg-orange-100 p-8 rounded-lg border-l-4 border-orange-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Risks & Dangers</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-orange-600 font-bold">⚠️</span>
              <span><strong>Lack of regulation:</strong> Products are unregulated and often mislabeled</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-600 font-bold">⚠️</span>
              <span><strong>Contamination:</strong> May contain heavy metals, pesticides, or harmful additives</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-600 font-bold">⚠️</span>
              <span><strong>Unknown potency:</strong> Actual THC content may differ significantly from labels</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-600 font-bold">⚠️</span>
              <span><strong>Dependency potential:</strong> Regular use can lead to psychological dependence</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-600 font-bold">⚠️</span>
              <span><strong>Drug test failure:</strong> May still test positive on drug screens despite being "legal"</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-600 font-bold">⚠️</span>
              <span><strong>Medication interactions:</strong> Can interact with prescription medications</span>
            </li>
          </ul>
        </div>

        {/* Routes of Administration */}
        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Routes of Administration</h3>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Smoking or vaping</li>
            <li>• Edibles (gummies, oils, capsules)</li>
            <li>• Tinctures or sublingual products</li>
            <li>• Topical applications</li>
            <li>• Beverages or drinks</li>
          </ul>
        </div>

        {/* Signs of Use */}
        <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Signs of Use or Problem Use</h3>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Impaired judgment or coordination</li>
            <li>• Sudden changes in mood or behavior</li>
            <li>• Red or glazed eyes</li>
            <li>• Difficulty concentrating or memory issues</li>
            <li>• Increased tolerance requiring higher doses</li>
            <li>• Unsuccessful attempts to cut back</li>
            <li>• Continued use despite negative consequences</li>
          </ul>
        </div>

        {/* Overdose Information */}
        <div className="bg-red-100 p-8 rounded-lg border-l-4 border-red-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overdose Information</h3>
          <p className="text-gray-700 mb-4">While fatal overdoses are rare with cannabinoids alone, severe intoxication can occur, especially with products of unknown potency.</p>
          <p className="font-bold text-gray-900 mb-2">Severe overdose symptoms may include:</p>
          <ul className="space-y-2 text-gray-700 ml-4 mb-4">
            <li>• Extreme anxiety or panic</li>
            <li>• Hallucinations or paranoia</li>
            <li>• Rapid heart rate or chest pain</li>
            <li>• Difficulty breathing</li>
            <li>• Loss of consciousness</li>
            <li>• Seizures</li>
          </ul>
          <p className="text-gray-700"><strong>If overdose is suspected, call 911 immediately.</strong></p>
        </div>

        {/* Harm Reduction */}
        <div className="bg-teal-100 p-8 rounded-lg border-l-4 border-teal-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Harm Reduction Tips</h3>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Avoid products from unknown sources</li>
            <li>• Start with very small amounts if you choose to use</li>
            <li>• Never drive or operate machinery while impaired</li>
            <li>• Don't mix with alcohol or other substances</li>
            <li>• Keep these products away from children and pets</li>
            <li>• Be aware these products may affect employment drug tests</li>
            <li>• If you struggle with use, seek professional help</li>
          </ul>
        </div>

        {/* Recovery Resources */}
        <div className="bg-green-100 p-8 rounded-lg border-l-4 border-green-600 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery & Support Resources</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">✓</span>
              <span><strong>SAMHSA National Helpline:</strong> 1-800-662-HELP (4357) - Free, confidential, 24/7</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">✓</span>
              <span><strong>Local Support Groups:</strong> NA, SMART Recovery, Cannabis Users Support Group</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">✓</span>
              <span><strong>Counseling & Therapy:</strong> Professional treatment tailored to substance use</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-green-600">✓</span>
              <span><strong>Ottawa County 2-1-1:</strong> Local resources and community support</span>
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link href="/education">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition text-lg">
              Back to Education
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
