'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bookmark, BookmarkCheck, Check, ChevronDown, Clock, Copy, ExternalLink, MapPin, Navigation, Phone, MessageSquare } from 'lucide-react'
import { categoryMeta, NALOXONE_CATEGORY, type DirectoryItem } from '@/lib/directory'
import { cn } from '@/lib/utils'

interface ResourceCardProps {
  item: DirectoryItem
  saved: boolean
  onToggleSave: (id: string) => void
  onOpenLocations?: () => void
}

const NON_PHYSICAL = /^(national|state program|statewide program|multiple|ottawa county$|ottawa county -)/i
const RESOURCE_BORDER_TONES: Record<string, string> = {
  Food: 'border-[#f28a2e]/60', Housing: 'border-[#4f8fd4]/60', 'Substance Recovery': 'border-[#8e6bbf]/60', 'Mental Health': 'border-[#d85da1]/60',
  [NALOXONE_CATEGORY]: 'border-[#d6403a]/60', 'Domestic Violence': 'border-[#d6403a]/60', Employment: 'border-[#0f6e75]/60', 'Health Care': 'border-[#49a696]/60',
  'Clothing and Furniture': 'border-[#e0aa32]/60', Dental: 'border-[#3b82a0]/60', 'Government Services': 'border-[#c45b7c]/60', 'Harm Reduction': 'border-[#6d8b4e]/60',
  Legal: 'border-[#5f72b5]/60', 'Medicated Assisted Treatment': 'border-[#c37b2c]/60', 'Prenatal/Maternal': 'border-[#c45b7c]/60', Seniors: 'border-[#9b5db0]/60',
}


