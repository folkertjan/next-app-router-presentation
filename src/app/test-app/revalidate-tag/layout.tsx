import { Boundary } from './boundary'
import { getNow } from './fetcher'
import { RevalidateTag } from './revalidate-tag'

const TAG = 'one'

const Layout = async ({ children }: React.PropsWithChildren) => {
  const now = await getNow('', [TAG])

  if (!now) return null
  return (
    <Boundary>
      layout: {now}
      <RevalidateTag tag={TAG} />
      <div>{children}</div>
    </Boundary>
  )
}
export default Layout
