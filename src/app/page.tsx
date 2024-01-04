import { Slider, SliderSlide } from './_components/slider'
import { StaticPage, StaticPageTwo } from './_components/slides/static-page'
import { Intro } from './_components/slides/intro'
import { DynamicPage, DynamicPageTwo } from './_components/slides/dynamic-page'
import { Layout, LayoutTwo } from './_components/slides/layouts'

const SLIDES = [
  Intro,
  StaticPage,
  StaticPageTwo,
  DynamicPage,
  DynamicPageTwo,
  Layout,
  LayoutTwo,
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
        {SLIDES.map((SlideContent, index) => (
          <SliderSlide key={index}>
            <SlideContent index={index} />
          </SliderSlide>
        ))}
      </Slider>
    </main>
  )
}

export default HomePage
