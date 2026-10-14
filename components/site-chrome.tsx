import Link from 'next/link';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export type Accent = 'teal' | 'rose' | 'amber' | 'fuchsia' | 'red' | 'cyan';

type AccentTheme = {
  orbA: string;
  orbB: string;
  heroBg: string;
  eyebrow: string;
  eyebrowDot: string;
  highlight: string;
  callout: string;
  calloutShadow: string;
  chip: string;
  iconTile: string;
  link: string;
  solid: string;
  ring: string;
};

export const ACCENTS: Record<Accent, AccentTheme> = {
  teal: {
    orbA: 'bg-teal-400/30',
    orbB: 'bg-fuchsia-500/20',
    heroBg:
      'bg-[radial-gradient(circle_at_70%_15%,rgba(45,212,191,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#123b46_100%)]',
    eyebrow: 'border-teal-300/30 bg-teal-300/10 text-teal-200',
    eyebrowDot: 'bg-teal-300 shadow-[0_0_14px_#5eead4]',
    highlight: 'from-teal-300 via-cyan-200 to-amber-200',
    callout: 'from-teal-700 via-cyan-600 to-slate-900',
    calloutShadow: 'shadow-[0_24px_55px_-30px_rgba(13,148,136,0.8)]',
    chip: 'border-teal-300/25 from-slate-800 via-slate-900 to-slate-950 hover:border-teal-300/60 hover:shadow-[0_20px_40px_-22px_rgba(45,212,191,0.6)]',
    iconTile: 'border-teal-300/25 from-teal-300/20 to-fuchsia-400/10 text-teal-200',
    link: 'text-teal-700 hover:text-teal-900',
    solid: 'bg-teal-300 text-slate-950 shadow-[0_10px_35px_-12px_#5eead4] hover:bg-white',
    ring: 'focus-visible:outline-teal-300',
  },
  rose: {
    orbA: 'bg-rose-400/30',
    orbB: 'bg-orange-400/20',
    heroBg:
      'bg-[radial-gradient(circle_at_70%_15%,rgba(251,113,133,0.2),transparent_34%),linear-gradient(135deg,#020617_0%,#1e1030_55%,#4c1530_100%)]',
    eyebrow: 'border-rose-300/30 bg-rose-300/10 text-rose-200',
    eyebrowDot: 'bg-rose-300 shadow-[0_0_14px_#fda4af]',
    highlight: 'from-rose-300 via-pink-200 to-amber-200',
    callout: 'from-rose-700 via-rose-600 to-slate-950',
    calloutShadow: 'shadow-[0_24px_55px_-30px_rgba(225,29,72,0.8)]',
    chip: 'border-rose-300/25 from-slate-800 via-slate-900 to-slate-950 hover:border-rose-300/60 hover:shadow-[0_20px_40px_-22px_rgba(251,113,133,0.6)]',
    iconTile: 'border-rose-300/25 from-rose-300/20 to-orange-400/10 text-rose-200',
    link: 'text-rose-700 hover:text-rose-900',
    solid: 'bg-rose-300 text-slate-950 shadow-[0_10px_35px_-12px_#fda4af] hover:bg-white',
    ring: 'focus-visible:outline-rose-300',
  },
  amber: {
    orbA: 'bg-amber-400/30',
    orbB: 'bg-orange-500/20',
    heroBg:
      'bg-[radial-gradient(circle_at_70%_15%,rgba(251,191,36,0.2),transparent_34%),linear-gradient(135deg,#020617_0%,#1c1917_55%,#4a2a0f_100%)]',
    eyebrow: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
    eyebrowDot: 'bg-amber-300 shadow-[0_0_14px_#fcd34d]',
    highlight: 'from-amber-300 via-orange-200 to-yellow-100',
    callout: 'from-amber-600 via-orange-600 to-slate-950',
    calloutShadow: 'shadow-[0_24px_55px_-30px_rgba(217,119,6,0.8)]',
    chip: 'border-amber-300/25 from-slate-800 via-slate-900 to-slate-950 hover:border-amber-300/60 hover:shadow-[0_20px_40px_-22px_rgba(251,191,36,0.6)]',
    iconTile: 'border-amber-300/25 from-amber-300/20 to-orange-400/10 text-amber-200',
    link: 'text-amber-700 hover:text-amber-900',
    solid: 'bg-amber-300 text-slate-950 shadow-[0_10px_35px_-12px_#fcd34d] hover:bg-white',
    ring: 'focus-visible:outline-amber-300',
  },
  fuchsia: {
    orbA: 'bg-fuchsia-500/25',
    orbB: 'bg-teal-400/25',
    heroBg:
      'bg-[radial-gradient(circle_at_70%_15%,rgba(217,70,239,0.16),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#32194d_100%)]',
    eyebrow: 'border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-200',
    eyebrowDot: 'bg-fuchsia-300 shadow-[0_0_14px_#f0abfc]',
    highlight: 'from-fuchsia-300 via-pink-200 to-amber-200',
    callout: 'from-fuchsia-700 via-purple-700 to-slate-950',
    calloutShadow: 'shadow-[0_24px_55px_-30px_rgba(192,38,211,0.8)]',
    chip: 'border-fuchsia-300/25 from-slate-800 via-slate-900 to-slate-950 hover:border-fuchsia-300/60 hover:shadow-[0_20px_40px_-22px_rgba(232,121,249,0.6)]',
    iconTile: 'border-fuchsia-300/25 from-fuchsia-300/20 to-teal-400/10 text-fuchsia-200',
    link: 'text-fuchsia-700 hover:text-fuchsia-900',
    solid: 'bg-fuchsia-300 text-slate-950 shadow-[0_10px_35px_-12px_#f0abfc] hover:bg-white',
    ring: 'focus-visible:outline-fuchsia-300',
  },
  red: {
    orbA: 'bg-red-500/30',
    orbB: 'bg-teal-400/20',
    heroBg:
      'bg-[radial-gradient(circle_at_70%_15%,rgba(248,113,113,0.2),transparent_34%),linear-gradient(135deg,#020617_0%,#1c1021_55%,#4a1220_100%)]',
    eyebrow: 'border-red-300/30 bg-red-300/10 text-red-200',
    eyebrowDot: 'bg-red-300 shadow-[0_0_14px_#fca5a5]',
    highlight: 'from-red-300 via-rose-200 to-amber-200',
    callout: 'from-red-700 via-rose-700 to-slate-950',
    calloutShadow: 'shadow-[0_24px_55px_-30px_rgba(220,38,38,0.8)]',
    chip: 'border-red-300/25 from-slate-800 via-slate-900 to-slate-950 hover:border-red-300/60 hover:shadow-[0_20px_40px_-22px_rgba(248,113,113,0.6)]',
    iconTile: 'border-red-300/25 from-red-300/20 to-teal-400/10 text-red-200',
    link: 'text-red-700 hover:text-red-900',
    solid: 'bg-red-300 text-slate-950 shadow-[0_10px_35px_-12px_#fca5a5] hover:bg-white',
    ring: 'focus-visible:outline-red-300',
  },
  cyan: {
    orbA: 'bg-cyan-400/30',
    orbB: 'bg-fuchsia-500/20',
    heroBg:
      'bg-[radial-gradient(circle_at_70%_15%,rgba(34,211,238,0.2),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#0e3a52_100%)]',
    eyebrow: 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200',
    eyebrowDot: 'bg-cyan-300 shadow-[0_0_14px_#67e8f9]',
    highlight: 'from-cyan-300 via-teal-200 to-amber-200',
    callout: 'from-cyan-700 via-teal-600 to-slate-900',
    calloutShadow: 'shadow-[0_24px_55px_-30px_rgba(8,145,178,0.8)]',
    chip: 'border-cyan-300/25 from-slate-800 via-slate-900 to-slate-950 hover:border-cyan-300/60 hover:shadow-[0_20px_40px_-22px_rgba(34,211,238,0.6)]',
    iconTile: 'border-cyan-300/25 from-cyan-300/20 to-fuchsia-400/10 text-cyan-200',
    link: 'text-cyan-700 hover:text-cyan-900',
    solid: 'bg-cyan-300 text-slate-950 shadow-[0_10px_35px_-12px_#67e8f9] hover:bg-white',
    ring: 'focus-visible:outline-cyan-300',
  },
};

