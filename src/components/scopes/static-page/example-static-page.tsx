import { LastBuild } from '@/components/elements/last-build'
import { TypographyH1 } from '@/components/ui/typography'

interface ExampleStaticPageProps {
  cloudflare: string
  time?: string
  suffix: string
}

export const ExampleStaticPage = ({
  cloudflare,
  time,
  suffix,
}: ExampleStaticPageProps) => {
  return (
    <>
      <LastBuild label="Page" time={time} />

      <TypographyH1>Example: Static - {suffix}</TypographyH1>

      <div className="mt-8">Cloudflare fetched timestamp: {cloudflare}</div>
    </>
  )
}
