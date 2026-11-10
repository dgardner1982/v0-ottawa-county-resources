import Image from 'next/image'
import Link from 'next/link'

export function SpinningLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to Ottawa County Recovery Alliance homepage"
      className="logo-perspective group relative flex h-12 w-16 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
    >
      <span className="logo-spin relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.7)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
        <Image
          src="/ottawa-county-recovery-logo.jpg"
          alt="Ottawa County Recovery Alliance logo"
          fill
          sizes="48px"
          className="scale-[2.8] object-cover object-center mix-blend-multiply"
          priority
        />
        <span aria-hidden="true" className="logo-sheen absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-white/50 blur-sm" />
      </span>
    </Link>
  )
}
