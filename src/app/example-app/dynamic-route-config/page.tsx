import { ExampleRouteConfig } from '@/components/scopes/dynamic-page/example-route-config'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

const Page = async () => {
  const data = await fetchCloudflareInfo('app-dynamic-route-config')

  if (!data) {
    return notFound()
  }

  return <ExampleRouteConfig suffix="App router" cloudflare={data.ts} />
}

export default Page
