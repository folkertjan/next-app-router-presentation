'use client'

import { ExampleStaticPageRevalidateOnDemand } from '@/components/scopes/static-page/example-static-page-revalidate-on-demand'
import { useRouter } from 'next/navigation'

interface PageProps {
  cloudflare: string
  suffix: string
}

export const PageClient = ({ cloudflare, suffix }: PageProps) => {
  const router = useRouter()

  const handleClick = async () => {
    const res = await fetch(
      '/example-app/static-revalidate-on-demand/revalidate?path=/example-app/static-revalidate-on-demand',
      {
        method: 'POST',
      },
    )

    if (!res.ok) {
      alert('Failed to revalidate')
      return
    }

    router.refresh()
  }
  return (
    <ExampleStaticPageRevalidateOnDemand
      cloudflare={cloudflare}
      suffix={suffix}
      onButtonClick={handleClick}
    />
  )
}
