import {
  TypographyBlockQuote,
  TypographyH1,
  TypographyH3,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const SlideLayout = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h2>Layouts</h2>
      </TypographyH1>
      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-md mx-auto mt-8"
      >
        <h3>Blazingly fast</h3>
      </TypographyBlockQuote>
    </div>
  )
}

export const SlideLayoutTwo = () => {
  return (
    <div className="h-full p-2 pt-4 flex flex-col items-center justify-start relative">
      <TypographyH3
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h3>Layout: Side-by-side</h3>
      </TypographyH3>

      <div>Examples</div>

      <div className="absolute top-2 right-2">
        <Button asChild variant="secondary">
          <Link href="/details/layout">More info</Link>
        </Button>
      </div>
    </div>
  )
}
