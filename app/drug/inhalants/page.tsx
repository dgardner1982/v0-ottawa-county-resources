'use client';

import Link from 'next/link';

export default function InhalantsPage() {
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
            <div className="text-7xl">💨</div>
            <h1 className="text-6xl font-bold text-teal-700">Inhalants</h1>
            <p className="text-2xl text-gray-600">Duster, Poppers & Household Products</p>
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For specific information about Duster/Compressed Air, click{' '}
            <a 
              href="https://gemini.google.com/share/b5a5d42e7caf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>

        <div className="bg-cyan-100 border-l-4 border-cyan-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For specific information about Nitrous Oxide, click{' '}
            <a 
              href="https://gemini.google.com/share/9b0d8ebae411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>

        <div className="bg-pink-100 border-4 border-pink-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-pink-900 mb-4">SUDDEN DEATH RISK</h2>
          <p className="text-lg text-pink-900 font-bold mb-4">Inhalants are extremely dangerous. Sudden Sniffing Death Syndrome (SSDS) can occur even on first use or with no history of use.</p>
          <p className="text-pink-900">Death can occur from cardiac arrest within minutes of inhaling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Short-Term Effects</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-pink-600 font-bold">•</span>
                <span>Rapid onset of intoxication (seconds to minutes)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-pink-600 font-bold">•</span>
                <span>Euphoria and dizziness</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-pink-600 font-bold">•</span>
                <span>Slurred speech and loss of coordination</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-pink-600 font-bold">•</span>
                <span>Hallucinations and distorted perception</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-pink-600 font-bold">•</span>
                <span>Rapid heart rate and elevated blood pressure</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-pink-600 font-bold">•</span>
                <span>Effects last 15-30 minutes</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Deadly Dangers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Sudden Sniffing Death Syndrome (cardiac arrest)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Permanent brain damage with repeated use</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Liver and kidney damage</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Oxygen deprivation to the brain</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">⚠️</span>
                <span>Asphyxiation and suffocation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Inhalants</h2>
          <p className="text-gray-700 mb-4 font-bold">People abuse:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Computer/electronics dusters ("huffing")</li>
            <li>• Nitrites ("poppers") - alkyl nitrites</li>
            <li>• Paint thinners and solvents</li>
            <li>• Gasoline and lighter fluid</li>
            <li>• Correction fluid ("white-out")</li>
            <li>• Spray paints</li>
            <li>• Adhesives and glues</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Long-Term Damage</h2>
          <p className="text-gray-700 mb-4">Chronic inhalant abuse causes:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• "Huffing Syndrome" - permanent cognitive decline</li>
            <li>• Severe memory loss and learning problems</li>
            <li>• Dementia-like symptoms in young people</li>
            <li>• Bone marrow suppression</li>
            <li>• Nerve damage (peripheral neuropathy)</li>
            <li>• Organ toxicity</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Warning Signs of Inhalant Use</h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Chemical smell on clothes or breath</li>
            <li>• Rash around nose and mouth</li>
            <li>• Nosebleeds</li>
            <li>• Slurred speech and loss of coordination</li>
            <li>• Behavioral changes and poor judgment</li>
            <li>• Empty cans or bottles in room</li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overdose/Emergency Response</h2>
          <p className="text-gray-700 mb-4 font-bold">If someone is unresponsive after inhalant use:</p>
          <ol className="space-y-3 text-gray-700 ml-4 mb-6">
            <li className="font-bold">1. Call 9-1-1 IMMEDIATELY</li>
            <li className="font-bold">2. Move person to fresh air</li>
            <li className="font-bold">3. If not breathing, start CPR</li>
            <li className="font-bold">4. Place in recovery position if breathing</li>
            <li className="font-bold">5. Do NOT resuscitate if cardiac arrest occurs from inhalants (increased risk)</li>
          </ol>
          <p className="text-red-700 font-bold">Sudden Sniffing Death can occur with NO WARNING.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-gray-700 mb-4">If you or someone you know is using inhalants:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County recovery services</li>
            <li>• SAMHSA National Helpline: <a href="tel:18009627332" className="text-green-700 font-bold">1-800-662-4357</a></li>
            <li>• Professional help is essential for neurological damage prevention</li>
            <li>• Early intervention can prevent permanent brain damage</li>
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

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">Ottawa County Recovery Alliance</p>
          <p className="text-gray-300 text-sm">Crisis Support: 2-1-1 for Resources | 988 for Suicide Crisis | 9-1-1 for Emergencies</p>
        </div>
      </footer>
    </>
  );
}
