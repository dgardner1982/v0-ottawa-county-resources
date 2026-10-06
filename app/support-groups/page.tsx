'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function SupportGroupsPage() {
  const supportGroups = [
    {
      category: "Substance Recovery",
      icon: "🛡️",
      color: "orange",
      groups: [
        {
          name: "Alcoholics Anonymous (AA)",
          description: "Fellowship for people recovering from alcohol addiction using 12-step program",
          link: "https://www.aa.org",
          findMeetings: "https://www.aa.org/find-aa"
        },
        {
          name: "Narcotics Anonymous (NA)",
          description: "Support for recovery from drug addiction through peer support and 12-step principles",
          link: "https://www.na.org",
          findMeetings: "https://www.na.org/meetingsearch/find-na/"
        },
        {
          name: "SMART Recovery",
          description: "Science-based approach emphasizing self-empowerment and 4-point program",
          link: "https://www.smartrecovery.org",
          findMeetings: "https://meetings.smartrecovery.org/meetings"
        },
        {
          name: "Crystal Meth Anonymous (CMA)",
          description: "Specifically for those struggling with methamphetamine addiction",
          link: "https://www.crystalmeth.org",
          findMeetings: "https://www.crystalmeth.org/meetings"
        },
        {
          name: "Cocaine Anonymous (CA)",
          description: "12-step program specifically for cocaine and other stimulant addiction",
          link: "https://www.ca.org",
          findMeetings: "https://www.camichigan.org"
        },
        {
          name: "Recovery Dharma",
          description: "Buddhist-inspired approach to addiction recovery emphasizing mindfulness",
          link: "https://www.recoverydharma.org",
          findMeetings: "https://www.recoverydharma.org/meetings/"
        },
        {
          name: "LifeRing Secular Recovery",
          description: "Secular alternative recovery community emphasizing self-directed change",
          link: "https://www.lifering.org",
          findMeetings: "https://meetings.lifering.org/meetings/?scope=hide"
        }
      ]
    },
    {
      category: "Mental Health & Grief",
      icon: "🧠",
      color: "blue",
      groups: [
        {
          name: "Emotional Health Anonymous (EHA)",
          description: "Peer support for those recovering from emotional and mental health issues",
          link: "https://www.emotionalhealthanonymous.org",
          findMeetings: "https://www.emotionalhealthanonymous.org/meetings"
        },
        {
          name: "GriefShare",
          description: "Support for those grieving loss through structured sessions and community",
          link: "https://www.griefshare.org",
          findMeetings: "https://find.griefshare.org/find?_ga=2.184560737.918092790.1772460579-79549064.1772460579&_gl=1*jtw4hu*_gcl_au*OTEwMzQ5NjU2LjE3NzI0NjA1Nzk."
        },
        {
          name: "The Dinner Party",
          description: "Community for young adults grieving any loss",
          link: "https://www.thedinnerparty.org",
          findMeetings: "https://connect.thedinnerparty.org/all-experiences"
        }
      ]
    },
    {
      category: "Behavioral & Compulsive Disorders",
      icon: "🔄",
      color: "pink",
      groups: [
        {
          name: "Sex Addicts Anonymous (SAA)",
          description: "12-step program for those struggling with sex addiction and sexual compulsivity",
          link: "http://saa-recovery.org",
          findMeetings: "http://saa-recovery.org/meetings"
        },
        {
          name: "Sexaholics Anonymous (SA)",
          description: "Support group focused on sexual addiction recovery",
          link: "https://www.sa.org",
          findMeetings: "https://www.sa.org/meetings/"
        },
        {
          name: "Gamblers Anonymous (GA)",
          description: "12-step program for those struggling with gambling addiction",
          link: "http://www.gamblersanonymous.org",
          findMeetings: "https://www.gamblersanonymous.org/find-a-meeting/"
        },
        {
          name: "Overeaters Anonymous (OA)",
          description: "12-step program for those with compulsive eating and food-related issues",
          link: "https://www.oa.org",
          findMeetings: "https://www.oa.org/find-a-meeting"
        },
        {
          name: "Debtors Anonymous (DA)",
          description: "12-step program for those struggling with compulsive spending and debt",
          link: "https://www.debtorsanonymous.org",
          findMeetings: "https://www.debtorsanonymous.org/meeting-search-virtual/?mytz=Y&myoffset=-5"
        }
      ]
    },
    {
      category: "Family & Loved Ones Support",
      icon: "👨‍👩‍👧",
      color: "purple",
      groups: [
        {
          name: "Al-Anon/Alateen",
          description: "Support for families and friends affected by someone else's drinking",
          link: "https://www.al-anon.org",
          findMeetings: "https://www.al-anon.org/al-anon-meetings/find-an-al-anon-meeting/"
        },
        {
          name: "Nar-Anon",
          description: "Support for families and friends affected by someone's drug addiction",
          link: "https://www.nar-anon.org",
          findMeetings: "https://www.nar-anon.org/find-a-meeting"
        },
        {
          name: "CODA (Codependents Anonymous)",
          description: "For those in codependent relationships and seeking recovery",
          link: "https://coda.org",
          findMeetings: "https://coda.org/find-a-meeting/"
        },
        {
          name: "Gam-Anon",
          description: "Support for families and friends of those with gambling addiction",
          link: "https://www.gam-anon.org",
          findMeetings: "https://www.gam-anon.org/meeting-directory"
        }
      ]
    }
  ];

  return (
    <>
      <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-b border-white/20 bg-slate-950 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg"><span><span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />Call <a href="tel:211" className="text-teal-300 underline underline-offset-4 hover:text-white">2-1-1</a> for local resources</span><span className="hidden text-slate-500 sm:inline">/</span><span>Life-threatening emergency? <a href="tel:911" className="text-amber-300 underline underline-offset-4 hover:text-white">Call 9-1-1</a></span></div>
      <header className="relative isolate overflow-hidden bg-slate-950 text-white"><div className="absolute -left-24 top-8 -z-10 h-72 w-72 animate-float-orb rounded-full bg-fuchsia-500/25 blur-3xl" /><div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 animate-float-orb rounded-full bg-teal-400/25 blur-3xl [animation-delay:2s]" /><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(217,70,239,0.16),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#32194d_100%)]" /><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"><div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"><div className="animate-slide-in-up text-left"><div className="mb-7 inline-flex items-center gap-3 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-200 backdrop-blur"><span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_#f0abfc]" /> You do not have to do this alone</div><h1 className="text-balance text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl">Find a community that <span className="bg-gradient-to-r from-fuchsia-300 via-pink-200 to-amber-200 bg-clip-text text-transparent">gets it.</span></h1><p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">Peer support creates connection, accountability, and a place to be understood—wherever you are in your journey.</p><div className="mt-9 flex flex-wrap gap-4"><Link href="#groups" className="group inline-flex items-center gap-3 rounded-full bg-fuchsia-300 px-6 py-3.5 font-bold text-slate-950 shadow-[0_10px_35px_-12px_#f0abfc] transition duration-300 hover:-translate-y-1 hover:bg-white">Explore groups <span className="transition-transform group-hover:translate-x-1">→</span></Link><Link href="/education" className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-cyan-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-white/10">Learn more <span className="text-cyan-200 transition-transform group-hover:translate-x-1 group-hover:text-white">→</span></Link></div></div><div className="relative animate-scale-in [animation-delay:180ms]"><div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-fuchsia-400/20 via-transparent to-teal-400/20 blur-2xl" /><div className="animate-border-glow relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur-xl"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg" alt="Ottawa County Recovery Alliance" className="h-auto w-full rounded-[1.4rem] object-cover" /></div></div></div></div></header>

      <main id="groups" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="animate-slide-in-up relative mb-12 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-fuchsia-700 via-purple-700 to-slate-950 p-8 text-white shadow-[0_24px_55px_-30px_rgba(192,38,211,0.8)] sm:p-10">
          <h2 className="text-3xl font-bold mb-3">Find Your Community</h2>
          <p className="text-lg mb-4">Support groups connect you with people who understand your journey. Whether you're seeking recovery from addiction, supporting a loved one, or working through emotional challenges, there's a community for you.</p>
          <p className="text-sm opacity-90">All groups listed are peer led and confidential. These meetings are free and available locally or online. While the majority of our sessions are open to any interested individual, some meetings are designated as Closed.</p>
        </div>

        {supportGroups.map((section, idx) => (
          <div key={idx} className="mb-12">
            <div className={`mb-6 flex items-center gap-4 border-b border-slate-200 pb-4`}>
              <span className="text-4xl">{section.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.groups.map((group, gIdx) => (
                <div
                  key={gIdx}
                  style={{ animationDelay: `${Math.min(gIdx * 55, 400)}ms` }} className={`resource-card group relative overflow-hidden bg-${section.color}-100 border border-white/80 rounded-[1.35rem] p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.8)] hover:-translate-y-2 hover:shadow-[0_25px_48px_-28px_rgba(15,23,42,0.85)] transition duration-500`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{group.name}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{group.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-${section.color}-700 font-semibold hover:text-${section.color}-900 transition`}
                    >
                      Visit <ExternalLink size={16} />
                    </a>
                    <a
                      href={group.findMeetings}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-${section.color}-700 font-semibold hover:text-${section.color}-900 transition`}
                    >
                      Find Meetings <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Meetings in Ottawa County</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Call <a href="tel:211" className="text-purple-700 font-bold">2-1-1</a> for local support group information and referrals</li>
            <li>✓ Visit individual organization websites for meeting schedules and locations</li>
            <li>✓ Many groups now offer hybrid (in-person and virtual) meetings</li>
            <li>✓ Anonymity and confidentiality are core principles of all 12-step programs</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Starting Your Recovery Journey</h3>
          <p className="text-gray-700 mb-4">Everyone's recovery journey looks different. What works for one person, may not work for another.</p>
          <p className="text-gray-700 mb-4">No matter which group you choose, the most important step is reaching out. Each organization has:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Experienced members ready to help newcomers</li>
            <li>• Free or low-cost meetings and resources</li>
            <li>• Online options for convenience and flexibility</li>
            <li>• Strong emphasis on anonymity and respect</li>
            <li>• Practical tools for lasting change</li>
          </ul>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Still Looking for Help?</h3>
          <p className="mb-6 text-lg">Contact Community Mental Health of Ottawa County or call 2-1-1 for personalized support group recommendations and recovery resources.</p>
          <Link href="/">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Browse All Resources</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
