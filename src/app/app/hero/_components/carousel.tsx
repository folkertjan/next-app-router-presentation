'use client'

import { m, useMotionValueEvent, type MotionValue } from 'framer-motion'
import { forwardRef, useRef } from 'react'

type CarouselProps = React.PropsWithChildren<{ x: MotionValue<number> }>

export const Carousel = ({ x, children }: CarouselProps) => {
  const ref = useRef<HTMLUListElement>(null)
  useMotionValueEvent(x, 'change', (latest) => {
    ref.current?.scrollTo({ left: latest, behavior: 'smooth' })
  })

  return (
    <ul
      ref={ref}
      className="grid grid-flow-col  overflow-x-auto snap-x snap-mandatory"
    >
      {children}
    </ul>
  )
}

type CarouselItemProps = React.PropsWithChildren

export const CarouselItem: React.ForwardRefExoticComponent<
  CarouselItemProps & React.RefAttributes<HTMLLIElement>
> = forwardRef(({ children }, ref) => {
  return (
    <li ref={ref} className="snap-start snap-always w-full">
      {children}
    </li>
  )
})
