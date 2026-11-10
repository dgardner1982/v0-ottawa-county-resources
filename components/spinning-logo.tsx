import Image from 'next/image'
import Link from 'next/link'

type SpinningLogoProps = {
  variant?: 'nav' | 'hero'
}

export function SpinningLogo({ variant = 'nav' }: SpinningLogoProps) {
  const isHero = variant === 'hero'

  return (
    <Link
      href="/"
      aria-label="Go to Ottawa County Recovery Alliance homepage"
      className={isHero
        ? 'logo-perspective group relative block w-full overflow-hidden rounded-[1.4rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300'
        : 'logo-perspective group relative flex h-12 w-16 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400'}
    >
      <span className={isHero
        ? 'logo-spin relative flex aspect-[1.55] w-full items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/70 bg-white shadow-[0_18px_40px_-20px_rgba(15,23,42,0.75)] transition-transform duration-500 group-hover:scale-[1.015] group-focus-visible:scale-[1.015]'
        : 'logo-spin relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.7)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110'}
      >
        <Image
          src="/ottawa-county-recovery-logo.jpg"
          alt="Ottawa County Recovery Alliance logo"
          fill
          sizes={isHero ? '(min-width: 1024px) 520px, 100vw' : '48px'}
          className={`logo-face ${isHero
            ? 'scale-[1.35] object-cover object-center mix-blend-multiply'
            : 'scale-[2.8] object-cover object-center mix-blend-multiply'}`}
          priority={isHero}
        />
        <Image
          src="/ottawa-county-recovery-logo.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes={isHero ? '(min-width: 1024px) 520px, 100vw' : '48px'}
          className={`logo-face logo-face-back ${isHero
            ? 'scale-[1.35] object-cover object-center mix-blend-multiply'
            : 'scale-[2.8] object-cover object-center mix-blend-multiply'}`}
          priority={isHero}
        />
        <span aria-hidden="true" className="logo-sheen absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-white/50 blur-sm" />
      </span>
    </Link>
  )
}
