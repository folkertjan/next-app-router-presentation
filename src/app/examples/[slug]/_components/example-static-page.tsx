import { Example } from './example'
import { SyntaxHighlighter, syntaxDocument } from './syntax-highlighter'
import { Prose } from '@/components/ui/typography'
import { CodeTabs, CodeTabsTab } from '@/app/_components/code-tabs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const ExampleStaticPage = () => {
  return (
    <Example title="Static Page: Pages router">
      <Prose className="mt-8">
        <h4>Pages router</h4>
        <p>
          In the pages router, you define a static page by exporting function
          <code>getStaticProps</code>:
        </p>

        <SyntaxHighlighter document={pageRouterOne} />

        <h4>App router</h4>
        <p>
          In the app router, you define a static page by simply not using any
          custom route config or query params. You can fetch data by marking a
          server-component as <code>async</code>. In the function body you can
          fetch anything you want (fetch, ORM function calls, ai libraries...)
        </p>
        <SyntaxHighlighter document={appRouterOne} />

        <h4>Side-by-side</h4>
        <ExampleStaticPageSideBySide className="pt-4" />
      </Prose>
    </Example>
  )
}

interface ExampleStaticPageSideBySideProps {
  className?: string
  syncUrl?: boolean
}
export const ExampleStaticPageSideBySide = ({
  className,
  syncUrl,
}: ExampleStaticPageSideBySideProps) => {
  return (
    <CodeTabs syncUrl={syncUrl} tabs={['Pages', 'App']} className={className}>
      <CodeTabsTab>
        <SyntaxHighlighter document={pageRouterOne} />
      </CodeTabsTab>

      <CodeTabsTab>
        <SyntaxHighlighter document={appRouterOne} />
        <Button asChild variant="secondary">
          <Link href="/examples/live/static">Live example</Link>
        </Button>
      </CodeTabsTab>
    </CodeTabs>
  )
}

const pageRouterOne = syntaxDocument`
  // pages/index.tsx
  // Cached untill next re-deploy

  const HomePage = ({ title }) => {
    return <div>{title}</div>
  }

  export const getStaticProps = async () => {
    const res = await fetch('https://this-returns-a-title.com')
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
  // Cached forever (!)

  const HomePage = async () => {
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`
