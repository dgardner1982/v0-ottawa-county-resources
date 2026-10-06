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
    { name: "Cocaine", symbol: Pill, slug: "cocaine", color: "border-red-500", bgColor: "bg-red-50" },
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
    { name: "Methadone", symbol: Pill, slug: "methadone", color: "border-blue-500", bgColor: "bg-blue-50" },
    { name: "Methamphetamine", symbol: Zap, slug: "methamphetamine", color: "border-orange-500", bgColor: "bg-orange-50" },
    { name: "Nitazine", symbol: Pill, slug: "nitazine", color: "border-yellow-600", bgColor: "bg-yellow-50" },
    { name: "PCP", symbol: FlaskConical, slug: "pcp", color: "border-red-700", bgColor: "bg-red-200" },
    { name: "Psilocybin", symbol: Leaf, slug: "psilocybin", color: "border-emerald-600", bgColor: "bg-emerald-50" },
    { name: "LSD", symbol: Sparkles, slug: "lsd", color: "border-violet-600", bgColor: "bg-violet-50" },
    { name: "Ritalin", symbol: Pill, slug: "ritalin", color: "border-indigo-600", bgColor: "bg-indigo-50" },
    { name: "Tianeptine", symbol: Pill, slug: "tianeptine", color: "border-red-600", bgColor: "bg-red-50" },
    { name: "Suboxone", symbol: Pill, slug: "suboxone", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Synthetic Cannabinoids", symbol: Leaf, slug: "synthetic-cannabinoids", color: "border-teal-500", bgColor: "bg-teal-50" },
    { name: "THC", symbol: Leaf, slug: "thc", color: "border-lime-500", bgColor: "bg-lime-50" },
    { name: "Xylazine", symbol: FlaskConical, slug: "xylazine", color: "border-purple-500", bgColor: "bg-purple-50" }
  ];

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <>
      <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-b border-white/20 bg-slate-950 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
        <span className="text-2xl"><span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />Call <a href="tel:211" className="text-[#24f2a2] underline underline-offset-4 hover:text-white">2-1-1</a> for local resources</span>
        <span className="hidden text-slate-500 sm:inline">/</span>
        <span className="text-2xl">Life-threatening emergency? <a href="tel:911" className="text-[#ff4d4d] underline underline-offset-4 hover:text-white">Call 9-1-1</a></span>
      </div>
      <header className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute -left-24 top-8 -z-10 h-72 w-72 animate-float-orb rounded-full bg-teal-400/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 animate-float-orb rounded-full bg-fuchsia-500/20 blur-3xl [animation-delay:2s]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(45,212,191,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#123b46_100%)]" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="animate-slide-in-up text-left">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-200 backdrop-blur"><span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_14px_#5eead4]" /> Learn with confidence</div>
              <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl">Education that helps you <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 bg-clip-text text-transparent">move forward.</span></h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">Explore clear, current substance guides and harm-reduction information designed to help you make informed choices.</p>
              <div className="mt-9 grid max-w-2xl grid-cols-2 gap-4"><Link href="/" className="group inline-flex items-center justify-center gap-3 rounded-full bg-teal-300 px-6 py-3.5 font-bold text-slate-950 shadow-[0_10px_35px_-12px_#5eead4] transition duration-300 hover:-translate-y-1 hover:bg-white">Explore resources <span className="transition-transform group-hover:translate-x-1">→</span></Link><Link href="/education" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-cyan-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-white/10 hover:text-white">Learn something new <span className="text-cyan-200 transition-transform group-hover:translate-x-1 group-hover:text-white">→</span></Link><Link href="/support-groups" className="group col-span-2 inline-flex w-fit justify-self-center items-center gap-3 rounded-full border border-amber-200/40 bg-amber-200/10 px-6 py-3.5 font-bold text-amber-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-200/20">Explore support groups <span className="transition-transform group-hover:translate-x-1">→</span></Link></div>
            </div>
            <div className="relative animate-scale-in [animation-delay:180ms]"><div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-teal-400/20 via-transparent to-fuchsia-400/20 blur-2xl" /><div className="animate-border-glow relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur-xl"><Link href="/" aria-label="Go to Ottawa County Recovery Alliance homepage"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg" alt="Ottawa County Recovery Alliance" className="h-auto w-full rounded-[1.4rem] object-cover transition duration-500 hover:scale-[1.02]" /></Link></div></div>
          </div>
        </div>
      </header>

      <main id="guides" className="relative isolate overflow-hidden bg-slate-300 px-5 py-16 text-slate-900 sm:px-8 lg:py-20"><div className="pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" /><div className="pointer-events-none absolute -right-32 top-[40rem] -z-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" /><div className="relative mx-auto max-w-7xl">
        <div className="animate-slide-in-up relative mb-12 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-teal-700 via-cyan-600 to-slate-900 p-8 text-white shadow-[0_24px_55px_-30px_rgba(13,148,136,0.8)] sm:p-10">
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
              className="inline-flex h-14 w-full rounded-2xl border border-teal-300/30 bg-[rgba(85,229,255,0.47)] pl-12 pr-[11px] text-lg text-[#282020] shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),0_2px_4px_-2px_rgb(0_0_0_/_0.1)] placeholder:text-slate-700 focus-visible:border-teal-500 focus-visible:ring-teal-300/30"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex gap-4 border-b border-slate-300" ref={contentRef}>
          <button
            onClick={() => handleTabClick('infograph')}
            className={`px-6 py-3 font-semibold border-b-4 transition ${
              activeTab === 'infograph'
? 'border-[#0e0e0e] text-[#0f0f10] underline shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),0_2px_4px_-2px_rgb(0_0_0_/_0.1)]'
  : 'border-transparent text-slate-400 hover:text-slate-900'
            }`}
          >
            Drug Information & Effects
          </button>
        </div>

        {/* Drug Boxes Tab */}
        {activeTab === 'infograph' && (
          <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteredDrugs.length > 0 ? filteredDrugs.map((drug, idx) => {
              const href = drug.slug === 'synthetic-cannabinoids' ? '/synthetic-cannabinoids' : `/drug/${drug.slug}`;
              return (
                <Link key={idx} href={href}>
                  <div style={{ animationDelay: `${Math.min(idx * 35, 420)}ms` }} className="resource-card group flex h-64 cursor-pointer flex-col items-center justify-center rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 text-center shadow-[0_20px_45px_-28px_rgba(45,212,191,0.5)] transition duration-500 hover:-translate-y-2 hover:border-teal-300/50 hover:shadow-[0_25px_55px_-24px_rgba(45,212,191,0.55)]">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-teal-300/25 bg-gradient-to-br from-teal-300/20 to-fuchsia-400/10 text-teal-200 shadow-[0_0_28px_-10px_rgba(94,234,212,0.9)] transition duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-teal-200/60">
                      {drug.image ? (
                        <img src={drug.image} alt={drug.name} className="h-14 w-14 rounded-xl object-contain" />
                      ) : (
                        <drug.symbol aria-hidden="true" className="h-11 w-11 stroke-[1.6]" />
                      )}
                    </div>
                    <h3 className="text-lg font-black leading-tight tracking-tight text-white">{drug.name}</h3>
                  </div>
                </Link>
              );
            }) : (
              <p className="col-span-full rounded-2xl border border-dashed border-teal-300/40 bg-teal-300/10 p-8 text-center text-lg text-teal-100">
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
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-lg">
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

        <div className="rounded-[1.75rem] border border-teal-300/20 bg-gradient-to-br from-teal-700 via-cyan-700 to-slate-900 p-8 text-center text-white shadow-[0_24px_55px_-30px_rgba(13,148,136,0.8)]">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Help?</h3>
          <p className="mb-6 text-lg">Recovery is possible. Find resources and support in Ottawa County.</p>
          <Link href="/">
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Browse Recovery Resources</button>
          </Link>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
