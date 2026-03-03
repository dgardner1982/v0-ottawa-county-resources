export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-bold text-lg mb-4">Ottawa County Recovery Alliance</p>
        <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-sm leading-relaxed">
          The Ottawa County Recovery Alliance is a diverse group of dedicated stakeholders, including healthcare professionals, treatment providers, law enforcement, lawyers, individuals in recovery, and community advocates. Together, we bring our collective expertise and experience to encourage an environment of healing and recovery.
        </p>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-300 mb-2 text-sm">Interested in joining the coalition?</p>
          <p className="text-gray-300 text-sm">
            Contact Daniel Gardner @ <a href="mailto:dgardner@miottawa.org" className="text-teal-400 hover:text-teal-300 font-semibold">dgardner@miottawa.org</a>
          </p>
        </div>
        <p className="text-gray-400 mt-6 text-xs">Crisis Support: 2-1-1 for Resources | 988 for Suicide Crisis | 911 for Emergencies</p>
      </div>
    </footer>
  )
}
