'use client'

import { useEffect, useRef } from 'react'

export interface StripeWaveOptions {
  /** Animation speed multiplier (lower = slower) */
  speed?: number
}

interface RibbonPoint {
  x: number
  y: number
  nx: number
  spread: number
}

interface RibbonSurface {
  color: string
  yBase: number
  amplitude: number
  frequency: number
  phase: number
  flow: number
  skew: number
  strandCount: number
  strandSpacing: number
  ribbonWidth: number
  opacity: number
  fanPower: number
}

const SAMPLE_COUNT = 100
const TARGET_FPS = 30

/** Varied orange shades — saturated hues, not brown. */
const ORANGE_STOPS = [
  { r: 255, g: 88, b: 0 },
  { r: 255, g: 102, b: 0 },
  { r: 255, g: 118, b: 6 },
  { r: 255, g: 127, b: 0 },
  { r: 255, g: 136, b: 14 },
  { r: 255, g: 148, b: 28 },
  { r: 255, g: 158, b: 38 },
  { r: 255, g: 168, b: 48 },
  { r: 255, g: 178, b: 62 },
  { r: 255, g: 188, b: 76 },
  { r: 255, g: 198, b: 92 },
  { r: 255, g: 208, b: 108 },
  { r: 255, g: 218, b: 124 },
  { r: 255, g: 228, b: 142 },
] as const

const WAVE_COUNT = 150

function mixStops(
  stops: readonly { r: number; g: number; b: number }[],
  t: number,
): string {
  const clamped = Math.min(1, Math.max(0, t))
  const scaled = clamped * (stops.length - 1)
  const index = Math.min(stops.length - 2, Math.floor(scaled))
  const local = scaled - index
  const from = stops[index]
  const to = stops[index + 1]
  const r = Math.round(from.r + (to.r - from.r) * local)
  const g = Math.round(from.g + (to.g - from.g) * local)
  const b = Math.round(from.b + (to.b - from.b) * local)
  return `rgb(${r}, ${g}, ${b})`
}

function ribbonShade(index: number): string {
  const base = index / (WAVE_COUNT - 1)
  const variation = ((index * 11) % 17) / 17
  const shadeT = Math.min(1, base * 0.72 + variation * 0.28)
  return mixStops(ORANGE_STOPS, shadeT)
}

function buildRibbonSurfaces(): RibbonSurface[] {
  return Array.from({ length: WAVE_COUNT }, (_, index) => {
    const t = index / (WAVE_COUNT - 1)

    return {
      color: ribbonShade(index),
      yBase: 0.08 + t * 0.86,
      amplitude: 0.08 + (index % 5) * 0.018,
      frequency: 0.68 + (index % 7) * 0.08,
      phase: t * Math.PI * 6.2 + index * 0.31,
      flow: 0.1 + (index % 5) * 0.015,
      skew: 0.38 + (index % 6) * 0.06,
      strandCount: 136,
      strandSpacing: 0.022,
      ribbonWidth: 0.95 + (index % 4) * 0.07,
      opacity: 0.24 + (index % 5) * 0.028,
      fanPower: 1.26 + (index % 5) * 0.09,
    }
  })
}

const RIBBON_SURFACES = buildRibbonSurfaces()

/** Keep ribbons in the bottom portion of the patent card canvas. */
function mapToWaveBand(yNorm: number): number {
  const clamped = Math.min(1, Math.max(0, yNorm))
  return 0.04 + clamped * 0.96
}

function ribbonCenterY(
  xNorm: number,
  ribbon: RibbonSurface,
  time: number,
  speed: number,
): number {
  const t = time * speed
  const travel = xNorm * ribbon.skew + (1 - xNorm) * 0.12
  const wave1 =
    Math.sin(travel * Math.PI * 2 * ribbon.frequency + ribbon.phase + t * ribbon.flow) *
    ribbon.amplitude
  const wave2 =
    Math.sin(travel * Math.PI * 3.1 * ribbon.frequency + ribbon.phase * 1.25 + t * ribbon.flow * 0.7) *
    ribbon.amplitude *
    0.42
  const sweep =
    Math.sin((xNorm - 0.35) * Math.PI * 1.6 + ribbon.phase * 0.5 + t * ribbon.flow * 0.45) *
    ribbon.amplitude *
    0.28
  const drift = Math.sin(t * 0.28 + ribbon.phase) * 0.03
  return ribbon.yBase + wave1 + wave2 + sweep + drift
}