export function EmergencyBar() {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-b border-white/20 bg-slate-950 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg sm:text-sm">
      <span>
        <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />
        Call{' '}
        <a href="tel:211" className="text-[#24f2a2] underline underline-offset-4 hover:text-white">
          2-1-1
        </a>{' '}
        for local resources
      </span>
      <span className="hidden text-slate-500 sm:inline">/</span>
      <span>
        <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />
        Life-threatening emergency?{' '}
        <a href="tel:911" className="text-[#ff4d4d] underline underline-offset-4 hover:text-white">
          Call 9-1-1
        </a>
      </span>
      <span className="hidden text-slate-500 sm:inline">/</span>
      <span>
        <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />
        Suicide crisis:{' '}
        <a href="tel:988" className="text-[#ff5454] underline underline-offset-4 hover:text-white">
          Call 9-8-8
        </a>
      </span>
    </div>
  );
}

type PillLinkProps = {
  href: string;
  children: ReactNode;
  accent?: Accent;
  variant?: 'solid' | 'ghost';
  external?: boolean;
  className?: string;
};

export function PillLink({ href, children, accent = 'teal', variant = 'solid', external, className = '' }: PillLinkProps) {
  const theme = ACCENTS[accent];
  const base =
    'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 font-bold transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4';
  const look =
    variant === 'solid'
      ? theme.solid
      : 'border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/70 hover:bg-white/15';
  const classes = `${base} ${look} ${theme.ring} ${className}`;
  const arrow = <span className="transition-transform group-hover:translate-x-1">→</span>;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children} {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children} {arrow}
    </Link>
  );
}

