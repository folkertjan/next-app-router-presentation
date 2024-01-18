import {
  TypographyBlockQuote,
  TypographyH1,
  TypographyH3,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const SlideApi = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h2>API Routes</h2>
      </TypographyH1>
      {/* <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-md mx-auto mt-8"
      >
        <h3>Blazingly fast</h3>
      </TypographyBlockQuote> */}

      <Button asChild variant="secondary" className="mt-10">
        <Link href="/details/api">Details</Link>
      </Button>
    </div>
  )
}
