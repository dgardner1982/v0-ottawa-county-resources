import Link from 'next/link';

type BackToEducationButtonProps = {
  variant?: 'dark' | 'light';
};

export function BackToEducationButton({ variant = 'dark' }: BackToEducationButtonProps) {
  const styles =
    variant === 'dark'
      ? 'border-cyan-300/60 bg-cyan-300/10 text-cyan-100 hover:border-white hover:bg-white hover:text-slate-950 focus-visible:outline-white'
      : 'border-slate-950 bg-slate-950 text-white hover:bg-white hover:text-slate-950 focus-visible:outline-slate-950';

  return (
    <Link
      href="/education"
      className={`inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.16em] shadow-[0_10px_18px_-12px_rgba(2,8,23,0.9)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-base ${styles}`}
    >
      <span aria-hidden="true" className="text-lg leading-none sm:text-xl">
        ←
      </span>
      Back to education guides
    </Link>
  );
}
