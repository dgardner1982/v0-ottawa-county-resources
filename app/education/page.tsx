'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Heart, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SUBSTANCE_GUIDES = [
  {
    id: 1,
    name: "Fentanyl",
    description: "Understanding the opioid crisis and fentanyl awareness",
    color: "bg-red-50 border-red-200",
    icon: "⚠️",
    link: "https://gemini.google.com/share/cd77a5e1d45a"
  },
  {
    id: 2,
    name: "Xylazine (Tranq)",
    description: "Information on tranquilizer use and overdose prevention",
    color: "bg-purple-50 border-purple-200",
    icon: "💊",
    link: "https://gemini.google.com/share/5a6094e7467b"
  },
  {
    id: 3,
    name: "Stimulants",
    description: "Cocaine, methamphetamine, and other stimulant drugs",
    color: "bg-orange-50 border-orange-200",
    icon: "⚡",
    link: "https://gemini.google.com/share/5fced2f07209"
  },
  {
    id: 4,
    name: "Synthetic Cannabinoids",
    description: "K2, Spice, and other synthetic cannabis products",
    color: "bg-green-50 border-green-200",
    icon: "🌿",
    link: "https://gemini.google.com/share/9bb8e42a5cb7"
  },
  {
    id: 5,
    name: "Emerging Drugs",
    description: "New psychoactive substances and club drugs",
    color: "bg-blue-50 border-blue-200",
    icon: "🔬",
    link: "https://gemini.google.com/share/2a26f1e97b40"
  },
  {
    id: 6,
    name: "Drug Interactions",
    description: "Dangerous drug combinations and mixing effects",
    color: "bg-yellow-50 border-yellow-200",
    icon: "🚫",
    link: "https://gemini.google.com/share/ee3fd2cc103a"
  }
];

const EDUCATION_SECTIONS = [
  {
    title: "Overdose Prevention",
    content: [
      "Recognize the signs of overdose: unresponsiveness, blue lips/fingernails, gurgling sounds, slow breathing",
      "Call 911 immediately - there is Good Samaritan protection in Michigan",
      "Use Narcan (naloxone) if available - it can reverse opioid overdoses",
      "Place person in recovery position and monitor breathing",
      "Stay with the person until emergency services arrive"
    ]
  },
  {
    title: "Harm Reduction",
    content: [
      "Never use alone - have someone with you or use supervised consumption",
      "Start with a small test dose if using new supplies",
      "Use sterile equipment every time",
      "Keep emergency contacts and Narcan kits accessible",
      "Seek medical help for substance use - treatment works"
    ]
  },
  {
    title: "Recovery Resources",
    content: [
      "Medication-Assisted Treatment (MAT) combines medication with counseling",
      "Support groups provide community and understanding",
      "Residential treatment offers intensive, structured support",
      "Outpatient services allow treatment while maintaining work/family",
      "Mental health support addresses underlying causes"
    ]
  },
  {
    title: "Support for Loved Ones",
    content: [
      "Set boundaries while showing compassion",
      "Learn about addiction as a medical condition",
      "Encourage professional help without forcing it",
      "Take care of your own mental health",
      "Connect with support groups for families (Al-Anon, Nar-Anon)"
    ]
  }
];

export default function EducationPage() {
  const [selectedGuide, setSelectedGuide] = useState<typeof SUBSTANCE_GUIDES[0] | null>(null);

  return (
    <>
      {/* Emergency Bar */}
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <span>Crisis Support: CALL <a href="tel:211" className="font-bold underline">2-1-1</a>, 988, or 911</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-[48px] z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 p-2 rounded-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900">Education & Resources</h1>
                <p className="text-xs md:text-sm text-slate-500">Substance information & harm reduction</p>
              </div>
            </div>
            <nav className="flex gap-2">
              <Link href="/">
                <Button variant="outline" size="sm" className="text-xs md:text-sm">Directory</Button>
              </Link>
              <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-xs md:text-sm">Education</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Knowledge Saves Lives</h2>
          <p className="text-slate-200 max-w-2xl">
            Learn about substances, recognize dangers, and discover paths to recovery. This information is designed to support harm reduction and connect people with help.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="substances" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="substances">Substance Guides</TabsTrigger>
            <TabsTrigger value="education">Safety & Support</TabsTrigger>
          </TabsList>

          {/* Substance Guides Tab */}
          <TabsContent value="substances" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SUBSTANCE_GUIDES.map((guide) => (
                <Card
                  key={guide.id}
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${guide.color}`}
                  onClick={() => setSelectedGuide(guide)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{guide.icon}</span>
                    <ChevronRight size={20} className="text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{guide.name}</h3>
                  <p className="text-sm text-slate-700 mb-4">{guide.description}</p>
                  <a
                    href={guide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Full Guide <ExternalLink size={14} />
                  </a>
                </Card>
              ))}
            </div>

            {selectedGuide && (
              <Card className="bg-blue-50 border-blue-200 p-6 mt-8">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">About {selectedGuide.name}</h4>
                  <button onClick={() => setSelectedGuide(null)} className="text-slate-400 hover:text-slate-600">×</button>
                </div>
                <p className="text-slate-700 mb-4">{selectedGuide.description}</p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href={selectedGuide.link} target="_blank" rel="noopener noreferrer">
                    View Complete Guide <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </Card>
            )}
          </TabsContent>

          {/* Safety & Support Tab */}
          <TabsContent value="education" className="space-y-6">
            {EDUCATION_SECTIONS.map((section, idx) => (
              <Card key={idx} className="p-6 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.content.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-slate-700">
                      <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Quick Resources */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Access Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 border-slate-200 hover:shadow-lg transition-shadow">
              <p className="font-semibold text-slate-900 mb-2">National Hotlines</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>SAMHSA: 1-800-662-4357</li>
                <li>Crisis Text: Text HOME to 741741</li>
                <li>Suicide Lifeline: 988</li>
              </ul>
            </Card>
            <Card className="p-4 border-slate-200 hover:shadow-lg transition-shadow">
              <p className="font-semibold text-slate-900 mb-2">Local Support</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>211: Local Resources</li>
                <li>Community Mental Health</li>
                <li>Recovery Programs</li>
              </ul>
            </Card>
            <Card className="p-4 border-slate-200 hover:shadow-lg transition-shadow">
              <p className="font-semibold text-slate-900 mb-2">Harm Reduction</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Narcan Access</li>
                <li>Needle Services</li>
                <li>Testing Sites</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Help?</h3>
          <p className="text-blue-100 mb-6">Recovery is possible. Connect with resources and support in Ottawa County.</p>
          <Link href="/">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Browse Recovery Resources
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-bold text-lg mb-4">About This Resource</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Educational material on emerging substances and harm reduction to support recovery in Ottawa County.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Important Notice</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              This information is for educational purposes. If you or someone you know is struggling, please reach out for professional help.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Crisis Support</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>Emergency: 911</li>
              <li>Suicide/Crisis: 988</li>
              <li>Local Resources: 211</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-xs">
          <p>© 2026 Ottawa County Recovery Resources. All information is provided for harm reduction.</p>
        </div>
      </footer>
    </>
  );
}
