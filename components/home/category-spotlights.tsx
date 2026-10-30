import Link from 'next/link'

interface CategorySpotlightsProps {
  category: string
  onOpenSecondChance: () => void
}

export function CategorySpotlights({ category, onOpenSecondChance }: CategorySpotlightsProps) {
  return (
    <>
{(category === 'Substance Recovery' || category === 'Medicated Assisted Treatment') && (
  <div className="mb-8 rounded-lg bg-[#0b2a36] p-6 text-white shadow-lg">
  <h3 className="mb-4 text-2xl font-bold">Medicated Assisted Treatment</h3>
  <Link href="/mat-resources" className="inline-block rounded-lg bg-white px-6 py-3 text-lg font-bold text-[#0b2a36] hover:bg-amber-100">
  To learn about Medicated Assisted Treatment and find providers, click here.
  </Link>
  </div>
  )}

        {category === 'Domestic Violence' && (
          <div className="mb-8 p-6 bg-[#0b2a36] text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Get Help for Domestic Violence</h3>
            <p className="mb-4">If you or someone you know is experiencing domestic violence, comprehensive support and emergency services are available. Visit our dedicated resources page for crisis lines and shelter information.</p>
            <Link href="/domestic-violence-resources">
              <button className="bg-white text-[#0b2a36] hover:bg-amber-100 font-bold px-6 py-3 rounded-lg transition text-lg">
                View Domestic Violence Resources
              </button>
            </Link>
          </div>
        )}

        {category === 'Food' && (
          <div className="mb-8 space-y-6">
            <div className="p-6 bg-[#0b2a36] text-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Find Food Assistance</h3>
              <p className="mb-4">Looking for food resources in Ottawa County, MI? Explore nearby food pantries, food banks, and community resources offering free or low-cost options.</p>
              <a 
                href="https://ottawafood.org/findfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#0b2a36] hover:bg-amber-100 font-bold px-6 py-3 rounded-lg transition text-lg"
              >
                Click Here to Find Food
              </a>
            </div>

            <div className="p-6 bg-[#0b2a36] text-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Double Up Food Bucks 2026</h3>
              <p className="mb-4">Learn about the 2026 Double Up Food Bucks program with major updates including unlimited earn & spend, frozen produce inclusion, and expanded access to fresh produce at farmers markets and grocery stores across Ottawa County.</p>
              <a 
                href="/double-up-food-bucks"
                className="inline-block bg-white text-[#0b2a36] hover:bg-amber-100 font-bold px-6 py-3 rounded-lg transition text-lg"
              >
                Learn More About Double Up Food Bucks
              </a>
            </div>
          </div>
        )}

        {category === 'Employment' && (
          <div className="mb-8 p-6 bg-[#0b2a36] text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Looking for Employment with a Criminal Background?</h3>
            <p className="mb-4">Worried your background will prevent you from getting a job? You&apos;re not alone. There are employers and agencies in Ottawa County that specialize in helping individuals with records find meaningful employment. We&apos;ve compiled a list of &quot;second chance&quot; employment agencies and resources specifically designed to support you.</p>
            <button 
              onClick={() => onOpenSecondChance()}
              className="bg-white text-[#0b2a36] hover:bg-amber-100 font-bold px-6 py-3 rounded-lg transition text-lg"
            >
              View Second Chance Employment Resources
            </button>
          </div>
        )}

        {category === 'Legal' && (
          <div className="mb-8 p-6 bg-[#0b2a36] text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Legal Resources & Support</h3>
            <p className="mb-4">Ottawa County offers a variety of legal assistance services, from affordable legal representation to court self-help resources. Whether you need help with probation, immigration, domestic relations, or criminal matters, these resources can help guide you through the legal process.</p>
          </div>
        )}

        {category === 'Transportation' && (
          <div className="mb-8 space-y-6">
            {/* Medicaid Transportation Section */}
            <div className="p-6 bg-[#0b2a36] text-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Have Medicaid and Need a Ride to Your Appointment?</h3>
              <p className="mb-4 font-medium">In Michigan, Non-Emergency Medical Transportation (NEMT) is a covered benefit for Medicaid members. To reserve a ride, contact your health plan's transportation vendor at least 2 to 3 business days before your appointment.</p>
              
              {/* Medicaid Plans Table */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-800 text-sm">
                    <thead className="bg-teal-50 border-b-2 border-teal-300">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Health Plan</th>
                        <th className="px-4 py-3 text-left font-bold">Reservation Phone</th>
                        <th className="px-4 py-3 text-left font-bold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Aetna Better Health</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(866) 316-3784</td>
                        <td className="px-4 py-3 text-gray-600">Mon��Fri, 8 AM – 5 PM</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Blue Cross Complete</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 803-4947</td>
                        <td className="px-4 py-3 text-gray-600">Available 24/7; managed by MTMHAP</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">CareSource</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(833) 230-2053</td>
                        <td className="px-4 py-3 text-gray-600">Schedule 2 business days in advance</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">McLaren Health Plan</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 327-0671</td>
                        <td className="px-4 py-3 text-gray-600">Call 2–3 business days prior</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Meridian Health Plan</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(800) 821-9369</td>
                        <td className="px-4 py-3 text-gray-600">Managed by Modivcare</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Molina Healthcare</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 898-7969</td>
                        <td className="px-4 py-3 text-gray-600">Available 24/7</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Priority Health</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 975-8102</td>
                        <td className="px-4 py-3 text-gray-600">Local: (616) 575-8102</td>
                      </tr>
                      <tr className="hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">UnitedHealthcare</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(800) 903-5253</td>
                        <td className="px-4 py-3 text-gray-600">Call Member Services to schedule</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-4 text-sm text-teal-100">Information as of April 2026</p>
            </div>
          </div>
        )}

    </>
  )
}
