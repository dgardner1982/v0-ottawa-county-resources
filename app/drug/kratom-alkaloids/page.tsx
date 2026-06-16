'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function KratomAlkaloidsPage() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/education" className="text-teal-600 hover:text-teal-800 font-bold mb-6 inline-block">← Back to Education</Link>
        
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-700 mb-3">Kratom Alkaloids</h1>
            <p className="text-2xl text-gray-600">7-Hydroxymitragynine & Mitragynine Pseudoindoxyl</p>
          </div>

          <div className="bg-green-100 border-l-4 border-green-600 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Kratom Alkaloids?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Kratom alkaloids are the active compounds found in kratom leaves. While kratom powder contains a mix of alkaloids, concentrated alkaloid products isolate or enhance specific compounds to create stronger effects. Two primary alkaloids drive kratom&apos;s effects:
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7-Hydroxymitragynine (7-OH)</h2>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Profile:</h3>
              <ul className="space-y-2 text-gray-700 mb-6 ml-4">
                <li>• The primary opioid-like alkaloid in kratom</li>
                <li>• Represents 0.5-3% of raw kratom leaf</li>
                <li>• Responsible for pain relief and euphoria</li>
                <li>• 13x more potent than mitragynine</li>
                <li>• Can produce opioid-like effects at higher concentrations</li>
              </ul>
              <h3 className="font-bold text-gray-900 mb-3">In Extracts & Isolated Products:</h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Concentrated 7-OH products are significantly more potent</li>
                <li>• Faster onset of effects (15-30 minutes vs 30-60 minutes)</li>
                <li>• Stronger euphoria and sedation</li>
                <li>• Higher addiction and dependency risk</li>
                <li>• Greater withdrawal potential</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mitragynine Pseudoindoxyl (Pseudo)</h2>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Profile:</h3>
              <ul className="space-y-2 text-gray-700 mb-6 ml-4">
                <li>• A metabolite created when mitragynine is processed by the body</li>
                <li>• Forms during storage and preparation of kratom</li>
                <li>• Produces stronger psychoactive effects than mitragynine</li>
                <li>• Primary driver of euphoria in aged/fermented kratom</li>
                <li>• Concentrations vary widely by product and storage conditions</li>
              </ul>
              <h3 className="font-bold text-gray-900 mb-3">Risks of &quot;Pseudo&quot; Products:</h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Unpredictable potency due to variable content</li>
                <li>• Often mislabeled with inconsistent alkaloid profiles</li>
                <li>• Higher addiction potential than standard kratom</li>
                <li>• Increased risk of psychological dependency</li>
                <li>• Little regulation or quality control in production</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kratom Alkaloid Products</h2>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Common Alkaloid-Focused Products:</h3>
              <ul className="space-y-3 text-gray-700 ml-4">
                <li><strong>&quot;Pure 7-OH&quot;:</strong> Isolated 7-hydroxymitragynine, extremely potent, high dependency risk</li>
                <li><strong>&quot;Pseudo Enhanced&quot; or &quot;Aged Kratom&quot;:</strong> Contains increased pseudo levels for stronger effects</li>
                <li><strong>&quot;Alkaloid Enhanced&quot; Powders:</strong> Regular kratom mixed with concentrated alkaloids</li>
                <li><strong>&quot;Full Spectrum&quot; Extracts:</strong> All alkaloids concentrated together, unpredictable effects</li>
                <li><strong>&quot;Fermented&quot; Kratom:</strong> Aged to increase pseudo levels and euphoric effects</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ Health Risks & Dangers</h2>
            <div className="bg-white p-6 rounded-lg">
              <ul className="space-y-2 text-red-900 ml-4">
                <li>• <strong>High Addiction Potential:</strong> Isolated alkaloids create stronger opioid-like dependency</li>
                <li>• <strong>Severe Withdrawal:</strong> Similar to opioid withdrawal with muscle aches, sweating, anxiety</li>
                <li>• <strong>Overdose Risk:</strong> Potency varies dramatically between products</li>
                <li>• <strong>Liver Toxicity:</strong> Concentrated alkaloids increase hepatotoxicity risk</li>
                <li>• <strong>No Quality Control:</strong> Products often mislabeled or contaminated</li>
                <li>• <strong>Drug Test Issues:</strong> May contain ingredients that interfere with tests</li>
                <li>• <strong>Interaction Risk:</strong> Can interact with medications and other substances</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-100 border-l-4 border-green-600 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Harm Reduction Tips</h2>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>✓ Use regular kratom powder instead of concentrated alkaloid products</li>
              <li>✓ Avoid isolated 7-OH or &quot;Pseudo&quot; products entirely</li>
              <li>✓ Never mix with other opioids, sedatives, or alcohol</li>
              <li>✓ Space usage with at least 1-2 days between sessions to reduce dependency</li>
              <li>✓ If dependent, taper gradually rather than stopping abruptly</li>
              <li>✓ Monitor for withdrawal symptoms: irritability, anxiety, sweating, muscle aches</li>
              <li>✓ Seek professional help if experiencing addiction—treatment is available</li>
            </ul>
          </div>

          <div className="bg-teal-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Need Support?</h3>
            <p className="mb-6 text-lg">If you or someone you know is struggling with kratom use or dependency, help is available.</p>
            <Link href="/">
              <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Find Local Resources</button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
