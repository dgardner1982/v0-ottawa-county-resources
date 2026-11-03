"use client"

import { FormEvent, useState } from "react"

export default function ContactForm({ onCancel }: { onCancel: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const form = new FormData(event.currentTarget)
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    })

    const result = await response.json()
    if (!response.ok) {
      setErrorMessage(result.error || "We could not send your message. Please try again.")
      setStatus("error")
      return
    }

    setStatus("success")
  }

  if (status === "success") {
    return <p className="mt-6 rounded-2xl border border-cyan-200/30 bg-cyan-200/10 p-4 leading-7 text-cyan-100">Your message was sent successfully. Thank you for reaching out.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5" id="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">Name<input required name="name" type="text" autoComplete="name" className="rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none focus:border-cyan-200" /></label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">Email<input required name="email" type="email" autoComplete="email" className="rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none focus:border-cyan-200" /></label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">Message<textarea required name="message" rows={4} className="resize-y rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none focus:border-cyan-200" /></label>
      {status === "error" && <p role="alert" className="rounded-xl border border-red-300/30 bg-red-300/10 p-3 text-sm leading-6 text-red-100">{errorMessage}</p>}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={onCancel} className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-[rgba(195,54,78,0.97)] px-5 py-3 font-bold text-black transition hover:border-white hover:text-black">Cancel</button>
        <button type="submit" disabled={status === "submitting"} className="rounded-full bg-[#85fe8c] px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-[#85fe8c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#85fe8c] disabled:cursor-wait disabled:opacity-60">{status === "submitting" ? "Sending…" : "Submit"}</button>
      </div>
    </form>
  )
}
