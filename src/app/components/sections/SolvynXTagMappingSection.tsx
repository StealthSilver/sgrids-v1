'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface SolvynXTagMappingSectionProps {}

const TRADITIONAL_BARS = 28
const AI_BARS = 3
const TRADITIONAL_STEP_MS = 55
const AI_STEP_MS = 90
const HOLD_MS = 2400
const LOOP_GAP_MS = 800

function TagMappingIllustration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [traditionalCount, setTraditionalCount] = useState(0)
  const [aiCount, setAiCount] = useState(0)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const prefersReducedMotion = useRef(false)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms)
    timersRef.current.push(id)
  }, [])

  const runSequence = useCallback(() => {
    clearTimers()

    if (prefersReducedMotion.current) {
      setTraditionalCount(TRADITIONAL_BARS)
      setAiCount(AI_BARS)
      return
    }

    setTraditionalCount(0)
    setAiCount(0)

    for (let i = 1; i <= TRADITIONAL_BARS; i += 1) {
      schedule(() => setTraditionalCount(i), i * TRADITIONAL_STEP_MS)
    }

    const traditionalDone = TRADITIONAL_BARS * TRADITIONAL_STEP_MS + 180

    for (let j = 1; j <= AI_BARS; j += 1) {
      schedule(() => setAiCount(j), traditionalDone + j * AI_STEP_MS)
    }

    const sequenceDone = traditionalDone + AI_BARS * AI_STEP_MS + HOLD_MS + LOOP_GAP_MS
    schedule(() => runSequence(), sequenceDone)
  }, [clearTimers, schedule])

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runSequence()
        } else {
          clearTimers()
          setTraditionalCount(0)
          setAiCount(0)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [clearTimers, runSequence])

  return (
    <div
      ref={containerRef}
      role="button"
      aria-label="Replay comparison: traditional tag mapping takes weeks, AI auto-mapping takes hours"
      className="flex h-full min-h-[320px] cursor-pointer flex-col justify-center rounded-[14px] border border-[#EFE6DF] bg-[#FAFAFA] px-5 py-6 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-shadow duration-200 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:min-h-[360px] sm:px-7 sm:py-8"
      onClick={runSequence}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          runSequence()
        }
      }}
      tabIndex={0}
    >
      <div>
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-semibold uppercase leading-[1] tracking-[0.06em] text-[#7F7F7F] sm:text-[0.75rem]">
          Traditional Tag Mapping
        </p>
        <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[2rem]">
          Weeks
        </p>
        <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.3] text-[#7F7F7F] sm:text-[0.875rem]">
          Manual configuration and mapping
        </p>

        <div className="mt-5 flex h-9 items-end gap-[3px] sm:h-10 sm:gap-1" aria-hidden="true">
          {Array.from({ length: TRADITIONAL_BARS }).map((_, index) => (
            <span
              key={`traditional-${index}`}
              className={`w-[5px] rounded-[2px] bg-[#D5D0CB] transition-[opacity,transform,height] duration-200 ease-out sm:w-[6px] ${
                index < traditionalCount
                  ? 'h-full translate-y-0 opacity-100'
                  : 'h-[28%] translate-y-1 opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="my-6 h-px w-full bg-[#E0D8D0] sm:my-7" aria-hidden="true" />

      <div>
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-semibold uppercase leading-[1] tracking-[0.06em] text-[#FF7F00] sm:text-[0.75rem]">
          AI Auto-Mapping
        </p>
        <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03rem] text-[#FF7F00] sm:text-[2rem]">
          Hours
        </p>
        <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.3] text-[#7F7F7F] sm:text-[0.875rem]">
          Automated recognition and mapping
        </p>

        <div className="mt-5 flex h-9 items-end gap-[3px] sm:h-10 sm:gap-1" aria-hidden="true">
          {Array.from({ length: AI_BARS }).map((_, index) => (
            <span
              key={`ai-${index}`}
              className={`w-[5px] rounded-[2px] bg-[#FF7F00] transition-[opacity,transform,height] duration-200 ease-out sm:w-[6px] ${
                index < aiCount
                  ? 'h-full translate-y-0 opacity-100'
                  : 'h-[28%] translate-y-1 opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SolvynXTagMappingSection: React.FC<SolvynXTagMappingSectionProps> = () => {
  return (
    <section id="ai-tag-mapping" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
        <div className="max-w-[540px]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            AI TAG MAPPING
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            The work that used to take weeks now takes hours.
          </h2>

          <p className="mt-6 [font-family:var(--font-ibm-plex-sans)] text-[2.5rem] font-bold leading-[1] tracking-[-0.05rem] text-[#1C1B1B] sm:text-[3rem] lg:text-[3.5rem]">
            70–90%
          </p>
          <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[1rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
            reduction in tag-mapping work
          </p>

          <p className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
            The AI auto-mapping engine recognises device signatures, infers data structures, and maps
            thousands of field tags automatically, reducing integration effort from weeks to hours,
            without manual configuration or specialist knowledge.
          </p>

          <div className="mt-7">
            <Link
              href={navRequestDemo.href}
              className="inline-flex items-center justify-center rounded-full bg-[#FF7F00] px-6 py-1.5 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        <TagMappingIllustration />
      </div>
    </section>
  )
}

export default SolvynXTagMappingSection
