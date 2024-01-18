import { LastBuild } from '@/components/elements/last-build'
import { TypographyH1 } from '@/components/ui/typography'

interface ExampleRouteParamsProps {
  id?: string
  time?: string
  cloudflare: string
  suffix: string
}

export const ExampleRouteParams = ({
  id,
  time,
  cloudflare,
  suffix,
}: ExampleRouteParamsProps) => {
  return (
    <>
      <LastBuild label="Page" time={time} />

      <TypographyH1>Example: Dynamic route params - {suffix}</TypographyH1>

      <div className="mt-8">ID: {id}</div>
      <div className="mt-2">Cloudflare fetched timestamp: {cloudflare}</div>
    </>
  )
}
