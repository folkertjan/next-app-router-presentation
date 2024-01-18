import { LastBuild } from '@/components/elements/last-build'
import { TypographyH1 } from '@/components/ui/typography'

interface ExampleStaticPageRevalidateTimeProps {
  cloudflare: string
  time?: string
  suffix: string
  revalidate: number
}

export const ExampleStaticPageRevalidateTime = ({
  cloudflare,
  time,
  suffix,
  revalidate,
}: ExampleStaticPageRevalidateTimeProps) => {
  return (
    <>
      <LastBuild label="Page" time={time} />

      <TypographyH1>
        Example: Static - Revalidate time (every {revalidate} seconds)- {suffix}
      </TypographyH1>

      <div className="mt-8">Cloudflare fetched timestamp: {cloudflare}</div>
    </>
  )
}
