'use client'
import useKeydown from '@buildinams/use-keydown'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { createContext, useContext, useState } from 'react'

const SliderContext = createContext<CarouselApi>(null)

export const useSliderContext = () => {
  return useContext(SliderContext)
}

interface SliderProps extends React.PropsWithChildren {
  className?: string
}
export const Slider = ({ children, className }: SliderProps) => {
  const [api, setApi] = useState<CarouselApi>(null)

  useKeydown('ArrowLeft', () => api?.scrollPrev())
  useKeydown('ArrowRight', () => api?.scrollNext())

  return (
    <Carousel
      setApi={setApi}
      className={cn('w-full h-full border rounded-lg border-muted', className)}
    >
      <CarouselContent className="h-full" wrapperClassName="h-full">
        <SliderContext.Provider value={api}>{children}</SliderContext.Provider>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  )
}

export const SliderSlide = ({ children }: React.PropsWithChildren) => {
  return (
    <CarouselItem className="w-full h-full flex flex-col justify-center">
      {children}
    </CarouselItem>
  )
}
