"use client"

import { useState } from "react"
import ContactForm from "./contact-form"

export default function ContactModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">For more information or want to get involved, click here</button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false) }}>
          <div role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-cyan-200/30 bg-[rgba(202,42,147,0.7)] p-7 text-white shadow-2xl sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Get in touch</p>
                <h2 id="contact-modal-title" className="mt-2 text-3xl font-black">Contact the Recovery Alliance</h2>
              </div>
              <button type="button" aria-label="Close contact form" onClick={() => setOpen(false)} className="rounded-full px-3 py-1 text-2xl leading-none text-slate-300 hover:bg-slate-800 hover:text-white">×</button>
            </div>
            <p className="mt-4 leading-7 text-slate-300">Share your details and a brief message. Your submission will be sent to the Recovery Alliance team for review.  Please allow 2 business days for response. Thank you!</p>
            <ContactForm onCancel={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  )
}
