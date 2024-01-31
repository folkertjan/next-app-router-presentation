'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared-components/ui/carousel'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { type CarouselApi } from '@/shared-components/ui/carousel'
import { cn } from '@/lib/utils'
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import FocusLock from 'react-focus-lock'
import { useQueryParamControls } from '../_hooks/use-query-param-controls'
import { group } from 'console'
import { ScrollArea } from '@/shared-components/ui/scroll-area'

const SliderContext = createContext<CarouselApi>(null)

export const useSliderContext = () => {
  return useContext(SliderContext)
}

const PLUGINS = [WheelGesturesPlugin()]

interface SliderProps extends React.PropsWithChildren {
  className?: string
  startIndex?: number
}
export const Slider = ({
  children,
  className,
  startIndex: passedStartIndex = 0,
}: SliderProps) => {
  const [startIndex] = useState(passedStartIndex)
  const [api, setApi] = useState<CarouselApi>(null)

  const { setMany } = useQueryParamControls()

  useEffect(() => {
    if (!api) return

    const handleSelect = (eventApi: CarouselApi) => {
      const index = eventApi.selectedScrollSnap() as number
      setMany({
        slide: index.toString(),
      })
    }
    api.on('select', handleSelect)

    return () => {
      api?.off?.('select', handleSelect)
    }
  }, [api, setMany])

  return (
    <Carousel
      setApi={setApi}
      className={cn('w-full h-full border rounded-lg border-muted', className)}
      opts={{
        startIndex,
        watchDrag: false,
      }}
      plugins={PLUGINS}
    >
      <CarouselContent className="h-full" wrapperClassName="h-full">
        <SliderContext.Provider value={api}>
          {Children.map(children, (child, i) => {
            return cloneElement(child as React.ReactElement, {
              index: i,
            })
          })}
        </SliderContext.Provider>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  )
}

interface SliderSlideProps extends React.PropsWithChildren {
  index?: number
  parentRef?: React.RefObject<HTMLDivElement>
}

export const SliderSlide = ({ children, index }: SliderSlideProps) => {
  const [isActive, setIsActive] = useState(false)

  const api = useSliderContext()

  useEffect(() => {
    if (!api) return

    const handleSelect = (eventApi: CarouselApi) => {
      const activeIndex = eventApi.selectedScrollSnap() as number
      setIsActive(activeIndex === index)
    }
    api.on('select', handleSelect)
    handleSelect(api)

    return () => {
      api?.off?.('select', handleSelect)
    }
  }, [api, index])

  return (
    <CarouselItem
      className="w-full h-full"
      {...{ inert: isActive ? undefined : '' }}
    >
      <FocusLock
        disabled={!isActive}
        group="slider"
        autoFocus={false}
        className="w-full h-full flex flex-col justify-center"
      >
        <ScrollArea>{children}</ScrollArea>
      </FocusLock>
    </CarouselItem>
  )
}
