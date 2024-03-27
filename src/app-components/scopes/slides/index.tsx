import { syntaxDocument } from '@/app-components/elements/syntax-highlighter'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/_shared-components/ui/avatar'
import {
  TypographyBlockQuote,
  TypographyH1,
  TypographyP,
} from '@/_shared-components/ui/typography'
import { CodeSlide, FrameSlide, ImageSlide, TextSlide } from './variants'

import screen1 from '@/public/screens/screen-1.png'

const SlideIntro = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Next App Router Shenanigans</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <h3>Episode X: Title</h3>
      </TypographyBlockQuote>

      <div className="inline-flex items-center justify-center mt-16">
        <Avatar>
          <AvatarImage
            src="https://github.com/folkertjan.png"
            alt="@folkertjan"
          />
          <AvatarFallback>FJ</AvatarFallback>
        </Avatar>
        <TypographyP className="flex-grow text-center text-balance md:w-3/5 ml-2">
          By Folkert
        </TypographyP>
      </div>
    </div>
  )
}

const codeSlideCodeString = syntaxDocument`
  interface HomePageProps {
    products: Product[]
  }

  const Home = ({ products }: HomePageProps) => {
    return (        
      <ProductList products={products} />
    )
  }

  export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const products = await fetchProducts({ limit: 3 })

    return {
      props: { products },
    }
  }

  export default Home
`

const CodeSlideExample = () => (
  <CodeSlide title={'My code slide'} document={codeSlideCodeString} />
)

const FrameSlideExample = () => (
  <FrameSlide title={'My frame slide'} src="/pages/home" />
)

const ImageSlideExample = () => (
  <ImageSlide src={screen1} title={'My image slide'} />
)

const TextSlideExample = () => (
  <TextSlide title={'My text slide'}>
    <p>Some text here</p>
  </TextSlide>
)

export const slides = [
  SlideIntro,
  CodeSlideExample,
  FrameSlideExample,
  ImageSlideExample,
  TextSlideExample,
]
