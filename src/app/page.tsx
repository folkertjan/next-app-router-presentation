import { Slider, SliderSlide } from './_components/slider'
import { Intro } from './_components/slides/intro'
import { ServerClient } from './_components/slides/server-client'

const SLIDES = [Intro, ServerClient]

const Home = () => {
  return (
    <main className="h-screen px-16 py-16 lg:py-24 lg:px-20 flex flex-col items-center justify-center">
      <Slider>
        {SLIDES.map((SlideContent, index) => (
          <SliderSlide key={index}>
            <SlideContent index={index} />
          </SliderSlide>
        ))}
      </Slider>
    </main>
  )
}

export default Home
