'use client'

import { useState } from 'react'
import { Languages } from 'lucide-react'

const languages = [
  { code: 'ar', name: 'Arabic' },
  { code: 'bn', name: 'Bengali' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'hi', name: 'Hindi' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'ru', name: 'Russian' },
  { code: 'so', name: 'Somali' },
  { code: 'es', name: 'Spanish' },
  { code: 'tl', name: 'Tagalog' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'vi', name: 'Vietnamese' },
]

export function LanguageTranslator() {
  const [language, setLanguage] = useState('es')

  function translateCurrentPage() {
    const translationUrl = new URL('https://translate.google.com/translate')
    translationUrl.searchParams.set('sl', 'auto')
    translationUrl.searchParams.set('tl', language)
    translationUrl.searchParams.set('u', window.location.href)
    window.open(translationUrl.toString(), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="border-b border-slate-200 bg-white px-5 py-3 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-3">
        <label htmlFor="site-language" className="text-sm font-semibold text-slate-700">Translate this page</label>
        <select
          id="site-language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          {languages.map((item) => <option key={item.code} value={item.code}>{item.name}</option>)}
        </select>
        <button
          type="button"
          onClick={translateCurrentPage}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          <Languages aria-hidden="true" className="size-4" />
          Translate
        </button>
      </div>
    </div>
  )
}
