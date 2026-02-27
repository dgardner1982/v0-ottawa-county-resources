'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState('infograph');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };
  
  const drugs = [
    { name: "Cocaine", slug: "cocaine", color: "border-red-500", bgColor: "bg-red-50", image: "/drug-icons/cocaine.jpg" },
    { name: "Methamphetamine", icon: "⚡", slug: "methamphetamine", color: "border-orange-500", bgColor: "bg-orange-50" },
    { name: "Fentanyl", icon: "⚠️", slug: "fentanyl", color: "border-red-600", bgColor: "bg-red-100" },
    { name: "Xylazine", slug: "xylazine", color: "border-purple-500", bgColor: "bg-purple-50", image: "/drug-icons/xylazine.jpg" },
    { name: "Methadone", slug: "methadone", color: "border-blue-500", bgColor: "bg-blue-50", image: "/drug-icons/methadone.jpg" },
    { name: "Kratom", icon: "🍃", slug: "kratom", color: "border-green-500", bgColor: "bg-green-50" },
    { name: "Inhalants", icon: "💨", slug: "inhalants", color: "border-pink-500", bgColor: "bg-pink-50" },
    { name: "THC", slug: "thc", color: "border-lime-500", bgColor: "bg-lime-50", image: "/drug-icons/thc.jpg" },
    { name: "Synthetic Cannabinoids", icon: "🌿", slug: "synthetic-cannabinoids", color: "border-teal-500", bgColor: "bg-teal-50" }
  ];

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
            {/* Logo */}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
              alt="Ottawa County Recovery Alliance"
              className="h-80 w-80 object-contain"
            />
            
            {/* Title - Much Larger */}
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-teal-700">Education & Resources</h1>
              <p className="text-3xl text-gray-700 font-semibold">Substance Guides & Harm Reduction</p>
            </div>
            
            {/* Navigation Buttons - Uniform and Centered */}
            <div className="flex gap-6 flex-wrap justify-center pt-4">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Resources</button>
              </Link>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Education</button>
              <Link href="/support-groups">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Support Groups</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-3">Knowledge Saves Lives</h2>
          <p className="text-lg">Learn about emerging substances, recognize dangers, and discover paths to recovery. This information is for harm reduction and education based on current CDC and public health data.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-gray-300" ref={contentRef}>
          <button
            onClick={() => handleTabClick('infograph')}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'infograph'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Drug Information & Effects
          </button>
          <button
            onClick={() => handleTabClick('support')}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'support'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Resources & Support
          </button>
        </div>

        {/* Drug Boxes Tab */}
        {activeTab === 'infograph' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {drugs.map((drug, idx) => {
              const href = `/drug/${drug.slug}`;
              return (
                <Link key={idx} href={href}>
                  <div className={`${drug.bgColor} rounded-lg shadow-md hover:shadow-xl p-8 border-l-4 ${drug.color} transition transform hover:scale-105 cursor-pointer text-center`}>
                    <div className="mb-4">
                      {drug.image ? (
                        <img src={drug.image} alt={drug.name} className="w-20 h-20 object-contain mx-auto" />
                      ) : (
                        <div className="text-5xl">{drug.icon}</div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{drug.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Interactive Infograph Tab - Now removed, showing drug boxes instead */}
        

        {/* Resources & Support Tab */}
        {activeTab === 'support' && (
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
        )}

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
          <p className="text-gray-300 text-sm">Crisis Support: 2-1-1 for Resources | 988 for Suicide Crisis | 9-1-1 for Emergencies</p>
          <p className="text-gray-400 text-xs mt-4">Information based on CDC data and current public health research (2026)</p>
        </div>
      </footer>
    </>
  );
}
