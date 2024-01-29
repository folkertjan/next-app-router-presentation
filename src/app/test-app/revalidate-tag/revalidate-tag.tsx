import { revalidateNowTag } from './fetcher'

export const RevalidateTag = ({ tag }: { tag: string }) => {
  const revalidate = async () => {
    'use server'
    revalidateNowTag(tag)
  }
  return (
    <form>
      <button formAction={revalidate}>Revalidate {tag}</button>
    </form>
  )
}
