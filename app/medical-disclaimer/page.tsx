import Link from 'next/link'

const sections = [
  {
    title: 'Not Medical Advice',
    body: 'The contents of this publication, including text, graphics, tables, and reference data, are intended solely for educational, research, and informational purposes. Nothing contained herein is intended to serve as medical advice, clinical instruction, or individual health counseling.',
  },
  {
    title: 'Consult a Healthcare Professional',
    body: 'Readers must always consult with a licensed physician, clinical specialist, or other qualified healthcare provider regarding any personal medical concerns, medication changes, substance interactions, or health questions. Never disregard professional medical guidance or delay seeking qualified care based on the contents of this resource.',
  },
  {
    title: 'No Warranty and Limitation of Liability',
    body: 'While reasonable efforts have been undertaken to compile factual and objective scientific information, no warranty, express or implied, is made regarding the absolute accuracy, completeness, or current applicability of the content. The author, publisher, and affiliated organizations disclaim any and all liability for direct, indirect, incidental, or consequential damages resulting from the use, application, or misinterpretation of any information provided herein.',
  },
]

export const metadata = {
  title: 'Medical Disclaimer | Ottawa County Recovery Alliance',
  description: 'Legal and medical notice for Ottawa County Recovery Alliance educational resources.',
}

export default function MedicalDisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#41cfdf] px-5 py-12 text-slate-950 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/education" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white/40">
          <span aria-hidden="true">←</span> Back to education guides
        </Link>
        <article className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-cyan-700 to-slate-950 text-white shadow-[0_28px_60px_-28px_rgba(2,8,23,0.9)]">
          <header className="border-b border-white/15 p-8 sm:p-12">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Please read carefully</p>
            <h1 className="text-balance text-4xl font-black tracking-tight sm:text-6xl">Legal and Medical Notice</h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-cyan-50">Our substance education materials are designed to support informed, safer decisions—not to replace individualized medical care.</p>
          </header>
          <div className="space-y-4 p-5 sm:p-8">
            {sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur sm:p-7">
                <h2 className="text-xl font-black text-cyan-200 sm:text-2xl">{section.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-100">{section.body}</p>
              </section>
            ))}
            <section className="rounded-2xl border border-red-200/30 bg-red-950/50 p-6 sm:p-7">
              <h2 className="text-xl font-black text-red-100 sm:text-2xl">Emergency Care</h2>
              <p className="mt-3 text-base leading-7 text-red-50">This document does not provide real-time clinical intervention. If you suspect an overdose, severe adverse reaction, or any medical crisis, contact emergency services (911 in the United States) immediately or proceed to the nearest emergency department.</p>
            </section>
          </div>
        </article>
      </div>
    </main>
  )
}
