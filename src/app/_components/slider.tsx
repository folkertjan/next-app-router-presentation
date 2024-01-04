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
import { createContext, useContext, useEffect, useState } from 'react'

const SliderContext = createContext<CarouselApi>(null)

export const useSliderContext = () => {
  return useContext(SliderContext)
}

interface SliderProps extends React.PropsWithChildren {
  className?: string
  startIndex?: number
}
export const Slider = ({
  children,
  className,
  startIndex = 0,
}: SliderProps) => {
  const [api, setApi] = useState<CarouselApi>(null)

  useKeydown('ArrowLeft', () => api?.scrollPrev())
  useKeydown('ArrowRight', () => api?.scrollNext())

  useEffect(() => {
    if (!api) return

    const handleSelect = (eventApi: CarouselApi) => {
      const index = eventApi.selectedScrollSnap()
      window.history.replaceState(
        null,
        '',
        window.location.pathname + `?slide=${index}`,
      )
    }
    api.on('select', handleSelect)

    return () => {
      api?.off?.('select', handleSelect)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      className={cn('w-full h-full border rounded-lg border-muted', className)}
      opts={{
        startIndex,
        watchDrag: false,
      }}
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