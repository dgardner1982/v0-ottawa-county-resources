'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, MessageSquareText, Phone, Search, ShieldPlus, X } from 'lucide-react'
import { CATEGORIES, NEEDS, NALOXONE_CATEGORY, SEARCH_EXAMPLES, categoryMeta } from '@/lib/directory'
import { cn } from '@/lib/utils'

const RESOURCE_TONES: Record<string, { icon: string; chip: string; count: string }> = {
  Food: { icon: 'bg-[#f28a2e] text-navy', chip: 'border-[#f28a2e]/40 bg-[#fff1e3] text-navy', count: 'text-[#bb5f0a]' },
  Housing: { icon: 'bg-[#4f8fd4] text-white', chip: 'border-[#4f8fd4]/40 bg-[#eaf3fc] text-navy', count: 'text-[#26639d]' },
  'Substance Recovery': { icon: 'bg-[#8e6bbf] text-white', chip: 'border-[#8e6bbf]/40 bg-[#f1ebfa] text-navy', count: 'text-[#684399]' },
  'Mental Health': { icon: 'bg-[#d85da1] text-white', chip: 'border-[#d85da1]/40 bg-[#fcebf5] text-navy', count: 'text-[#a52e70]' },
  [NALOXONE_CATEGORY]: { icon: 'bg-[#d6403a] text-white', chip: 'border-[#d6403a]/40 bg-[#fdebea] text-navy', count: 'text-[#a82520]' },
  'Domestic Violence': { icon: 'bg-[#d6403a] text-white', chip: 'border-[#d6403a]/40 bg-[#fdebea] text-navy', count: 'text-[#a82520]' },
  Employment: { icon: 'bg-[#0f6e75] text-white', chip: 'border-[#0f6e75]/40 bg-[#e3f2f3] text-navy', count: 'text-[#0b5a60]' },
  'Health Care': { icon: 'bg-[#49a696] text-white', chip: 'border-[#49a696]/40 bg-[#e7f7f3] text-navy', count: 'text-[#27766b]' },
}

function resourceTone(category: string) {
  return RESOURCE_TONES[category] ?? { icon: 'bg-primary text-primary-foreground', chip: 'border-primary/30 bg-muted text-navy', count: 'text-primary' }
}

interface HeroProps {
  query: string
  onQueryChange: (value: string) => void
  intentCategories: string[]
  resultCount: number
  totalCount: number
  onChooseCategory: (category: string) => void
  onSubmit: () => void
}

function RotatingHint({ hidden }: { hidden: boolean }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % SEARCH_EXAMPLES.length), 2800)
    return () => window.clearInterval(timer)
  }, [])

  if (hidden) return null

  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-14 right-28 flex items-center overflow-hidden text-base text-muted-foreground sm:text-lg">
      <span key={index} className="rise-in truncate">
        Try &ldquo;{SEARCH_EXAMPLES[index]}&rdquo;
      </span>
    </span>
  )
}

