'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Phone, MapPin, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const RESOURCES = [
  { name: "Community Mental Health of Ottawa County - Holland", category: "Mental Health", address: "12265 James St, Holland", phone: "616-392-1873", info: "Main entry for mental health and IDD services. Includes 24/7 crisis support." },
  { name: "Community Mental Health of Ottawa County - Grand Haven", category: "Mental Health", address: "1111 Fulton St, Grand Haven", phone: "616-842-4357", info: "Outpatient clinical services for North Ottawa residents." },
  { name: "Reach for Recovery - Holland", category: "Substance Recovery", address: "483 Century Lane, Holland", phone: "616-396-5284", info: "Comprehensive outpatient and residential programs." },
  { name: "Christian Fellowship Assembly", category: "Food", address: "9930 64th Ave, Allendale", phone: "616-895-7614", info: "Weekly pantry (Wed 5p) and hot dinner (Wed 5:30p)." },
  { name: "Good Samaritan Ministries", category: "Housing", address: "513 E. 8th St, Holland", phone: "616-392-7159", info: "Housing Search Assistance, Rapid Re-housing, and CHP programs." },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Mental Health": "border-blue-500",
  "Substance Recovery": "border-orange-500",
  "Food": "border-green-500",
  "Housing": "border-amber-500",
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(RESOURCES.map(r => r.category))).sort()];
  
  const filtered = RESOURCES.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="bg-red-600 text-white py-4 px-4 text-center sticky top-0 z-50">
        <p className="font-bold">CALL <a href="tel:211" className="underline">2-1-1</a> FOR LOCAL RESOURCES • <a href="tel:911" className="underline">911</a> FOR LIFE-THREATENING EMERGENCIES</p>
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-teal-700">Ottawa County Recovery Resources</h1>
            <Link href="/education">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Education</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-teal-300 p-3 rounded"
          />
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "bg-teal-600 text-white" : "bg-gray-200"}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource, idx) => (
            <Card key={idx} className={`p-6 border-4 ${CATEGORY_COLORS[resource.category] || 'border-gray-300'} hover:shadow-lg`}>
              <h3 className="text-lg font-bold mb-2">{resource.name}</h3>
              <p className="text-sm text-gray-700 mb-4">{resource.info}</p>
              <div className="space-y-2 text-sm">
                <p><MapPin size={16} className="inline mr-2" />{resource.address}</p>
                <p><Phone size={16} className="inline mr-2" /><a href={`tel:${resource.phone}`} className="text-teal-600 font-bold">{resource.phone}</a></p>
              </div>
              <Button asChild className="mt-4 w-full bg-teal-600 text-white">
                <a href={`tel:${resource.phone}`}>Call Now</a>
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
