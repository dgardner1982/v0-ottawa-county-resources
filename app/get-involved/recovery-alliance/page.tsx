import Link from "next/link"
import ContactModal from "./contact-modal"

export default function RecoveryAlliancePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/get-involved" className="text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline">← Back to ways to get involved</Link>
        <article id="alliance-description" className="mt-10 rounded-[1.75rem] border border-cyan-200/20 bg-slate-900/80 p-7 shadow-2xl sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Get involved</p>
          <h1 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-6xl">Ottawa County Recovery Alliance</h1>
          <p className="mt-8 text-pretty text-lg leading-8 text-slate-300">The Ottawa County Recovery Alliance is a diverse group of dedicated stakeholders, including healthcare professionals, treatment providers, law enforcement, lawyers, individuals in recovery, and community advocates. Together, we bring our collective expertise and experience to encourage an environment of healing and recovery.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ContactModal />
            <Link href="/get-involved" className="text-center font-semibold text-slate-300 underline-offset-4 hover:text-white hover:underline">View other options</Link>
          </div>
        </article>
      </div>
    </main>
  )
}
