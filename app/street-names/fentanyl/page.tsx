'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function FentanylStreetNamesPage() {
  const streetNames = [
    "Fent", "China White", "Apache", "Tango", "Dance Fever", "Goodfellas", "Jackpot",
    "Lethal Injection", "Murder 8", "Poison", "Super Fent", "Fentyl", "Fent Dope",
    "TNT", "China Girl", "Drug Store Heroin", "Percopop", "Perc30", "M30", "Blues",
    "Pressies", "30s", "Tabs", "Fetty", "Fetty Wap", "White Stuff", "Bricks", "Droplets",
    "Master Drug", "Red Lips", "Tampons", "Rubber Cement", "Candy", "Compressed"
  ];

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
            <h1 className="text-5xl font-bold text-teal-700">Fentanyl</h1>
            <p className="text-2xl text-gray-600">Street Names Reference</p>
            <Link href="/drug/fentanyl">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Street Names</h2>
          <p className="text-gray-700">Fentanyl is 50-100 times more potent than heroin and is often mixed into other drugs without the user's knowledge, increasing overdose risk dramatically.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {streetNames.map((name, idx) => (
            <div key={idx} className="p-4 bg-white rounded-lg border border-red-200 shadow-sm hover:shadow-md transition">
              <p className="font-semibold text-gray-800">{name}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Information</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span>Fentanyl is mixed into heroin, cocaine, and counterfeit pills without user knowledge</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span>A dose as small as 2 milligrams can be lethal</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span>Rapid onset means overdose can happen within minutes</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">⚠️</span>
              <span>Tolerance can develop quickly, increasing overdose risk</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link href="/drug/fentanyl">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition mx-auto">
              ← Back to Fentanyl Guide
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
