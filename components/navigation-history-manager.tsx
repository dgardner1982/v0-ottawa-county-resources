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
      const key = scrollKey(pathname)
      const currentScrollY = window.scrollY
      const previousScrollY = Number(sessionStorage.getItem(key) ?? 0)
      if (currentScrollY > 0 || previousScrollY === 0) {
        sessionStorage.setItem(key, String(currentScrollY))
      }
    }
    const saveBeforeNavigation = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a')
      if (link?.origin === window.location.origin) savePosition()
    }

    const positionTimer = window.setInterval(savePosition, 100)
    window.addEventListener('scroll', savePosition, { passive: true })
    window.addEventListener('pagehide', savePosition)
    document.addEventListener('click', saveBeforeNavigation, true)
    return () => {
      window.clearInterval(positionTimer)
      window.removeEventListener('scroll', savePosition)
      window.removeEventListener('pagehide', savePosition)
      document.removeEventListener('click', saveBeforeNavigation, true)
    }
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname
    const savedScrollY = Number(sessionStorage.getItem(scrollKey(pathname)) ?? 0)
    if (!savedScrollY) return

    let frame = 0
    const restore = () => {
      window.scrollTo({ top: savedScrollY, behavior: 'auto' })
      sessionStorage.setItem(scrollKey(pathname), String(savedScrollY))
      frame += 1
      if (frame < 20) requestAnimationFrame(restore)
    }

    requestAnimationFrame(restore)
    const retryTimers = [150, 400, 800].map((delay) => window.setTimeout(() => {
      window.scrollTo({ top: savedScrollY, behavior: 'auto' })
    }, delay))

    return () => retryTimers.forEach((timer) => window.clearTimeout(timer))
  }, [pathname])

  return null
}
