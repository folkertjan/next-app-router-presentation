import {
  TypographyBlockQuote,
  TypographyH1,
  TypographyH3,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const SlideDynamicPage = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h2>Dynamic page</h2>
      </TypographyH1>
      {/* <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-md mx-auto mt-8"
      >
        <h3>Blazingly fast</h3>
      </TypographyBlockQuote> */}

      <Button asChild variant="secondary" className="mt-10">
        <Link href="/details/dynamic-page">Details</Link>
      </Button>
    </div>
  )
}
