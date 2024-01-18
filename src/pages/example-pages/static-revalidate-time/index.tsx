import { ExampleStaticPage } from '@/components/scopes/static-page/example-static-page'
import { ExampleStaticPageRevalidateTime } from '@/components/scopes/static-page/example-static-page-revalidate-time'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { getLayoutDefault } from '@/pages-components/layout-default'
import { GetStaticProps } from 'next'

interface PageProps {
  cloudflare: string
  time: string
  revalidate: number
}

const Page = ({ cloudflare, time, revalidate }: PageProps) => {
  return (
    <ExampleStaticPageRevalidateTime
      revalidate={revalidate}
      cloudflare={cloudflare}
      time={time}
      suffix="Pages router"
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await fetchCloudflareInfo('pages-static-revalidate-time')

  if (!data || !data.ts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cloudflare: data.ts,
      time: new Date().toISOString(),
      revalidate: 30,
    },
    revalidate: 30,
  }
}

Page.getLayout = getLayoutDefault

export default Page
