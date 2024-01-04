import {
  TypographyBlockQuote,
  TypographyH1,
  TypographyH3,
} from '@/components/ui/typography'
import { SlideProps } from './types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ExampleDynamicPageSideBySide } from '@/app/examples/[slug]/_components/example-dynamic-page'

export const DynamicPage = (_: SlideProps) => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h2>Dynamic page</h2>
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

export const DynamicPageTwo = (_: SlideProps) => {
  return (
    <div className="h-full p-2 pt-4 flex flex-col items-center justify-start relative">
      <TypographyH3
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h3>Dynamic page: Side-by-side</h3>
      </TypographyH3>

      <ExampleDynamicPageSideBySide
        syncUrl
        className="mt-6 w-full md:w-4/5 xl:w-3/5"
      />

      <div className="absolute top-2 right-2">
        <Button asChild variant="secondary">
          <Link href="/examples/dynamic-page">More info</Link>
        </Button>
      </div>
    </div>
  )
}
