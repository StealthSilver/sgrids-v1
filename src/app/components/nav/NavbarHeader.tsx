'use client'

import { assetUrl } from '@/lib/cdn'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navContact, navMenus, navRequestDemo, type NavMenu } from '@/app/data/nav.data'

const CLOSE_DELAY_MS = 140

const triggerBaseClasses =
  'inline-flex items-center gap-0.5 border-b-2 border-transparent bg-transparent pb-px [font-family:var(--font-ibm-plex-sans)] text-xs font-medium leading-none tracking-[0.02em] capitalize transition-[color,border-color] duration-200 lg:text-[0.8125rem] lg:tracking-[0.03em]'

const triggerInactiveClasses = 'text-[#808080] hover:border-[#FF7F00] hover:text-[#FF7F00]'
const triggerActiveClasses = 'border-[#FF7F00] text-[#FF7F00]'

const dropdownLinkClasses =
  'group/link block rounded-md px-2.5 py-1.5 transition-colors duration-150 hover:bg-[#FFF8F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7F00]'

const dropdownPanelClasses =
  "absolute left-1/2 top-[calc(100%+0.25rem)] z-50 w-max min-w-[12.5rem] max-w-[17.5rem] -translate-x-1/2 rounded-lg border border-[#EFE6DF] bg-white px-2.5 py-2 shadow-[0_12px_40px_-12px_rgba(19,19,19,0.14)] transition-[opacity,transform] duration-200 ease-out before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] motion-reduce:transition-none"

