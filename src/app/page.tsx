import { Slider, SliderSlide } from './_components/slider'
import { SlideIntro } from '@/components/scopes/intro/slides'
import {
  SlideStaticPage,
  SlideStaticPageTwo,
} from '@/components/scopes/static-page/slides'
import {
  SlideDynamicPage,
  SlideDynamicPageTwo,
} from '@/components/scopes/dynamic-page/slides'
import { SlideLayout, SlideLayoutTwo } from '@/components/scopes/layout/slides'

const SLIDES = [
  SlideIntro,
  SlideStaticPage,
  SlideStaticPageTwo,
  SlideDynamicPage,
  SlideDynamicPageTwo,
  SlideLayout,
  SlideLayoutTwo,
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
