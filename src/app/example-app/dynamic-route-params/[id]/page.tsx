import { ExampleRouteParams } from '@/components/scopes/dynamic-page/example-route-params'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id?: string
  }
}

const Page = async ({ params: { id } }: PageProps) => {
  const data = await fetchCloudflareInfo('app-dynamic-route-params')

  if (!data) {
    return notFound()
  }

  return <ExampleRouteParams id={id} cloudflare={data.ts} suffix="App router" />
}

export default Page
