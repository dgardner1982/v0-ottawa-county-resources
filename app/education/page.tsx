'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const SUBSTANCE_GUIDES = [
  { id: 1, name: "Fentanyl", link: "https://gemini.google.com/share/cd77a5e1d45a" },
  { id: 2, name: "Xylazine (Tranq)", link: "https://gemini.google.com/share/5a6094e7467b" },
  { id: 3, name: "Stimulants", link: "https://gemini.google.com/share/5fced2f07209" },
  { id: 4, name: "Synthetic Cannabinoids", link: "https://gemini.google.com/share/9bb8e42a5cb7" },
  { id: 5, name: "Emerging Drugs", link: "https://gemini.google.com/share/2a26f1e97b40" },
  { id: 6, name: "Drug Interactions", link: "https://gemini.google.com/share/ee3fd2cc103a" }
];

export default function EducationPage() {
  return (
    <>
      <div className="bg-red-600 text-white py-4 px-4 text-center sticky top-0 z-50">
        <p className="font-bold">CALL <a href="tel:211" className="underline">2-1-1</a> FOR LOCAL RESOURCES • <a href="tel:911" className="underline">911</a> FOR LIFE-THREATENING EMERGENCIES</p>
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-teal-700">Education & Resources</h1>
            <Link href="/">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Directory</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-teal-700 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Knowledge Saves Lives</h2>
          <p className="text-lg">Learn about emerging substances, recognize dangers, and discover paths to recovery.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Substance Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBSTANCE_GUIDES.map((guide) => (
              <Card key={guide.id} className="p-6 hover:shadow-lg">
                <h3 className="text-lg font-bold mb-4">{guide.name}</h3>
                <Button asChild className="w-full bg-teal-600 text-white hover:bg-teal-700">
                  <a href={guide.link} target="_blank" rel="noopener noreferrer">
                    Read Full Guide →
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Harm Reduction & Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-blue-50">
              <h3 className="text-xl font-bold mb-4">Overdose Prevention</h3>
              <ul className="space-y-2 text-sm">
                <li>• Recognize the signs of overdose</li>
                <li>• Call 911 immediately - Good Samaritan protection in Michigan</li>
                <li>• Use Narcan (naloxone) if available</li>
                <li>• Place person in recovery position</li>
              </ul>
            </Card>
            <Card className="p-6 bg-green-50">
              <h3 className="text-xl font-bold mb-4">Crisis Resources</h3>
              <div className="space-y-2">
                <p className="text-sm"><strong>SAMHSA:</strong> <a href="tel:1-800-662-4357" className="text-teal-600 underline">1-800-662-4357</a></p>
                <p className="text-sm"><strong>Crisis Text:</strong> Text HOME to <a href="tel:741741" className="text-teal-600 underline">741741</a></p>
                <p className="text-sm"><strong>Suicide Lifeline:</strong> <a href="tel:988" className="text-teal-600 underline">988</a></p>
                <p className="text-sm"><strong>Local Resources:</strong> <a href="tel:211" className="text-teal-600 underline">2-1-1</a></p>
              </div>
            </Card>
          </div>
        </div>

        <div className="bg-teal-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Help?</h3>
          <p className="mb-6">Recovery is possible and support is available in Ottawa County.</p>
          <Link href="/">
            <Button className="bg-white text-teal-700 hover:bg-gray-100 font-bold">Browse Recovery Resources</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