function computeRibbonGeometry(
  ribbon: RibbonSurface,
  width: number,
  height: number,
  time: number,
  speed: number,
): RibbonPoint[] {
  const points: RibbonPoint[] = []
  const t = time * speed

  for (let i = 0; i <= SAMPLE_COUNT; i++) {
    const xNorm = i / SAMPLE_COUNT
    const x = xNorm * width
    const yNorm = mapToWaveBand(ribbonCenterY(xNorm, ribbon, time, speed))
    const y = yNorm * height

    const yAhead =
      mapToWaveBand(ribbonCenterY(Math.min(1, xNorm + 0.012), ribbon, time, speed)) * height
    const yBehind =
      mapToWaveBand(ribbonCenterY(Math.max(0, xNorm - 0.012), ribbon, time, speed)) * height
    const dx = width * 0.012
    const dy = yAhead - yBehind
    const len = Math.hypot(dx, dy) || 1
    const nx = -dy / len

    const depth =
      0.5 +
      0.5 *
        Math.sin(xNorm * Math.PI * 2.2 * ribbon.frequency + ribbon.phase * 0.85 + t * ribbon.flow)
    const fan = 0.45 + Math.pow(xNorm, ribbon.fanPower) * 1.15
    const spread = ribbon.ribbonWidth * height * 0.026 * fan * (0.6 + depth * 1.1)

    points.push({ x, y, nx, spread })
  }

  return points
}

function drawRibbonSurface(
  ctx: CanvasRenderingContext2D,
  ribbon: RibbonSurface,
  geometry: RibbonPoint[],
): void {
  const half = ribbon.strandCount / 2

  for (let s = 0; s < ribbon.strandCount; s++) {
    const strandIndex = s - half
    const offset = strandIndex * ribbon.strandSpacing
    const edge = Math.abs(strandIndex / half)
    const strandOpacity = ribbon.opacity * (0.5 + (1 - edge) * 0.5)

    ctx.beginPath()
    ctx.strokeStyle = ribbon.color
    ctx.globalAlpha = Math.max(0.1, strandOpacity)
    ctx.lineWidth = 0.22

    for (let i = 0; i < geometry.length; i++) {
      const p = geometry[i]
      const y = p.y + p.nx * offset * p.spread

      if (i === 0) ctx.moveTo(p.x, y)
      else ctx.lineTo(p.x, y)
    }

    ctx.stroke()
  }
}

function applyEdgeFades(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  ctx.globalCompositeOperation = 'source-over'
  ctx.globalAlpha = 1

  const topFade = ctx.createLinearGradient(0, 0, 0, height * 0.42)
  topFade.addColorStop(0, 'rgba(255,255,255,0.92)')
  topFade.addColorStop(0.55, 'rgba(255,255,255,0.35)')
  topFade.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = topFade
  ctx.fillRect(0, 0, width, height * 0.42)

  const leftFade = ctx.createLinearGradient(0, 0, width * 0.08, 0)
  leftFade.addColorStop(0, 'rgba(255,255,255,0.55)')
  leftFade.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = leftFade
  ctx.fillRect(0, 0, width * 0.08, height)

  const rightFade = ctx.createLinearGradient(width * 0.88, 0, width, 0)
  rightFade.addColorStop(0, 'rgba(255,255,255,0)')
  rightFade.addColorStop(1, 'rgba(255,255,255,0.25)')
  ctx.fillStyle = rightFade
  ctx.fillRect(width * 0.88, 0, width * 0.12, height)
}

export function useStripeWave(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  options: StripeWaveOptions = {},
): void {
  const { speed = 0.32 } = options
  const rafRef = useRef<number>(0)
  const startRef = useRef<number>(0)
  const lastFrameRef = useRef<number>(0)
  const visibleRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0

    const resize = (): void => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width < 1 || rect.height < 1) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (timestamp: number): void => {
      rafRef.current = requestAnimationFrame(draw)

      if (!visibleRef.current || width < 1 || height < 1) return

      const frameInterval = 1000 / TARGET_FPS
      if (timestamp - lastFrameRef.current < frameInterval) return
      lastFrameRef.current = timestamp

      if (!startRef.current) startRef.current = timestamp
      const time = (timestamp - startRef.current) / 1000

      ctx.clearRect(0, 0, width, height)

      for (const ribbon of RIBBON_SURFACES) {
        const geometry = computeRibbonGeometry(ribbon, width, height, time, speed)
        drawRibbonSurface(ctx, ribbon, geometry)
      }

      applyEdgeFades(ctx, width, height)
    }

    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) resize()
      },
      { threshold: 0.05 },
    )
    visibilityObserver.observe(canvas)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const startLoop = (): void => {
      cancelAnimationFrame(rafRef.current)
      if (prefersReducedMotion.matches) {
        lastFrameRef.current = 0
        draw(performance.now())
        return
      }
      startRef.current = 0
      lastFrameRef.current = 0
      rafRef.current = requestAnimationFrame(draw)
    }

    const onMotionChange = (): void => startLoop()

    startLoop()
    prefersReducedMotion.addEventListener('change', onMotionChange)

    return () => {
      cancelAnimationFrame(rafRef.current)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      prefersReducedMotion.removeEventListener('change', onMotionChange)
    }
  }, [canvasRef, speed])
}
