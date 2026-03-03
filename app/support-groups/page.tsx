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
    },
    {
      category: "Recovery & Wellness",
      icon: "🌱",
      color: "green",
      groups: [
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
    }
  ];

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
              <h1 className="text-8xl font-bold text-teal-700">Support Groups</h1>
              <p className="text-3xl text-gray-700 font-semibold">Community Recovery & Peer Support</p>
            </div>
            
            {/* Navigation Buttons - Uniform and Centered */}
            <div className="flex gap-6 flex-wrap justify-center pt-4">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Resources</button>
              </Link>
              <Link href="/education">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Education</button>
              </Link>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-lg transition text-xl min-w-48">Support Groups</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-3">Find Your Community</h2>
          <p className="text-lg mb-4">Support groups connect you with people who understand your journey. Whether you're seeking recovery from addiction, supporting a loved one, or working through emotional challenges, there's a community for you.</p>
          <p className="text-sm opacity-90">All groups listed are peer led and confidential. These meetings are free and available locally or online. While the majority of our sessions are open to any interested individual, some meetings are designated as Closed.</p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Open vs. Closed Meetings</h3>
          <p className="text-gray-700 mb-4">An Open Meeting is available to anyone, including family members, students, or community supporters. In contrast, a Closed Meeting is restricted exclusively to individuals who personally share the lived experience or specific challenge the group addresses. This distinction ensures a safe, private space where peers can speak freely among those with similar backgrounds.</p>
        </div>

        {supportGroups.map((section, idx) => (
          <div key={idx} className="mb-12">
            <div className={`flex items-center gap-3 mb-6 pb-4 border-b-4 border-${section.color}-500`}>
              <span className="text-4xl">{section.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.groups.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className={`bg-${section.color}-100 border-l-4 border-${section.color}-500 rounded-lg p-6 shadow-md hover:shadow-lg transition`}
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
