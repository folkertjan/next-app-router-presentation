import { Button } from '@/components/ui/button'
import { Refresh } from '../_components/refresh'

interface TestPageProps {
  searchParams?: {
    q?: string
  }
}

const TestPage = ({ searchParams: { q } = {} }: TestPageProps) => {
  const now = new Date().toLocaleTimeString()

  return (
    <div>
      <h1>Test Page</h1>
      <p>Query: {q}</p>
      <p>Current time: {now}</p>
      <Button asChild variant="secondary">
        <Refresh />
      </Button>
    </div>
  )
}

export default TestPage
