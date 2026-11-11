import Image from 'next/image'
import Link from 'next/link'

type SpinningLogoProps = {
  variant?: 'nav' | 'hero'
}

function SpinningEmblem({ isHero }: { isHero: boolean }) {
  return (
    <span className={`logo-rotating-depth relative block aspect-square ${isHero ? 'h-[58%]' : 'h-[78%]'} rounded-full`}>
      <span className="logo-seal-face logo-front-face">
        <Image
          src="/ottawa-county-recovery-logo.jpg"
          alt=""
          fill
          sizes={isHero ? '190px' : '40px'}
          className="scale-[5] object-cover object-center mix-blend-multiply"
          priority={isHero}
        />
      </span>
      <span className="logo-seal-face logo-back-face">
        <Image
          src="/ottawa-county-recovery-logo.jpg"
          alt=""
          fill
          sizes={isHero ? '190px' : '40px'}
          className="scale-[5] object-cover object-center mix-blend-multiply"
          priority={isHero}
        />
      </span>
    </span>
  )
}

export function SpinningLogo({ variant = 'nav' }: SpinningLogoProps) {
  const isHero = variant === 'hero'

  return (
    <Link
      href="/"
      aria-label="Go to Ottawa County Recovery Alliance homepage"
      className={isHero
        ? 'logo-perspective group relative block w-full rounded-[1.4rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300'
        : 'logo-perspective group relative flex h-12 w-16 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400'}
    >
      <span className={isHero
        ? 'logo-stage relative flex aspect-[1.55] w-full items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/70 bg-white shadow-[0_18px_40px_-20px_rgba(15,23,42,0.75)] transition-transform duration-500 group-hover:scale-[1.015] group-focus-visible:scale-[1.015]'
        : 'logo-stage relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.7)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110'}
      >
        {isHero && (
          <svg
            aria-hidden="true"
            className="logo-wordmark pointer-events-none absolute left-1/2 top-1/2 h-[94%] w-auto -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 320 320"
          >
            <defs>
              <path id="ottawa-wordmark-top" d="M 28 160 A 132 132 0 0 1 292 160" />
              <path id="ottawa-wordmark-bottom" d="M 28 160 A 132 132 0 0 0 292 160" />
            </defs>
            <text className="logo-wordmark-text">
              <textPath href="#ottawa-wordmark-top" startOffset="50%" textAnchor="middle">OTTAWA COUNTY</textPath>
            </text>
            <text className="logo-wordmark-text">
              <textPath href="#ottawa-wordmark-bottom" startOffset="50%" textAnchor="middle">RECOVERY ALLIANCE</textPath>
            </text>
          </svg>
        )}
        <span className="logo-artwork-position absolute inset-0 grid place-items-center">
          <SpinningEmblem isHero={isHero} />
        </span>
      </span>
    </Link>
  )
}
