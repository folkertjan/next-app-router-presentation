import { SyntaxHighlighter } from '@/components/elements/syntax-highlighter'
import {
  apiAppRouterGet,
  apiAppRouterGetConfig,
  apiAppRouterGetDynamicFunction,
  apiAppRouterGetRequest,
  apiPagesRouterGet,
  apiPagesRouterGetCache,
} from './codefiles'

export const ApiDetailPage = () => {
  return (
    <>
      <h4>Pages router</h4>
      <p>
        In the pages router, you define an api route by placing a file in the
        `pages/api` folder. This file default exports a function that is used as
        the route handler.
      </p>
      <p>
        By default, all api routes are not cached. You can change this by
        setting the `'Cache-Control'` header in the response. For example:
      </p>
      <h5>Not cached:</h5>
      <SyntaxHighlighter document={apiPagesRouterGet} />

      <h5>Cached:</h5>
      <SyntaxHighlighter document={apiPagesRouterGetCache} />

      <h4>App router</h4>
      <p>
        In the app router, you define an api route by using a `route.ts` file.
        It can be placed anywhere in the project. This file exports a function
        that is used as the request method, e.g. `GET`, `POST`, `PUT`, `DELETE`.
      </p>
      <p>
        By default, GET api handlers are cached indefinitely. You can change
        this by setting the route config or using the passed request object or
        dynamic functions (`cookies()`, `headers()`).
      </p>
      <h5>Cached:</h5>
      <SyntaxHighlighter document={apiAppRouterGet} />

      <h5>Not cached:</h5>
      <SyntaxHighlighter document={apiAppRouterGetConfig} />
      <SyntaxHighlighter document={apiAppRouterGetRequest} />
      <SyntaxHighlighter document={apiAppRouterGetDynamicFunction} />
    </>
  )
}
