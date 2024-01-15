import { SyntaxHighlighter } from '@/components/elements/syntax-highlighter'
import { staticPageAppRouter, staticPagePageRouter } from './codefiles'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const StaticPageDetailPage = () => {
  return (
    <>
      <h4>Pages router</h4>
      <p>
        In the pages router, you define a static page by exporting function
        <code>getStaticProps</code>:
      </p>
      <SyntaxHighlighter document={staticPagePageRouter} />

      <Link href="/example-pages/static">
        <Button variant="secondary">Live example (pages router)</Button>
      </Link>

      <h4>App router</h4>
      <p>
        In the app router, you define a static page by simply not using any
        custom route config or query params. You can fetch data by marking a
        server-component as <code>async</code>. In the function body you can
        fetch anything you want (fetch, ORM function calls, ai libraries...)
      </p>

      <SyntaxHighlighter document={staticPageAppRouter} />

      <Link href="/example-app/static">
        <Button variant="secondary">Live example (app router)</Button>
      </Link>
    </>
  )
}
