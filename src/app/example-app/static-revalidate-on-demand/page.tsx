import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { notFound } from 'next/navigation'
import { PageClient } from './page-client'

const Page = async () => {
  const data = await fetchCloudflareInfo('app-static-revalidate-on-demand')

  if (!data) {
    return notFound()
  }

  return <PageClient cloudflare={data.ts} suffix="App router" />
}

export default Page
