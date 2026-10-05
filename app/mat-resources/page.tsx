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
              <h1 className="text-8xl font-bold text-teal-700">Medicated Assisted Treatment</h1>
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
          <h2 className="text-3xl font-bold mb-3">Medicated Assisted Treatment (MAT)</h2>
          <p className="text-lg mb-4">Medicated Assisted Treatment (MAT) combines FDA-approved medications with counseling and behavioral therapies to treat opioid use disorder. It is one of the most effective evidence-based treatment approaches available.</p>
          <p className="text-sm opacity-90">The medications used in MAT can include methadone, buprenorphine, and naltrexone. Combined with therapy and support services, MAT helps individuals reduce illicit opioid use, improve treatment outcomes, and restore stability in their lives.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Medicated Assisted Treatment?</h3>
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

        <section aria-labelledby="mat-details-heading" className="mb-12 overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-lg">
          <div className="bg-teal-700 px-6 py-8 text-white sm:px-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-100">Treatment and recovery options</p>
            <h2 id="mat-details-heading" className="text-3xl font-bold sm:text-4xl">Understanding MAT medications</h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-teal-50 sm:text-lg">Medicated Assisted Treatment (MAT), increasingly referred to as MOUD (Medications for Opioid Use Disorder) or MAUD (Medications for Alcohol Use Disorder), combines FDA-approved medications with counseling, behavioral therapies, and social support services.</p>
          </div>

          <div className="space-y-8 bg-teal-50/60 px-6 py-8 sm:px-10">
            <div className="rounded-xl border border-teal-200 bg-white p-6">
              <h3 className="text-2xl font-bold text-gray-900">How MAT supports recovery</h3>
              <p className="mt-3 leading-7 text-gray-700">Rather than substituting one drug for another, MAT helps normalize brain chemistry, blocks the euphoric effects of substances, relieves severe physiological cravings, and prevents withdrawal without inducing a high.</p>
            </div>

            <div>
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-700">Medications used in MAT</p>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900">Treatment for opioid and alcohol use disorders</h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-gray-600">Medication choices are made with a qualified healthcare provider and are part of a broader recovery plan.</p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
                  <h4 className="text-xl font-bold text-orange-950">1. Opioid Use Disorder (OUD)</h4>
                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    <article className="rounded-lg bg-white p-5 shadow-sm">
                      <h5 className="text-lg font-bold text-gray-900">Buprenorphine</h5>
                      <p className="mt-1 text-sm font-semibold text-teal-700">Suboxone, Subutex, Sublocade</p>
                      <dl className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                        <div><dt className="font-bold text-gray-900">What it is</dt><dd>A partial opioid agonist.</dd></div>
                        <div><dt className="font-bold text-gray-900">What it does</dt><dd>Activates opioid receptors enough to relieve cravings and withdrawal symptoms. Its ceiling effect means higher doses do not increase euphoria or respiratory depression. Suboxone also includes naloxone to discourage injection.</dd></div>
                        <div><dt className="font-bold text-gray-900">Use</dt><dd>Prescribed by certified healthcare providers in office-based settings or clinics, or administered as a monthly extended-release injection.</dd></div>
                      </dl>
                    </article>
                    <article className="rounded-lg bg-white p-5 shadow-sm">
                      <h5 className="text-lg font-bold text-gray-900">Methadone</h5>
                      <dl className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                        <div><dt className="font-bold text-gray-900">What it is</dt><dd>A long-acting full opioid agonist.</dd></div>
                        <div><dt className="font-bold text-gray-900">What it does</dt><dd>Fully binds to opioid receptors, eliminating cravings and withdrawal for 24 to 36 hours. Its slow action provides stability without the rapid spikes that trigger a high.</dd></div>
                        <div><dt className="font-bold text-gray-900">Use</dt><dd>Highly regulated and dispensed daily through federally certified Opioid Treatment Programs.</dd></div>
                      </dl>
                    </article>
                    <article className="rounded-lg bg-white p-5 shadow-sm">
                      <h5 className="text-lg font-bold text-gray-900">Naltrexone</h5>
                      <p className="mt-1 text-sm font-semibold text-teal-700">Vivitrol, Revia</p>
                      <dl className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                        <div><dt className="font-bold text-gray-900">What it is</dt><dd>A full opioid antagonist.</dd></div>
                        <div><dt className="font-bold text-gray-900">What it does</dt><dd>Blocks opioid receptors, so using opioids while taking it does not produce euphoric effects or pain relief.</dd></div>
                        <div><dt className="font-bold text-gray-900">Use</dt><dd>Used for relapse prevention after a complete detox period, typically 7 to 14 days opioid-free. It is commonly administered as a monthly intramuscular injection.</dd></div>
                      </dl>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
              <p><strong>Important:</strong> Treatment should be individualized with a qualified healthcare professional. Do not start, stop, or change medication without medical guidance.</p>
            </div>
          </div>
        </section>

        <h2 className="text-4xl font-bold text-gray-900 mb-8">Medicated Assisted Treatment Providers</h2>

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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Medicated Assisted Treatment</h3>
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
