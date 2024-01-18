'use client'

import { LastBuild } from '@/components/elements/last-build'
import { Button } from '@/components/ui/button'
import { TypographyH1 } from '@/components/ui/typography'

interface ExampleStaticPageRevalidateOnDemandProps {
  cloudflare: string
  time?: string
  suffix: string
  onButtonClick: () => void
}

export const ExampleStaticPageRevalidateOnDemand = ({
  cloudflare,
  time,
  suffix,
  onButtonClick,
}: ExampleStaticPageRevalidateOnDemandProps) => {
  return (
    <>
      <LastBuild label="Page" time={time} />

      <TypographyH1>
        Example: Static - Revalidate on-demand - {suffix}
      </TypographyH1>

      <div className="mt-8">Cloudflare fetched timestamp: {cloudflare}</div>

      <Button className="mt-8" onClick={onButtonClick}>
        Revalidate me!
      </Button>
    </>
  )
}
