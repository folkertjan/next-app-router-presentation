import { SyntaxHighlighter } from '@/components/elements/syntax-highlighter'
import {
  layoutAppRouterLayout,
  layoutAppRouterPage,
  layoutPageRouterApp,
  layoutPageRouterLayout,
  layoutPageRouterPage,
} from './codefiles'

export const LayoutDetailPage = () => {
  return (
    <>
      <h4>Pages router</h4>
      <p>
        In the pages router, you define a layout by exporting a custom function
        on the page component. This is called the "layout pattern"
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

      <SyntaxHighlighter document={layoutPageRouterLayout} />
      <SyntaxHighlighter document={layoutPageRouterPage} />
      <SyntaxHighlighter document={layoutPageRouterApp} />

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

      <SyntaxHighlighter document={layoutAppRouterLayout} />
      <SyntaxHighlighter document={layoutAppRouterPage} />
    </>
  )
}
