import { Slider, SliderSlide } from './_components/slider'
import {
  SlideAppRouterCache,
  SlideAppRouterData,
  SlideIntro,
  SlidePagesRouterCache,
  SlidePagesRouterData,
} from '@/components/scopes/intro/slides'
import { SlideStaticPage } from '@/components/scopes/static-page/slides'
import { SlideDynamicPage } from '@/components/scopes/dynamic-page/slides'
import { SlideApi } from '@/components/scopes/api/slides'

const SLIDES = [
  SlideIntro,
  SlidePagesRouterData,
  SlidePagesRouterCache,
  SlideAppRouterData,
  SlideAppRouterCache,
  SlideStaticPage,
  SlideDynamicPage,
  SlideApi,
]

interface HomePageProps {
  searchParams?: {
    slide?: string
  }
}

const HomePage = ({ searchParams: { slide } = {} }: HomePageProps) => {
  const startIndex = slide ? parseInt(slide, 10) : 0
  return (
    <main className="h-screen px-16 py-4 lg:py-8 lg:px-16 flex flex-col items-center justify-center">
      <Slider startIndex={startIndex}>
        {SLIDES.map((Component, index) => (
          <SliderSlide key={index}>
            <Component />
          </SliderSlide>
        ))}
      </Slider>
    </main>
  )
}

export default HomePage
