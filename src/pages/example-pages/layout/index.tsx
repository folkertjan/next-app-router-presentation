import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { getLayoutLayout } from '@/pages/_components/layout-layout'

interface PageProps {
  cloudflare: string
  time: string
}

const Page = ({}: PageProps) => {
  return <div>Example page</div>
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
