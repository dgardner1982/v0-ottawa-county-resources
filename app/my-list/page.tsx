import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Globe, MapPin, Phone } from 'lucide-react'
import { DIRECTORY_BY_ID } from '@/lib/directory'
import { PrintButton } from './print-button'

export const metadata: Metadata = {
  title: 'My resource list | Ottawa County Recovery Alliance',
  description: 'A printable list of local resources saved from the Ottawa County Recovery Alliance directory.',
  robots: { index: false },
}

export default async function MyListPage({ searchParams }: { searchParams: Promise<{ ids?: string }> }) {
  const { ids } = await searchParams
  const items = (ids ?? '')
    .split(',')
    .map((id) => DIRECTORY_BY_ID.get(id.trim()))
    .filter((item) => item !== undefined)

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 print:max-w-none print:px-0 print:py-0">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-navy pb-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Ottawa County Recovery Alliance</p>
          <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-navy">My resource list</h1>
        </div>
        <div className="flex gap-3 print:hidden">
          <Link href="/#directory" className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-navy hover:border-primary">
            Back to directory
          </Link>
          {items.length > 0 && <PrintButton />}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="mt-8 rounded-2xl bg-white p-6 text-muted-foreground">
          This list is empty. Go back to the directory and tap the bookmark on any resource to save it.
        </p>
      ) : (
        <ol className="mt-6 flex flex-col gap-5">
          {items.map((item) => (
            <li key={item.id} className="break-inside-avoid rounded-2xl border border-border bg-card p-5 print:rounded-none print:border-x-0 print:border-t-0 print:border-b-slate-300">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{item.categoryLabel}</p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">{item.name}</h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.info}</p>
              <ul className="mt-4 flex flex-col gap-2 text-base text-navy">
                {item.phoneAction && (
                  <li className="flex items-center gap-2">
                    <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                    <a href={item.phoneAction.href} className="text-xl font-bold">
                      {item.phoneAction.display}
                    </a>
                  </li>
                )}
                {item.addressLines[0] && (
                  <li className="flex items-start gap-2">
                    <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {item.addressLines[0]}
                  </li>
                )}
                {item.hours && (
                  <li className="flex items-start gap-2">
                    <Clock aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span className="whitespace-pre-line">{item.hours}</span>
                  </li>
                )}
                {item.website && (
                  <li className="flex items-center gap-2">
                    <Globe aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                    <a href={item.website} className="break-all underline underline-offset-4">
                      {item.hostname}
                    </a>
                  </li>
                )}
              </ul>
              <p className="mt-4 border-t border-dashed border-border pt-3 text-sm text-muted-foreground">Notes: ______________________________________________</p>
            </li>
          ))}
        </ol>
      )}

      <p className="mt-8 rounded-2xl bg-navy p-5 text-center text-sm text-white print:bg-transparent print:text-navy print:ring-1 print:ring-slate-300">
        In crisis? Call or text <strong>988</strong> &middot; Need more local help? Call <strong>211</strong> &middot; Emergency? Call <strong>911</strong>
      </p>
    </main>
  )
}
