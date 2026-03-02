import Link from 'next/link';

export default function THCPage() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-teal-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-8 text-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
              alt="Ottawa County Recovery Alliance"
              className="h-80 w-80 object-contain"
            />
            
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-teal-700">Education & Resources</h1>
              <p className="text-3xl text-gray-700 font-semibold">Substance Guides & Harm Reduction</p>
            </div>
            
            <div className="flex gap-6 flex-wrap justify-center pt-4">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Resources</button>
              </Link>
              <Link href="/education">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Education</button>
              </Link>
              <Link href="/support-groups">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Support Groups</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <Link href="/education">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
              ← Back to Education
            </button>
          </Link>
        </div>

        <div className="bg-lime-100 border-l-4 border-lime-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/c12a5f1e17cf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-lime-600 hover:bg-lime-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>

        <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-4xl font-bold mb-3">THC (Cannabis/Marijuana)</h2>
          <p className="text-lg">Cannabis contains THC (tetrahydrocannabinol), the main psychoactive compound. Understanding its effects and risks is important for informed decision-making.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-lime-50 p-8 rounded-lg border-l-4 border-lime-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Short-Term Effects</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-lime-600 font-bold">●</span>
                <span>Euphoria and relaxation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-600 font-bold">●</span>
                <span>Altered perception and time distortion</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-600 font-bold">●</span>
                <span>Impaired memory and concentration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-600 font-bold">●</span>
                <span>Increased appetite and dry mouth</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-600 font-bold">●</span>
                <span>Red eyes and slower reaction time</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Potential Health Risks</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Cannabis use disorder affects 9% of users, higher in adolescents</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Regular use may impact lung health and respiratory function</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Can trigger or worsen anxiety, depression, and psychosis in vulnerable individuals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Impaired driving ability - increased accident risk</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Adolescent use may affect brain development and cognitive function</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-Term Considerations</h3>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li>• Chronic use may lead to cannabis use disorder with withdrawal symptoms</li>
            <li>• Memory, attention, and learning abilities may be affected with regular use</li>
            <li>• Higher potency products (concentrates, edibles) carry increased risks</li>
            <li>• Mental health effects may persist or worsen with continued use</li>
            <li>• Pregnancy exposure may affect fetal development</li>
          </ul>
        </div>

        <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Harm Reduction Strategies</h3>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li>• Delay use until adulthood when brain development is complete</li>
            <li>• Avoid driving or operating machinery while impaired</li>
            <li>• Use lower-potency products if choosing to use</li>
            <li>• Never mix with alcohol or other substances</li>
            <li>• Store securely away from children and adolescents</li>
            <li>• Monitor for signs of problematic use or dependence</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">If You or Someone Else is Struggling</h3>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li>• Cannabis use disorder is treatable with professional help</li>
            <li>• Therapy, counseling, and support groups are available</li>
            <li>• Call 2-1-1 for local treatment resources in Ottawa County</li>
            <li>• SAMHSA National Helpline: 1-800-662-4357 (free, confidential, 24/7)</li>
          </ul>
        </div>

        <div className="bg-purple-600 text-white rounded-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
          <p className="mb-6">If you're struggling with substance use, treatment and support are available.</p>
          <a href="tel:211" className="inline-block bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition text-lg">
            Call 2-1-1 for Local Resources
          </a>
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
          <p className="text-gray-400 text-xs mt-4">Information based on CDC and NIH data (2026)</p>
        </div>
      </footer>
    </>
  );
}
