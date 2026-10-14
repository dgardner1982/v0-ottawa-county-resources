import type { Metadata } from 'next';
import { Globe, HandHeart, Home, Lock, MapPin, Phone, ShieldAlert } from 'lucide-react';
import { Footer } from '@/components/footer';
import {
  BackPill,
  Callout,
  EmergencyBar,
  IconTile,
  PageHero,
  PillLink,
  SectionHeading,
  darkCardClass,
} from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Domestic Violence Resources | Ottawa County Recovery Alliance',
  description:
    'Crisis lines, emergency shelter, legal advocacy, and support for survivors of domestic violence in Ottawa and surrounding counties.',
};

type Resource = {
  name: string;
  address: string;
  phone: string;
  tollfree?: string;
  officePhone?: string;
  hours: string;
  details: string;
  website: string;
};

const resources: Resource[] = [
  {
    name: "Every Woman's Place Inc",
    address: '1221 W Laketon Ave, Muskegon, MI 49441',
    phone: '(231) 722-3333',
    hours: 'Monday through Friday, 9:00 AM – 4:30 PM (Emergency services available 24/7)',
    details:
      'Crisis intervention, emergency shelter, counseling, and legal advocacy for survivors of domestic violence, sexual assault, and sex trafficking.',
    website: 'https://www.everywomansplace.org',
  },
  {
    name: 'Resilience: Advocates for Ending Violence',
    address: '411 Butternut Dr, Holland, MI 49424',
    phone: '(800) 848-5991',
    officePhone: '(616) 392-1970',
    hours: 'Monday through Friday, 9:00 AM – 5:00 PM (Emergency services available 24/7)',
    details:
      'Comprehensive support for survivors of domestic and sexual violence including crisis support, emergency shelter, supportive services, and community education.',
    website: 'https://www.resiliencemi.org',
  },
  {
    name: "Sylvia's Place",
    address: '235 North St, Allegan, MI 49010',
    phone: '(269) 673-8700',
    tollfree: '(888) 411-7837',
    hours: '24/7 - Emergency services and help line always available',
    details:
      'Primary domestic violence agency for Allegan County providing 24-hour crisis help line, emergency shelter, legal advocacy for Personal Protection Orders, and support services.',
    website: 'https://www.sylviasplace.com',
  },
];

const facts = [
  {
    icon: ShieldAlert,
    title: 'What is domestic violence?',
    text: 'Domestic violence includes physical abuse, emotional abuse, sexual abuse, financial control, and intimidation by an intimate partner or family member.',
  },
  {
    icon: HandHeart,
    title: 'You are not alone.',
    text: 'Domestic violence affects people of all backgrounds, ages, and income levels. Help is available, and recovery is possible.',
  },
  {
    icon: Lock,
    title: 'Services are confidential.',
    text: 'These organizations maintain confidentiality and can help you develop a safety plan tailored to your situation.',
  },
  {
    icon: Home,
    title: 'Emergency shelter is available.',
    text: 'If you need to leave immediately, these organizations can provide emergency shelter for you and your children.',
  },
];

export default function DomesticViolenceResources() {
  return (
    <>
      <EmergencyBar />

      <PageHero
        accent="rose"
        eyebrow="Safety, shelter and advocacy"
        title="Domestic Violence"
        highlight="Resources"
        icon={HandHeart}
        description="If you or someone you know is experiencing domestic violence, help is available. These organizations provide crisis intervention, shelter, legal advocacy, and support services to survivors and their children."
        back={{ href: '/', label: 'Back to resources' }}
        actions={
          <>
            <PillLink href="#agencies" accent="rose">
              Find an agency
            </PillLink>
            <PillLink href="tel:911" accent="rose" variant="ghost" external>
              Immediate danger? Call 911
            </PillLink>
          </>
        }
      />

      <main className="bg-[#d9f0ee]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Callout accent="rose" title="If you are in immediate danger, call 911">
            <p>
              All of these organizations provide 24-hour crisis lines. You can call anytime, day or night, for immediate support and
              safety planning.
            </p>
          </Callout>

          <section id="agencies" className="mt-20 scroll-mt-24">
            <SectionHeading eyebrow="24-hour help lines" title="Agencies that can help right now" />
            <div className="grid gap-6 lg:grid-cols-3">
              {resources.map((resource, idx) => (
                <article
                  key={resource.name}
                  style={{ animationDelay: `${idx * 90}ms` }}
                  className={`${darkCardClass} animate-slide-in-up flex flex-col p-8 hover:border-rose-300/50 hover:shadow-[0_22px_40px_-20px_rgba(251,113,133,0.55)]`}
                >
                  <IconTile accent="rose" icon={HandHeart} />
                  <h3 className="mt-5 text-balance text-2xl font-black leading-tight tracking-tight">{resource.name}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{resource.details}</p>

                  <ul className="mt-6 space-y-5 text-slate-200">
                    <li className="flex items-start gap-3">
                      <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose-300" />
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-rose-200">Address</p>
                        <p>{resource.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose-300" />
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-rose-200">24-hour help line</p>
                        <a href={`tel:${resource.phone}`} className="text-xl font-black text-teal-300 hover:text-white">
                          {resource.phone}
                        </a>
                        {resource.tollfree && <p className="text-sm text-slate-400">Toll-free: {resource.tollfree}</p>}
                        {resource.officePhone && <p className="text-sm text-slate-400">Office: {resource.officePhone}</p>}
                      </div>
                    </li>
                    <li>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-rose-200">Hours</p>
                      <p className="text-sm leading-6">{resource.hours}</p>
                    </li>
                  </ul>

                  <PillLink href={resource.website} accent="rose" external className="mt-auto self-start">
                    <Globe aria-hidden="true" className="h-5 w-5" />
                    Visit website
                  </PillLink>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <SectionHeading eyebrow="Good to know" title="Important information" />
            <div className="grid gap-5 sm:grid-cols-2">
              {facts.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="group flex items-start gap-5 rounded-[1.35rem] border border-white/80 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.8)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_48px_-26px_rgba(225,29,72,0.55)]"
                >
                  <IconTile accent="rose" icon={icon} />
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-14 flex justify-center">
            <BackPill href="/">Back to all resources</BackPill>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
