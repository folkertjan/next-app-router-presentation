import { Button } from '@/components/ui/button'
import { Refresh } from './refresh'

export const Example = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {children}
      <Button asChild variant="secondary" className="mt-8">
        <Refresh />
      </Button>
    </>
  )
}
