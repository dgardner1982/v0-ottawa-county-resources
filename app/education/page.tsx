'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Input } from '@/components/ui/input';
import {
  AlertTriangle,
  Atom,
  Brain,
  Droplets,
  FlaskConical,
  Leaf,
  Microscope,
  Pill,
  ShieldAlert,
  Sparkles,
  Syringe,
  TestTube,
  Wind,
  Wine,
  Zap,
  Search,
} from 'lucide-react';

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState('infograph');
  const [supportTab, setSupportTab] = useState<'resources' | 'support'>('resources');
  const [searchQuery, setSearchQuery] = useState('');

  const substanceResources = [
    { name: 'Free Naloxone/Narcan', type: 'Overdose Prevention', description: 'Free naloxone kits and locations throughout Ottawa County.', href: '/naloxone-locations' },
    { name: 'Overdose Prevention Training', type: 'Overdose Prevention', description: 'Free training for individuals and organizations. Call 616-393-4489 or email dgardner@miottawa.org.', href: 'tel:6163934489' },
    { name: 'Grand Rapids Red Project', type: 'Harm Reduction', description: 'Comprehensive harm reduction services and a mobile health unit serving the area.', href: 'https://www.redproject.org' },
    { name: 'Arbor Circle - Holland', type: 'Substance Recovery', description: 'Substance use treatment and recovery programs. Call (616) 396-2301.', href: 'https://arborcircle.org' },
    { name: 'Reach for Recovery', type: 'Substance Recovery', description: 'Counseling, recovery community connection, and outpatient and residential programs.', href: 'https://reachforrecovery.org' },
    { name: 'Community Mental Health of Ottawa County', type: 'Substance Recovery', description: 'Access services in Holland or Grand Haven, with crisis support available 24/7.', href: 'https://www.miottawa.org/cmh' },
    { name: 'New Vision Withdrawal Management', type: 'Substance Recovery', description: 'Inpatient detoxification and withdrawal management at Trinity Health Grand Haven Hospital.', href: 'https://trinityhealthmichigan.org' },
    { name: 'Samaritas', type: 'Medication-Assisted Treatment', description: 'Medication-assisted treatment and integrated recovery support in Holland and Grand Haven.', href: 'https://www.samaritas.org' },
  ];

  const supportGroups = [
    { name: 'Alcoholics Anonymous (AA)', description: 'Fellowship for people recovering from alcohol addiction using a 12-step program.', href: 'https://www.aa.org' },
    { name: 'Narcotics Anonymous (NA)', description: 'Peer support for recovery from drug addiction through 12-step principles.', href: 'https://www.na.org' },
    { name: 'SMART Recovery', description: 'A science-based approach emphasizing self-empowerment and a four-point program.', href: 'https://www.smartrecovery.org' },
    { name: 'Crystal Meth Anonymous (CMA)', description: 'Support specifically for people struggling with methamphetamine addiction.', href: 'https://www.crystalmeth.org' },
    { name: 'Cocaine Anonymous (CA)', description: 'A 12-step program for cocaine and other stimulant addiction.', href: 'https://www.ca.org' },
    { name: 'Al-Anon/Alateen', description: 'Support for families and friends affected by someone else’s drinking.', href: 'https://www.al-anon.org' },
    { name: 'Nar-Anon', description: 'Support for families and friends affected by someone’s drug addiction.', href: 'https://www.nar-anon.org' },
    { name: 'Recovery Dharma', description: 'A mindfulness-based, Buddhist-inspired approach to addiction recovery.', href: 'https://www.recoverydharma.org' },
  ];
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };
  
  const drugs = [
    { name: "Alcohol", symbol: Wine, slug: "alcohol", color: "border-amber-600", bgColor: "bg-amber-50" },
    { name: "Bromazolam", symbol: Pill, slug: "bromazolam", color: "border-slate-700", bgColor: "bg-slate-50" },
    { name: "7-Hydroxymitragynine (7-OH)", symbol: Leaf, slug: "7-hydroxymitragynine", color: "border-lime-600", bgColor: "bg-lime-50" },
    { name: "Alprazolam", symbol: Pill, slug: "alprazolam", color: "border-sky-600", bgColor: "bg-sky-50" },
    { name: "Adderall", symbol: Zap, slug: "adderall", color: "border-orange-600", bgColor: "bg-orange-50" },
    { name: "Cocaine", symbol: Pill, slug: "cocaine", color: "border-red-500", bgColor: "bg-red-50", image: "/drug-icons/cocaine.jpg" },
    { name: "Crack Cocaine", symbol: Atom, slug: "crack-cocaine", color: "border-red-700", bgColor: "bg-red-50" },
    { name: "Dextromethorphan (DXM)", symbol: FlaskConical, slug: "dextromethorphan", color: "border-fuchsia-600", bgColor: "bg-fuchsia-50" },
    { name: "GHB", symbol: Droplets, slug: "ghb", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "MDMA", symbol: Sparkles, slug: "mdma", color: "border-pink-600", bgColor: "bg-pink-50" },
    { name: "Oxycodone", symbol: Pill, slug: "oxycodone", color: "border-amber-600", bgColor: "bg-amber-50" },
    { name: "Pregabalin", symbol: Brain, slug: "pregabalin", color: "border-green-600", bgColor: "bg-green-50" },
    { name: "Cyclorphine", symbol: ShieldAlert, slug: "cyclorphine", color: "border-purple-700", bgColor: "bg-purple-100" },
    { name: "Fentanyl", symbol: AlertTriangle, slug: "fentanyl", color: "border-red-600", bgColor: "bg-red-100" },
    { name: "Hemp-Derived Cannabinoids", symbol: Leaf, slug: "hemp-derived-cannabinoids", color: "border-green-600", bgColor: "bg-green-100" },
    { name: "Heroin", symbol: Syringe, slug: "heroin", color: "border-amber-700", bgColor: "bg-amber-50" },
    { name: "Nitrous Oxide", symbol: Wind, slug: "nitrous-oxide", color: "border-teal-600", bgColor: "bg-teal-50" },
    { name: "Duster", symbol: Wind, slug: "duster", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Ketamine", symbol: TestTube, slug: "ketamine", color: "border-indigo-500", bgColor: "bg-indigo-50" },
    { name: "Kratom", symbol: Leaf, slug: "kratom", color: "border-green-500", bgColor: "bg-green-50" },
    { name: "Medetomidine", symbol: Microscope, slug: "medetomidine", color: "border-indigo-600", bgColor: "bg-indigo-100" },
    { name: "Methadone", symbol: Pill, slug: "methadone", color: "border-blue-500", bgColor: "bg-blue-50", image: "/drug-icons/methadone.jpg" },
    { name: "Methamphetamine", symbol: Zap, slug: "methamphetamine", color: "border-orange-500", bgColor: "bg-orange-50" },
    { name: "Nitazine", symbol: Pill, slug: "nitazine", color: "border-yellow-600", bgColor: "bg-yellow-50" },
    { name: "PCP", symbol: FlaskConical, slug: "pcp", color: "border-red-700", bgColor: "bg-red-200" },
    { name: "Psilocybin", symbol: Leaf, slug: "psilocybin", color: "border-emerald-600", bgColor: "bg-emerald-50" },
    { name: "LSD", symbol: Sparkles, slug: "lsd", color: "border-violet-600", bgColor: "bg-violet-50" },
    { name: "Ritalin", symbol: Pill, slug: "ritalin", color: "border-indigo-600", bgColor: "bg-indigo-50" },
    { name: "Tianeptine", symbol: Pill, slug: "tianeptine", color: "border-red-600", bgColor: "bg-red-50" },
    { name: "Suboxone", symbol: Pill, slug: "suboxone", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Synthetic Cannabinoids", symbol: Leaf, slug: "synthetic-cannabinoids", color: "border-teal-500", bgColor: "bg-teal-50" },
    { name: "THC", symbol: Leaf, slug: "thc", color: "border-lime-500", bgColor: "bg-lime-50", image: "/drug-icons/thc.jpg" },
    { name: "Xylazine", symbol: FlaskConical, slug: "xylazine", color: "border-purple-500", bgColor: "bg-purple-50", image: "/drug-icons/xylazine.jpg" }
  ];

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

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
            
            {/* Title - Much Larger */}
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-teal-700">Education & Resources</h1>
              <p className="text-3xl text-gray-700 font-semibold">Substance Guides & Harm Reduction</p>
            </div>
            
            {/* Navigation Buttons - Uniform and Centered */}
            <div className="flex gap-6 flex-wrap justify-center pt-4">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Resources</button>
              </Link>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Education</button>
              <Link href="/support-groups">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Support Groups</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-3">Knowledge Saves Lives</h2>
          <p className="text-lg">Learn about emerging substances, recognize dangers, and discover paths to recovery. This information is for harm reduction and education based on current CDC and public health data.</p>
        </div>

        <div className="mb-10">
          <label htmlFor="substance-search" className="sr-only">
            Search substance guides
          </label>
          <div className="relative mx-auto max-w-3xl">
            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />
            <Input
              id="substance-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search substance guides..."
              className="h-14 rounded-xl border-2 border-teal-200 bg-white pl-12 pr-4 text-lg shadow-sm focus-visible:border-teal-500 focus-visible:ring-teal-200"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-gray-300" ref={contentRef}>
          <button
            onClick={() => handleTabClick('infograph')}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'infograph'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Drug Information & Effects
          </button>
          <button
            onClick={() => { setSupportTab('resources'); handleTabClick('support'); }}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'support' && supportTab === 'resources'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => { setSupportTab('support'); handleTabClick('support'); }}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'support' && supportTab === 'support'
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Support Groups
          </button>
        </div>

        {/* Drug Boxes Tab */}
        {activeTab === 'infograph' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredDrugs.length > 0 ? filteredDrugs.map((drug, idx) => {
              const href = drug.slug === 'synthetic-cannabinoids' ? '/synthetic-cannabinoids' : `/drug/${drug.slug}`;
              return (
                <Link key={idx} href={href}>
                  <div className={`${drug.bgColor} rounded-lg shadow-md hover:shadow-xl p-8 border-l-4 ${drug.color} transition transform hover:scale-105 cursor-pointer text-center h-64 flex flex-col justify-center items-center`}>
                    <div className="mb-4">
                      {drug.image ? (
                        <img src={drug.image} alt={drug.name} className="w-20 h-20 object-contain mx-auto" />
                      ) : (
                        <drug.symbol aria-hidden="true" className="h-16 w-16 stroke-[1.5] text-teal-700" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{drug.name}</h3>
                  </div>
                </Link>
              );
            }) : (
              <p className="col-span-full rounded-lg border border-dashed border-teal-300 bg-teal-50 p-8 text-center text-lg text-teal-900">
                No substance guides match “{searchQuery}”.
              </p>
            )}
          </div>
        )}

        {/* Interactive Infograph Tab - Now removed, showing drug boxes instead */}
        

        {/* Resources and Support Groups tabs */}
        {activeTab === 'support' && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overdose Prevention</h3>
                <ul className="space-y-2 text-gray-700"><li>Recognize unresponsiveness, blue lips, and slow breathing.</li><li>Call 9-1-1; Good Samaritan protection applies.</li><li>Use Narcan if available and place the person in recovery position.</li><li>Stay until emergency services arrive.</li></ul>
              </div>
              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Harm Reduction</h3>
                <ul className="space-y-2 text-gray-700"><li>Never use alone and keep emergency contacts accessible.</li><li>Use sterile equipment every time.</li><li>Start with a small test dose when using new supplies.</li><li>Seek professional help; treatment works.</li></ul>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Resources</h3>
                <ul className="space-y-2 text-gray-700"><li>Medication-Assisted Treatment (MAT).</li><li>Residential and outpatient treatment programs.</li><li>Support groups for community and accountability.</li><li>Mental health support.</li></ul>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support for Loved Ones</h3>
                <ul className="space-y-2 text-gray-700"><li>Set healthy boundaries with compassion.</li><li>Learn about addiction as a medical condition.</li><li>Encourage professional help.</li><li>Take care of your own mental health.</li></ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">{supportTab === 'resources' ? 'Substance Use Resources' : 'Support Group Information'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(supportTab === 'resources' ? substanceResources : supportGroups).map((item) => (
                <article key={item.name} className="rounded-lg border border-teal-200 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-700">{'type' in item ? item.type : 'Peer Support'}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                  <p className="mt-3 leading-6 text-gray-700">{item.description}</p>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="mt-4 inline-block font-semibold text-teal-700 underline">Learn more</a>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="bg-teal-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Help?</h3>
          <p className="mb-6 text-lg">Recovery is possible. Find resources and support in Ottawa County.</p>
          <Link href="/">
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Browse Recovery Resources</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
