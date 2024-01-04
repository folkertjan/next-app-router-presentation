import { Button } from '@/components/ui/button'
import { Refresh } from '../_components/refresh'
import { TypographyH1 } from '@/components/ui/typography'
import { ComponentBuiltLastTime } from '../_components/time-group'

export const dynamic = 'force-static'

const TestPage = () => {
  return (
    <>
      <ComponentBuiltLastTime label="Page" />

      <TypographyH1>Example: Static</TypographyH1>

      <div className="mt-8"></div>

      <Button asChild variant="secondary" className="mt-8">
        <Refresh />
      </Button>
    </>
  )
}

export default TestPage
