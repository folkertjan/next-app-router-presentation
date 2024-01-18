import { ExampleStaticPageRevalidateTime } from '@/components/scopes/static-page/example-static-page-revalidate-time'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { notFound } from 'next/navigation'

export const revalidate = 30

const Page = async () => {
  const data = await fetchCloudflareInfo('app-static')

  if (!data) {
    return notFound()
  }

  return (
    <ExampleStaticPageRevalidateTime
      cloudflare={data.ts}
      suffix="App Router"
      revalidate={30}
    />
  )
}

export default Page
