'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { Bookmark, Clock, MapPin, Phone, Search, X } from 'lucide-react'
import {
  ANYWHERE_AREA,
  AREAS,
  CATEGORIES,
  DIRECTORY,
  DIRECTORY_BY_ID,
  searchDirectory,
  categoryMeta,
} from '@/lib/directory'
import { cn } from '@/lib/utils'
import { Hero } from './hero'
import { ResourceCard } from './resource-card'
import { SavedListSheet } from './saved-list-sheet'
import { CategorySpotlights } from './category-spotlights'
import { SecondChanceModal } from './second-chance-modal'
import { MCDCLocationsModal } from './mcdc-locations-modal'

const PAGE_SIZE = 24
const ALL_AREAS = [...AREAS, ANYWHERE_AREA]
const CATEGORY_CHIP_TONES = [
  'border-[#f28a2e]/50 bg-[#fff1e3] hover:bg-[#ffe4c8]', 'border-[#4f8fd4]/50 bg-[#eaf3fc] hover:bg-[#d9eafa]',
  'border-[#8e6bbf]/50 bg-[#f1ebfa] hover:bg-[#e6daf6]', 'border-[#d85da1]/50 bg-[#fcebf5] hover:bg-[#f8d9ea]',
  'border-[#d6403a]/50 bg-[#fdebea] hover:bg-[#f9d8d6]', 'border-[#0f6e75]/50 bg-[#e3f2f3] hover:bg-[#d1e9eb]',
  'border-[#49a696]/50 bg-[#e7f7f3] hover:bg-[#d7efe9]', 'border-[#e0aa32]/50 bg-[#fff7d9] hover:bg-[#fff0ad]',
  'border-[#3b82a0]/50 bg-[#e5f4f8] hover:bg-[#d3ebf1]', 'border-[#c45b7c]/50 bg-[#fbeaf0] hover:bg-[#f6d9e3]',
  'border-[#6d8b4e]/50 bg-[#eef6e5] hover:bg-[#e2efcf]', 'border-[#b16e3f]/50 bg-[#fbefe6] hover:bg-[#f5dfcf]',
  'border-[#5f72b5]/50 bg-[#eef0fb] hover:bg-[#e0e4f7]', 'border-[#c37b2c]/50 bg-[#fff1db] hover:bg-[#ffe3b5]',
  'border-[#4d9b88]/50 bg-[#e6f5f0] hover:bg-[#d4ece4]', 'border-[#9b5db0]/50 bg-[#f5eafa] hover:bg-[#ead8f2]',
]

