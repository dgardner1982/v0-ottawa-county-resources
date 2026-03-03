'use client';

import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function MethadonePage() {
  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-white border-b-2 border-teal-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="text-7xl">🧬</div>
            <h1 className="text-6xl font-bold text-teal-700">Methadone</h1>
            <p className="text-2xl text-gray-600">Medication-Assisted Treatment for Opioid Addiction</p>
            <Link href="/education">
              <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition">
                ← Back to Education
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            For more detailed information, click{' '}
            <a 
              href="https://gemini.google.com/share/38d5d9431355" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              here
            </a>
          </p>
        </div>
        <div className="bg-blue-100 border-4 border-blue-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">TREATMENT MEDICATION</h2>
          <p className="text-lg text-blue-900 mb-4">Methadone is a long-acting synthetic opioid used in Medication-Assisted Treatment (MAT) programs to help people recover from opioid addiction. When used as prescribed in a medical setting, it is a safe and effective treatment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Methadone Helps</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Prevents withdrawal symptoms</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Reduces cravings for opioids</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Blocks the euphoric effects of other opioids</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Long-lasting (24-36 hours)</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Allows people to stabilize and rebuild lives</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Reduces illegal drug use and crime</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Methadone Program Benefits</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Medical supervision and support</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Counseling and behavioral therapy</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Safe, measured daily dosing</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Connection to social services</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Support for co-occurring mental health issues</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600 font-bold">•</span>
                <span>Community of others in recovery</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Methadone as Street Drug vs. Treatment</h2>
          <p className="text-gray-700 mb-4 font-bold">MEDICAL USE (In Treatment Programs):</p>
          <ul className="space-y-2 text-gray-700 ml-4 mb-6">
            <li>• Prescribed dosage based on individual needs</li>
            <li>• Daily medical supervision</li>
            <li>• Counseling and support services</li>
            <li>• Goal: Recovery and rebuilding life</li>
            <li>• Safe and effective</li>
          </ul>
          <p className="text-red-700 mb-4 font-bold">ILLEGAL USE (Street Drug):</p>
          <ul className="space-y-2 text-red-700 ml-4">
            <li>• Uncontrolled, unknown doses</li>
            <li>• High overdose risk, especially combined with other drugs</li>
            <li>• Sometimes mixed with fentanyl</li>
            <li>• Creates addiction</li>
            <li>• Naloxone required for overdose</li>
          </ul>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Methadone Overdose</h2>
          <ul className="space-y-2 text-gray-700 ml-4 mb-6">
            <li>• Extreme drowsiness and difficulty breathing</li>
            <li>• Loss of consciousness</li>
            <li>• Pinpoint pupils</li>
            <li>• Slow or no heartbeat</li>
          </ul>
          <p className="text-red-700 font-bold">Call 9-1-1 immediately. Naloxone can reverse methadone overdose.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started with Methadone Treatment</h2>
          <p className="text-gray-700 mb-4">Methadone treatment can provide a path to recovery:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Call <a href="tel:211" className="text-green-700 font-bold">2-1-1</a> for Ottawa County methadone clinics</li>
            <li>• SAMHSA Treatment Locator: <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">findtreatment.gov</a></li>
            <li>• Ask about insurance coverage and financial assistance</li>
            <li>• Methadone maintenance is a long-term commitment to recovery</li>
            <li>• Success rates are high when combined with counseling</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link href="/education">
            <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded-lg transition mx-auto">
              ← Back to Education
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
