'use client'

import { useEffect, useState } from 'react'
import { Languages } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English (original)' },
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

type GoogleTranslateWindow = Window & {
  google?: {
    translate?: {
      TranslateElement: new (options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean }, elementId: string) => unknown
    }
  }
  googleTranslateElementInit?: () => void
}

export function LanguageTranslator() {
  const [language, setLanguage] = useState('es')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const googleWindow = window as GoogleTranslateWindow
    const initialize = () => {
      const TranslateElement = googleWindow.google?.translate?.TranslateElement
      if (!TranslateElement) return
      new TranslateElement({
        pageLanguage: 'en',
        includedLanguages: languages.map(({ code }) => code).join(','),
        autoDisplay: false,
      }, 'google-translate-widget')
    }

    googleWindow.googleTranslateElementInit = initialize
    if (googleWindow.google?.translate?.TranslateElement) {
      initialize()
      return
    }

    if (!document.querySelector('script[data-google-translate]')) {
      const script = document.createElement('script')
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      script.dataset.googleTranslate = 'true'
      script.onerror = () => setStatus('Translation could not load. Please try again later.')
      document.head.appendChild(script)
    }
  }, [])

  function translateCurrentPage() {
    if (language === 'en') {
      setStatus('Choose Original to restore the original English page.')
      return
    }

    const widgetSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    if (!widgetSelect) {
      setStatus('Translation is still loading. Please try again in a moment.')
      return
    }
    widgetSelect.value = language
    widgetSelect.dispatchEvent(new Event('change', { bubbles: true }))
    setStatus(`Translating this page to ${languages.find((item) => item.code === language)?.name ?? 'the selected language'}.`)
  }

  function showOriginalPage() {
    setLanguage('en')
    const widgetSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    const englishOption = widgetSelect?.querySelector('option[value="en"]')
    if (widgetSelect && englishOption) {
      widgetSelect.value = 'en'
      widgetSelect.dispatchEvent(new Event('change', { bubbles: true }))
      setStatus('Showing the original English text.')
      return
    }

    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    if (window.location.hostname.includes('.')) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`
    }
    window.location.reload()
  }

  return (
    <div className="border-b border-slate-200 bg-white px-5 py-3 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-3">
        <label htmlFor="site-language" className="text-sm font-semibold text-slate-700">Translate this page</label>
        <select
          id="site-language"
          value={language}
          onChange={(event) => {
            setLanguage(event.target.value)
            setStatus(event.target.value === 'en' ? 'Choose Original to restore the original English page.' : '')
          }}
          className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          {languages.map((item) => <option key={item.code} value={item.code}>{item.name}</option>)}
        </select>
        <button
          type="button"
          onClick={translateCurrentPage}
          disabled={language === 'en'}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Languages aria-hidden="true" className="size-4" />
          Translate
        </button>
        <button
          type="button"
          onClick={showOriginalPage}
          className="inline-flex min-h-11 items-center rounded-lg border border-teal-700 bg-white px-4 py-2 text-sm font-bold text-teal-900 transition hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          Original
        </button>
        <p role="status" aria-live="polite" className="sr-only">{status}</p>
        <div id="google-translate-widget" className="sr-only" aria-hidden="true" />
      </div>
    </div>
  )
}
