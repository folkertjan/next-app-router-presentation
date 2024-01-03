import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { TypographyH1 } from '@/components/ui/typography'

const Home = () => {
  return (
    <main className="h-screen px-16 py-16 lg:py-24 lg:px-20 flex flex-col items-center justify-center">
      <Carousel className="w-full h-full flex flex-col justify-center border rounded-lg border-muted">
        <CarouselContent>
          <CarouselItem key={1}>
            <div className="flex flex-col items-center p-6 gap-4">
              <TypographyH1 asChild className="text-center">
                <h2>I am a title</h2>
              </TypographyH1>
              <Button>I am a button</Button>
            </div>
          </CarouselItem>

          <CarouselItem key={2}>
            <div className="flex flex-col items-center p-6 gap-4">
              <TypographyH1 asChild className="text-center">
                <h2>I am a second title</h2>
              </TypographyH1>
              <Button>I am a button</Button>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  )
}

export default Home
