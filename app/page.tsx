'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { Footer } from '@/components/footer';

interface Resource {
  name: string;
  category: string;
  address: string;
  phone: string;
  info: string;
  link?: string;
}

const RESOURCES: Resource[] = [
  // Overdose Prevention
  { name: "Naloxone/Narcan", category: "Overdose Prevention", address: "Multiple locations", phone: "See Locations", info: "Naloxone (Narcan) is a life-saving medication to reverse opioid overdose. Free kits are available in Ottawa County. For a list of locations click below.", link: "/naloxone-locations" },
  { name: "Overdose Prevention Training", category: "Overdose Prevention", address: "Contact for location", phone: "616-416-0860", info: "Overdose Prevention and Naloxone Training. To schedule a free overdose prevention training for yourself or your organization contact Daniel at dgardner@miottawa.org or call 616-416-0860." },

  // Harm Reduction
  { name: "Reach for Recovery - Harm Reduction", category: "Harm Reduction", address: "483 Century Lane, Holland", phone: "616-396-5284", info: "Syringe services, harm reduction counseling, and connection to treatment." },
  { name: "Holland Community Health Center", category: "Harm Reduction", address: "336 S. River Ave, Holland", phone: "616-394-3788", info: "Harm reduction services and education. M-F 8a-5p." },

  // Mental Health
  { name: "Community Mental Health of Ottawa County - Holland", category: "Mental Health", address: "12265 James St, Holland", phone: "616-392-1873", info: "Main entry for mental health and IDD services. Includes 24/7 crisis support." },
  { name: "Community Mental Health of Ottawa County - Grand Haven", category: "Mental Health", address: "1111 Fulton St, Grand Haven", phone: "616-842-4357", info: "Outpatient clinical services for North Ottawa residents." },
  { name: "988 Lifeline", category: "Mental Health", address: "National", phone: "988", info: "Suicide & Crisis Lifeline available 24/7 - call or text." },
  { name: "Crisis Text Line", category: "Mental Health", address: "National", phone: "Text HOME to 741741", info: "Crisis support via text message." },
  { name: "Ottawa Community Mental Health 24-Hour Helpline", category: "Mental Health", address: "Multiple locations", phone: "616-396-4357", info: "24-hour mental health crisis helpline." },
  { name: "Pine Rest Holland", category: "Mental Health", address: "926 S. Washington #210, Holland", phone: "616-820-3780", info: "Mental health and psychiatric services. M-Th 8:30a-8p, F 8:30a-3p." },
  { name: "Pine Rest North Shore", category: "Mental Health", address: "17325 Van Wagoner Rd, Spring Lake", phone: "616-847-5145", info: "Mental health services. M-Th 8a-6:30p, F 8a-3p." },
  { name: "Pine Rest Grand Rapids Psychiatric Urgent Care", category: "Mental Health", address: "300 68th Street SE Bldg E, Grand Rapids", phone: "616-455-9200", info: "Psychiatric urgent care. 10a-8p daily." },
  { name: "Encourage Counseling", category: "Mental Health", address: "607 Heritage Court, Holland", phone: "616-396-6172", info: "Professional counseling services. M 9a-6p, Tu-Th 8:30a-6p." },
  { name: "Beacon of Hope Christian Counseling Holland", category: "Mental Health", address: "225 W. 30th St, Holland", phone: "616-594-5380", info: "Christian counseling services." },
  { name: "Beacon of Hope Christian Counseling Grandville", category: "Mental Health", address: "6265 8th Ave, Grandville", phone: "616-594-5380", info: "Christian counseling services." },
  { name: "Bethany Christian Services Holland", category: "Mental Health", address: "11335 James St, Holland", phone: "616-396-0623", info: "Christian counseling and services. M-Th 10a-9p, F 10a-3p." },
  { name: "Bethany Christian Services Grand Haven", category: "Mental Health", address: "1475 Robbins Rd, Grand Haven", phone: "616-396-0623", info: "Christian counseling and services. M-Th 9a-8p." },
  { name: "Mosaic Counseling", category: "Mental Health", address: "1703 S. Despelder St., Grand Haven", phone: "616-842-9160", info: "Professional counseling. M-F 9a-4p." },
  { name: "Trinity Health Hospital ER", category: "Mental Health", address: "1500 E. Sherman Blvd., Muskegon", phone: "231-672-2000", info: "Secured psychiatric facility emergency services." },
  
  // Substance Recovery
  { name: "Reach for Recovery - Holland", category: "Substance Recovery", address: "483 Century Lane, Holland", phone: "616-396-5284", info: "Comprehensive outpatient and residential programs." },
  { name: "Reach for Recovery - Grand Haven", category: "Substance Recovery", address: "700 Washington Ave #220, Grand Haven", phone: "616-842-6710", info: "Counseling and recovery community connection." },
  { name: "Samaritas - Holland", category: "Substance Recovery", address: "Holland", phone: "Contact for details", info: "Substance use treatment and recovery services." },
  { name: "Samaritas - Grand Haven", category: "Substance Recovery", address: "Grand Haven", phone: "Contact for details", info: "Substance use treatment and recovery services." },
  { name: "Pathways/Arbor Circle", category: "Substance Recovery", address: "412 Century Lane, Holland", phone: "616-396-2301", info: "Substance recovery programs and support." },
  { name: "Catholic Charities West Michigan", category: "Substance Recovery", address: "355 Settlers Rd, Holland", phone: "616-796-9595", info: "Adolescent substance recovery programs." },
  { name: "Pine Rest Spring Lake", category: "Substance Recovery", address: "17325 Van Wagoner Rd, Spring Lake", phone: "866-852-4001", info: "Substance recovery and mental health services." },
  { name: "Mercy Health Life Counseling", category: "Substance Recovery", address: "125 E. Southern Ave, Muskegon", phone: "231-726-3582", info: "Counseling services. Walk-ins available." },
  { name: "My House Ministry", category: "Substance Recovery", address: "96 West 15th St Suite 306, Holland", phone: "616-953-0772", info: "Transitional recovery housing for women and children." },
  { name: "Building Men for Life", category: "Substance Recovery", address: "370 Country Club Road Suite 50, Holland", phone: "616-393-2188", info: "Recovery housing for men. Peer-led sober-living program providing transitional recovery housing, certified recovery coaching, and peer support." },
  { name: "Sobar Recovery Community Center", category: "Substance Recovery", address: "710 Chicago Drive Suite 200, Holland", phone: "Call for details", info: "Community recovery center offering support, education, and activities for individuals and families in recovery." },

  // Food
  { name: "Christian Fellowship Assembly", category: "Food", address: "9930 64th Ave, Allendale", phone: "616-895-7614", info: "Food pantry and community meals." },
  { name: "LOVE INC Allendale", category: "Food", address: "6633 Lake Michigan Dr, Allendale", phone: "616-895-5683", info: "Food pantry. M-F 9a-2p. Must bring photo ID and utility bill." },
  { name: "Replenish GVSU Pantry", category: "Food", address: "Kirkhof Center 0074, Allendale", phone: "616-331-7867", info: "Food pantry for GVSU students only. M-F 12p-5p." },
  { name: "Coopersville Cares", category: "Food", address: "180 68th Ave, Coopersville", phone: "616-997-8602", info: "Food pantry. M-Th 9a-2p. Pantry hours: Tu & Th 10a-12p, Tu 5:30p-6:30p." },
  { name: "LOVE INC Grand Haven", category: "Food", address: "326 Ferry St, Grand Haven", phone: "616-846-2701", info: "Food pantry. M-F 9a-5p." },
  { name: "St. John's Episcopal Church", category: "Food", address: "524 Washington Ave, Grand Haven", phone: "616-842-6260 ext 21", info: "Free take-home meals W 5:30p-6:30p, Sun 1p-2p." },
  { name: "The Salvation Army Grand Haven", category: "Food", address: "310 N Despelder St, Grand Haven", phone: "616-842-3380 ext 200", info: "Food pantry by appointment only. M-F 9a-3p." },
  { name: "East Side Food Pantry", category: "Food", address: "995 E. 8th St, Holland", phone: "616-392-8559 ext 18", info: "Serves Holland Heights residents only. M & W 10a-11:30a, F 3p-4:30p." },
  { name: "Holland First Assembly of God", category: "Food", address: "1331 E. 16th St, Holland", phone: "616-396-5646", info: "Food pantry. Call for hours/appointments." },
  { name: "St. Vincent De Paul Center", category: "Food", address: "170 W. 13th St, Holland", phone: "616-394-0676", info: "Food pantry. M & W 3p-8p, Sat 12p-4p." },
  { name: "The Salvation Army Holland", category: "Food", address: "104 Clover St, Holland", phone: "616-392-4461", info: "Food pantry by appointment only." },
  { name: "Community Action House", category: "Food", address: "345 W. 14th St, Holland", phone: "616-392-2368", info: "Food pantry by appointment only." },
  { name: "Holland Community Kitchen", category: "Food", address: "101 E. 13th St, Holland", phone: "616-566-1417", info: "Free community meals M-F 11a-12:30p, Sat & Sun 9a-10:30a." },
  { name: "Holland Drop In Center Mental Health Recovery", category: "Food", address: "636 Hastings Ave #120, Holland", phone: "616-355-2207", info: "Community meals and recovery support. M-Sat 9a-4p." },
  { name: "Jehovah Jireh Ministries of West Michigan", category: "Food", address: "4055 VanBuren St, Hudsonville", phone: "616-209-7688", info: "Food pantry. W 11:30a-5:30p, Sat 8a-1p. Bring your own bags." },
  { name: "Love Your Neighbor", category: "Food", address: "3300 Van Buren St, Hudsonville", phone: "616-662-3300", info: "Food pantry and financial classes. M-F 9a-4p." },
  { name: "The People Center", category: "Food", address: "307 E. Exchange, Spring Lake", phone: "616-844-6710", info: "Food pantry. M & W 11a-3p. Call first for appointment." },
  { name: "Harvest Stand Ministries", category: "Food", address: "100 Pine St Ste 100, Zeeland", phone: "616-748-6003", info: "Food pantry. M 9a-3p, W 1p-6p, Th 9a-12p. By appointment." },
  { name: "Lakeshore Habitat for Humanity", category: "Food", address: "12727 Riley St, Holland", phone: "616-393-8001", info: "Community resources and support." },
  { name: "MI Bridges", category: "Food", address: "State Program", phone: "1-888-544-8773", info: "State food assistance program." },
  { name: "F.O.R. (Food and Other Resources)", category: "Food", address: "Statewide", phone: "1-888-544-8773", info: "Food and other resource assistance." },

  // Housing
  { name: "Good Samaritan Ministries", category: "Housing", address: "513 E. 8th St, Holland", phone: "616-392-7159", info: "Housing Search Assistance, Rapid Re-housing, and CHP programs." },
  { name: "Gateway Mission", category: "Housing", address: "643 S Waverly Rd, Holland", phone: "616-396-2200", info: "Emergency shelter for men and long-term recovery programs." },
  { name: "Gateway Mission Women & Children's Center", category: "Housing", address: "356 Fairbanks Ave, Holland", phone: "616-396-2200", info: "Specialized residential recovery program for women and children seeking housing and support services." },
  { name: "Community Action House", category: "Housing", address: "345 W. 14th St, Holland", phone: "616-392-2368", info: "Permanent supportive housing services." },
  { name: "My House Ministry", category: "Housing", address: "96 West 15th Street Suite 306, Holland", phone: "616-953-0772", info: "Housing & restorative programs for women/children of domestic violence." },
  { name: "Building Men for Life", category: "Housing", address: "370 Country Club Road Suite 50, Holland", phone: "616-393-2188", info: "Recovery housing for men providing safe, structured living conditions for individuals in recovery. Includes peer support and certified recovery coaching." },
  { name: "Lakeshore Habitat for Humanity", category: "Housing", address: "12727 Riley St, Holland", phone: "616-393-8001", info: "Affordable homeownership and housing programs." },
  { name: "Good Samaritan", category: "Housing", address: "Holland area", phone: "616-392-7159", info: "Housing assistance and emergency support." },
  { name: "Degage Ministries - Women", category: "Housing", address: "144 S. Division Ave, Grand Rapids", phone: "616-454-1661", info: "Emergency shelter for women with work programs and ID assistance." },
  { name: "Mel Trotter Ministries", category: "Housing", address: "225 Commerce Ave SW, Grand Rapids", phone: "616-454-8249", info: "Emergency shelter and recovery programs." },
  { name: "Guiding Light Mission - Men", category: "Housing", address: "255 S. Division Ave, Grand Rapids", phone: "616-451-0236", info: "Emergency shelter for men with work programs." },
  { name: "Muskegon Rescue Mission", category: "Housing", address: "400 W. Laketon Ave, Muskegon", phone: "231-727-6085", info: "Emergency shelter. Need picture ID and min. age 18." },
  { name: "Safe Families for Children", category: "Housing", address: "901 Eastern Ave NE, Grand Rapids", phone: "1-855-273-7233", info: "Host homes for children of homeless parents. Average 45-day stay." },

  // Health Care
  { name: "Maternal Infant Health Program Holland", category: "Health Care", address: "12251 James St, Holland", phone: "616-396-5266", info: "Maternal and infant health services." },
  { name: "Maternal Infant Health Program Grand Haven", category: "Health Care", address: "1207 S. Beechtree St., Grand Haven", phone: "616-846-8360", info: "Maternal and infant health services." },
  { name: "Maternal Infant Health Program Hudsonville", category: "Health Care", address: "3100 Port Sheldon, Hudsonville", phone: "616-669-0040", info: "Maternal and infant health services." },
  { name: "Family Life Center Home", category: "Health Care", address: "Allendale", phone: "616-895-8336", info: "Housing and support for pregnant women 18+. Baby supplies provided. 24-hour emergency." },
  { name: "Ottawa Pathways to Better Health", category: "Health Care", address: "Ottawa County", phone: "616-393-5601", info: "Comprehensive health pathway services." },
  { name: "The Community Health Center", category: "Health Care", address: "336 S. River Ave, Holland", phone: "616-394-3788", info: "Primary and preventive health care. M-F 8a-5p." },

  // Employment Services
  { name: "Manpower", category: "Employment", address: "12331 James Street, Unit 30, Holland", phone: "616-748-2000", info: "Employment services and job placement. M-F 8a-5p, Sa 8:45a-12:30p." },
  { name: "Michigan Rehabilitation Services", category: "Employment", address: "121 Clover Street, Holland", phone: "616-395-8495", info: "Vocational rehabilitation services." },
  { name: "West Michigan Works", category: "Employment", address: "121 Clover Street, Holland", phone: "616-396-2154", info: "Employment and training services. M-F 8a-5p." },

  // Senior Services
  { name: "The Little Red House", category: "Senior Services", address: "311 E. Exchange St, Spring Lake", phone: "616-846-5720", info: "Adult day care for elderly. M-F 7a-6p. Hourly rate includes meals." },
  { name: "Senior Resources", category: "Senior Services", address: "560 Seminole Rd, Muskegon", phone: "231-733-8655", info: "Senior services for North Ottawa County. Toll Free: 1-800-442-0054." },
  { name: "Daybreak Norton Shores", category: "Senior Services", address: "572 Lake Forest Lane, Norton Shores", phone: "231-206-0690", info: "Adult day care center. M-F 8a-5p." },
  { name: "Life Circles (PACE Partnership) South", category: "Senior Services", address: "12330 James St H-10, Holland", phone: "616-582-3114", info: "Senior care coordination and support." },
  { name: "Evergreen Commons", category: "Senior Services", address: "55 West 16th St, Holland", phone: "616-355-5118", info: "Adult day care center. M-F 8a-4p." },
  { name: "Simmons Moka", category: "Senior Services", address: "444 32nd St, Holland", phone: "616-396-9049", info: "Adult day care center." },
  { name: "Four Pointes Center for Successful Aging", category: "Senior Services", address: "1051 S. Beacon Blvd, Grand Haven", phone: "616-842-9210", info: "Senior services. M-Th 9a-3p." },
  { name: "CarePatrol of West MI Lakeshore", category: "Senior Services", address: "West Michigan", phone: "616-377-9572", info: "Senior placement for assisted/independent living, memory care, nursing homes." },
  { name: "Senior Reach Ottawa County", category: "Senior Services", address: "Ottawa County", phone: "877-588-4357", info: "Services for adults 60 years old and older." },

  // Veteran Services
  { name: "Veterans Crisis Line", category: "Veteran Services", address: "National", phone: "1-800-273-8255 (press 1)", info: "Veteran crisis support available 24/7. Also text 838255." },
  { name: "Make the Connection", category: "Veteran Services", address: "National", phone: "N/A", info: "Veteran mental health and wellness resources." },
  { name: "Caption Call", category: "Veteran Services", address: "National", phone: "877-872-7260", info: "Phone services for persons with hearing loss." },
  { name: "West Michigan Veterans Assistance Program", category: "Veteran Services", address: "620 Century Ave SW, Grand Rapids", phone: "Contact for details", info: "Food pantry, financial assistance, limited housing, education." },

  // Transportation
  { name: "Harbor Transit", category: "Transportation", address: "Grand Haven", phone: "616-842-3200", info: "Free public transportation. M-F 6a-6p, Sat 9a-4p, Sun 8a-12:30p (Advanced reservation)." },

  // Financial Resources
  { name: "Good Samaritan Ministries", category: "Financial Resources", address: "513 E. 8th St, Holland", phone: "616-392-7159", info: "Housing Search Assistance, Rapid Re-housing, and CHP programs." },
  { name: "Community Action Agency", category: "Financial Resources", address: "Ottawa County", phone: "616-393-4433", info: "Financial assistance and support services for low-income families." },
  { name: "The Salvation Army", category: "Financial Resources", address: "310 N. Despelder St, Grand Haven", phone: "616-842-3380 ext 200", info: "Financial assistance including rent and utilities. M-F 9a-4p." },

  // Miscellaneous
  { name: "St. John's Episcopal Church", category: "Miscellaneous", address: "524 Washington Ave, Grand Haven", phone: "616-842-6260 ext 21", info: "Food pantry, washer/dryer, shower (M-Th 10a-2p). Hot meals Wed 5:30p-6:15p & Sun 1p-1:45p." },
  { name: "St. Patrick's Church", category: "Miscellaneous", address: "920 Fulton Ave, Grand Haven", phone: "616-842-0001", info: "Community services. M-F 8a-5p." },
  { name: "Covenant Life Care Ministry", category: "Miscellaneous", address: "Ottawa County", phone: "616-847-2540", info: "Builds bunk beds and wheelchair ramps for those in need." },

  // Government Services
  { name: "Secretary of State", category: "Government Services", address: "Multiple locations", phone: "1-888-SOS-MICH (767-6424)", info: "Holland: 587 E 8th St; Hudsonville: 5211 Cherry Ave; Grand Haven: 1110 Robbins Rd. M,T,Th,F 9a-5p, W 11a-7p." },
  { name: "Social Security Administration", category: "Government Services", address: "657 Hastings Ave, Holland", phone: "1-877-223-6062", info: "Social security services. M-F 9a-4p." },
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
    const colors: Record<string, { bg: string; border: string; icon: string; button: string; buttonHover: string }> = {
      "Mental Health": { bg: "bg-blue-100", border: "border-b-4 border-blue-500", icon: "🧠", button: "bg-blue-500 hover:bg-blue-600", buttonHover: "text-white" },
      "Substance Recovery": { bg: "bg-orange-100", border: "border-b-4 border-orange-500", icon: "🛡️", button: "bg-orange-500 hover:bg-orange-600", buttonHover: "text-white" },
      "Food": { bg: "bg-green-100", border: "border-b-4 border-green-500", icon: "🍽️", button: "bg-green-500 hover:bg-green-600", buttonHover: "text-white" },
      "Housing": { bg: "bg-amber-100", border: "border-b-4 border-amber-500", icon: "🏠", button: "bg-amber-500 hover:bg-amber-600", buttonHover: "text-white" },
      "Health Care": { bg: "bg-red-100", border: "border-b-4 border-red-500", icon: "🏥", button: "bg-red-500 hover:bg-red-600", buttonHover: "text-white" },
      "Employment": { bg: "bg-purple-100", border: "border-b-4 border-purple-500", icon: "💼", button: "bg-purple-500 hover:bg-purple-600", buttonHover: "text-white" },
      "Senior Services": { bg: "bg-pink-100", border: "border-b-4 border-pink-500", icon: "👴", button: "bg-pink-500 hover:bg-pink-600", buttonHover: "text-white" },
      "Veteran Services": { bg: "bg-indigo-100", border: "border-b-4 border-indigo-500", icon: "🎖️", button: "bg-indigo-500 hover:bg-indigo-600", buttonHover: "text-white" },
      "Transportation": { bg: "bg-cyan-100", border: "border-b-4 border-cyan-500", icon: "🚌", button: "bg-cyan-500 hover:bg-cyan-600", buttonHover: "text-white" },
      "Financial Resources": { bg: "bg-yellow-100", border: "border-b-4 border-yellow-500", icon: "💰", button: "bg-yellow-500 hover:bg-yellow-600", buttonHover: "text-white" },
      "Overdose Prevention": { bg: "bg-red-200", border: "border-b-4 border-red-700", icon: "⚠️", button: "bg-red-700 hover:bg-red-800", buttonHover: "text-white" },
      "Harm Reduction": { bg: "bg-lime-100", border: "border-b-4 border-lime-600", icon: "🤝", button: "bg-lime-600 hover:bg-lime-700", buttonHover: "text-white" },
      "Miscellaneous": { bg: "bg-gray-100", border: "border-b-4 border-gray-400", icon: "📍", button: "bg-gray-400 hover:bg-gray-500", buttonHover: "text-white" },
      "Government Services": { bg: "bg-slate-100", border: "border-b-4 border-slate-500", icon: "🏛️", button: "bg-slate-500 hover:bg-slate-600", buttonHover: "text-white" },
    };
    return colors[category] || { bg: "bg-gray-100", border: "border-b-4 border-gray-400", icon: "📍", button: "bg-gray-400 hover:bg-gray-500", buttonHover: "text-white" };
  };

  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-gradient-to-b from-teal-50 to-white border-b-4 border-teal-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col items-center gap-12 text-center">
            {/* Logo */}
            <Link href="/">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
                alt="Ottawa County Recovery Alliance"
                className="h-96 w-96 object-contain cursor-pointer hover:opacity-80 transition bg-transparent"
              />
            </Link>
            
            {/* Main Title with WordArt Outline Effect */}
            <div className="space-y-6 max-w-3xl">
              <h1 
                className="text-5xl md:text-7xl font-bold text-teal-700 leading-tight"
                style={{
                  WebkitTextStroke: '3px #0D7377',
                  textStroke: '3px #0D7377',
                }}
              >
                Ottawa County Recovery Resource and Education Hub
              </h1>
              
              {/* Tagline/Welcome Message */}
              <div className="bg-teal-100 border-l-4 border-teal-600 p-8 rounded-lg">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                  Welcome to your central destination for healing, education, and community support. This one stop shop provides essential information on various substances alongside connections to local treatment. We believe recovery requires a solid foundation, so we also link you to vital resources like housing, mental health services, and financial assistance. Our goal is to help every resident build an informed and stable path forward.
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons - Uniform and Centered */}
            <div className="flex gap-4 flex-wrap justify-center pt-6">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-lg transition text-lg min-w-44">Resources</button>
              </Link>
              <Link href="/education">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition text-lg min-w-44">Education</button>
              </Link>
              <Link href="/support-groups">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-lg transition text-lg min-w-44">Support Groups</button>
              </Link>
            </div>
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
          {categories.map((cat) => {
            const colors = getCategoryColor(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  selectedCategory === cat 
                    ? `${colors.button} text-white` 
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
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
                    {resource.phone !== "See Locations" && (
                      <div className="flex gap-3 items-center">
                        <Phone size={18} className="text-teal-600 flex-shrink-0" />
                        <a href={`tel:${resource.phone}`} className="text-teal-700 font-bold hover:underline">{resource.phone}</a>
                      </div>
                    )}
                  </div>
                  {resource.link ? (
                    <Link href={resource.link}>
                      <button className="block mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded text-center transition cursor-pointer">
                        See Locations
                      </button>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => {
                        window.location.href = `tel:${resource.phone}`;
                      }}
                      className="block mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded text-center transition cursor-pointer"
                    >
                      Call Now
                    </button>
                  )}
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

      <Footer />
    </>
  )
}
