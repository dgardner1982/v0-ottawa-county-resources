'use client'

import { useEffect, useRef, useState } from 'react'

export function AccessibilityControls() {
  const [open, setOpen] = useState(false)
  const [textScale, setTextScale] = useState(0)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.documentElement.dataset.textScale = String(textScale)
    document.documentElement.dataset.highContrast = String(highContrast)
    document.documentElement.dataset.reducedMotion = String(reducedMotion)
  }, [textScale, highContrast, reducedMotion])

  return (
    <div className="fixed bottom-5 left-5 z-[70]" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }}>
      {open && (
        <section id="accessibility-panel" aria-label="Accessibility settings" className="mb-3 w-72 rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold">Accessibility settings</h2>
            <button type="button" onClick={() => { setOpen(false); triggerRef.current?.focus() }} className="rounded-lg px-2 py-1 font-semibold underline underline-offset-4" aria-label="Close accessibility settings">Close</button>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <fieldset>
              <legend className="mb-2 font-semibold">Text size</legend>
              <div className="flex gap-2" aria-label="Text size">
                {[0, 1, 2].map((size) => (
                  <button key={size} type="button" aria-pressed={textScale === size} onClick={() => setTextScale(size)} className="min-h-11 flex-1 rounded-lg border border-slate-300 px-2 font-semibold aria-pressed:bg-slate-950 aria-pressed:text-white">
                    {['Default', 'Larger', 'Largest'][size]}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="flex min-h-11 items-center justify-between gap-4 font-semibold">
              High contrast
              <input type="checkbox" checked={highContrast} onChange={(event) => setHighContrast(event.target.checked)} className="size-5 accent-slate-950" />
            </label>
            <label className="flex min-h-11 items-center justify-between gap-4 font-semibold">
              Reduce motion
              <input type="checkbox" checked={reducedMotion} onChange={(event) => setReducedMotion(event.target.checked)} className="size-5 accent-slate-950" />
            </label>
          </div>
        </section>
      )}
      <button ref={triggerRef} type="button" aria-expanded={open} aria-controls={open ? 'accessibility-panel' : undefined} onClick={() => setOpen((value) => !value)} className="min-h-12 rounded-full border-2 border-white bg-slate-950 px-5 py-3 font-bold text-white shadow-xl focus-visible:outline-offset-4">
        Accessibility
      </button>
    </div>
  )
}
