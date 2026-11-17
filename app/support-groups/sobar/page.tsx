import Link from 'next/link'
import { ArrowLeft, Clock3, ExternalLink, MapPin, Phone } from 'lucide-react'

const hours = [
  { day: 'Monday – Thursday', time: '8:00 AM – 8:00 PM' },
  { day: 'Friday', time: '7:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '2:00 PM – 8:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function SobarDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/support-groups"
          className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-teal-200 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to support groups
        </Link>

        <header className="mt-10 rounded-[1.75rem] bg-[linear-gradient(135deg,#e2d800_0%,#00dba8_50%,#b9c735_100%)] p-8 text-slate-950 shadow-[0_24px_55px_-30px_rgba(0,219,168,0.65)] sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em]">Recovery support in Holland</p>
          <h1 className="mt-3 text-balance text-4xl font-black tracking-tight sm:text-6xl">SoBar Recovery Community Center</h1>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-8">
            A welcoming place to connect with peers, attend support meetings and sober social events, and find recovery coaching and resource navigation.
          </p>
        </header>

        <section aria-labelledby="location-hours" className="mt-8 rounded-[1.75rem] bg-white p-6 text-slate-950 sm:p-10">
          <div className="flex items-center gap-3">
            <Clock3 aria-hidden="true" className="size-6 text-teal-700" />
            <h2 id="location-hours" className="text-2xl font-black sm:text-3xl">Location &amp; Hours</h2>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold">Visit or contact SoBar</h3>
              <dl className="mt-5 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-teal-700" />
                  <div>
                    <dt className="font-semibold">Address</dt>
                    <dd className="mt-1 leading-6 text-slate-700">347 Hoover Blvd, Suite B, Holland, MI 49423</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-teal-700" />
                  <div>
                    <dt className="font-semibold">Phone</dt>
                    <dd className="mt-1 leading-6"><a href="tel:+16163775792" className="text-teal-800 underline underline-offset-4 hover:text-slate-950">(616) 377-5792</a></dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink aria-hidden="true" className="mt-1 size-5 shrink-0 text-teal-700" />
                  <div>
                    <dt className="font-semibold">Website</dt>
                    <dd className="mt-1 leading-6"><a href="https://sobarrco.com" target="_blank" rel="noopener noreferrer" className="text-teal-800 underline underline-offset-4 hover:text-slate-950">sobarrco.com</a></dd>
                  </div>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-lg font-bold">Hours of Operation</h3>
              <dl className="mt-5 divide-y divide-slate-200">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex items-start justify-between gap-4 py-3 first:pt-0">
                    <dt className="font-semibold">{day}</dt>
                    <dd className="text-right text-slate-700">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <p className="mt-8 rounded-2xl border border-teal-200/25 bg-white/5 p-5 text-base leading-7 text-slate-200 sm:p-6">
          Visit <a href="https://sobarrco.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-200 underline underline-offset-4 hover:text-white">sobarrco.com</a> for the updated meeting calendar.
        </p>
      </div>
    </main>
  )
}
