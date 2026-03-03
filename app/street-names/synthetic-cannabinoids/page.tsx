'use client';

import Link from 'next/link';

export default function SyntheticCannabinoidsStreetNamesPage() {
  const streetNames = [
    "Spice", "K2", "Mr. Nice Guy", "Black Mamba", "Bliss", "Bombay Blue", "Crazy Clown",
    "Demon Plant", "Fake Weed", "Genie", "Krypton", "Legal Weed", "Liquid Incense", "Northern Lights",
    "Paradise", "Serenity", "Solar Flare", "Spike", "Ultra Senso", "Voodoo", "Wicked X",
    "Zohai", "Herbal Incense", "Potpourri", "Plants Food", "Not For Human Consumption", "Clock Tower",
    "C-1", "Yucatan Fire", "Smacked", "Dank", "Puff", "Skunk", "Ninja", "Apache", "Catnip"
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
            <h1 className="text-5xl font-bold text-teal-700">Synthetic Cannabinoids</h1>
            <p className="text-2xl text-gray-600">Street Names Reference</p>
            <Link href="/synthetic-cannabinoids">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Street Names</h2>
          <p className="text-gray-700">These substances are marketed under hundreds of names to evade legal restrictions. Names are constantly changing as manufacturers attempt to bypass drug identification protocols.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {streetNames.map((name, idx) => (
            <div key={idx} className="p-4 bg-white rounded-lg border border-teal-200 shadow-sm hover:shadow-md transition">
              <p className="font-semibold text-gray-800">{name}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why So Many Names?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold">•</span>
              <span>Legal evasion: When one name becomes controlled, manufacturers create new ones</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold">•</span>
              <span>Deceptive marketing: Labeled as "Legal," "Herbal Incense," or "Plant Food"</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold">•</span>
              <span>Regional variation: Different names used in different areas</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold">•</span>
              <span>Rapid evolution: New formulations require new marketing names</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link href="/synthetic-cannabinoids">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition mx-auto">
              ← Back to Synthetic Cannabinoids Guide
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
