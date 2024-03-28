import { Hero } from './_components/hero'

const SLIDES = Array.from({ length: 5 }, (_, i) => i + 1)

const HeroPage = () => {
  return (
    <main className="grid place-content-center min-h-svh text-xl">
      <div>
        <Hero slides={SLIDES} />
      </div>
    </main>
  )
}

export default HeroPage
