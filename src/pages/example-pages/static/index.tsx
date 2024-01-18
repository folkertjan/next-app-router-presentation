import { ExampleStaticPage } from '@/components/scopes/static-page/example-static-page'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { getLayoutDefault } from '@/pages-components/layout-default'
import { GetStaticProps } from 'next'

interface PageProps {
  cloudflare: string
  time: string
}

const Page = ({ cloudflare, time }: PageProps) => {
  return (
    <ExampleStaticPage
      cloudflare={cloudflare}
      time={time}
      suffix="Pages router"
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await fetchCloudflareInfo('pages-static')

  if (!data || !data.ts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cloudflare: data.ts,
      time: new Date().toISOString(),
    },
  }
}

Page.getLayout = getLayoutDefault

export default Page
