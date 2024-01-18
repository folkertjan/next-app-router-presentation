import { ExampleRouteParams } from '@/components/scopes/dynamic-page/example-route-params'
import { ExampleSearchParams } from '@/components/scopes/dynamic-page/example-search-params'
import { ExampleStaticPage } from '@/components/scopes/static-page/example-static-page'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { getLayoutDefault } from '@/pages-components/layout-default'
import { GetServerSideProps } from 'next'

interface PageProps {
  query: string
  cloudflare: string
  time: string
}

const Page = ({ query, cloudflare, time }: PageProps) => {
  return (
    <ExampleSearchParams
      query={query}
      cloudflare={cloudflare}
      time={time}
      suffix="Pages router"
    />
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const data = await fetchCloudflareInfo('pages-dynamic-search-params')

  if (!data || !data.ts || typeof context.query.q !== 'string') {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      query: context.query.q,
      cloudflare: data.ts,
      time: new Date().toISOString(),
    },
  }
}

Page.getLayout = getLayoutDefault

export default Page
