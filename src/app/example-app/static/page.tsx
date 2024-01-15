import { ExampleStaticPage } from '@/components/scopes/static-page/example-static-page'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { notFound } from 'next/navigation'

const Page = async () => {
  const data = await fetchCloudflareInfo('app-static')

  if (!data) {
    return notFound()
  }

  return <ExampleStaticPage cloudflare={data.ts} suffix="App router" />
}

export default Page
