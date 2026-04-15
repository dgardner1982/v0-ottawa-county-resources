'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function DoubleUpFoodBucksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 font-semibold mb-8 transition">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4">Double Up Food Bucks 2026</h1>
          <p className="text-xl text-amber-800">Making Fresh Produce More Affordable for Ottawa County Families</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            The "2 for 1" program you're looking for is the <strong>Double Up Food Bucks (DUFB) program</strong>. In 2026, significant updates have been made to make it even easier for families in Ottawa County to access fresh produce.
          </p>
        </div>

        {/* Major 2026 Updates */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Major 2026 Program Updates</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Unlimited Earn & Spend</h3>
              <p className="text-gray-700">The previous $20 per day limit has been removed. You can now earn and spend an unlimited amount of Double Up Food Bucks on fresh or frozen fruits and vegetables when using your Bridge Card.</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Frozen Produce Inclusion</h3>
              <p className="text-gray-700">You can now use Double Up Food Bucks for frozen fruits and vegetables, provided they have no added salt, sugar, or fats.</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Expiration Rules</h3>
              <p className="text-gray-700">Any benefits earned in 2025 expired on April 1, 2026. Moving forward, benefits earned in 2026 are available for 90 days from the date they were earned.</p>
            </div>
          </div>
        </section>

        {/* Participating Farmers Markets */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Participating Farmers Markets in Ottawa County</h2>
          <p className="text-gray-700 mb-6">Most farmers markets use a token system. You visit the information booth, tell them how much you want to spend from your Bridge Card, and they will match that amount with silver Double Up tokens.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-100 border-b-2 border-amber-600">
                  <th className="px-4 py-3 text-left font-bold text-amber-900">Market Name</th>
                  <th className="px-4 py-3 text-left font-bold text-amber-900">Location</th>
                  <th className="px-4 py-3 text-left font-bold text-amber-900">2026 Seasonal Schedule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Holland Farmers Market</td>
                  <td className="px-4 py-3 text-gray-700">150 W. 8th St, Holland</td>
                  <td className="px-4 py-3 text-gray-700">Wed & Sat, 8 AM – 2 PM (May–Oct)</td>
                </tr>
                <tr className="border-b hover:bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Grand Haven Farmers Market</td>
                  <td className="px-4 py-3 text-gray-700">300 N. Harbor Dr, Grand Haven</td>
                  <td className="px-4 py-3 text-gray-700">Wed & Sat, 8 AM – 1 PM (May–Oct)</td>
                </tr>
                <tr className="border-b hover:bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Terra Square Farmers Market</td>
                  <td className="px-4 py-3 text-gray-700">3380 Chicago Dr, Hudsonville</td>
                  <td className="px-4 py-3 text-gray-700">Wed, 9 AM – 1 PM (June–Sept)</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Spring Lake Farm & Garden</td>
                  <td className="px-4 py-3 text-gray-700">225 E. Exchange Ave, Spring Lake</td>
                  <td className="px-4 py-3 text-gray-700">Thu, 9 AM – 2 PM (June–Oct)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Participating Grocery Stores */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Participating Grocery Stores</h2>
          <p className="text-gray-700 mb-6">In grocery stores, the program usually works through a loyalty card (like the Yes Card) or an automatic coupon printed on your receipt.</p>
          
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-2">Family Fare (Holland)</h3>
              <p className="text-gray-700">1185 S. Washington Ave & 993 Butternut Dr</p>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-2">Family Fare (Hudsonville)</h3>
              <p className="text-gray-700">5221 Cherry Ave</p>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-2">Family Fare (Zeeland)</h3>
              <p className="text-gray-700">9479 Riley St</p>
            </div>
          </div>
        </section>

        {/* How to Use the Program */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">How to Use the Program</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3">At a Farmers Market</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Go to the Information Booth first</li>
                <li>Swipe your Bridge Card for the amount you want to spend</li>
                <li>You will receive wooden tokens (for any SNAP-eligible food) and an equal amount of silver tokens (specifically for Michigan-grown fruits and vegetables)</li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3">At a Grocery Store</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Use your Bridge Card to buy fresh or frozen produce</li>
                <li>The system will automatically track your earnings on your store loyalty account or provide a coupon for your next visit</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Stretching Your Food Budget?</h2>
          <p className="text-lg mb-6">Visit your nearest participating farmers market or grocery store today to start earning Double Up Food Bucks on fresh produce!</p>
          <Link href="/" className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold px-8 py-3 rounded-lg transition text-lg">
            Back to Ottawa County Resources
          </Link>
        </div>
      </div>
    </main>
  );
}
