'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

type GuideLink = { label: string; href: string }
type ChatMessage = { role: 'user' | 'assistant'; content: string; links?: GuideLink[] }

export function SiteGuideChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi, I can help you find your way around this site. What kind of resource or information are you looking for?' },
  ])
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
      transcriptRef.current?.scrollTo({
        top: transcriptRef.current.scrollHeight,
        behavior: document.documentElement.dataset.reduceMotion === 'true' ? 'auto' : 'smooth',
      })
  }, [messages, loading])

  async function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const prompt = question.trim()
    if (!prompt || loading) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: prompt }]
    setMessages(nextMessages)
    setQuestion('')
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/site-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-8).map(({ role, content }) => ({ role, content })) }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'The guide is temporarily unavailable.')
      setMessages((current) => [...current, { role: 'assistant', content: result.answer, links: result.links }])
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'The guide is temporarily unavailable.')
      setMessages((current) => [...current, {
        role: 'assistant',
        content: 'I could not generate a reply just now. Try a verified page below, or browse the Resource Directory.',
        links: [{ label: 'Resource directory', href: '/#resources' }],
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70]" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }}>
      {open && (
        <section id="site-guide-panel" aria-label="Ottawa County site guide" className="mb-3 flex h-[min(34rem,calc(100dvh-7rem))] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-2xl">
          <header className="flex items-center justify-between gap-3 bg-slate-950 px-4 py-3 text-white">
            <div>
              <h2 className="font-bold">Site guide</h2>
              <p className="text-sm text-slate-300">Find pages and community resources</p>
            </div>
            <button type="button" onClick={() => { setOpen(false); triggerRef.current?.focus() }} className="rounded-lg p-2 text-white hover:bg-white/10" aria-label="Close site guide"><X aria-hidden="true" /></button>
          </header>
          <div ref={transcriptRef} role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions text" className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'self-end bg-teal-700 text-white' : 'self-start bg-slate-100 text-slate-900'}`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.links?.length ? (
                    <ul className="mt-3 flex flex-col gap-2 border-t border-slate-300 pt-3">
                      {message.links.map((link) => <li key={link.href}><a className="font-bold text-teal-800 underline underline-offset-2" href={link.href}>{link.label}</a></li>)}
                    </ul>
                  ) : null}
                </div>
              ))}
              {loading && <p className="text-sm text-slate-600" role="status">Finding the best place on this site…</p>}
            </div>
          </div>
          {error && <p className="px-4 pb-2 text-sm font-medium text-red-700" role="alert">{error}</p>}
          <form onSubmit={submitQuestion} className="flex items-center gap-2 border-t border-slate-200 p-3">
            <label htmlFor="site-guide-question" className="sr-only">Ask the site guide</label>
            <input ref={inputRef} id="site-guide-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={500} placeholder="Ask about a resource or page…" className="min-h-11 min-w-0 flex-1 rounded-xl border border-slate-300 px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-teal-700" />
            <button type="submit" disabled={loading || !question.trim()} aria-label="Send question" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-teal-700 text-white disabled:cursor-not-allowed disabled:opacity-50"><Send aria-hidden="true" size={18} /></button>
          </form>
          <p className="px-4 pb-3 text-xs leading-5 text-slate-600">Messages go to an AI provider and may be retained. Avoid sharing names or sensitive details. For life-threatening emergencies call 911. The guide may be wrong; confirm details with providers.</p>
        </section>
      )}
      <button ref={triggerRef} type="button" aria-expanded={open} aria-controls={open ? 'site-guide-panel' : undefined} aria-label={open ? 'Close site guide' : 'Open site guide'} onClick={() => setOpen((value) => !value)} className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white bg-teal-800 px-5 py-3 font-bold text-white shadow-xl focus-visible:outline-offset-4">
        {open ? <X aria-hidden="true" size={18} /> : <MessageCircle aria-hidden="true" size={18} />}
        <span>{open ? 'Close guide' : 'Ask the site guide'}</span>
      </button>
    </div>
  )
}
