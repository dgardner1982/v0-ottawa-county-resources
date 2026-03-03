import type { Metadata } from 'next'
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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
