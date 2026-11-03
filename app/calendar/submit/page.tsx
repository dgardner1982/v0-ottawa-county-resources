import Link from 'next/link'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { EventSubmissionForm } from './event-submission-form'

export default function SubmitEventPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/calendar" className="inline-flex items-center gap-2 font-bold text-teal-700 underline-offset-4 hover:underline"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to calendar</Link>
        <div className="mt-8 flex items-center gap-3 text-fuchsia-700"><CalendarDays aria-hidden="true" className="h-7 w-7" /><p className="text-sm font-bold uppercase tracking-[0.18em]">Community calendar</p></div>
        <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Share a recovery or mental health event</h1>
        <p className="mt-4 text-pretty text-lg leading-8 text-slate-700">Complete the form with the event details and tell us how it connects to recovery or mental health. The Recovery Alliance will review submissions within 48 business hours and reach out letting you know the outcome.</p>
        <div className="mt-8"><EventSubmissionForm /></div>
      </div>
    </main>
  )
}
