import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { getLayoutLayout } from '@/pages-components/layout-layout'

interface PageProps {
  cloudflare: string
  time: string
}

const Page = ({ cloudflare, time }: PageProps) => {
  return <div>Example page: another</div>
}

export const getStaticProps = async () => {
  const data = await fetchCloudflareInfo('pages-layout')

  if (!data || !data.ts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      time: new Date().toISOString(),
      cloudflare: data.ts,
    },
  }
}

Page.getLayout = getLayoutLayout

export default Page
