'use client'

import { Card, CardContent } from '@/_shared-components/ui/card'
import { TypographyH4 } from '@/_shared-components/ui/typography'
import { useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import { Carousel, CarouselItem } from './carousel'

type HeroProps = {
  slides: number[]
}

export const Hero = ({ slides }: HeroProps) => {
  const x = useMotionValue(0)

  const slideRef = useRef<HTMLLIElement>(null)

  const paginate = (direction: number) => {
    const width = slideRef.current?.offsetWidth || 0
    const current = x.get()

    const max = slides.length - 1
    const min = 0

    if (direction === -1 && current <= min * width) return
    if (direction === 1 && current >= max * width) return

    x.set(current + direction * width)
  }

  const goTo = (slide: number) => {
    if (slide < 0 || slide >= slides.length) return

    const width = slideRef.current?.offsetWidth || 0
    x.set(slide * width)
  }

  return (
    <div>
      <div className="relative w-[60vw]">
        <Carousel x={x}>
          {slides.map((slide, index) => (
            <CarouselItem key={slide} ref={index === 0 ? slideRef : undefined}>
              <Card className="w-[60vw] h-[50svh]">
                <CardContent className="pt-4 grid place-content-center h-full">
                  <div className="" />
                  <TypographyH4>Card {slide}</TypographyH4>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>

        <button
          className="absolute top-1/2 left-8 -translate-y-1/2"
          onClick={() => paginate(-1)}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 left-auto right-8 -translate-y-1/2"
          onClick={() => paginate(1)}
        >
          Next
        </button>
      </div>

      <ul className="flex w-fit mx-auto gap-8 mt-4">
        {slides.map((slide, index) => (
          <li key={slide}>
            <button
              className="w-8 h-8 rounded-full bg-card grid place-content-center"
              onClick={() => goTo(index)}
            >
              {slide}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
