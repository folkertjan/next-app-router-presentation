import { ExampleStaticPage } from '@/components/scopes/static-page/example-static-page'
import { ExampleStaticPageRevalidateOnDemand } from '@/components/scopes/static-page/example-static-page-revalidate-on-demand'
import { ExampleStaticPageRevalidateTime } from '@/components/scopes/static-page/example-static-page-revalidate-time'
import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { getLayoutDefault } from '@/pages-components/layout-default'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

interface PageProps {
  cloudflare: string
  time: string
}

const Page = ({ cloudflare, time }: PageProps) => {
  const router = useRouter()

  const handleRevalidate = async () => {
    const res = await fetch(
      `/api/revalidate/?path=/example-pages/static-revalidate-on-demand`,
      {
        method: 'POST',
      },
    )

    if (!res.ok) {
      alert('Failed to revalidate')
      return
    }

    router.reload()
  }
  return (
    <ExampleStaticPageRevalidateOnDemand
      onButtonClick={handleRevalidate}
      cloudflare={cloudflare}
      time={time}
      suffix="Pages router"
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await fetchCloudflareInfo('pages-static-revalidate-on-demand')

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
