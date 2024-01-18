import { ExampleStaticPageRevalidateTime } from '@/components/scopes/static-page/example-static-page-revalidate-time'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { notFound } from 'next/navigation'

export const revalidate = 5

const Page = async () => {
  const data = await fetchCloudflareInfo('app-static-revalidate-time')

  if (!data) {
    return notFound()
  }

  return (
    <ExampleStaticPageRevalidateTime
      cloudflare={data.ts}
      suffix="App Router"
      revalidate={5}
    />
  )
}

export default Page
