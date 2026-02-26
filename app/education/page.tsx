'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SUBSTANCE_GUIDES = [
  {
    id: 1,
    name: "Fentanyl",
    description: "Understanding the opioid crisis and fentanyl awareness",
    badgeColor: "bg-red-100 text-red-700",
    cardBg: "bg-gradient-to-br from-red-50 to-red-100",
    border: "border-l-4 border-red-500",
    icon: "⚠️",
    link: "https://gemini.google.com/share/cd77a5e1d45a"
  },
  {
    id: 2,
    name: "Xylazine (Tranq)",
    description: "Information on tranquilizer use and overdose prevention",
    badgeColor: "bg-purple-100 text-purple-700",
    cardBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    border: "border-l-4 border-purple-500",
    icon: "💊",
    link: "https://gemini.google.com/share/5a6094e7467b"
  },
  {
    id: 3,
    name: "Stimulants",
    description: "Cocaine, methamphetamine, and other stimulant drugs",
    badgeColor: "bg-orange-100 text-orange-700",
    cardBg: "bg-gradient-to-br from-orange-50 to-orange-100",
    border: "border-l-4 border-orange-500",
    icon: "⚡",
    link: "https://gemini.google.com/share/5fced2f07209"
  },
  {
    id: 4,
    name: "Synthetic Cannabinoids",
    description: "K2, Spice, and other synthetic cannabis products",
    badgeColor: "bg-green-100 text-green-700",
    cardBg: "bg-gradient-to-br from-green-50 to-green-100",
    border: "border-l-4 border-green-500",
    icon: "🌿",
    link: "https://gemini.google.com/share/9bb8e42a5cb7"
  },
  {
    id: 5,
    name: "Emerging Drugs",
    description: "New psychoactive substances and club drugs",
    badgeColor: "bg-blue-100 text-blue-700",
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    border: "border-l-4 border-blue-500",
    icon: "🔬",
    link: "https://gemini.google.com/share/2a26f1e97b40"
  },
  {
    id: 6,
    name: "Drug Interactions",
    description: "Dangerous drug combinations and mixing effects",
    badgeColor: "bg-yellow-100 text-yellow-700",
    cardBg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    border: "border-l-4 border-yellow-500",
    icon: "🚫",
    link: "https://gemini.google.com/share/ee3fd2cc103a"
  }
];

const EDUCATION_SECTIONS = [
  {
    title: "Overdose Prevention",
    icon: "🆘",
    content: [
      "Recognize the signs: unresponsiveness, blue lips/fingernails, gurgling sounds, slow breathing",
      "Call 911 immediately - Michigan has Good Samaritan protection",
      "Use Narcan (naloxone) if available - it reverses opioid overdoses",
      "Place person in recovery position and monitor breathing",
      "Stay with the person until emergency services arrive"
    ]
  },
  {
    title: "Harm Reduction",
    icon: "🛡️",
    content: [
      "Never use alone - have someone with you or use supervised consumption",
      "Start with a small test dose if using new supplies",
      "Use sterile equipment every time to prevent infections",
      "Keep emergency contacts and Narcan kits easily accessible",
      "Seek medical help - treatment saves lives"
    ]
  },
  {
    title: "Recovery Resources",
    icon: "🌱",
    content: [
      "Medication-Assisted Treatment (MAT) combines medication with counseling",
      "Support groups provide community understanding and accountability",
      "Residential treatment offers intensive, structured support environments",
      "Outpatient services allow treatment while maintaining work/family",
      "Mental health support addresses underlying causes and trauma"
    ]
  },
  {
    title: "Support for Loved Ones",
    icon: "❤️",
    content: [
      "Set healthy boundaries while showing compassion and care",
      "Learn about addiction as a medical condition, not moral failure",
      "Encourage professional help without forcing or enabling",
      "Take care of your own mental health - caregiver burnout is real",
      "Connect with support groups for families (Al-Anon, Nar-Anon)"
    ]
  }
];

