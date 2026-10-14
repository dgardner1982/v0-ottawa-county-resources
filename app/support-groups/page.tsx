'use client';

import { Brain, CheckCircle2, ExternalLink, RefreshCw, ShieldCheck, Users, type LucideIcon } from 'lucide-react';
import { Footer } from '@/components/footer';
import {
  BackPill,
  Callout,
  EmergencyBar,
  PageHero,
  PillLink,
  darkCardClass,
  type Accent,
} from '@/components/site-chrome';

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

  const sectionStyles: Record<string, { icon: LucideIcon; accent: Accent; band: string; chip: string }> = {
    'Substance Recovery': { icon: ShieldCheck, accent: 'amber', band: 'from-amber-500 to-orange-600', chip: 'border-amber-300/30 bg-amber-300/10 text-amber-200 hover:bg-amber-300 hover:text-slate-950' },
    'Mental Health & Grief': { icon: Brain, accent: 'cyan', band: 'from-cyan-500 to-teal-600', chip: 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200 hover:bg-cyan-300 hover:text-slate-950' },
    'Behavioral & Compulsive Disorders': { icon: RefreshCw, accent: 'rose', band: 'from-rose-500 to-fuchsia-600', chip: 'border-rose-300/30 bg-rose-300/10 text-rose-200 hover:bg-rose-300 hover:text-slate-950' },
    'Family & Loved Ones Support': { icon: Users, accent: 'fuchsia', band: 'from-fuchsia-500 to-purple-600', chip: 'border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-200 hover:bg-fuchsia-300 hover:text-slate-950' },
  };

  const findingMeetings = [
    'Call 2-1-1 for local support group information and referrals',
    'Visit individual organization websites for meeting schedules and locations',
    'Many groups now offer hybrid (in-person and virtual) meetings',
    'Anonymity and confidentiality are core principles of all 12-step programs',
  ];

  const startingJourney = [
    'Experienced members ready to help newcomers',
    'Free or low-cost meetings and resources',
    'Online options for convenience and flexibility',
    'Strong emphasis on anonymity and respect',
    'Practical tools for lasting change',
  ];

  return (
    <>
      <EmergencyBar />

      <PageHero
        accent="fuchsia"
        eyebrow="You do not have to do this alone"
        title="Find a community that"
        highlight="gets it."
        icon={Users}
        description="Peer support creates connection, accountability, and a place to be understood—wherever you are in your journey."
        back={{ href: '/', label: 'Back to resources' }}
        actions={
          <>
            <PillLink href="#groups" accent="fuchsia">
              Browse support groups
            </PillLink>
            <PillLink href="/education" accent="fuchsia" variant="ghost">
              Education guides
            </PillLink>
          </>
        }
      />

      <main id="groups" className="bg-[#d9f0ee] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Callout accent="fuchsia" title="Find your community" className="mb-16">
            <p>
              Support groups connect you with people who understand your journey. Whether you&apos;re seeking recovery from addiction,
              supporting a loved one, or working through emotional challenges, there&apos;s a community for you.
            </p>
            <p className="text-sm text-white/80">
              All groups listed are peer led and confidential. These meetings are free and available locally or online. While the
              majority of our sessions are open to any interested individual, some meetings are designated as Closed.
            </p>
          </Callout>

          {supportGroups.map((section) => {
            const style = sectionStyles[section.category];
            const SectionIcon = style.icon;
            return (
              <section key={section.category} className="mb-16" aria-labelledby={`sg-${section.category}`}>
                <div className="mb-8 flex items-center gap-4">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${style.band}`}>
                    <SectionIcon aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <h2 id={`sg-${section.category}`} className="text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                    {section.category}
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {section.groups.map((group, gIdx) => (
                    <article
                      key={group.name}
                      style={{ animationDelay: `${Math.min(gIdx * 55, 400)}ms` }}
                      className={`${darkCardClass} animate-slide-in-up flex flex-col p-7 hover:border-white/30`}
                    >
                      <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${style.band}`} />
                      <h3 className="text-balance text-xl font-black leading-snug tracking-tight text-white">{group.name}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{group.description}</p>
                      <div className="mt-auto flex flex-wrap gap-3 pt-6">
                        <a
                          href={group.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${style.chip}`}
                        >
                          Visit <ExternalLink aria-hidden="true" size={15} />
                          <span className="sr-only">{group.name} website (opens in a new tab)</span>
                        </a>
                        <a
                          href={group.findMeetings}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
                        >
                          Find meetings <ExternalLink aria-hidden="true" size={15} />
                          <span className="sr-only">for {group.name} (opens in a new tab)</span>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-fuchsia-700 via-purple-700 to-slate-950 p-8 text-white shadow-[0_24px_55px_-30px_rgba(192,38,211,0.8)]">
              <h3 className="text-3xl font-black tracking-tight">Finding meetings in Ottawa County</h3>
              <ul className="mt-6 space-y-3">
                {findingMeetings.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-7">
                    <CheckCircle2 aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-fuchsia-200" />
                    {item.startsWith('Call 2-1-1') ? (
                      <span>
                        Call{' '}
                        <a href="tel:211" className="font-black underline underline-offset-4 hover:text-fuchsia-200">
                          2-1-1
                        </a>{' '}
                        for local support group information and referrals
                      </span>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-teal-700 via-cyan-600 to-slate-900 p-8 text-white shadow-[0_24px_55px_-30px_rgba(13,148,136,0.8)]">
              <h3 className="text-3xl font-black tracking-tight">Starting your recovery journey</h3>
              <p className="mt-4 text-lg leading-8 text-white/90">
                Everyone&apos;s recovery journey looks different. What works for one person may not work for another. No matter which
                group you choose, the most important step is reaching out. Each organization has:
              </p>
              <ul className="mt-5 space-y-3">
                {startingJourney.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-7">
                    <CheckCircle2 aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-teal-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Callout accent="cyan" title="Still looking for help?" className="mt-16">
            <p>
              Contact Community Mental Health of Ottawa County or call 2-1-1 for personalized support group recommendations and
              recovery resources.
            </p>
            <div className="pt-3">
              <PillLink href="/" accent="cyan">
                Browse all resources
              </PillLink>
            </div>
          </Callout>

          <div className="mt-14 flex justify-center">
            <BackPill href="/">Back to resources</BackPill>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