export function Hero({ query, onQueryChange, intentCategories, resultCount, totalCount, onChooseCategory, onSubmit }: HeroProps) {
  const hasQuery = query.trim().length >= 2
  const countByCategory = new Map(CATEGORIES.map((category) => [category.key, category.count]))

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <div className="relative isolate overflow-hidden bg-navy pb-28 pt-12 sm:pt-16 lg:pb-32 lg:pt-20">
        <Image
          src="/images/lake-sunrise.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_50%]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/20 lg:via-navy/70" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/80 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          <div className="rise-in">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sunrise" />
              Ottawa County, Michigan
            </p>
            <h1 id="hero-heading" className="mt-5 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              Tell us what you need.
              <span className="block text-sunrise">We&apos;ll point the way.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
              {totalCount} free and low-cost local resources for recovery, housing, food, health and more &mdash; in plain language, with one tap to call.
            </p>

            <form
              role="search"
              onSubmit={(event) => {
                event.preventDefault()
                onSubmit()
              }}
              className="mt-8 max-w-2xl"
            >
              <label htmlFor="hero-search" className="sr-only">
                Describe what you need
              </label>
              <div className="relative flex items-center rounded-2xl bg-white p-1.5 shadow-2xl shadow-black/30 ring-1 ring-white/40 focus-within:ring-4 focus-within:ring-sunrise/60">
                <Search aria-hidden="true" className="ml-3 h-5 w-5 shrink-0 text-primary sm:ml-4 sm:h-6 sm:w-6" />
                <input
                  id="hero-search"
                  type="text"
                  inputMode="search"
                  autoComplete="off"
                  value={query}
                  onChange={(event) => onQueryChange(event.target.value)}
                  className="h-12 min-w-0 flex-1 bg-transparent px-3 text-base text-navy outline-none sm:h-14 sm:text-lg"
                />
                <RotatingHint hidden={query.length > 0} />
                {query && (
                  <button type="button" onClick={() => onQueryChange('')} aria-label="Clear search" className="mr-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-navy/60 hover:bg-muted">
                    <X aria-hidden="true" className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="submit"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-sunrise px-5 text-sm font-bold text-navy transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:h-14 sm:px-7 sm:text-base"
                >
                  Search
                </button>
              </div>

              <div aria-live="polite" className="mt-3 min-h-8 text-sm text-white/85">
                {hasQuery && intentCategories.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span>Sounds like you need:</span>
                    {intentCategories.slice(0, 3).map((key) => {
                      const meta = categoryMeta(key)
                      const Icon = meta.icon
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => onChooseCategory(key)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy transition hover:bg-accent"
                        >
                          <Icon aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
                          {meta.label}
                          <span className="text-muted-foreground">{countByCategory.get(key) ?? 0}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
                {hasQuery && (
                  <p className="mt-1">
                    {resultCount === 0 ? 'No matches yet. Try another word, or call 211 and a person will help.' : `${resultCount} ${resultCount === 1 ? 'place matches' : 'places match'} \u2014 press Enter to see them.`}
                  </p>
                )}
              </div>
            </form>
          </div>

          <aside aria-labelledby="crisis-heading" className="rise-in rounded-3xl border border-white/20 bg-navy/60 p-6 text-white shadow-2xl backdrop-blur-md [animation-delay:150ms] sm:p-7">
            <h2 id="crisis-heading" className="font-display text-2xl font-bold tracking-tight">
              Need someone right now?
            </h2>
            <p className="mt-1 text-sm text-white/75">Free, confidential, and answered by a real person.</p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href="tel:988" className="flex items-center justify-between gap-3 rounded-2xl bg-destructive px-4 py-3.5 font-bold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <span className="flex items-center gap-3">
                    <Phone aria-hidden="true" className="h-5 w-5" />
                    <span className="leading-tight">
                      Call or text 988
                      <span className="block text-xs font-medium text-white/85">Suicide &amp; crisis lifeline, 24/7</span>
                    </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="tel:211" className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 font-bold text-navy transition hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <span className="flex items-center gap-3">
                    <MessageSquareText aria-hidden="true" className="h-5 w-5 text-primary" />
                    <span className="leading-tight">
                      Call 211
                      <span className="block text-xs font-medium text-muted-foreground">A person finds local help for you</span>
                    </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <Link href="/naloxone-locations" className="flex items-center justify-between gap-3 rounded-2xl border border-white/30 px-4 py-3.5 font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <span className="flex items-center gap-3">
                    <ShieldPlus aria-hidden="true" className="h-5 w-5 text-sunrise" />
                    <span className="leading-tight">
                      Get free Narcan
                      <span className="block text-xs font-medium text-white/75">Pickup locations near you</span>
                    </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/70">
              Life-threatening emergency? Call <a href="tel:911" className="font-bold text-white underline underline-offset-4">911</a>.
            </p>
          </aside>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-4">
        <div className="rounded-3xl border border-border bg-card p-5 shadow-xl shadow-navy/10 sm:p-7">
          <h2 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">Or start with what&apos;s going on</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {NEEDS.map((need) => {
              const meta = categoryMeta(need.category)
              const Icon = meta.icon
              const tone = resourceTone(need.category)
              return (
                <li key={need.id}>
                  <button
                    type="button"
                    onClick={() => onChooseCategory(need.category)}
                    className="group flex h-full w-full flex-col items-start gap-3 rounded-2xl border border-border bg-background p-4 text-left transition hover:-translate-y-0.5 hover:border-primary hover:bg-white hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className={cn('inline-flex h-10 w-10 items-center justify-center rounded-xl transition group-hover:scale-110', tone.icon)}>
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-base font-bold leading-snug text-navy text-balance">{need.label}</span>
                    <span className={cn('mt-auto inline-flex items-center gap-1 text-sm font-semibold', tone.count)}>
                      {countByCategory.get(need.category) ?? 0}{'\u00a0'}RESOURCES
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
