import Link from 'next/link'
import { getNow } from './fetcher'
import { RevalidateTag } from './revalidate-tag'
import { Boundary } from './boundary'

const TAG = 'two'

const Page = () => {
  const now = getNow('', [TAG])

  return (
    <Boundary>
      Page no QS: {now}{' '}
      <div>
        <Link href="/test-app/revalidate-tag/qs/">Page with QS</Link>
      </div>
      <RevalidateTag tag={TAG} />
    </Boundary>
  )
}

export default Page
