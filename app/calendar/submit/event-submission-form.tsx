'use client'

import { FormEvent, useState } from 'react'

export function EventSubmissionForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('/api/event-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })
      if (!response.ok) throw new Error('Unable to send event')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-xl sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold" htmlFor="event-name">Your name<input id="event-name" name="name" required className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none focus:border-teal-300" /></label>
        <label className="grid gap-2 text-sm font-bold" htmlFor="event-email">Your email<input id="event-email" name="email" type="email" required className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none focus:border-teal-300" /></label>
      </div>
      <label className="grid gap-2 text-sm font-bold" htmlFor="event-title">Event name<input id="event-title" name="eventTitle" required className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none focus:border-teal-300" /></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold" htmlFor="event-date">Date and time<input id="event-date" name="dateTime" required placeholder="Example: June 12, 6–8 PM" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none placeholder:text-slate-500 focus:border-teal-300" /></label>
        <label className="grid gap-2 text-sm font-bold" htmlFor="event-location">Location or online link<input id="event-location" name="location" required className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none focus:border-teal-300" /></label>
      </div>
      <label className="grid gap-2 text-sm font-bold" htmlFor="event-description">What should people know?<textarea id="event-description" name="description" required rows={4} className="resize-y rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none focus:border-teal-300" placeholder="Share the details attendees need." /></label>
      <label className="grid gap-2 text-sm font-bold" htmlFor="event-connection">How is this related to recovery or mental health?<textarea id="event-connection" name="connection" required rows={4} className="resize-y rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none focus:border-teal-300" /></label>
      <button type="submit" disabled={status === 'sending'} className="rounded-full bg-amber-200 px-5 py-3 font-black text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? 'Sending...' : 'Submit event for review'}</button>
      {status === 'success' && <p role="status" className="text-sm leading-6 text-teal-200">Your event was submitted. The Recovery Alliance will review it within 48 business hours and reach out with the outcome.</p>}
      {status === 'error' && <p role="alert" className="text-sm leading-6 text-rose-300">We could not send your event. Please try again or email dgardner@ottawacmh.org directly.</p>}
    </form>
  )
}
