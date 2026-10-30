'use client'

import { Printer } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-primary"
    >
      <Printer aria-hidden="true" className="h-4 w-4 text-sunrise" />
      Print
    </button>
  )
}
