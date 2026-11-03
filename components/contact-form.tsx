'use client'

import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })

      if (!response.ok) throw new Error('Unable to send message')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto mt-16 max-w-3xl rounded-[1.5rem] bg-slate-950 p-8 text-white shadow-xl md:p-10" aria-labelledby="contact-heading">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Contact us</p>
        <h2 id="contact-heading" className="mt-2 text-3xl font-black tracking-tight">Have a resource to share?</h2>
        <p className="mt-3 leading-7 text-slate-300">Send us a message and it will be delivered to the Ottawa County resources team.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold" htmlFor="contact-name">
            Name
            <input id="contact-name" name="name" required className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none placeholder:text-slate-500 focus:border-teal-300" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-bold" htmlFor="contact-email">
            Email
            <input id="contact-email" name="email" type="email" required className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none placeholder:text-slate-500 focus:border-teal-300" placeholder="you@example.com" />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-bold" htmlFor="contact-message">
          Message
          <textarea id="contact-message" name="message" required rows={5} className="resize-y rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-normal text-white outline-none placeholder:text-slate-500 focus:border-teal-300" placeholder="Tell us about the resource or question..." />
        </label>
        <button type="submit" disabled={status === 'sending'} className="rounded-xl bg-teal-400 px-5 py-3 font-black text-slate-950 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60">
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'success' && <p role="status" className="text-sm text-teal-200">Your message was sent successfully.</p>}
        {status === 'error' && <p role="alert" className="text-sm text-rose-300">We could not send your message. Please try again or email dgardner@ottawacmh.org directly.</p>}
      </form>
    </section>
  )
}
