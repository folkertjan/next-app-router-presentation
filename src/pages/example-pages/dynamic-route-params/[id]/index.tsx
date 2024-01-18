import { ExampleRouteParams } from '@/components/scopes/dynamic-page/example-route-params'
import { ExampleStaticPage } from '@/components/scopes/static-page/example-static-page'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { getLayoutDefault } from '@/pages/_components/layout-default'
import { GetServerSideProps } from 'next'

interface PageProps {
  id: string
  cloudflare: string
  time: string
}

const Page = ({ id, cloudflare, time }: PageProps) => {
  return (
    <ExampleRouteParams
      id={id}
      cloudflare={cloudflare}
      time={time}
      suffix="Pages router"
    />
  )
}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  { id: string }
> = async (context) => {
  const data = await fetchCloudflareInfo('pages-dynamic-route-params')

  if (!data || !data.ts || typeof context.params?.id !== 'string') {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      id: context.params.id,
      cloudflare: data.ts,
      time: new Date().toISOString(),
    },
  }
}

Page.getLayout = getLayoutDefault

export default Page
