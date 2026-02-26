'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Phone, MapPin, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const RESOURCES = [
  // MENTAL HEALTH
  { name: "Community Mental Health of Ottawa County - Holland", category: "Mental Health", address: "12265 James St, Holland", phone: "616-392-1873", info: "Main entry for mental health and IDD services. Includes 24/7 crisis support." },
  { name: "Community Mental Health of Ottawa County - Grand Haven", category: "Mental Health", address: "1111 Fulton St, Grand Haven", phone: "616-842-4357", info: "Outpatient clinical services for North Ottawa residents." },
  { name: "988 Lifeline", category: "Mental Health", address: "National", phone: "988", info: "Suicide & Crisis Lifeline available 24/7." },
  { name: "Pine Rest Urgent Care", category: "Mental Health", address: "300 68th Street SE, Grand Rapids", phone: "616-455-9200", info: "Psychiatric Urgent Care. Open 10a-8p daily." },
  { name: "Crisis Text Line", category: "Mental Health", address: "Mobile", phone: "741741", info: "Text 'HOME' to 741741 for immediate support." },

  // SUBSTANCE RECOVERY
  { name: "Reach for Recovery - Holland", category: "Substance Recovery", address: "483 Century Lane, Holland", phone: "616-396-5284", info: "Comprehensive outpatient and residential programs." },
  { name: "Reach for Recovery - Grand Haven", category: "Substance Recovery", address: "700 Washington Ave #220, Grand Haven", phone: "616-842-6710", info: "Counseling and recovery community connection." },
  { name: "Arbor Circle", category: "Substance Recovery", address: "412 Century Lane, Holland", phone: "616-396-2301", info: "Substance use counseling and foster care navigation." },
  { name: "Samaritas - Holland", category: "Substance Recovery", address: "2450 Van Ommen Dr, Suite C, Holland", phone: "616-350-7781", info: "Outpatient SUD treatment, including MAT and adolescent services." },
  { name: "Wedgewood Christian Services", category: "Substance Recovery", address: "11135 Stratum Ct, Holland", phone: "616-393-0105", info: "Comprehensive SUD and mental health services for youth." },
  { name: "My House Ministry", category: "Substance Recovery", address: "96 West 15th St Suite 306, Holland", phone: "616-953-0772", info: "Transitional recovery housing for women and children." },
  { name: "Building Men for Life", category: "Substance Recovery", address: "370 Country Club Rd, Ste 50, Holland", phone: "616-393-2188", info: "Recovery housing program offering safe, sober living environments." },
  { name: "Chester Ray Center for Men", category: "Substance Recovery", address: "231 Washington Blvd, Holland", phone: "616-396-6872", info: "Residential recovery-oriented housing for men." },
  { name: "Harbor House for Women", category: "Substance Recovery", address: "377 S River Ave, Holland", phone: "616-392-5636", info: "Supportive residential recovery home for women." },
  { name: "Catholic Charities West MI", category: "Substance Recovery", address: "355 Settlers Rd, Holland", phone: "616-796-9595", info: "Specialized adolescent substance use treatment." },

  // FOOD
  { name: "Christian Fellowship Assembly", category: "Food", address: "9930 64th Ave, Allendale", phone: "616-895-7614", info: "Weekly pantry (Wed 5p) and hot dinner (Wed 5:30p)." },
  { name: "LOVE INC Allendale", category: "Food", address: "11620 60th Ave, Allendale", phone: "616-895-5683", info: "Pantry pickup at New to You Thrift Store. Call for intake first." },
  { name: "Community Action House - Food Club", category: "Food", address: "739 Paw Paw Drive, Holland", phone: "616-392-2368", info: "Opportunity Hub housing main offices and all food services." },
  { name: "Holland Community Kitchen", category: "Food", address: "101 E. 13th St, Holland", phone: "616-566-1417", info: "Free daily meals at Western Theological Seminary." },
  { name: "Jehovah Jireh Ministries", category: "Food", address: "4055 VanBuren St, Hudsonville", phone: "616-209-7688", info: "Food distribution Wed/Sat. Bring photo ID." },
  { name: "Harvest Stand Ministries", category: "Food", address: "100 Pine St, Zeeland", phone: "616-748-6003", info: "Serving the Zeeland area with food and clothing by appointment." },

  // HOUSING
  { name: "Good Samaritan Ministries", category: "Housing", address: "513 E. 8th St, Holland", phone: "616-392-7159", info: "Housing Search Assistance, Rapid Re-housing, and CHP programs." },
  { name: "Gateway Mission", category: "Housing", address: "643 S Waverly Rd, Holland", phone: "616-396-2200", info: "Emergency shelter and long-term recovery programs." },
  { name: "Safe Families for Children", category: "Housing", address: "901 Eastern Ave NE, Grand Rapids", phone: "1-855-273-7233", info: "Temporary host homes for families in crisis." },

  // SUPPORT & OTHER
  { name: "St. John's Services", category: "Support Services", address: "524 Washington Ave, Grand Haven", phone: "616-842-6260", info: "Laundry, shower access, and community meals." },
  { name: "West Michigan Works", category: "Employment", address: "121 Clover St, Holland", phone: "616-396-2154", info: "Employment training and career services center." },
  { name: "Harbor Transit", category: "Transportation", address: "Grand Haven Area", phone: "616-842-3200", info: "Public transit services for the Tri-Cities area." }
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; icon: string }> = {
  "Mental Health": { bg: "bg-blue-50 border-blue-200", text: "text-blue-700 bg-blue-100", icon: "🧠" },
  "Substance Recovery": { bg: "bg-orange-50 border-orange-200", text: "text-orange-700 bg-orange-100", icon: "🛡️" },
  "Food": { bg: "bg-green-50 border-green-200", text: "text-green-700 bg-green-100", icon: "🍽️" },
  "Housing": { bg: "bg-amber-50 border-amber-200", text: "text-amber-700 bg-amber-100", icon: "🏠" },
  "Support Services": { bg: "bg-purple-50 border-purple-200", text: "text-purple-700 bg-purple-100", icon: "🤝" },
  "Transportation": { bg: "bg-cyan-50 border-cyan-200", text: "text-cyan-700 bg-cyan-100", icon: "🚌" },
  "Employment": { bg: "bg-indigo-50 border-indigo-200", text: "text-indigo-700 bg-indigo-100", icon: "💼" }
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(RESOURCES.map(r => r.category))).sort()];
  
  const filtered = RESOURCES.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         r.info.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Emergency Bar */}
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Phone size={16} />
          <span>NEED IMMEDIATE HELP? CALL <a href="tel:211" className="font-bold underline">2-1-1</a> OR 911</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-[48px] z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 p-2 rounded-lg">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900">Ottawa County Recovery</h1>
                <p className="text-xs md:text-sm text-slate-500">Community Resource Directory</p>
              </div>
            </div>
            <nav className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs md:text-sm">Directory</Button>
              <Link href="/education">
                <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-xs md:text-sm">
                  <BookOpen size={16} className="mr-1" />
                  Education
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <Input
              placeholder="Search resources or services..."
              className="pl-10 h-11"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "bg-slate-900 hover:bg-slate-800 text-xs" : "text-xs"}
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Results Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource, idx) => {
              const colors = CATEGORY_COLORS[resource.category] || CATEGORY_COLORS["Support Services"];
              return (
                <Card key={idx} className="p-6 flex flex-col h-full hover:shadow-lg transition-shadow border-slate-200">
                  <div className={`inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full mb-4 text-sm font-semibold ${colors.text}`}>
                    <span>{colors.icon}</span>
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{resource.name}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow">{resource.info}</p>
                  <div className="space-y-3 pt-4 border-t border-slate-200 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{resource.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-slate-400 flex-shrink-0" />
                      <a href={`tel:${resource.phone}`} className="text-blue-600 font-semibold hover:underline">
                        {resource.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      asChild
                    >
                      <a href={`https://www.google.com/maps/search/${encodeURIComponent(resource.name + ' ' + resource.address)}`} target="_blank" rel="noopener noreferrer">
                        Maps
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-xs"
                      asChild
                    >
                      <a href={`tel:${resource.phone}`}>
                        Call
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto text-slate-200 mb-4" />
            <p className="text-slate-500 text-lg">No resources found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-bold text-lg mb-4">About This Directory</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A comprehensive guide to support residents in finding mental health, substance recovery, housing, food, and employment services in Ottawa County.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="flex gap-2"><MapPin size={16} className="flex-shrink-0 mt-0.5" /> 12220 Fillmore St, West Olive, MI</li>
              <li className="flex gap-2"><Phone size={16} className="flex-shrink-0" /> (616) 738-4000</li>
              <li>M-F 8:00am to 5:00pm</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Crisis Resources</h3>
            <div className="space-y-3">
              <div className="bg-slate-800 p-3 rounded border-l-4 border-red-500">
                <p className="text-xs font-bold text-red-400">EMERGENCY</p>
                <p className="text-lg font-bold"><a href="tel:911">9-1-1</a></p>
              </div>
              <div className="bg-slate-800 p-3 rounded border-l-4 border-blue-500">
                <p className="text-xs font-bold text-blue-400">MENTAL HEALTH CRISIS</p>
                <p className="text-lg font-bold"><a href="tel:988">9-8-8</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-xs">
          <p>© 2026 Ottawa County, MI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