export function BackPill({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full border-2 border-slate-950 bg-slate-950 px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_18px_-12px_rgba(2,8,23,0.9)] transition hover:-translate-y-1 hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 ${className}`}
    >
      <span aria-hidden="true" className="text-lg leading-none">
        ←
      </span>
      {children}
    </Link>
  );
}

type PageHeroProps = {
  accent?: Accent;
  eyebrow: string;
  title: ReactNode;
  highlight?: string;
  description: ReactNode;
  icon?: LucideIcon;
  back?: { href: string; label: string };
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({ accent = 'teal', eyebrow, title, highlight, description, icon: Icon, back, actions, aside }: PageHeroProps) {
  const theme = ACCENTS[accent];
  return (
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className={`absolute -left-24 top-8 -z-10 h-72 w-72 animate-float-orb rounded-full blur-3xl ${theme.orbA}`} />
      <div className={`absolute -right-20 bottom-0 -z-10 h-96 w-96 animate-float-orb rounded-full blur-3xl [animation-delay:2s] ${theme.orbB}`} />
      <div className={`absolute inset-0 -z-10 ${theme.heroBg}`} />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        {back && (
          <Link
            href={back.href}
            className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-cyan-300/60 bg-cyan-300/10 px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.16em] text-cyan-100 shadow-[0_10px_18px_-12px_rgba(2,8,23,0.9)] backdrop-blur transition hover:border-white hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ←
            </span>
            {back.label}
          </Link>
        )}
        <div className={`grid items-center gap-12 ${aside ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
          <div className="animate-slide-in-up text-left">
            <div className={`mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur ${theme.eyebrow}`}>
              {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : <span className={`h-2 w-2 rounded-full ${theme.eyebrowDot}`} />}
              {eyebrow}
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl">
              {title}
              {highlight && (
                <>
                  {' '}
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.highlight}`}>{highlight}</span>
                </>
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">{description}</p>
            {actions && <div className="mt-9 flex flex-wrap gap-4">{actions}</div>}
          </div>
          {aside && <div className="relative animate-scale-in [animation-delay:180ms]">{aside}</div>}
        </div>
      </div>
    </header>
  );
}

export function Callout({
  accent = 'teal',
  title,
  children,
  className = '',
}: {
  accent?: Accent;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const theme = ACCENTS[accent];
  return (
    <div
      className={`animate-slide-in-up relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br p-8 text-white sm:p-10 ${theme.callout} ${theme.calloutShadow} ${className}`}
    >
      <h2 className="mb-3 text-balance text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      <div className="space-y-3 text-lg leading-8 text-white/90">{children}</div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-700">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      {children && <p className="mt-3 max-w-3xl text-pretty text-lg leading-8 text-slate-800">{children}</p>}
    </div>
  );
}

export function IconTile({ accent = 'teal', icon: Icon }: { accent?: Accent; icon: LucideIcon }) {
  const theme = ACCENTS[accent];
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-[0_0_28px_-10px_rgba(94,234,212,0.7)] transition duration-500 group-hover:rotate-3 group-hover:scale-110 ${theme.iconTile}`}
    >
      <Icon aria-hidden="true" className="h-7 w-7 stroke-[1.6]" />
    </div>
  );
}

export const darkCardClass =
  'resource-card group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white shadow-[0_18px_24px_-10px_rgba(2,8,23,0.9),0_8px_14px_-8px_rgba(15,23,42,0.75)] transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_26px_52px_-24px_rgba(45,212,191,0.5),0_12px_24px_-14px_rgba(2,8,23,0.95)]';

export const lightCardClass =
  'resource-card group relative overflow-hidden rounded-[1.35rem] border border-white/80 bg-white text-slate-900 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.8)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_48px_-26px_rgba(15,23,42,0.85)]';
