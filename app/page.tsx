'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Phone, MapPin, BookOpen, ExternalLink } from 'lucide-react';
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

const CATEGORY_COLORS: Record<string, { badge: string; badgeBg: string; border: string; cardBorder: string; boxShadow: string; hoverBg: string; icon: string }> = {
  "Mental Health": { badge: "bg-blue-100 text-blue-800 border border-blue-300", badgeBg: "from-blue-50 to-blue-100", border: "border-b-4 border-blue-500", cardBorder: "border-blue-200", boxShadow: "hover:shadow-[0_12px_32px_rgba(59,130,246,0.2)]", hoverBg: "hover:bg-blue-50", icon: "🧠" },
  "Substance Recovery": { badge: "bg-orange-100 text-orange-800 border border-orange-300", badgeBg: "from-orange-50 to-orange-100", border: "border-b-4 border-orange-500", cardBorder: "border-orange-200", boxShadow: "hover:shadow-[0_12px_32px_rgba(249,115,22,0.2)]", hoverBg: "hover:bg-orange-50", icon: "🛡️" },
  "Food": { badge: "bg-green-100 text-green-800 border border-green-300", badgeBg: "from-green-50 to-green-100", border: "border-b-4 border-green-500", cardBorder: "border-green-200", boxShadow: "hover:shadow-[0_12px_32px_rgba(34,197,94,0.2)]", hoverBg: "hover:bg-green-50", icon: "🍽️" },
  "Housing": { badge: "bg-amber-100 text-amber-800 border border-amber-300", badgeBg: "from-amber-50 to-amber-100", border: "border-b-4 border-amber-500", cardBorder: "border-amber-200", boxShadow: "hover:shadow-[0_12px_32px_rgba(217,119,6,0.2)]", hoverBg: "hover:bg-amber-50", icon: "🏠" },
  "Support Services": { badge: "bg-purple-100 text-purple-800 border border-purple-300", badgeBg: "from-purple-50 to-purple-100", border: "border-b-4 border-purple-500", cardBorder: "border-purple-200", boxShadow: "hover:shadow-[0_12px_32px_rgba(168,85,247,0.2)]", hoverBg: "hover:bg-purple-50", icon: "🤝" },
  "Transportation": { badge: "bg-cyan-100 text-cyan-800 border border-cyan-300", badgeBg: "from-cyan-50 to-cyan-100", border: "border-b-4 border-cyan-500", cardBorder: "border-cyan-200", boxShadow: "hover:shadow-[0_12px_32px_rgba(34,211,238,0.2)]", hoverBg: "hover:bg-cyan-50", icon: "🚌" },
  "Employment": { badge: "bg-indigo-100 text-indigo-800 border border-indigo-300", badgeBg: "from-indigo-50 to-indigo-100", border: "border-b-4 border-indigo-500", cardBorder: "border-indigo-200", boxShadow: "hover:shadow-[0_12px_32px_rgba(99,102,241,0.2)]", hoverBg: "hover:bg-indigo-50", icon: "💼" }
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
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg animate-slide-in-down">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Phone size={16} className="animate-pulse" />
          <span>NEED IMMEDIATE HELP? CALL <a href="tel:211" className="font-bold underline hover:no-underline">2-1-1</a> OR <a href="tel:911" className="font-bold underline hover:no-underline">911</a></span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b-2 border-teal-100 sticky top-12 z-40 shadow-sm animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
              <div className="h-20 w-20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 flex-shrink-0">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Certificate%20Of%20ACHIEVEMENT-dxJjQFgC05XjDzcsYQoQuEaA098j6O.jpg"
                  alt="Ottawa County Recovery Alliance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Recovery Resources
                </h1>
                <p className="text-xs md:text-sm text-teal-700 font-semibold">Ottawa County Community Alliance</p>
              </div>
            </div>
            <nav className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs md:text-sm border-teal-200 text-teal-700 hover:bg-teal-50 transition-all-smooth">
                Directory
              </Button>
              <Link href="/education">
                <Button size="sm" className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-xs md:text-sm text-white transition-all-smooth hover:shadow-lg">
                  <BookOpen size={16} className="mr-1" />
                  Education
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Search */}
        <div className="mb-10 animate-scale-in">
          <div className="relative group">
            <Search className="absolute left-4 top-3.5 text-teal-400 group-hover:text-teal-600 transition-colors" size={20} />
            <Input
              placeholder="Search resources or services..."
              className="pl-12 h-12 border-2 border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all-smooth text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 animate-slide-in-up">
          {categories.map((cat, idx) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-medium transition-all-smooth hover:scale-105 ${
                selectedCategory === cat 
                  ? "bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white shadow-md" 
                  : "border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300"
              }`}
              size="sm"
              style={{ animationDelay: `${idx * 30}ms` }}
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
                <Card 
                  key={idx} 
                  className={`p-6 flex flex-col h-full transition-all duration-300 ${colors.cardBorder} border-2 ${colors.hoverBg} ${colors.boxShadow} transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-scale-in`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <div className={`bg-gradient-to-r ${colors.badgeBg} ${colors.border} rounded-lg p-6 mb-4 transition-all duration-300 group-hover:shadow-md`}>
                    <div className={`inline-flex items-center gap-3 ${colors.badge} px-4 py-2 rounded-full text-sm font-bold mb-3 transition-all duration-300 group-hover:scale-110`}>
                      <span className="text-lg">{colors.icon}</span>
                      {resource.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {resource.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed group-hover:text-gray-700 transition-colors">{resource.info}</p>
                    
                    <div className="space-y-4 pt-4 border-t-2 border-gray-200 text-sm">
                      <div className="flex items-start gap-3 group/item transition-all duration-200 hover:translate-x-1">
                        <MapPin size={18} className="text-teal-600 mt-0.5 flex-shrink-0 group-hover/item:text-teal-700 transition-colors" />
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">{resource.address}</span>
                      </div>
                      <div className="flex items-center gap-3 group/item transition-all duration-200 hover:translate-x-1">
                        <Phone size={18} className="text-teal-600 flex-shrink-0 group-hover/item:text-teal-700 transition-colors" />
                        <a href={`tel:${resource.phone}`} className="text-teal-700 font-bold hover:text-teal-800 hover:underline transition-all duration-200">
                          {resource.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6 pt-4 border-t-2 border-gray-200">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 hover:shadow-md group/btn"
                      asChild
                    >
                      <a href={`https://www.google.com/maps/search/${encodeURIComponent(resource.name + ' ' + resource.address)}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1 group-hover/btn:translate-x-1 transition-transform" />
                        Maps
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-xs text-white transition-all duration-200 hover:shadow-md group/btn"
                      asChild
                    >
                      <a href={`tel:${resource.phone}`}>
                        <Phone size={14} className="mr-1 group-hover/btn:animate-pulse transition-all" />
                        Call
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 animate-fade-in">
            <Search size={56} className="mx-auto text-teal-200 mb-4" />
            <p className="text-gray-500 text-lg font-medium mb-2">No resources found</p>
            <p className="text-gray-400 text-sm mb-6">Try adjusting your search or filters</p>
            <Button
              variant="outline"
              className="border-teal-200 text-teal-700 hover:bg-teal-50 font-medium transition-all-smooth hover:shadow-md"
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
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-14 px-4 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div className="group hover:translate-y-1 transition-all-smooth">
            <h3 className="font-bold text-lg mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">About This Directory</h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
              A comprehensive guide to support residents in finding mental health, substance recovery, housing, food, and employment services across Ottawa County.
            </p>
          </div>
          <div className="group hover:translate-y-1 transition-all-smooth">
            <h3 className="font-bold text-lg mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">Contact Information</h3>
            <ul className="text-gray-300 text-sm space-y-3">
              <li className="flex gap-2 group-hover:text-white transition-colors"><MapPin size={16} className="flex-shrink-0 mt-0.5" /> 12220 Fillmore St, West Olive, MI</li>
              <li className="flex gap-2 group-hover:text-white transition-colors"><Phone size={16} className="flex-shrink-0" /> (616) 738-4000</li>
              <li className="group-hover:text-white transition-colors">M-F 8:00am to 5:00pm</li>
            </ul>
          </div>
          <div className="group">
            <h3 className="font-bold text-lg mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">Crisis Resources</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-4 rounded-lg border-l-4 border-red-500 hover:from-red-900/50 hover:to-red-800/50 transition-all-smooth cursor-pointer">
                <p className="text-xs font-bold text-red-400 mb-1">EMERGENCY</p>
                <p className="text-xl font-bold text-white hover:text-red-300 transition-colors"><a href="tel:911">9-1-1</a></p>
              </div>
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-4 rounded-lg border-l-4 border-blue-500 hover:from-blue-900/50 hover:to-blue-800/50 transition-all-smooth cursor-pointer">
                <p className="text-xs font-bold text-blue-400 mb-1">MENTAL HEALTH CRISIS</p>
                <p className="text-xl font-bold text-white hover:text-blue-300 transition-colors"><a href="tel:988">9-8-8</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-xs">
          <p>© 2026 Ottawa County Recovery Alliance. All rights reserved. • Made with compassion to support our community</p>
        </div>
      </footer>
    </>
  );
}
