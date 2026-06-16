import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function SyntheticCannabinoidsPage() {
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

        <div className="bg-teal-100 border-l-4 border-teal-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://www.samhsa.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-4xl font-bold mb-3">Synthetic Cannabinoids</h2>
          <p className="text-lg">Synthetic cannabinoids are lab-created chemicals designed to mimic THC. Often sold as &quot;K2&quot; or &quot;Spice&quot;, these substances are highly potent and unpredictable, carrying significant health risks that exceed natural cannabis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Short-Term Effects</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">●</span>
                <span>Rapid heart rate and elevated blood pressure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">●</span>
                <span>Extreme anxiety and paranoia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">●</span>
                <span>Hallucinations and altered perception</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">●</span>
                <span>Violent behavior and agitation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">●</span>
                <span>Severe nausea and vomiting</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Potential Health Risks</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Risk of acute kidney injury and kidney failure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Severe cardiovascular effects including heart attack and stroke</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Rapid development of psychological dependence</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Seizures and neurological complications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Psychosis and suicidal ideation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Synthetic Cannabinoids Are Particularly Dangerous</h3>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li>• Potency is 100+ times stronger than natural THC</li>
            <li>• Formulations are constantly changing to avoid legal restrictions</li>
            <li>• Dosing is inconsistent - impossible to know strength of product</li>
            <li>• Often contaminated with dangerous additives</li>
            <li>• Extremely high addiction potential</li>
            <li>• Effects are unpredictable and often severe</li>
          </ul>
        </div>

        <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overdose Symptoms</h3>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li>• Uncontrollable shaking or seizures</li>
            <li>• Loss of consciousness or unresponsiveness</li>
            <li>• Extreme chest pain or pressure</li>
            <li>• Difficulty breathing</li>
            <li>• Severe hallucinations or violent behavior</li>
            <li>• Signs of stroke (facial drooping, difficulty speaking)</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">If You or Someone Else is Struggling</h3>
          <ul className="space-y-3 text-gray-700 ml-4">
            <li>• Addiction to synthetic cannabinoids is treatable</li>
            <li>• Professional counseling and rehabilitation programs are available</li>
            <li>• Call 2-1-1 for local treatment resources in Ottawa County</li>
            <li>• SAMHSA National Helpline: 1-800-662-4357 (free, confidential, 24/7)</li>
          </ul>
        </div>

        <div className="bg-purple-600 text-white rounded-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
          <p className="mb-6">If you&apos;re struggling with substance use, treatment and support are available.</p>
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

      <Footer />
    </>
  );
}
