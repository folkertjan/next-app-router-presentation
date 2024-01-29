import { fetchCloudflareInfo } from '@/lib/datalayer/cloudflare'
import { revalidateTag } from 'next/cache'

export const getNow = async (qs: string, tags: string[]) => {
  const data = await fetchCloudflareInfo(`test-revalidate-tag-${qs || ''}`, {
    next: { tags: tags.map((tag) => `test-revalidate-tag-${tag}`) },
  })

  return data?.ts ?? null
}

export const revalidateNowTag = (tag: string) =>
  revalidateTag(`test-revalidate-tag-${tag}`)
