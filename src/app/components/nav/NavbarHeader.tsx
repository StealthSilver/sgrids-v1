'use client'

import React, { useCallback, useRef, useState } from 'react'
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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={`shrink-0 text-current transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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

const NavbarHeader: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
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

  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 overflow-visible border-b border-transparent bg-white/95 py-1 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90"
    >
      <div className="relative z-10 mx-auto flex h-11 w-full max-w-7xl items-center gap-3 px-1.5 sm:px-2 lg:gap-5 lg:px-2.5 xl:px-3">
        <Link href="/" aria-label="Smart Grid Analytics Home" className="shrink-0">
          <Image
            src="/Logos/sgrids_main.svg"
            alt="Sgrids logo"
            width={184}
            height={42}
            priority
            className="h-4 w-auto md:h-6 lg:h-7"
          />
        </Link>

        <nav aria-label="Main" className="flex min-w-0 flex-1 items-center justify-center" onMouseLeave={scheduleClose}>
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
          className="ml-auto inline-flex shrink-0 items-center justify-center rounded-full bg-[#FF7F00] px-4 py-2 text-sm font-semibold leading-none tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)] md:px-5"
        >
          {navRequestDemo.label}
        </Link>
      </div>
    </header>
  )
}

export default NavbarHeader
