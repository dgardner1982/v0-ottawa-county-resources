'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/#directory', label: 'Find help' },
  { href: '/support-groups', label: 'Support groups' },
  { href: '/naloxone-locations', label: 'Free Narcan' },
  { href: '/mat-resources', label: 'Treatment (MAT)' },
  { href: '/education', label: 'Learn' },
]

const CRISIS_LINKS = [
  { href: 'tel:988', label: 'Crisis', number: '988', tone: 'text-sunrise' },
  { href: 'tel:211', label: 'Local help', number: '211', tone: 'text-white' },
  { href: 'tel:911', label: 'Emergency', number: '911', tone: 'text-white' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[60] print:hidden">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 text-xs sm:text-sm">
          <p className="hidden font-medium text-white/70 md:block">In crisis or need to talk to someone right now?</p>
          <ul className="flex w-full items-center justify-between gap-1 md:w-auto md:justify-end md:gap-5">
            {CRISIS_LINKS.map((link) => (
              <li key={link.number}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunrise"
                >
                  <Phone aria-hidden="true" className="h-3.5 w-3.5 text-sunrise" />
                  <span className="text-white/70">{link.label}</span>
                  <span className={cn('font-display text-base leading-none tracking-tight', link.tone)}>{link.number}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav aria-label="Primary navigation" className="border-b border-border bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
          <Link href="/" className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <Image src="/logo.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-1 ring-border" priority />
            <span className="font-display text-base font-bold leading-tight tracking-tight text-navy sm:text-lg">
              Ottawa County
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Recovery Alliance</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = link.href !== '/#directory' && pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-semibold text-navy/80 transition hover:bg-muted hover:text-navy',
                      active && 'bg-muted text-navy',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy transition hover:bg-muted lg:hidden"
              aria-label="Open menu"
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-white">
              <SheetHeader>
                <SheetTitle className="font-display text-xl text-navy">Menu</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link href={link.href} className="block rounded-xl px-4 py-3 text-lg font-semibold text-navy transition hover:bg-muted">
                        {link.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
