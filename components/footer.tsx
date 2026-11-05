export function Footer() {
  return (
    <footer className="mt-16 border-t border-teal-300/15 bg-slate-950 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-300">Ottawa County, Michigan</p>
        <p className="mt-3 text-2xl font-black tracking-tight">Ottawa County Recovery Alliance</p>
        <p className="mx-auto mb-8 mt-4 max-w-3xl text-base leading-7 text-slate-300">
          The Ottawa County Recovery Alliance is a diverse group of dedicated stakeholders, including healthcare professionals, treatment providers, law enforcement, lawyers, individuals in recovery, and community advocates. Together, we bring our collective expertise and experience to encourage an environment of healing and recovery.
        </p>
        <div className="border-t border-white/10 pt-7">
          <p className="mb-2 text-lg font-bold text-white">Interested in joining the coalition?</p>
          <p className="text-base text-slate-300">
            Contact Daniel Gardner at <a href="mailto:dgardner@miottawa.org" className="font-semibold text-teal-300 underline decoration-teal-300/40 underline-offset-4 transition hover:text-white">dgardner@miottawa.org</a>
          </p>
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.08em] text-[#35e15c]">Crisis Support: 2-1-1 for Resources <span className="mx-2 text-slate-600">|</span> 988 for Suicide Crisis <span className="mx-2 text-slate-600">|</span> 911 for Emergencies</p>
      </div>
    </footer>
  )
}
