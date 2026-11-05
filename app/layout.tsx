import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { CalendarDays, Home } from 'lucide-react'
import { Geist, Geist_Mono } from 'next/font/google'
import { AnalyticsWrapper } from './analytics'
import { NavigationHistoryManager } from '@/components/navigation-history-manager'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Ottawa County Recovery Resource and Education Hub | Community Directory',
  description: 'One-stop guide for recovery resources in Ottawa County MI. Find mental health, substance recovery, housing, food, employment, harm reduction and overdose prevention services. Includes education on emerging substances.',
  generator: 'v0.app',
  keywords: ['recovery', 'resources', 'Ottawa County', 'mental health', 'substance recovery', 'housing', 'food assistance', 'harm reduction', 'overdose prevention'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <nav aria-label="Primary navigation" className="sticky top-0 z-[60] border-b border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.7)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Go to Ottawa County Recovery Alliance homepage">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-teal-300 shadow-lg shadow-slate-950/15 transition group-hover:-translate-y-0.5 group-hover:bg-teal-700 group-hover:text-white">
                <Home aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-sm font-black tracking-tight text-slate-950">Ottawa County Recovery Alliance</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Find your next step</span>
              </span>
            </Link>
            <Link href="/calendar" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-600/20 transition hover:-translate-y-0.5 hover:bg-fuchsia-700" aria-label="Open Ottawa County Recovery Events Calendar">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              <span>Events calendar</span>
            </Link>
          </div>
        </nav>
        <NavigationHistoryManager />
        {children}
        <footer className="border-t border-slate-800/70 bg-slate-950 px-5 py-8 text-center text-slate-300 sm:px-8">
          <Link href="/medical-disclaimer" className="font-semibold italic text-[#ff5454] underline decoration-cyan-400 underline-offset-4 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            Medical Disclaimer
          </Link>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Educational and harm-reduction information only. Consult a qualified healthcare professional for personal medical guidance.
          </p>
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
