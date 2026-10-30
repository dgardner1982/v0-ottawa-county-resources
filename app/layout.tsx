import type { Metadata } from 'next'
import Link from 'next/link'
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { AnalyticsWrapper } from './analytics'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' })

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
    <html lang="en" className={`bg-background ${geist.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <footer className="print:hidden border-t border-slate-800/70 bg-slate-950 px-5 py-8 text-center text-slate-300 sm:px-8">
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
