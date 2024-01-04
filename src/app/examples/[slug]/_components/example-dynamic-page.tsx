import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Example } from './example'
import { SyntaxHighlighter, syntaxDocument } from './syntax-highlighter'
import { Prose } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const ExampleDynamicPage = () => {
  return (
    <Example title="Dynamic Page">
      <Prose className="mt-8">
        <h4>Pages router</h4>
        <p>
          In the pages router, you define a dynamic page by exporting function
          <code>getServerSideProps</code>. This also automatically unlocks using
          query parameters from context:
        </p>

        <SyntaxHighlighter document={pageRouterOne} />

        <h4>App router</h4>
        <p>
          In the app router, you define a dynamic page by:
          <ul>
            <li>Using query params</li>
            <li>Using a custom route config</li>
          </ul>
        </p>

        <SyntaxHighlighter document={appRouterOne} />
        <SyntaxHighlighter document={appRouterTwo} />

        <h4>Side-by-side</h4>
        <ExampleDynamicPageSideBySide className="pt-4" />
      </Prose>
    </Example>
  )
}

interface ExampleDynamicPageSideBySideProps {
  className?: string
}
export const ExampleDynamicPageSideBySide = ({
  className,
}: ExampleDynamicPageSideBySideProps) => {
  return (
    <Tabs defaultValue="pages" className={className}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="pages">Pages</TabsTrigger>
        <TabsTrigger value="app-one">App - Query params</TabsTrigger>
        <TabsTrigger value="app-two">App - Custom config</TabsTrigger>
      </TabsList>
      <TabsContent value="pages">
        <SyntaxHighlighter document={pageRouterOne} />
        <Button asChild variant="secondary">
          <Link href="/examples/live/static">Live example</Link>
        </Button>
      </TabsContent>
      <TabsContent value="app-one">
        <SyntaxHighlighter document={appRouterOne} />
        <Button asChild variant="secondary">
          <Link href="/examples/live/dynamic-params">Live example</Link>
        </Button>
      </TabsContent>
      <TabsContent value="app-two">
        <SyntaxHighlighter document={appRouterTwo} />
        <Button asChild variant="secondary">
          <Link href="/examples/live/dynamic-config">Live example</Link>
        </Button>
      </TabsContent>
    </Tabs>
  )
}

const pageRouterOne = syntaxDocument`
  // pages/index.tsx
  // Route will now be re-build on every request

  const HomePage = ({ title }) => {
    return <div>{title}</div>
  }

  export const getServerSideProps = async ({ query: { q }}) => {
    const res = await fetch(
      \`https://this-returns-a-title.com?q=\${q}\`
    )
    const { title } = await res.json()

    return {
      props: {
        title
      },
    }
  }

  export default HomePage
`

const appRouterOne = syntaxDocument`
  // app/page.tsx
  // Route will now be re-build on every request

  const HomePage = async ({ searchParams: { q }}) => {
    const res = await fetch(
      \`https://this-returns-a-title.com?q=\${q}\`
    )
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`

const appRouterTwo = syntaxDocument`
  // app/page.tsx
  // Route will now be re-build on every request

  export const dynamic = 'force-dynamic'

  const HomePage = async () => {
    const res = await fetch(
      'https://this-returns-a-title.com'
    )
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`
