import { LastBuild } from '@/components/elements/last-build'
import { TypographyH1 } from '@/components/ui/typography'

interface ExampleSearchParamsProps {
  query?: string
  time?: string
  cloudflare: string
  suffix: string
}

export const ExampleSearchParams = ({
  query,
  time,
  cloudflare,
  suffix,
}: ExampleSearchParamsProps) => {
  return (
    <>
      <LastBuild label="Page" time={time} />

      <TypographyH1>Example: Search params - {suffix}</TypographyH1>

      <div className="mt-8">Query: {query}</div>
      <div className="mt-2">Cloudflare fetched timestamp: {cloudflare}</div>
    </>
  )
}
