import { Button } from '@/components/ui/button'
import { Refresh } from '../_components/refresh'
import { Time } from '../_components/time'
import { TypographyH1 } from '@/components/ui/typography'

export const dynamic = 'force-static'

const TestPage = () => {
  return (
    <>
      <div className="pb-4 border-b mt-4 mb-8">
        Page: <Time />
      </div>

      <TypographyH1>Example: Static</TypographyH1>

      <div className="mt-8"></div>

      <Button asChild variant="secondary" className="mt-8">
        <Refresh />
      </Button>
    </>
  )
}

export default TestPage
