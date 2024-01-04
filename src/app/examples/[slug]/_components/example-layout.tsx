import { Example } from './example'
import { SyntaxHighlighter, syntaxDocument } from './syntax-highlighter'
import { Prose } from '@/components/ui/typography'
import { CodeTabs, CodeTabsTab } from '@/app/_components/code-tabs'

export const ExampleLayout = () => {
  return (
    <Example title="Layout">
      <Prose className="mt-8">
        <h4>Pages router</h4>
        <p>
          In the pages router, you define a layout by exporting a custom
          function on the page component. This is called the "layout pattern"
        </p>
        <p>
          You cannot fetch data in this layout - data needs to be fetched in a
          page's <code>getServerSideProps</code> or <code>getStaticProps</code>{' '}
          function, or fetched client-side using something like{' '}
          <code>useSWR</code>.
        </p>
        <p>
          <a href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#per-page-layouts">
            Docs
          </a>
        </p>

        <SyntaxHighlighter document={pageRouterOne} />
        <SyntaxHighlighter document={pageRouterTwo} />
        <SyntaxHighlighter document={pageRouterThree} />

        <h4>App router</h4>
        <p>
          In the app router, you define a layout by placing a{' '}
          <code>layout.tsx</code> file adjacent to pages that should apply this
          layout.
        </p>
        <p>Your file structure will look similar to this:</p>
        <pre>
          app/
          <br /> page.tsx
          <br /> layout.tsx
        </pre>

        <SyntaxHighlighter document={appRouterOne} />
        <SyntaxHighlighter document={appRouterTwo} />

        <h4>Side-by-side</h4>
        <ExampleLayoutSideBySide className="pt-4" />
      </Prose>
    </Example>
  )
}

interface ExampleLayoutSideBySideProps {
  className?: string
  syncUrl?: boolean
}
export const ExampleLayoutSideBySide = ({
  className,
  syncUrl,
}: ExampleLayoutSideBySideProps) => {
  return (
    <CodeTabs
      syncUrl={syncUrl}
      tabs={['Pages: Layout', 'Pages: Page', 'App: Layout', 'App: Page']}
      className={className}
    >
      <CodeTabsTab>
        <SyntaxHighlighter document={pageRouterOne} />
      </CodeTabsTab>

      <CodeTabsTab>
        <SyntaxHighlighter document={pageRouterTwo} />
      </CodeTabsTab>

      <CodeTabsTab>
        <SyntaxHighlighter document={appRouterOne} />
      </CodeTabsTab>

      <CodeTabsTab>
        <SyntaxHighlighter document={appRouterTwo} />
      </CodeTabsTab>
    </CodeTabs>
  )
}

const pageRouterOne = syntaxDocument`
  // components/layout.tsx

  const Layout = ({ title, children }) => {
    // fetch data client side here or rely on props
    return (
      <div>
        <h1>My app - {title}</h1>
        {children}
      </div>
    )
  }

  export const getLayout = (page, props) => {
    return <Layout {...props}>{page}</Layout>
  }
`

const pageRouterTwo = syntaxDocument`
  // pages/index.tsx

  import { getLayout } from '@/components/layout'

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

  HomePage.getLayout = getLayout

  export default HomePage
`

const pageRouterThree = syntaxDocument`
  // pages/_app.tsx

  const App = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page)
   
    return getLayout(<Component {...pageProps} />, pageProps)
  }

  export default App
`

const appRouterOne = syntaxDocument`
// app/layout.tsx
// (!) layout and pages can not pass props to eachother

const Layout = async ({ children }) => {
  const res = await fetch('https://this-returns-a-title.com')
  const { title } = await res.json()

  return (
    <div>
      <h1>My app - {title}</h1>
      {children}
    </div>
  )
}

export default Layout
`

const appRouterTwo = syntaxDocument`
  // app/page.tsx
  // (!) layout and pages can not pass props to eachother

  const HomePage = async () => {
    // Cached return, as layout already fetched this
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`
