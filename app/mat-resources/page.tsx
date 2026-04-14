'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Globe, Clock } from 'lucide-react';
import { Footer } from '@/components/footer';

interface MATProvider {
  name: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  info: string;
  rating?: number;
}

// Phone Call Handler Component
function PhoneLink({ phoneNumber, displayText }: { phoneNumber: string; displayText: string }) {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <button
      onClick={handlePhoneClick}
      className="text-teal-700 font-bold hover:underline cursor-pointer"
      title={isMobile ? "Click to call" : "Click to copy phone number"}
    >
      {displayText}
      {copied && <span className="ml-2 text-sm text-green-600">(Copied!)</span>}
    </button>
  );
}

const MAT_PROVIDERS: MATProvider[] = [
  {
    name: "Western Michigan Comprehensive Treatment Center",
    address: "3584 Fairlanes Ave SW STE 2, Grandville, MI 49418",
    phone: "(616) 797-2124",
    website: "ctcprograms.com",
    hours: "Mon–Fri 6:00 AM – 11:30 AM, Sat 6:30 AM – 9:30 AM",
    info: "Major provider of outpatient medication-assisted treatment for adults struggling with opioid use disorder. Offers methadone, Suboxone, and buprenorphine.",
    rating: 4.7
  },
  {
    name: "Eastside Outpatient Services",
    address: "445 E Sherman Blvd, Muskegon, MI 49444",
    phone: "(231) 739-4359",
    website: "eastsidesac.com",
    hours: "Mon–Fri 6:30 AM – 11:00 AM, Sat 8:00 AM – 10:00 AM",
    info: "Located just north of Ottawa County, provides liquid methadone treatment coupled with counseling and rehabilitative services in a safe environment.",
    rating: 3.3
  },
  {
    name: "Cherry Health – Muskegon Recovery Center",
    address: "1611 Oak Ave, Muskegon, MI 49442",
    phone: "(231) 767-1921",
    website: "cherryhealth.org",
    hours: "Mon–Fri 6:15 AM – 2:00 PM, Sat 6:30 AM – 10:30 AM",
    info: "Offers comprehensive MAT services including methadone and buprenorphine, integrated with individual and group therapy sessions.",
    rating: 4.0
  },
  {
    name: "Holland Hospital Behavioral Health, Outpatient",
    address: "854 Washington Ave STE 330, Holland, MI 49423",
    phone: "(616) 355-3926",
    website: "hollandhospital.org",
    hours: "Mon–Thu 7:30 AM – 9:00 PM, Fri 7:30 AM – 5:00 PM",
    info: "Hospital-based program providing outpatient methadone, buprenorphine, and naltrexone treatment options alongside intensive outpatient services.",
    rating: 2.5
  },
  {
    name: "Reach for Recovery",
    address: "483 Century Ln, Holland, MI 49423",
    phone: "(616) 396-5284",
    website: "reachforrecovery.org",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
    info: "Formerly known as OAR, provides outpatient and residential medication-assisted services tailored for both men and women in the Holland area.",
    rating: 1.5
  },
  {
    name: "Pine Rest Holland Clinic",
    address: "926 S. Washington #210, Holland, MI 49423",
    phone: "(616) 820-3780",
    website: "pinerest.org",
    hours: "M-Th 8:30 AM – 8:00 PM, Fri 8:30 AM – 3:00 PM",
    info: "Comprehensive mental health and substance recovery services including medication-assisted treatment with psychiatric support.",
    rating: 3.8
  }
];

export default function MATResourcesPage() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-teal-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Logo */}
            <Link href="/">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
                alt="Ottawa County Recovery Alliance"
                className="h-80 w-80 object-contain cursor-pointer hover:opacity-80 transition"
              />
            </Link>
            
            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-teal-700">Medication-Assisted Treatment</h1>
              <p className="text-3xl text-gray-700 font-semibold">Evidence-Based Recovery Resources</p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-6 flex-wrap justify-center pt-4">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Resources</button>
              </Link>
              <Link href="/education">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Education</button>
              </Link>
              <Link href="/support-groups">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Support Groups</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-3">Medication-Assisted Treatment (MAT)</h2>
          <p className="text-lg mb-4">Medication-Assisted Treatment (MAT) combines FDA-approved medications with counseling and behavioral therapies to treat opioid use disorder. It is one of the most effective evidence-based treatment approaches available.</p>
          <p className="text-sm opacity-90">The medications used in MAT can include methadone, buprenorphine, and naltrexone. Combined with therapy and support services, MAT helps individuals reduce illicit opioid use, improve treatment outcomes, and restore stability in their lives.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Medication-Assisted Treatment?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Methadone:</strong> A synthetic opioid that prevents withdrawal and reduces cravings</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Buprenorphine (Suboxone):</strong> A partial opioid agonist that's safer and has lower overdose risk</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Naltrexone:</strong> An opioid antagonist that blocks the effects of opioids</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Counseling & Support:</strong> Behavioral therapy and peer support are essential components</span>
            </li>
          </ul>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-8">Medication-Assisted Treatment Providers</h2>

        <div className="grid gap-8 mb-8">
          {MAT_PROVIDERS.map((provider, idx) => (
            <div key={idx} className="bg-white border-2 border-teal-200 rounded-lg p-8 shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                  {provider.rating && (
                    <p className="text-sm text-amber-600 font-semibold">★ {provider.rating} out of 5 stars</p>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{provider.info}</p>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <MapPin className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">{provider.address}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <PhoneLink phoneNumber={provider.phone} displayText={provider.phone} />
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-700">{provider.hours}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Globe className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a
                      href={`https://${provider.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 font-semibold hover:underline"
                    >
                      {provider.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started with MAT</h3>
          <p className="text-gray-700 mb-4">If you or someone you know is struggling with opioid addiction, MAT can be an effective path to recovery:</p>
          <ol className="space-y-3 text-gray-700 ml-4 list-decimal">
            <li><strong>Contact a provider:</strong> Call any of the MAT providers listed above to learn about their programs</li>
            <li><strong>Initial assessment:</strong> You'll undergo an evaluation to determine the best treatment plan</li>
            <li><strong>Medication selection:</strong> Discuss with your provider which medication is right for you</li>
            <li><strong>Begin treatment:</strong> Start your medication and attend counseling sessions regularly</li>
            <li><strong>Ongoing support:</strong> Continue with therapy and support groups for best outcomes</li>
          </ol>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Medication-Assisted Treatment</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Reduces cravings and withdrawal symptoms</li>
            <li>✓ Decreases illicit drug use</li>
            <li>✓ Improves retention in treatment</li>
            <li>✓ Reduces risk of overdose</li>
            <li>✓ Improves employment and social outcomes</li>
            <li>✓ Safe and effective when used as prescribed</li>
            <li>✓ Allows for stable, productive life</li>
          </ul>
        </div>

        <div className="bg-teal-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need Additional Support?</h3>
          <p className="mb-6 text-lg">MAT works best when combined with counseling, peer support, and other recovery services. Check out our other resources for comprehensive support.</p>
          <Link href="/">
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Browse All Resources</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
