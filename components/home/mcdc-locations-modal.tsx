'use client'

import { X, MapPin, Phone } from 'lucide-react'
import { MCDC_LOCATIONS } from '@/lib/resource-data'

export function MCDCLocationsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="MCDC locations" className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="sticky top-0 bg-teal-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">My Community Dental Centers (MCDC) Locations</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MCDC_LOCATIONS.map((location, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{location.city}</h3>
                <div className="space-y-2 text-sm">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline flex gap-2 items-start"
                  >
                    <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                    {location.address}
                  </a>
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-teal-700 hover:underline flex gap-2 items-center"
                  >
                    <Phone size={16} className="flex-shrink-0" />
                    {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

