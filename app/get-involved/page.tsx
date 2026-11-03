import Link from "next/link"

const options = [
  {
    title: "Ottawa County Recovery Alliance",
    description: "Connect with local people and organizations working together to support healing and recovery.",
    href: "/get-involved/recovery-alliance",
    accent: "border-cyan-200/40 bg-cyan-200/10 text-cyan-100 hover:border-cyan-200 hover:bg-cyan-200/20",
  },
  {
    title: "OSAP: Ottawa Substance Abuse Prevention",
    description: "Learn about prevention efforts and ways to help build a healthier Ottawa County.",
    href: "/get-involved/osap",
    accent: "border-amber-200/40 bg-amber-200/10 text-amber-100 hover:border-amber-200 hover:bg-amber-200/20",
  },
]

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline">← Back to home</Link>
        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Make a difference</p>
          <h1 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-6xl">Explore ways to get involved</h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-slate-300">Choose an organization to learn how you can support prevention, recovery, and wellbeing across Ottawa County.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {options.map((option) => (
            <Link key={option.title} href={option.href} className={`group flex min-h-56 flex-col justify-between rounded-[1.75rem] border p-7 transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 ${option.accent}`}>
              <div>
                <h2 className="text-2xl font-black">{option.title}</h2>
                <p className="mt-4 leading-7 text-slate-200">{option.description}</p>
              </div>
              <span className="mt-8 font-bold">Learn more <span className="transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
