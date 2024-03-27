'use client'

import { useRef } from 'react'

import { Button } from '@/_shared-components/ui/button'
import { cn } from '@/_shared-lib/utils'

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
  return (
    <div className={cn('flex relative w-full', className)}>
      <Button className="absolute bottom-0 right-0" onClick={reload}>
        Reload frame
      </Button>
      <iframe
        ref={frameRef}
        src={src}
        className={cn(
          'flex-grow border bg-slate-800 border-slate-200 rounded-md overflow-hidden',
          frameClassName,
        )}
      />
    </div>
  )
}
