import { LastBuild } from '@/components/elements/last-build'
import { TypographyH1 } from '@/components/ui/typography'

interface ExampleRouteConfigProps {
  cloudflare: string
  suffix: string
}

export const ExampleRouteConfig = ({
  suffix,
  cloudflare,
}: ExampleRouteConfigProps) => {
  return (
    <>
      <LastBuild label="Page" />

      <TypographyH1>Example: Route config - {suffix}</TypographyH1>

      <div className="mt-8">Cloudflare fetched timestamp: {cloudflare}</div>
    </>
  )
}
