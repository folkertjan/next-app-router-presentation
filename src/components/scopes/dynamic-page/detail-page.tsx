import { SyntaxHighlighter } from '@/components/elements/syntax-highlighter'
import {
  dynamicPageAppRouterDynamicParams,
  dynamicPageAppRouterRouteConfig,
  dynamicPageAppRouterSearchParams,
  dynamicPagePageRouter,
} from './codefiles'

export const DynamicPageDetailPage = () => {
  return (
    <>
      <h4>Pages router</h4>
      <p>
        In the pages router, you define a dynamic page by exporting function
        <code>getServerSideProps</code>. This also automatically unlocks using
        query parameters from context:
      </p>

      <SyntaxHighlighter document={dynamicPagePageRouter} />

      <h4>App router</h4>
      <p>
        In the app router, you define a dynamic page by:
        <ul>
          <li>Using query params</li>
          <li>
            Using dynamic route params ([id]) (without generateStaticParams)
          </li>
          <li>Using a custom route config</li>
        </ul>
      </p>

      <SyntaxHighlighter document={dynamicPageAppRouterSearchParams} />
      <SyntaxHighlighter document={dynamicPageAppRouterDynamicParams} />
      <SyntaxHighlighter document={dynamicPageAppRouterRouteConfig} />
    </>
  )
}
