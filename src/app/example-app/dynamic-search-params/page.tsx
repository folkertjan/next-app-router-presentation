import { ExampleSearchParams } from '@/components/scopes/dynamic-page/example-search-params'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { notFound } from 'next/navigation'

interface PageProps {
  searchParams: {
    q?: string
  }
}

const Page = async ({ searchParams: { q } = {} }: PageProps) => {
  const data = await fetchCloudflareInfo('app-dynamic-search-params')

  if (!data) {
    return notFound()
  }

  return (
    <ExampleSearchParams cloudflare={data.ts} query={q} suffix="App router" />
  )
}

export default Page