function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export function ResourceCard({ item, saved, onToggleSave, onOpenLocations }: ResourceCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const meta = categoryMeta(item.category)
  const Icon = meta.icon
  const primaryAddress = item.addressLines[0]
  const hasPhysicalAddress = Boolean(primaryAddress) && !NON_PHYSICAL.test(primaryAddress)
  const isMultiLocation = /^multiple locations$/i.test(item.address.trim()) && item.name.includes('MCDC')
  const hasExtras = Boolean(
    item.officeAddress || item.officeHours || item.officePhone || item.officeDescription || item.officeWebsite || item.addressLines.length > 1,
  )
  const longInfo = item.info.length > 150
  const rawPhoneIsExtended = item.phoneAction && item.phone.replace(/\D/g, '').length > 11

  async function copyPhone() {
    if (!item.phoneAction) return
    try {
      await navigator.clipboard.writeText(item.phoneAction.display)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className={cn('group flex h-full flex-col rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/10', RESOURCE_BORDER_TONES[item.category] ?? 'border-border')}>
      <header className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-navy', RESOURCE_BORDER_TONES[item.category]?.replace('border-', 'bg-').replace('/60', '/15') ?? 'bg-muted')}>
            <Icon aria-hidden="true" className="h-3.5 w-3.5" />
            {meta.label}
          </span>
          {item.isAlwaysOpen && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-navy">
              <Clock aria-hidden="true" className="h-3.5 w-3.5" />
              24/7
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => onToggleSave(item.id)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${item.name} from my list` : `Save ${item.name} to my list`}
          className={cn(
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
            saved ? 'border-sunrise bg-sunrise text-navy' : 'border-border bg-white text-navy/60 hover:border-primary hover:text-primary',
          )}
        >
          {saved ? <BookmarkCheck aria-hidden="true" className="h-4 w-4" /> : <Bookmark aria-hidden="true" className="h-4 w-4" />}
        </button>
      </header>

      <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-navy text-balance">{item.name}</h3>

      <p className={cn('mt-2 text-sm leading-relaxed text-muted-foreground', !expanded && longInfo && 'line-clamp-3')}>{item.info}</p>

      <dl className="mt-4 flex flex-col gap-2 text-sm text-navy">
        {primaryAddress && (
          <div className="flex items-start gap-2">
            <dt className="sr-only">Address</dt>
            <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <dd className="min-w-0">
              {hasPhysicalAddress ? (
                <a href={mapsUrl(primaryAddress)} target="_blank" rel="noopener noreferrer" className="break-words underline decoration-border underline-offset-4 hover:text-primary hover:decoration-primary">
                  {primaryAddress}
                </a>
              ) : (
                <span className="break-words">{primaryAddress}</span>
              )}
              {isMultiLocation && onOpenLocations && (
                <button type="button" onClick={onOpenLocations} className="ml-2 font-semibold text-primary underline underline-offset-4">
                  See all locations
                </button>
              )}
            </dd>
          </div>
        )}
        {item.hours && (
          <div className="flex items-start gap-2">
            <dt className="sr-only">Hours</dt>
            <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <dd className="whitespace-pre-line break-words">{item.hours}</dd>
          </div>
        )}
      </dl>

      {(hasExtras || rawPhoneIsExtended) && (
        <>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="mt-3 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary hover:underline"
          >
            {expanded ? 'Show less' : 'More locations and numbers'}
            <ChevronDown aria-hidden="true" className={cn('h-4 w-4 transition', expanded && 'rotate-180')} />
          </button>
          {expanded && (
            <div className="mt-2 flex flex-col gap-2 rounded-xl bg-muted/60 p-3 text-sm text-navy">
              {rawPhoneIsExtended && <p><span className="font-semibold">All numbers:</span> {item.phone}</p>}
              {item.addressLines.slice(1).map((line) => (
                <p key={line}>{line}</p>
              ))}
              {item.officeAddress && <p><span className="font-semibold">Also at:</span> {item.officeAddress}</p>}
              {item.officePhone && <p><span className="font-semibold">Phone:</span> {item.officePhone}</p>}
              {item.officeHours && <p className="whitespace-pre-line"><span className="font-semibold">Hours:</span> {item.officeHours}</p>}
              {item.officeDescription && <p>{item.officeDescription}</p>}
              {item.officeWebsite && (
                <a href={item.officeWebsite} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">
                  Visit website
                </a>
              )}
            </div>
          )}
        </>
      )}

      <div className="mt-auto flex flex-col gap-3 pt-5">
        <div className="flex items-stretch gap-2">
          {item.phoneAction ? (
            <a
              href={item.phoneAction.href}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {item.phoneAction.kind === 'sms' ? <MessageSquare aria-hidden="true" className="h-4 w-4 text-sunrise" /> : <Phone aria-hidden="true" className="h-4 w-4 text-sunrise" />}
              <span>{item.phoneAction.kind === 'sms' ? item.phoneAction.display : `Call ${item.phoneAction.display}`}</span>
            </a>
          ) : item.link ? (
            <Link
              href={item.link}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary"
            >
              <MapPin aria-hidden="true" className="h-4 w-4 text-sunrise" />
              See locations
            </Link>
          ) : item.website ? (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary"
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4 text-sunrise" />
              Visit website
            </a>
          ) : (
            <span className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-muted px-4 py-2.5 text-sm font-semibold text-muted-foreground">
              {item.phone || 'Contact details coming soon'}
            </span>
          )}

          {item.phoneAction?.kind === 'tel' && (
            <button
              type="button"
              onClick={copyPhone}
              aria-label={copied ? 'Phone number copied' : `Copy phone number for ${item.name}`}
              className="inline-flex min-h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-navy transition hover:border-primary hover:text-primary"
            >
              {copied ? <Check aria-hidden="true" className="h-4 w-4 text-primary" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
            </button>
          )}
          {hasPhysicalAddress && (
            <a
              href={mapsUrl(primaryAddress)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Directions to ${item.name}`}
              className="inline-flex min-h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-navy transition hover:border-primary hover:text-primary"
            >
              <Navigation aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
        </div>

        {(item.website && (item.phoneAction || item.link)) && (
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {item.hostname}
            <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}
