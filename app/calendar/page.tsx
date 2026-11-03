import Link from 'next/link'
import { CalendarDays, ChevronRight, MapPin, Plus } from 'lucide-react'

const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' })
const today = new Date()
const calendarMonths = Array.from({ length: 36 }, (_, index) => {
  const date = new Date(today.getFullYear(), today.getMonth() + index, 1)
  return {
    key: `${date.getFullYear()}-${date.getMonth()}`,
    label: monthFormatter.format(date),
    year: date.getFullYear(),
  }
})

const years = Array.from(new Set(calendarMonths.map((month) => month.year)))

export default function CalendarPage() {
  return (
    <main id="community-calendar" className="min-h-screen bg-slate-50 px-5 py-12 text-slate-950 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <header className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-2xl sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 text-teal-200">
              <CalendarDays aria-hidden="true" className="h-7 w-7" />
              <p className="text-sm font-bold uppercase tracking-[0.18em]">Community connection</p>
            </div>
            <h1 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-6xl">Ottawa County Recovery Events Calendar</h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-slate-300">Find recovery, wellness, and mental health events happening across Ottawa County.</p>
            <Link href="/calendar/submit" className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-200 px-6 py-3.5 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
              <Plus aria-hidden="true" className="h-5 w-5" />
              Add an event
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          </div>
        </header>

        <section className="mt-10" aria-labelledby="calendar-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">36 months of connection</p>
              <h2 id="calendar-heading" className="mt-2 text-3xl font-black tracking-tight text-slate-950">Upcoming community events</h2>
            </div>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-600"><MapPin aria-hidden="true" className="h-4 w-4 text-fuchsia-600" /> Ottawa County, Michigan</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {years.map((year) => (
              <section key={year} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby={`year-${year}`}>
                <h3 id={`year-${year}`} className="border-b border-slate-200 pb-4 text-2xl font-black text-slate-950">{year}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {calendarMonths.filter((month) => month.year === year).map((month, index) => (
                    <div key={month.key} className="min-h-24 rounded-2xl border border-teal-100 bg-teal-50 p-3 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-100">
                      <p className="text-sm font-black text-teal-900">{month.label.replace(` ${year}`, '')}</p>
                      <p className="mt-2 text-xs font-semibold text-slate-500">{index === 0 && year === years[0] ? 'Starting soon' : 'Events coming soon'}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.5rem] border border-fuchsia-200 bg-fuchsia-50 p-6 sm:p-8" aria-labelledby="share-event-heading">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-700">Help grow the calendar</p>
          <h2 id="share-event-heading" className="mt-2 text-2xl font-black text-slate-950">Have a recovery or mental health event to share?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-700">Tell us about it and the Recovery Alliance will review your submission within 48 business hours and reach out to let you know the outcome.</p>
          <Link href="/calendar/submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-fuchsia-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-600">Submit an event <ChevronRight aria-hidden="true" className="h-5 w-5" /></Link>
        </section>
      </div>
    </main>
  )
}
