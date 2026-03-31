'use client';

import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function NaloxoneLocations() {
  const locations = [
    {
      name: "Ottawa County Jail - Lobby",
      address: "12220 Fillmore Ave, West Olive, MI 49426",
      phone: "616-786-4140",
      hours: "24 hour access",
      details: "Naloxone kits available for free in jail lobby in vending machine"
    },
    {
      name: "Community Mental Health of Ottawa County - Holland",
      address: "347 Hoover Blvd, Holland, MI 49423",
      phone: "616-393-4489",
      hours: "Call for hours",
      details: "Free Naloxone kits available."
    },
    {
      name: "Reach for Recovery - Holland",
      address: "483 Century Lane, Holland, MI 49424",
      phone: "616-396-5284",
      hours: "M-F 8a-5p",
      details: "Free Naloxone Kits available."
    },
    {
      name: "Reach for Recovery - Grand Haven",
      address: "420 Washington Ave, Grand Haven, MI 49417",
      phone: "616-842-2420",
      hours: "M-F 8a-5p",
      details: "Free Naloxone Kits available."
    },
    {
      name: "Samaritas",
      address: "2416 Van Ommen Dr, Holland, MI 49424",
      phone: "616-350-7781",
      hours: "Call for hours",
      details: "Free Naloxone kits available."
    },
    {
      name: "Sobar Recovery Community Center",
      address: "347 Hoover Blvd, Holland, MI 49423",
      phone: "(616) 377-5792",
      hours: "24 hour access",
      details: "Free Naloxone kits available in newspaper box outside main entrance"
    }
  ];

  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-red-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link href="/">
            <button className="mb-4 flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
              ← Back to Resources
            </button>
          </Link>
          <h1 className="text-5xl font-bold text-red-700">Naloxone (Narcan) Locations</h1>
          <p className="text-lg text-gray-700 mt-4">Find free naloxone kits and training in Ottawa County. Naloxone is a life-saving medication that reverses opioid overdose.</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Why Get Naloxone?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Naloxone (Narcan) reverses opioid overdose in minutes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>It has no risk of abuse and is safe for anyone to use</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Available for free at all locations listed below</span>
            </li>

          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Interested in being trained on naloxone administration?</h2>
          <p className="text-gray-700 mb-4">Learn to recognize the signs and symptoms of overdose, risk factors from overdose and responding to an overdose with naloxone.</p>
          <p className="text-gray-700 mb-4">To schedule a naloxone training, contact:</p>
          <div className="bg-white p-4 rounded border border-green-200">
            <p className="font-bold text-gray-800 mb-2">Daniel Gardner</p>
            <p className="text-gray-700 mb-2">Community Mental Health of Ottawa County</p>
            <p className="text-gray-700 mb-1">
              <a href="mailto:dgardner@miottawa.org" className="text-green-700 font-bold hover:underline">dgardner@miottawa.org</a>
            </p>
            <p className="text-gray-700 mb-3">
              <a href="tel:616-393-4489" className="text-green-700 font-bold hover:underline">616-393-4489</a>
            </p>
            <p className="text-gray-700 italic">We offer training for individuals, groups and businesses.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, idx) => (
            <div key={idx} className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-red-700 mb-4">{location.name}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex gap-3 items-start">
                  <MapPin size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{location.address}</span>
                </div>
                
                <div className="flex gap-3 items-center">
                  <Phone size={20} className="text-red-600 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-red-700 font-bold hover:underline">{location.phone}</a>
                </div>
                
                <div className="flex gap-3 items-center">
                  <Clock size={20} className="text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">{location.hours}</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm border-t border-red-200 pt-3">{location.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">What to Do in Case of Overdose</h2>
          <ol className="space-y-3 text-gray-700 list-decimal list-inside">
            <li>Call 911 immediately</li>
            <li>If naloxone is available, administer it (nasal spray or injection into outer thigh muscle)</li>
            <li>Give rescue breathing for 3 minutes (1 breath every 5 seconds)</li>
            <li>If person has not responded, administer second dose of naloxone and continue rescue breathing</li>
            <li>If individual responds to the naloxone, place person in recovery position (on their side)</li>
            <li>Stay with the person until emergency responders arrive</li>
            <li>Tell responders what was taken and when, if known</li>
          </ol>
          <p className="text-sm text-gray-600 mt-4 italic">Good Samaritan Laws protect people who call 911 for overdose emergencies. You will not get in trouble for seeking help.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
