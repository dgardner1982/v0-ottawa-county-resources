"use client"

import { FormEvent, useState } from "react"

export default function ContactForm({ onCancel }: { onCancel: () => void }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const message = String(form.get("message") || "")
    const subject = encodeURIComponent(`Recovery Alliance inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:dgardner@ottawacmh.org?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return <p className="mt-6 rounded-2xl border border-cyan-200/30 bg-cyan-200/10 p-4 leading-7 text-cyan-100">Your email draft is ready. Please send it from your email app to complete your message.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5" id="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">Name<input required name="name" type="text" autoComplete="name" className="rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none focus:border-cyan-200" /></label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">Email<input required name="email" type="email" autoComplete="email" className="rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none focus:border-cyan-200" /></label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">Message<textarea required name="message" rows={4} className="resize-y rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none focus:border-cyan-200" /></label>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={onCancel} className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-3 font-bold text-slate-200 transition hover:border-white hover:text-white">Cancel</button>
        <button type="submit" className="rounded-full bg-amber-200 px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">Submit</button>
      </div>
    </form>
  )
}