function scrollToDirectory() {
  document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HomeExperience() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [area, setArea] = useState('all')
  const [alwaysOpenOnly, setAlwaysOpenOnly] = useState(false)
  const [savedIds, setSavedIds] = useState<string[]>([])
  const [listOpen, setListOpen] = useState(false)
  const [showSecondChance, setShowSecondChance] = useState(false)
  const [showLocations, setShowLocations] = useState(false)
  const [limitState, setLimitState] = useState({ key: '', limit: PAGE_SIZE })

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('saved')
    if (!fromUrl) return
    setSavedIds(fromUrl.split(',').filter((id) => DIRECTORY_BY_ID.has(id)))
  }, [])

  function persistSaved(next: string[]) {
    setSavedIds(next)
    const url = new URL(window.location.href)
    if (next.length > 0) url.searchParams.set('saved', next.join(','))
    else url.searchParams.delete('saved')
    window.history.replaceState(null, '', url)
  }

  function toggleSaved(id: string) {
    persistSaved(savedIds.includes(id) ? savedIds.filter((value) => value !== id) : [...savedIds, id])
  }

  const search = useMemo(() => searchDirectory(query), [query])

  const filtered = useMemo(
    () =>
      search.items.filter(
        (item) =>
          (category === 'all' || item.category === category) &&
          (area === 'all' || item.areas.includes(area)) &&
          (!alwaysOpenOnly || item.isAlwaysOpen),
      ),
    [search.items, category, area, alwaysOpenOnly],
  )

  const sorted = useMemo(
    () => (query.trim().length >= 2 ? filtered : [...filtered].sort((a, b) => a.name.localeCompare(b.name))),
    [filtered, query],
  )

  const filterKey = `${query}|${category}|${area}|${alwaysOpenOnly}`
  const limit = limitState.key === filterKey ? limitState.limit : PAGE_SIZE
  const visible = sorted.slice(0, limit)
  const savedItems = savedIds.map((id) => DIRECTORY_BY_ID.get(id)).filter((item) => item !== undefined)
  const hasFilters = category !== 'all' || area !== 'all' || alwaysOpenOnly || query.trim().length > 0

  function chooseCategory(next: string) {
    setCategory(next)
    setQuery('')
    window.setTimeout(scrollToDirectory, 30)
  }

  function clearFilters() {
    setQuery('')
    setCategory('all')
    setArea('all')
    setAlwaysOpenOnly(false)
  }

  const activeAreaLabel = ALL_AREAS.find((entry) => entry.id === area)?.label

  return (
    <>
      <Hero
        query={query}
        onQueryChange={(value) => {
          setQuery(value)
          if (value) setCategory('all')
        }}
        intentCategories={search.intentCategories}
        resultCount={search.items.length}
        totalCount={DIRECTORY.length}
        onChooseCategory={chooseCategory}
        onSubmit={scrollToDirectory}
      />

      <section id="directory" aria-labelledby="directory-heading" className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:pt-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">The directory</p>
            <h2 id="directory-heading" className="mt-1 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Everyone who can help, in one place
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Browse by resource type or search in your own words. Save the places you want to remember.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[15rem] shrink-0 rounded-[1.5rem] border border-white bg-white p-2 shadow-lg shadow-navy/10 sm:mx-0 sm:max-w-[13rem]">
            <Image src="/logo-white.jpg" alt="Ottawa County Recovery Alliance" width={520} height={240} className="h-auto w-full rounded-[1.1rem] object-cover" />
          </div>
        </div>

        <div className="sticky top-[5.75rem] z-30 -mx-4 mt-6 border-y border-border bg-background/95 px-4 py-3 backdrop-blur sm:top-24 sm:rounded-2xl sm:border">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <label htmlFor="directory-search" className="sr-only">
                Search the directory
              </label>
              <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <input
                id="directory-search"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                  if (event.target.value) setCategory('all')
                }}
                placeholder="Search by need, name, or city"
                className="h-11 w-full rounded-xl border border-border bg-white pl-10 pr-3 text-base text-navy outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <label htmlFor="area-select" className="sr-only">
                Filter by area
              </label>
              <div className="relative">
                <MapPin aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                <select
                  id="area-select"
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
                  className="h-11 appearance-none rounded-xl border border-border bg-white pl-9 pr-8 text-sm font-semibold text-navy outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                >
                  <option value="all">Anywhere in the area</option>
                  {ALL_AREAS.map((entry) => (
                    <option key={entry.id} value={entry.id}>
                      {entry.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                aria-pressed={alwaysOpenOnly}
                onClick={() => setAlwaysOpenOnly((value) => !value)}
                className={cn(
                  'inline-flex h-11 items-center gap-2 rounded-xl border px-3.5 text-sm font-semibold transition',
                  alwaysOpenOnly ? 'border-navy bg-navy text-white' : 'border-border bg-white text-navy hover:border-primary',
                )}
              >
                <Clock aria-hidden="true" className="h-4 w-4" />
                Open 24/7
              </button>

              <button
                type="button"
                onClick={() => setListOpen(true)}
                className="relative ml-auto inline-flex h-11 items-center gap-2 rounded-xl bg-sunrise px-4 text-sm font-bold text-navy transition hover:brightness-105 lg:ml-0"
              >
                <Bookmark aria-hidden="true" className="h-4 w-4" />
                My list
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-navy px-1.5 text-xs font-bold text-white">{savedIds.length}</span>
              </button>
            </div>
          </div>

          <div role="group" aria-label="Filter by category" className="-mx-4 mt-3 flex flex-wrap gap-2 px-4 pb-1">
            <button
              type="button"
              aria-pressed={category === 'all'}
              onClick={() => setCategory('all')}
              className={cn(
                'inline-flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition',
                category === 'all' ? 'border-navy bg-navy text-white' : 'border-border bg-white text-navy hover:border-primary',
              )}
            >
              All
              <span className="text-xs opacity-70">{DIRECTORY.length}</span>
            </button>
            {CATEGORIES.map((entry) => {
              const Icon = entry.icon
              const active = category === entry.key
              const tone = CATEGORY_CHIP_TONES[CATEGORIES.findIndex((item) => item.key === entry.key) % CATEGORY_CHIP_TONES.length]
              return (
                <button
                  key={entry.key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(active ? 'all' : entry.key)}
                  className={cn(
                    'inline-flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5',
                    active ? 'border-navy bg-navy text-white shadow-md' : `${tone} text-navy`,
                  )}
                >
                  <Icon aria-hidden="true" className={cn('h-4 w-4', active ? 'text-sunrise' : 'text-primary')} />
                  {entry.label}
                  <span className="text-xs opacity-70">{entry.count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3" aria-live="polite">
          <p className="text-sm font-semibold text-navy">
            {sorted.length} {sorted.length === 1 ? 'place' : 'places'}
            {category !== 'all' && <span className="text-muted-foreground"> in {categoryMeta(category).label}</span>}
            {activeAreaLabel && <span className="text-muted-foreground"> near {activeAreaLabel}</span>}
          </p>
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4">
              <X aria-hidden="true" className="h-3.5 w-3.5" />
              Clear all filters
            </button>
          )}
        </div>

        {category !== 'all' && (
          <div className="mt-4">
            <CategorySpotlights category={category} onOpenSecondChance={() => setShowSecondChance(true)} />
          </div>
        )}

        {sorted.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-border bg-white p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-navy">Nothing matches that yet</h3>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Try fewer filters or a different word. If you need help now, 211 will connect you with a person who can look it up for you.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={clearFilters} className="rounded-xl border border-border px-5 py-3 text-sm font-bold text-navy hover:border-primary">
                Clear filters
              </button>
              <a href="tel:211" className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white hover:bg-primary">
                <Phone aria-hidden="true" className="h-4 w-4 text-sunrise" />
                Call 211
              </a>
            </div>
          </div>
        ) : (
          <ul className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((item) => (
              <li key={item.id}>
                <ResourceCard
                  item={item}
                  saved={savedIds.includes(item.id)}
                  onToggleSave={toggleSaved}
                  onOpenLocations={() => setShowLocations(true)}
                />
              </li>
            ))}
          </ul>
        )}

        {sorted.length > visible.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setLimitState({ key: filterKey, limit: limit + PAGE_SIZE })}
              className="rounded-xl bg-navy px-8 py-3.5 text-sm font-bold text-white transition hover:bg-primary"
            >
              Show {Math.min(PAGE_SIZE, sorted.length - visible.length)} more ({sorted.length - visible.length} left)
            </button>
          </div>
        )}

        <p className="mt-12 rounded-2xl bg-white p-5 text-center text-sm text-muted-foreground">
          See something out of date, or know a resource we&apos;re missing?{' '}
          <a href="mailto:info@ottawacountyrecoveryalliance.org?subject=Directory%20update" className="font-semibold text-primary underline underline-offset-4">
            Tell us
          </a>{' '}
          and we&apos;ll fix it.
        </p>
      </section>

      {savedIds.length > 0 && !listOpen && (
        <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 print:hidden">
          <button
            type="button"
            onClick={() => setListOpen(true)}
            className="inline-flex items-center gap-3 rounded-full bg-navy py-3 pl-5 pr-6 text-sm font-bold text-white shadow-2xl shadow-navy/40 ring-1 ring-white/20 transition hover:bg-primary"
          >
            <Bookmark aria-hidden="true" className="h-4 w-4 text-sunrise" />
            {savedIds.length} saved &mdash; print or send my list
          </button>
        </div>
      )}

      <SavedListSheet
        open={listOpen}
        onOpenChange={setListOpen}
        items={savedItems}
        onRemove={(id) => persistSaved(savedIds.filter((value) => value !== id))}
        onClear={() => persistSaved([])}
      />
      <SecondChanceModal isOpen={showSecondChance} onClose={() => setShowSecondChance(false)} />
      <MCDCLocationsModal isOpen={showLocations} onClose={() => setShowLocations(false)} />
    </>
  )
}
