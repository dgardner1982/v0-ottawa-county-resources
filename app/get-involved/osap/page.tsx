import Link from "next/link"

export default function OsapPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/get-involved" className="text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline">← Back to ways to get involved</Link>
        <article className="mt-10 rounded-[1.75rem] border border-amber-200/20 bg-slate-900/80 p-7 shadow-2xl sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">Get involved</p>
          <h1 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-6xl">OSAP: Ottawa Substance Abuse Prevention</h1>
          <p className="mt-8 text-pretty text-lg leading-8 text-slate-300">OSAP brings community partners together to promote substance use prevention, education, and healthier choices throughout Ottawa County.</p>
          <p className="mt-5 text-pretty leading-7 text-slate-400">Learn more about local prevention efforts and how you can help support a healthier community.</p>
          <Link href="/get-involved" className="mt-10 inline-flex rounded-full bg-amber-200 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">Back to involvement options</Link>
        </article>
      </div>
    </main>
  )
}
