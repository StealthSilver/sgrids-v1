'use client'

import React, { useRef } from 'react'
import { useStripeWave, type StripeWaveOptions } from '../hooks/useStripeWave'

export interface StripeWaveBackgroundProps extends StripeWaveOptions {
  className?: string
}

const StripeWaveBackground: React.FC<StripeWaveBackgroundProps> = ({
  className = '',
  speed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useStripeWave(canvasRef, { speed })

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 top-1/2 z-[1] w-full ${className}`}
    />
  )
}

export default StripeWaveBackground
