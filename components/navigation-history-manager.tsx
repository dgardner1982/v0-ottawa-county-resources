'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const scrollKey = (pathname: string) => `ottawa-scroll:${pathname}`

export function NavigationHistoryManager() {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.history.scrollRestoration = 'manual'
    const savePosition = () => {
      sessionStorage.setItem(scrollKey(pathname), String(window.scrollY))
    }

    window.addEventListener('scroll', savePosition, { passive: true })
    return () => {
      savePosition()
      window.removeEventListener('scroll', savePosition)
    }
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname
    const savedScrollY = Number(sessionStorage.getItem(scrollKey(pathname)) ?? 0)
    requestAnimationFrame(() => window.scrollTo({ top: savedScrollY, behavior: 'auto' }))
  }, [pathname])

  return null
}
