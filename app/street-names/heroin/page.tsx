'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function HeroinStreetNamesPage() {
  const streetNames = [
    "Dope", "Smack", "Horse", "H", "Black Tar", "Brown", "Junk", "Skag", "China White",
    "Mexican Mud", "Tar", "Hero", "Big H", "Boy", "White Horse", "Poison", "Mud", 
    "Dragon", "Stuff", "Gear", "Big Bag", "Piece", "Bundle", "Paper", "Deck", "Bin",
    "Brick", "Cut", "Load", "Riddle", "Dinero", "Pantopon", "Morpho", "Hera", "Hard",
    "Scag", "TNT", "Snowball", "Thai", "Dragon Chasing", "Chasing the Dragon"
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
            <h1 className="text-5xl font-bold text-teal-700">Heroin</h1>
            <p className="text-2xl text-gray-600">Street Names Reference</p>
            <Link href="/drug/heroin">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Street Names</h2>
          <p className="text-gray-700">Heroin is known by many street names that vary by region and dealer. Understanding these names helps recognize when someone may be discussing heroin use.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {streetNames.map((name, idx) => (
            <div key={idx} className="p-4 bg-white rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition">
              <p className="font-semibold text-gray-800">{name}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Learn These Names?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">•</span>
              <span>Recognize when someone is discussing heroin use</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">•</span>
              <span>Street names frequently change and vary by location</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">•</span>
              <span>Help identify paraphernalia and usage indicators</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold">•</span>
              <span>Support awareness in family and community</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link href="/drug/heroin">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition mx-auto">
              ← Back to Heroin Guide
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
