'use client'

import { useEffect, useRef } from 'react'

import { Button } from '@/_shared-components/ui/button'
import { cn } from '@/_shared-lib/utils'
import { useInView } from 'framer-motion'

interface IframeProps {
  src: string
  className?: string
  frameClassName?: string
}
export const Iframe = ({ src, className, frameClassName }: IframeProps) => {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const reload = () => {
    if (!frameRef.current) return
    frameRef.current.setAttribute('src', src)
  }

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, {
    amount: 0.1,
  })

  useEffect(() => {
    if (!frameRef.current || !inView) return
    if (inView) {
      frameRef.current.setAttribute('src', src)
    }
  }, [inView, src])

  return (
    <div ref={ref} className={cn('flex relative w-full bg-muted', className)}>
      <Button className="absolute bottom-0 right-0" onClick={reload}>
        Reload frame
      </Button>
      <iframe
        ref={frameRef}
        src={src}
        className={cn(
          'flex-grow border rounded-md overflow-hidden bg-muted',
          frameClassName,
        )}
      />
    </div>
  )
}
