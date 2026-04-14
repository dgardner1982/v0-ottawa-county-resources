'use client';

import { MapPin, Phone, Globe } from 'lucide-react';
import Link from 'next/link';

export default function DomesticViolenceResources() {
  const resources = [
    {
      name: "Every Woman's Place Inc",
      address: "1221 W Laketon Ave, Muskegon, MI 49441",
      phone: "(231) 722-3333",
      hours: "Monday through Friday, 9:00 AM – 4:30 PM (Emergency services available 24/7)",
      details: "Crisis intervention, emergency shelter, counseling, and legal advocacy for survivors of domestic violence, sexual assault, and sex trafficking.",
      website: "https://www.everywomansplace.org"
    },
    {
      name: "Resilience: Advocates for Ending Violence",
      address: "411 Butternut Dr, Holland, MI 49424",
      phone: "(800) 848-5991",
      officePhone: "(616) 392-1970",
      hours: "Monday through Friday, 9:00 AM – 5:00 PM (Emergency services available 24/7)",
      details: "Comprehensive support for survivors of domestic and sexual violence including crisis support, emergency shelter, supportive services, and community education.",
      website: "https://www.resiliencemi.org"
    },
    {
      name: "Sylvia's Place",
      address: "235 North St, Allegan, MI 49010",
      phone: "(269) 673-8700",
      tollfree: "(888) 411-7837",
      hours: "24/7 - Emergency services and help line always available",
      details: "Primary domestic violence agency for Allegan County providing 24-hour crisis help line, emergency shelter, legal advocacy for Personal Protection Orders, and support services.",
      website: "https://www.sylviasplace.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="text-rose-600 hover:text-rose-800 font-semibold mb-8 inline-block">
          ← Back to Resources
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            Domestic Violence Resources
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            If you or someone you know is experiencing domestic violence, help is available. These organizations provide crisis intervention, shelter, legal advocacy, and support services to survivors and their children.
          </p>
          <div className="bg-rose-600 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">If you are in immediate danger, call 911</h2>
            <p className="text-lg">
              All of these organizations provide 24-hour crisis lines. You can call anytime, day or night, for immediate support and safety planning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.name}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden border-l-4 border-rose-600"
            >
              <div className="bg-rose-100 px-6 py-4">
                <h3 className="text-xl font-bold text-rose-900">{resource.name}</h3>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">{resource.details}</p>
                </div>

                {resource.address && (
                  <div className="flex gap-3 items-start">
                    <MapPin size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">{resource.address}</p>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex gap-3 items-start">
                    <Phone size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">24-Hour Help Line</p>
                      <p className="text-gray-700 font-semibold">{resource.phone}</p>
                      {resource.tollfree && (
                        <p className="text-gray-600 text-sm">Toll-Free: {resource.tollfree}</p>
                      )}
                      {resource.officePhone && (
                        <p className="text-gray-600 text-sm">Office: {resource.officePhone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {resource.hours && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Hours</p>
                    <p className="text-gray-700 text-sm">{resource.hours}</p>
                  </div>
                )}

                {resource.website && (
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 items-center bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    <Globe size={18} />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>What is domestic violence?</strong> Domestic violence includes physical abuse, emotional abuse, sexual abuse, financial control, and intimidation by an intimate partner or family member.
            </p>
            <p>
              <strong>You are not alone.</strong> Domestic violence affects people of all backgrounds, ages, and income levels. Help is available, and recovery is possible.
            </p>
            <p>
              <strong>Services are confidential.</strong> These organizations maintain confidentiality and can help you develop a safety plan tailored to your situation.
            </p>
            <p>
              <strong>Emergency shelter is available.</strong> If you need to leave immediately, these organizations can provide emergency shelter for you and your children.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Back to All Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
