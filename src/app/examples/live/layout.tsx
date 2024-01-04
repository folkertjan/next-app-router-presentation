import { BackButton } from '@/app/_components/back-button'
import { Time } from './_components/time'
import { Button } from '@/components/ui/button'

interface LayoutProps extends React.PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen px-16 py-16 lg:px-20">
      <div className="fixed flex items-center left-0 top-0 w-full p-4 lg:p-6 bg-background border-b">
        <Button asChild variant="secondary">
          <BackButton>Back</BackButton>
        </Button>
      </div>

      <div className="pt-16 pb-4 border-b">
        Layout: <Time />
      </div>

      <div>{children}</div>
    </main>
  )
}

export default Layout
