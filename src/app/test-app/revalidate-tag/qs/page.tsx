import Link from 'next/link'
import { getNow } from '../fetcher'
import { RevalidateTag } from '../revalidate-tag'
import { Boundary } from '../boundary'

const TAG = 'three'

const Page = () => {
  const now = getNow('qs', [TAG])

  return (
    <Boundary>
      Page QS: {now}
      <div>
        <Link href="/test-app/revalidate-tag/">Page No QS</Link>
      </div>
      <RevalidateTag tag={TAG} />
    </Boundary>
  )
}

export default Page
