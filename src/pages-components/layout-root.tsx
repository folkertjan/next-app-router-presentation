import { Button } from '@/components/ui/button'
import { BackButton } from './back-button'

interface LayoutRootProps extends React.PropsWithChildren {}

export const LayoutRoot = ({ children }: LayoutRootProps) => {
  // fetch data client side here or rely on props
  return (
    <main className="min-h-screen px-16 py-16 lg:px-20">
      <div className="fixed flex items-center left-0 top-0 w-full p-4 lg:p-6 bg-background border-b">
        <Button asChild variant="secondary">
          <BackButton>Back</BackButton>
        </Button>
      </div>

      {children}
    </main>
  )
}

export const getLayoutRoot = (page: any, props: LayoutRootProps) => {
  return <LayoutRoot {...props}>{page}</LayoutRoot>
}