const mobileLinkClasses =
  'block rounded-md px-3 py-2.5 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-medium leading-tight text-[#131313] transition-colors duration-150 hover:bg-[#FFF8F2] hover:text-[#FF7F00]'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={`shrink-0 text-current transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-current">
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

function DropdownPanel({ menu, onLinkClick }: { menu: NavMenu; onLinkClick: () => void }) {
  const groups = menu.groups
  const flatItems = menu.items

  return (
    <>
      {groups?.map((group) => (
        <div key={group.label}>
          <p className="mb-1 px-2 [font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-semibold uppercase leading-none tracking-[0.08em] text-[#FF7F00]">
            {group.label}
          </p>
          <ul className="flex flex-col gap-1.5">
            {group.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={dropdownLinkClasses} onClick={onLinkClick}>
                  <span className="block [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-medium leading-tight text-[#131313] transition-colors duration-150 group-hover/link:text-[#FF7F00]">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {flatItems ? (
        <ul className="flex flex-col gap-1.5">
          {flatItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={dropdownLinkClasses} onClick={onLinkClick}>
                <span className="block [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-medium leading-tight text-[#131313] transition-colors duration-150 group-hover/link:text-[#FF7F00]">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

function MobileNavPanel({
  openSectionId,
  onToggleSection,
  onNavigate,
}: {
  openSectionId: string | null
  onToggleSection: (id: string) => void
  onNavigate: () => void
}) {
  return (
    <div className="border-t border-[#EFE6DF] bg-white px-3 pb-5 pt-2 sm:px-4">
      <ul className="flex flex-col">
        {navMenus.map((menu) => {
          const isOpen = openSectionId === menu.id
          const items = menu.items ?? menu.groups?.flatMap((group) => group.items) ?? []

          return (
            <li key={menu.id} className="border-b border-[#F3EEEA]">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-1 py-3.5 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold capitalize leading-none text-[#131313]"
                aria-expanded={isOpen}
                onClick={() => onToggleSection(menu.id)}
              >
                {menu.label}
                <ChevronIcon open={isOpen} />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="flex flex-col gap-0.5 pb-3">
                    {items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className={mobileLinkClasses} onClick={onNavigate}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}

        <li className="border-b border-[#F3EEEA]">
          <Link
            href={navContact.href}
            className="block px-1 py-3.5 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold capitalize leading-none text-[#131313]"
            onClick={onNavigate}
          >
            {navContact.label}
          </Link>
        </li>
      </ul>

      <Link
        href={navRequestDemo.href}
        className="mt-4 flex w-full items-center justify-center rounded-full bg-[#FF7F00] px-5 py-3 [font-family:var(--font-ibm-plex-sans)] text-sm font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#E67300]"
        onClick={onNavigate}
      >
        {navRequestDemo.label}
      </Link>
    </div>
  )
}

const NavbarHeader: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSectionId, setMobileSectionId] = useState<string | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openMenu = useCallback(
    (id: string) => {
      clearCloseTimer()
      setActiveId(id)
    },
    [clearCloseTimer],
  )

  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => setActiveId(null), CLOSE_DELAY_MS)
  }, [clearCloseTimer])

  const closeMenu = useCallback(() => {
    clearCloseTimer()
    setActiveId(null)
  }, [clearCloseTimer])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setMobileSectionId(null)
  }, [])

  const toggleMobile = useCallback(() => {
    setMobileOpen((open) => {
      if (open) setMobileSectionId(null)
      return !open
    })
    closeMenu()
  }, [closeMenu])

  const toggleMobileSection = useCallback((id: string) => {
    setMobileSectionId((current) => (current === id ? null : id))
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobile()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen, closeMobile])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) closeMobile()
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [closeMobile])

  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 overflow-visible border-b border-transparent bg-white/95 py-1 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90"
    >
      <div className="relative z-50 mx-auto flex h-11 w-full max-w-7xl items-center gap-3 bg-white/95 px-3 sm:px-4 md:px-2 lg:gap-5 lg:px-2.5 xl:px-3">
        <Link href="/" aria-label="Smart Grid Analytics Home" className="shrink-0" onClick={closeMobile}>
          <Image
            src={assetUrl('/assets/brand/logo-sgrids-main.svg')}
            alt="Sgrids logo"
            width={184}
            height={42}
            priority
            className="h-4 w-auto md:h-6 lg:h-7"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className="hidden min-w-0 flex-1 items-center justify-center md:flex"
          onMouseLeave={scheduleClose}
        >
          <ul className="flex items-center gap-4 lg:gap-7">
            {navMenus.map((menu) => {
              const isOpen = activeId === menu.id

              return (
                <li key={menu.id} className="relative" onMouseEnter={() => openMenu(menu.id)}>
                  <button
                    type="button"
                    className={`${triggerBaseClasses} ${isOpen ? triggerActiveClasses : triggerInactiveClasses}`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onFocus={() => openMenu(menu.id)}
                  >
                    {menu.label}
                    <ChevronIcon open={isOpen} />
                  </button>

                  <div
                    className={`${dropdownPanelClasses} ${
                      isOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-1 opacity-0'
                    }`}
                    aria-hidden={!isOpen}
                    onMouseEnter={clearCloseTimer}
                  >
                    <DropdownPanel menu={menu} onLinkClick={closeMenu} />
                  </div>
                </li>
              )
            })}

            <li>
              <Link href={navContact.href} className={`${triggerBaseClasses} ${triggerInactiveClasses}`}>
                {navContact.label}
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href={navRequestDemo.href}
          className="ml-auto hidden shrink-0 items-center justify-center rounded-full bg-[#FF7F00] px-4 py-2 text-sm font-semibold leading-none tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)] md:inline-flex md:px-5"
        >
          {navRequestDemo.label}
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-[#131313] transition-colors hover:bg-[#FFF8F2] hover:text-[#FF7F00] md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={toggleMobile}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile panel — absolute so it overlays page content */}
      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full z-50 max-h-[min(70vh,32rem)] overflow-y-auto shadow-[0_16px_40px_-12px_rgba(19,19,19,0.18)] md:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
        aria-hidden={!mobileOpen}
      >
        <MobileNavPanel
          openSectionId={mobileSectionId}
          onToggleSection={toggleMobileSection}
          onNavigate={closeMobile}
        />
      </div>

      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 cursor-default bg-black/25 md:hidden"
          onClick={closeMobile}
        />
      ) : null}
    </header>
  )
}

export default NavbarHeader
