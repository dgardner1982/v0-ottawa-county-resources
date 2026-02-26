'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

const RESOURCES = [
  { name: "Community Mental Health of Ottawa County - Holland", category: "Mental Health", address: "12265 James St, Holland", phone: "616-392-1873", info: "Main entry for mental health and IDD services. Includes 24/7 crisis support." },
  { name: "Community Mental Health of Ottawa County - Grand Haven", category: "Mental Health", address: "1111 Fulton St, Grand Haven", phone: "616-842-4357", info: "Outpatient clinical services for North Ottawa residents." },
  { name: "988 Lifeline", category: "Mental Health", address: "National", phone: "988", info: "Suicide & Crisis Lifeline available 24/7." },
  { name: "Reach for Recovery - Holland", category: "Substance Recovery", address: "483 Century Lane, Holland", phone: "616-396-5284", info: "Comprehensive outpatient and residential programs." },
  { name: "Reach for Recovery - Grand Haven", category: "Substance Recovery", address: "700 Washington Ave #220, Grand Haven", phone: "616-842-6710", info: "Counseling and recovery community connection." },
  { name: "My House Ministry", category: "Substance Recovery", address: "96 West 15th St Suite 306, Holland", phone: "616-953-0772", info: "Transitional recovery housing for women and children." },
  { name: "Christian Fellowship Assembly", category: "Food", address: "9930 64th Ave, Allendale", phone: "616-895-7614", info: "Weekly pantry (Wed 5p) and hot dinner (Wed 5:30p)." },
  { name: "Holland Community Kitchen", category: "Food", address: "101 E. 13th St, Holland", phone: "616-566-1417", info: "Free daily meals at Western Theological Seminary." },
  { name: "Good Samaritan Ministries", category: "Housing", address: "513 E. 8th St, Holland", phone: "616-392-7159", info: "Housing Search Assistance, Rapid Re-housing, and CHP programs." },
  { name: "Gateway Mission", category: "Housing", address: "643 S Waverly Rd, Holland", phone: "616-396-2200", info: "Emergency shelter and long-term recovery programs." },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(RESOURCES.map(r => r.category))).sort()];
  
  const filtered = RESOURCES.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.info.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string }> = {
      "Mental Health": { bg: "bg-blue-100", border: "border-b-4 border-blue-500", icon: "🧠" },
      "Substance Recovery": { bg: "bg-orange-100", border: "border-b-4 border-orange-500", icon: "🛡️" },
      "Food": { bg: "bg-green-100", border: "border-b-4 border-green-500", icon: "🍽️" },
      "Housing": { bg: "bg-amber-100", border: "border-b-4 border-amber-500", icon: "🏠" },
    };
    return colors[category] || { bg: "bg-gray-100", border: "border-b-4 border-gray-400", icon: "📍" };
  };

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
                className="h-72 w-72 object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold text-teal-700">Recovery Resources</h1>
                <p className="text-gray-600">Ottawa County Community Alliance</p>
              </div>
            </div>
            <Link href="/education">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2 rounded transition">Education</button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-2 border-teal-300 p-4 rounded text-lg"
          />
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === cat 
                  ? "bg-teal-600 text-white" 
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((resource, idx) => {
              const colors = getCategoryColor(resource.category);
              return (
                <div key={idx} className={`${colors.bg} ${colors.border} rounded-lg shadow-md hover:shadow-lg p-6 transition transform hover:scale-105`}>
                  <div className="flex gap-2 mb-3 items-center">
                    <span className="text-2xl">{colors.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{resource.name}</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">{resource.info}</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3 items-start">
                      <MapPin size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{resource.address}</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Phone size={18} className="text-teal-600 flex-shrink-0" />
                      <a href={`tel:${resource.phone}`} className="text-teal-700 font-bold hover:underline">{resource.phone}</a>
                    </div>
                  </div>
                  <a href={`tel:${resource.phone}`} className="block mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded text-center transition">
                    Call Now
                  </a>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No resources found. Try adjusting your search.
            </div>
          )}
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
