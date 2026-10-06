import type { Metadata } from 'next'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { Geist, Geist_Mono } from 'next/font/google'
import { AnalyticsWrapper } from './analytics'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ottawa County Recovery Resource and Education Hub | Community Directory',
  description: 'One-stop guide for recovery resources in Ottawa County MI. Find mental health, substance recovery, housing, food, employment, harm reduction and overdose prevention services. Includes education on emerging substances.',
  generator: 'v0.app',
  keywords: ['recovery', 'resources', 'Ottawa County', 'mental health', 'substance recovery', 'housing', 'food assistance', 'harm reduction', 'overdose prevention'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
    viewportFit: 'cover'
  },
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
        <nav aria-label="Primary navigation" className="sticky top-0 z-[60] border-b border-slate-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center gap-2 sm:gap-3">
            <Link href="/" aria-label="Go to Ottawa County Recovery Alliance homepage" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-teal-300 transition hover:-translate-y-0.5 hover:bg-teal-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
              <Home aria-hidden="true" className="h-5 w-5" />
            </Link>
            <div className="grid min-w-0 flex-1 grid-cols-3 gap-2">
              <Link href="/" className="inline-flex min-h-10 items-center justify-center rounded-full bg-teal-600 px-3 text-center text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 sm:text-sm">Explore resources</Link>
              <Link href="/support-groups" className="inline-flex min-h-10 items-center justify-center rounded-full bg-fuchsia-600 px-3 text-center text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-fuchsia-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 sm:text-sm">Explore support groups</Link>
              <Link href="/education" className="inline-flex min-h-10 items-center justify-center rounded-full bg-cyan-600 px-3 text-center text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 sm:text-sm">Learn something new</Link>
            </div>
          </div>
        </nav>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
