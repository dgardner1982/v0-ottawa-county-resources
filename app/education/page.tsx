'use client';

import Link from 'next/link';

export default function EducationPage() {
  const guides = [
    { name: "Fentanyl", icon: "⚠️", link: "https://gemini.google.com/share/cd77a5e1d45a" },
    { name: "Xylazine (Tranq)", icon: "💊", link: "https://gemini.google.com/share/5a6094e7467b" },
    { name: "Stimulants", icon: "⚡", link: "https://gemini.google.com/share/5fced2f07209" },
    { name: "Synthetic Cannabinoids", icon: "🌿", link: "https://gemini.google.com/share/9bb8e42a5cb7" },
    { name: "Emerging Drugs", icon: "🔬", link: "https://gemini.google.com/share/2a26f1e97b40" },
    { name: "Drug Interactions", icon: "🚫", link: "https://gemini.google.com/share/ee3fd2cc103a" },
  ];

  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-teal-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
                alt="Ottawa County Recovery Alliance"
                className="h-36 w-36 object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold text-teal-700">Education & Resources</h1>
                <p className="text-gray-600">Substance Guides & Harm Reduction</p>
              </div>
            </div>
            <Link href="/">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2 rounded transition">Directory</button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-3">Knowledge Saves Lives</h2>
          <p className="text-lg">Learn about emerging substances, recognize dangers, and discover paths to recovery. This information is for harm reduction and education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide, idx) => (
            <a
              key={idx}
              href={guide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 border-b-4 border-teal-500 transition transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{guide.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.name}</h3>
              <p className="text-teal-600 font-semibold">Read Guide →</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Overdose Prevention</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Recognize signs: unresponsiveness, blue lips, slow breathing</li>
              <li>✓ Call 9-1-1 immediately - Good Samaritan protection applies</li>
              <li>✓ Use Narcan if available - it reverses opioid overdoses</li>
              <li>✓ Place person in recovery position</li>
              <li>✓ Stay until emergency services arrive</li>
            </ul>
          </div>

          <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Harm Reduction</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Never use alone - have someone with you</li>
              <li>✓ Start with small test dose if using new supplies</li>
              <li>✓ Use sterile equipment every time</li>
              <li>✓ Keep emergency contacts accessible</li>
              <li>✓ Seek professional help - treatment works</li>
            </ul>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Resources</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Medication-Assisted Treatment (MAT)</li>
              <li>✓ Support groups for community and accountability</li>
              <li>✓ Residential treatment programs</li>
              <li>✓ Outpatient services</li>
              <li>✓ Mental health support</li>
            </ul>
          </div>

          <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Support for Loved Ones</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Set healthy boundaries with compassion</li>
              <li>✓ Learn about addiction as a medical condition</li>
              <li>✓ Encourage professional help</li>
              <li>✓ Take care of your own mental health</li>
              <li>✓ Join support groups (Al-Anon, Nar-Anon)</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Help?</h3>
          <p className="mb-6 text-lg">Recovery is possible. Find resources and support in Ottawa County.</p>
          <Link href="/">
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Browse Recovery Resources</button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">Ottawa County Recovery Alliance</p>
          <p className="text-gray-300">Crisis Support: 2-1-1 for Resources | 988 for Suicide Crisis | 911 for Emergencies</p>
        </div>
      </footer>
    </>
  );
}
