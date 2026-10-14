'use client'

import dynamic from 'next/dynamic'
import { MapPin } from 'lucide-react'
import { Footer } from '@/components/footer'
import { BackPill, EmergencyBar, PageHero } from '@/components/site-chrome'

const OttawaCountyMap = dynamic(
  () => import('@/components/ottawa-county-map').then((module) => module.OttawaCountyMap),
  { ssr: false },
)

export default function OttawaCountyMapPage() {
  return (
    <div className="min-h-screen bg-[#41cfdf] text-slate-950">
      <EmergencyBar />
      <PageHero
        accent="teal"
        eyebrow="Interactive map"
        title="Free Naloxone"
        highlight="Locations"
        icon={MapPin}
        description="Click a marker to view the location name and address anywhere in Ottawa County."
        back={{ href: '/naloxone-locations', label: 'Back to naloxone locations' }}
      />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-[1.75rem] border-4 border-slate-950 bg-white p-2 shadow-[0_28px_60px_-28px_rgba(2,8,23,0.9)]">
          <OttawaCountyMap />
        </div>
        <div className="mt-12 flex justify-center">
          <BackPill href="/naloxone-locations">Back to naloxone locations</BackPill>
        </div>
      </main>
      <Footer />
    </div>
  )
}
