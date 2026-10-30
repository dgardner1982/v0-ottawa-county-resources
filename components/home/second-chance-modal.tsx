'use client'

import { X, MapPin, Phone, Globe } from 'lucide-react'

export function SecondChanceModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Second chance employers" className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto w-full max-w-4xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-purple-600 text-white p-6 flex items-center justify-between border-b-4 border-purple-800">
          <h2 className="text-3xl font-bold">Second Chance Employment Agencies</h2>
          <button onClick={onClose} className="hover:bg-purple-700 p-2 rounded transition">
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Introduction */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
            <p className="text-gray-800 font-medium text-lg">
              Don&apos;t let your background hold you back. There are employers and agencies in Ottawa County that specialize in helping individuals with records find meaningful employment. Below are resources and tips to help you navigate your job search.
            </p>
          </div>

          {/* Agency 1: West Michigan Works */}
          <div className="bg-purple-100 border-b-4 border-purple-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">West Michigan Works!</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">The most comprehensive resource in the county with a dedicated Returning Citizens program.</p>
            <div className="space-y-3 text-sm leading-6">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">121 Clover Ave, Holland, MI 49423</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Grand Haven:</p>
                  <p className="text-gray-700">1445 Sheldon Rd, Grand Haven, MI 49417</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-purple-600 flex-shrink-0" />
                <a href="tel:616-396-2154" className="text-purple-700 font-bold hover:underline">(616) 396-2154</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-purple-600">
                <p className="font-semibold text-gray-900 mb-2">How They Help:</p>
                <p className="text-gray-700">Offers &ldquo;Federal Bonding,&rdquo; which is a free insurance policy for employers that covers them if they hire a person with a record. Also provides leads on &ldquo;second chance&rdquo; employers in the region.</p>
              </div>
            </div>
          </div>

          {/* Agency 6: 70x7 Life Recovery */}
          <div className="bg-green-100 border-b-4 border-green-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">70x7 Life Recovery</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Specialized organization providing restoration and long-term support for men and women returning to the community after incarceration.</p>
            <div className="space-y-3 text-sm leading-6">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">97 W 22nd St, Holland, MI 49423</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-green-600 flex-shrink-0" />
                <a href="tel:616-796-0685" className="text-green-700 font-bold hover:underline">(616) 796-0685</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-green-600 flex-shrink-0" />
                <a href="https://70x7liferecovery.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold hover:underline">70x7liferecovery.org</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-green-600">
                <p className="font-semibold text-gray-900 mb-2">Programs & Services:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Employment Support:</strong> Partners with local employers to help graduates find stable, meaningful work</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Agency 7: Fresh Coast Alliance */}
          <div className="bg-blue-100 border-b-4 border-blue-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">Fresh Coast Alliance</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Muskegon-based non-profit specializing in employment placement and recovery support for individuals returning from incarceration and those in substance use recovery.</p>
            <div className="space-y-3 text-sm leading-6">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Muskegon:</p>
                  <p className="text-gray-700">1128 Roberts St, Muskegon, MI 49442</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                <a href="tel:231-286-1992" className="text-blue-700 font-bold hover:underline">(231) 286-1992</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-blue-600 flex-shrink-0" />
                <a href="https://freshcoastalliance.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold hover:underline">freshcoastalliance.org</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-blue-600">
                <p className="font-semibold text-gray-900 mb-2">Programs & Services:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Fresh Coast Cleaning:</strong> Job placement through their cleaning enterprise with employer partnership</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Agency 8: Fettig.jobs */}
          <div className="bg-yellow-100 border-b-4 border-yellow-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">🏭</span>
              <h3 className="text-2xl font-bold text-gray-900">Fettig.jobs</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Established regional agency specializing in connecting workers with industrial and manufacturing roles, known for their personalized approach to candidate backgrounds.</p>
            <div className="space-y-3 text-sm leading-6">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">12465 James St #2, Holland, MI 49424</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-yellow-600 flex-shrink-0" />
                <a href="tel:616-335-6770" className="text-yellow-700 font-bold hover:underline">(616) 335-6770</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-yellow-600 flex-shrink-0" />
                <a href="https://fettig.jobs" target="_blank" rel="noopener noreferrer" className="text-yellow-700 font-bold hover:underline">fettig.jobs</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-yellow-600">
                <p className="font-semibold text-gray-900 mb-2">Focus:</p>
                <p className="text-gray-700">Industrial and manufacturing roles with personalized approach to candidate backgrounds.</p>
              </div>
            </div>
          </div>

          {/* Agency 9: Forge Industrial Staffing */}
          <div className="bg-red-100 border-b-4 border-red-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">⚙️</span>
              <h3 className="text-2xl font-bold text-gray-900">Forge Industrial Staffing</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Local staffing agency specializing in entry-level labor and manufacturing jobs. Focuses on current ability to perform work with many accessible opportunities for those with past convictions.</p>
            <div className="space-y-3 text-sm leading-6">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">520 Butternut Dr, Holland, MI 49424</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-red-600 flex-shrink-0" />
                <a href="tel:616-393-8800" className="text-red-700 font-bold hover:underline">(616) 393-8800</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-red-600 flex-shrink-0" />
                <a href="https://forgestaff.com" target="_blank" rel="noopener noreferrer" className="text-red-700 font-bold hover:underline">forgestaff.com</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-red-600">
                <p className="font-semibold text-gray-900 mb-2">Focus:</p>
                <p className="text-gray-700">Entry-level manufacturing and labor positions with focus on current ability to perform work.</p>
              </div>
            </div>
          </div>

          {/* Agency 10: Cascade Engineering */}
          <div className="bg-pink-100 border-b-4 border-pink-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">🌱</span>
              <h3 className="text-2xl font-bold text-gray-900">Cascade Engineering</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">National leader in the "Returning Citizens" movement based in Grand Rapids. Features a formalized program designed specifically to hire and support individuals transitioning from the correctional system.</p>
            <div className="space-y-3 text-sm leading-6">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-pink-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Grand Rapids:</p>
                  <p className="text-gray-700">5175 36th St SE, Grand Rapids, MI 49512</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-pink-600 flex-shrink-0" />
                <a href="tel:616-975-4800" className="text-pink-700 font-bold hover:underline">(616) 975-4800</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-pink-600 flex-shrink-0" />
                <a href="https://cascadeng.com" target="_blank" rel="noopener noreferrer" className="text-pink-700 font-bold hover:underline">cascadeng.com</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-pink-600">
                <p className="font-semibold text-gray-900 mb-2">Program:</p>
                <p className="text-gray-700">Formalized program specifically designed to hire and support individuals transitioning from the correctional system.</p>
              </div>
            </div>
          </div>

          {/* Agency 11: Pure Michigan Talent Connect */}
          <div className="bg-orange-100 border-b-4 border-orange-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">🌐</span>
              <h3 className="text-2xl font-bold text-gray-900">Pure Michigan Talent Connect</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Official statewide portal for job seekers and employers, featuring a dedicated section for "Returning Citizens" with resources on the Fidelity Bonding Program and tools to find employers actively participating in second-chance hiring.</p>
            <div className="space-y-3 text-sm leading-6">
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-orange-600 flex-shrink-0" />
                <a href="tel:800-285-9675" className="text-orange-700 font-bold hover:underline">(800) 285-WORKS (9675)</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-orange-600 flex-shrink-0" />
                <a href="https://mitalent.org/returning-citizens" target="_blank" rel="noopener noreferrer" className="text-orange-700 font-bold hover:underline">mitalent.org/returning-citizens</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-orange-600">
                <p className="font-semibold text-gray-900">Statewide Resources:</p>
                <ul className="text-gray-700 space-y-1 mt-2">
                  <li>• Fidelity Bonding Program information</li>
                  <li>• Directory of second-chance employers</li>
                  <li>• Job search tools for returning citizens</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Tips Section */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Tips for Your Job Search</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold text-lg flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold">Federal Bonding Program:</p>
                  <p>Mention to any agency or employer that you are eligible for the Federal Bonding Program through Michigan Works! This can often mitigate an employer&apos;s concerns about liability.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold text-lg flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold">Honesty is Vital:</p>
                  <p>Most &ldquo;felony friendly&rdquo; agencies emphasize that they can work with you as long as you disclose your record upfront. Surprises during a background check usually lead to an automatic &ldquo;no.&rdquo;</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold text-lg flex-shrink-0">���</span>
                <div>
                  <p className="font-semibold">Manufacturing and Trades:</p>
                  <p>Ottawa County is a manufacturing hub. Large companies in Holland, Zeeland, and Grand Haven (like Gentex, Herman Miller, or Haworth) occasionally work with specialized staffing agencies to fill &ldquo;second chance&rdquo; roles.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Close Button at Bottom */}
        <div className="sticky bottom-0 bg-white border-t-2 border-purple-200 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

