'use client'

import Link from 'next/link'
import OttawaCountyMap from '@/components/ottawa-county-map'

export default function OttawaCountyMapPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/naloxone-locations" className="mb-6 inline-block rounded-lg bg-gray-600 px-6 py-2 font-bold text-white transition hover:bg-gray-700">
          ← Back to Naloxone Locations
        </Link>
        <h1 className="mb-3 text-4xl font-bold text-red-700">Ottawa County Free Naloxone Locations</h1>
        <p className="mb-6 text-lg text-gray-700">Click a marker to view the location name and address.</p>
        <div className="overflow-hidden rounded-xl border-2 border-blue-300 bg-white p-2 shadow-lg">
          <OttawaCountyMap />
        </div>
      </div>
    </main>
  )
}
