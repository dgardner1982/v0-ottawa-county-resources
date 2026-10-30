'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Link2, Mail, MessageSquare, Printer, Trash2 } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { formatForSharing, type DirectoryItem } from '@/lib/directory'

interface SavedListSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: DirectoryItem[]
  onRemove: (id: string) => void
  onClear: () => void
}

export function SavedListSheet({ open, onOpenChange, items, onRemove, onClear }: SavedListSheetProps) {
  const [copied, setCopied] = useState(false)
  const planPath = `/my-list?ids=${items.map((item) => item.id).join(',')}`

  function planUrl() {
    return `${window.location.origin}${planPath}`
  }

  async function shareOrCopy() {
    const url = planUrl()
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: 'My resource list', text: 'Local help I saved from the Ottawa County Recovery Alliance', url })
        return
      } catch {
        return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  function messageBody() {
    return `My resource list:\n${formatForSharing(items)}\n\nFull list: ${planUrl()}`
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 bg-white p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle className="font-display text-2xl font-bold tracking-tight text-navy">My list</SheetTitle>
          <SheetDescription>
            Save places as you browse, then print the list, or text it to yourself, a friend, or a client.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <p className="rounded-2xl bg-muted p-5 text-sm text-muted-foreground">
              Nothing saved yet. Tap the bookmark on any resource to add it here.
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-3 rounded-2xl border border-border p-4">
                  <div className="min-w-0">
                    <p className="font-display text-base font-bold leading-snug text-navy">{item.name}</p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-primary">{item.categoryLabel}</p>
                    {item.phoneAction && (
                      <a href={item.phoneAction.href} className="mt-1 block text-sm font-semibold text-navy underline underline-offset-4">
                        {item.phoneAction.display}
                      </a>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-navy/60 transition hover:bg-muted hover:text-destructive"
                  >
                    <Trash2 aria-hidden="true" className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="flex flex-col gap-2 border-t border-border bg-background p-5">
            <Link
              href={planPath}
              target="_blank"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy px-4 text-sm font-bold text-white transition hover:bg-primary"
            >
              <Printer aria-hidden="true" className="h-4 w-4 text-sunrise" />
              Open printable list
            </Link>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={shareOrCopy}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-2 text-sm font-semibold text-navy transition hover:border-primary"
              >
                {copied ? <Check aria-hidden="true" className="h-4 w-4 text-primary" /> : <Link2 aria-hidden="true" className="h-4 w-4" />}
                {copied ? 'Copied' : 'Share'}
              </button>
              <a
                href={`sms:?&body=${encodeURIComponent(messageBody())}`}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-2 text-sm font-semibold text-navy transition hover:border-primary"
              >
                <MessageSquare aria-hidden="true" className="h-4 w-4" />
                Text
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('My resource list')}&body=${encodeURIComponent(messageBody())}`}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-2 text-sm font-semibold text-navy transition hover:border-primary"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                Email
              </a>
            </div>
            <button type="button" onClick={onClear} className="self-center pt-1 text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-destructive">
              Clear list
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
