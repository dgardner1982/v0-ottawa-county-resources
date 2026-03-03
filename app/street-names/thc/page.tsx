'use client';

import Link from 'next/link';

export default function StreetNamesPage() {
  const streetNames = [
    "THC", "Weed", "Pot", "Grass", "Dope", "Hash", "Hashish", "Marijuana",
    "Ganja", "Mary Jane", "Reefer", "Spliff", "Joint", "Blunt", "Fatty",
    "Greenery", "Chronic", "Bud", "Trees", "Herb", "Dank", "Loud", "Skunk",
    "Indica", "Sativa", "Hybrid", "Edibles", "Concentrates", "Shatter", "Wax"
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
            <h1 className="text-6xl font-bold text-teal-700">THC - Street Names</h1>
            <p className="text-2xl text-gray-600">Common Names & Variants</p>
            <Link href="/drug/thc">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to THC
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-lime-100 border-l-4 border-lime-500 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-lime-900 mb-3">Street Names for THC</h2>
          <p className="text-gray-700">THC goes by many different names and product types. Learning these can help identify use and have informed conversations about risks.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {streetNames.map((name, idx) => (
            <div key={idx} className="p-4 bg-lime-50 border border-lime-200 rounded-lg font-semibold text-lime-900 text-center">
              {name}
            </div>
          ))}
        </div>

        <div className="bg-lime-50 border-l-4 border-lime-500 p-6 rounded-lg">
          <p className="text-gray-700">Names are constantly changing as new products and variants emerge. High-potency products and concentrates pose increased risks. If you encounter unfamiliar terms being used in connection with substance use, it's worth investigating further.</p>
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