export default function EducationPage() {
  const [selectedGuide, setSelectedGuide] = useState<typeof SUBSTANCE_GUIDES[0] | null>(null);

  return (
    <>
      {/* Emergency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg animate-slide-in-down">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Phone size={16} className="animate-pulse" />
          <span>Crisis Support: <a href="tel:988" className="font-bold underline hover:no-underline">988</a> | <a href="tel:211" className="font-bold underline hover:no-underline">2-1-1</a> | <a href="tel:911" className="font-bold underline hover:no-underline">911</a></span>
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
                  Education & Resources
                </h1>
                <p className="text-xs md:text-sm text-teal-700 font-semibold">Substance Guides & Harm Reduction</p>
              </div>
            </div>
            <nav className="flex gap-2">
              <Link href="/">
                <Button variant="outline" size="sm" className="text-xs md:text-sm border-teal-200 text-teal-700 hover:bg-teal-50 transition-all-smooth">
                  Directory
                </Button>
              </Link>
              <Button size="sm" className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-xs md:text-sm text-white transition-all-smooth hover:shadow-lg">
                Education
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="mb-12 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 rounded-xl p-10 text-white shadow-lg animate-scale-in">
          <h2 className="text-4xl font-bold mb-4 text-balance">Knowledge Saves Lives</h2>
          <p className="text-teal-50 max-w-3xl text-lg leading-relaxed">
            Learn about emerging substances, recognize dangers, and discover paths to recovery. This information is designed to support harm reduction and connect people with immediate help and long-term support.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="substances" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-2 rounded-lg mb-8">
            <TabsTrigger value="substances" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-teal-500 data-[state=active]:text-white rounded transition-all-smooth">
              Substance Guides
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-teal-500 data-[state=active]:text-white rounded transition-all-smooth">
              Safety & Support
            </TabsTrigger>
          </TabsList>

          {/* Substance Guides Tab */}
          <TabsContent value="substances" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SUBSTANCE_GUIDES.map((guide, idx) => (
                <Card
                  key={guide.id}
                  className={`p-6 cursor-pointer transition-all duration-300 overflow-hidden group hover:scale-105 hover:-translate-y-2 hover:shadow-xl ${guide.cardBg} animate-scale-in border-b-4 ${guide.border.replace('border-l-4', '')}`}
                  onClick={() => setSelectedGuide(guide)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{guide.icon}</span>
                    <ChevronRight size={24} className="text-gray-400 group-hover:text-teal-600 group-hover:translate-x-2 transition-all duration-300 font-bold" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-200">{guide.name}</h3>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed group-hover:text-gray-900 transition-colors">{guide.description}</p>
                  <a
                    href={guide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-800 hover:gap-3 transition-all duration-200 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Guide <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </Card>
              ))}
            </div>

            {selectedGuide && (
              <Card className={`${selectedGuide.cardBg} ${selectedGuide.border} border-b-0 p-8 mt-8 animate-slide-in-up shadow-lg`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-3 items-start flex-1">
                    <span className="text-4xl">{selectedGuide.icon}</span>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">About {selectedGuide.name}</h4>
                      <p className="text-gray-700 mt-2">{selectedGuide.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedGuide(null)} 
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold transition-all-smooth hover:shadow-lg"
                >
                  <a href={selectedGuide.link} target="_blank" rel="noopener noreferrer">
                    View Complete Guide <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </Card>
            )}
          </TabsContent>

          {/* Safety & Support Tab */}
          <TabsContent value="education" className="space-y-6 animate-fade-in">
            {EDUCATION_SECTIONS.map((section, idx) => (
              <Card 
                key={idx} 
                className="p-8 border-l-4 border-teal-500 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex gap-4 items-start mb-6">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{section.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">{section.title}</h3>
                  </div>
                </div>
                <ul className="space-y-4 ml-12">
                  {section.content.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-4 text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      <span className="text-teal-600 font-bold text-lg flex-shrink-0 group-hover:scale-150 transition-transform duration-200">✓</span>
                      <span className="leading-relaxed group-hover:translate-x-1 transition-transform duration-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Quick Resources */}
        <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-xl p-10 mb-12 border-2 border-teal-100 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Quick Access Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-l-4 border-red-500 hover:shadow-lg hover:-translate-y-1 transition-all-smooth cursor-pointer group">
              <p className="font-bold text-lg text-gray-900 mb-3 flex gap-2 items-center group-hover:text-red-600 transition-colors">
                <span className="text-2xl">🚨</span> National Hotlines
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="font-semibold">SAMHSA: <a href="tel:1-800-662-4357" className="text-teal-600 hover:underline">1-800-662-4357</a></li>
                <li className="font-semibold">Crisis Text: Text <span className="bg-gray-100 px-2 py-1 rounded">HOME</span> to <a href="tel:741741" className="text-teal-600 hover:underline">741741</a></li>
                <li className="font-semibold">Suicide Lifeline: <a href="tel:988" className="text-teal-600 hover:underline">988</a></li>
              </ul>
            </Card>
            <Card className="p-6 bg-white border-l-4 border-teal-500 hover:shadow-lg hover:-translate-y-1 transition-all-smooth cursor-pointer group">
              <p className="font-bold text-lg text-gray-900 mb-3 flex gap-2 items-center group-hover:text-teal-600 transition-colors">
                <span className="text-2xl">📍</span> Local Support
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="font-semibold"><a href="tel:211" className="text-teal-600 hover:underline">211: Local Resources</a></li>
                <li className="font-semibold">Community Mental Health</li>
                <li className="font-semibold">Recovery Programs</li>
              </ul>
            </Card>
            <Card className="p-6 bg-white border-l-4 border-green-500 hover:shadow-lg hover:-translate-y-1 transition-all-smooth cursor-pointer group">
              <p className="font-bold text-lg text-gray-900 mb-3 flex gap-2 items-center group-hover:text-green-600 transition-colors">
                <span className="text-2xl">🔬</span> Harm Reduction
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="font-semibold">Narcan Access Programs</li>
                <li className="font-semibold">Needle Service Sites</li>
                <li className="font-semibold">Drug Testing Sites</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 rounded-xl p-12 text-white text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Help?</h3>
          <p className="text-teal-50 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Recovery is possible and support is available. Connect with recovery resources and compassionate support right here in Ottawa County.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all-smooth hover:scale-105">
              Browse Recovery Resources
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-14 px-4 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div className="group hover:translate-y-1 transition-all-smooth">
            <h3 className="font-bold text-lg mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">About This Resource</h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
              Educational material on emerging substances and harm reduction to support recovery and community wellbeing in Ottawa County.
            </p>
          </div>
          <div className="group hover:translate-y-1 transition-all-smooth">
            <h3 className="font-bold text-lg mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">Important Notice</h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
              This information is for educational purposes only. If you or someone you know is struggling, please reach out for professional help. Recovery is possible.
            </p>
          </div>
          <div className="group">
            <h3 className="font-bold text-lg mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">Crisis Support</h3>
            <ul className="text-gray-300 text-sm space-y-3 group-hover:text-white transition-colors">
              <li className="font-bold hover:text-red-400 transition-colors"><a href="tel:911">Emergency: 911</a></li>
              <li className="font-bold hover:text-blue-400 transition-colors"><a href="tel:988">Suicide/Crisis: 988</a></li>
              <li className="font-bold hover:text-teal-400 transition-colors"><a href="tel:211">Local Resources: 211</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-xs">
          <p>© 2026 Ottawa County Recovery Alliance. All information provided for harm reduction and education.</p>
        </div>
      </footer>
    </>
  );
}
