import { Button } from '@/components/ui/button'
import { Refresh } from '../_components/refresh'

export const dynamic = 'force-dynamic'

const TestPage = () => {
  const now = new Date().toLocaleTimeString()

  return (
    <div>
      <h1>Test Page</h1>
      <p>Current time: {now}</p>

      <Button asChild variant="secondary">
        <Refresh />
      </Button>
    </div>
  )
}

export default TestPage
