import { SyntaxHighlighter } from '@/components/elements/syntax-highlighter'
import {
  staticPageAppRouter,
  staticPageAppRouterStaticRevalidateOnDemand,
  staticPageAppRouterStaticRevalidateTime,
  staticPagePageRouter,
  staticPagePageRouterRevalidateOnDemand,
  staticPagePageRouterRevalidateTime,
} from './codefiles'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const StaticPageDetailPage = () => {
  return (
    <>
      <h3>General</h3>
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

      <hr></hr>

      <h3>Revalidation</h3>

      <h4>Pages router</h4>
      <p>
        In the pages router, a static route can be revalidated in two ways:
        <ul>
          <li>Time-based revalidation</li>
          <li>On-demand (full route) revalidation</li>
        </ul>
      </p>

      <p>
        <b>Time based revalidation</b>
        <br></br>
        Configured in the `getStaticProps()` function of a route:
      </p>

      <SyntaxHighlighter document={staticPagePageRouterRevalidateTime} />

      <Link href="/example-pages/static-revalidate-time">
        <Button variant="secondary">Live example (pages router)</Button>
      </Link>

      <p>
        <b>On-demand (full route) revalidation</b>
        <br></br>
        By calling `res.revalidate` function in an api endpoint:
      </p>

      <SyntaxHighlighter document={staticPagePageRouterRevalidateOnDemand} />

      <Link href="/example-pages/static-revalidate-on-demand">
        <Button variant="secondary">Live example (pages router)</Button>
      </Link>

      <h4>App router</h4>

      <p>
        In the app router, a cached <i>route</i> can be revalidated in two ways:
        <ul>
          <li>Time-based revalidation</li>
          <li>On-demand (full route) revalidation</li>
        </ul>
      </p>

      <p>
        <b>Time based revalidation</b>
        <br></br>
        Custom route config: `revalidate`
      </p>

      <SyntaxHighlighter document={staticPageAppRouterStaticRevalidateTime} />

      <Link href="/example-app/static-revalidate-time">
        <Button variant="secondary">Live example (app router)</Button>
      </Link>

      <p>
        <b>On-demand (full route) revalidation</b>
        <br></br>
        By calling `revalidatePath` function in an api endpoint:
      </p>

      <SyntaxHighlighter
        document={staticPageAppRouterStaticRevalidateOnDemand}
      />

      <Link href="/example-app/static-revalidate-on-demand">
        <Button variant="secondary">Live example (app router)</Button>
      </Link>
    </>
  )
}
