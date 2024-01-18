import { syntaxDocument } from '@/components/elements/syntax-highlighter'

export const apiAppRouterGet = syntaxDocument`
  // app/some-path/route.ts
  // Cached forever (!)

  export const GET = () => {
    return Response.json(
      {
        message: 'hello from app router',
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  }
`

export const apiAppRouterGetConfig = syntaxDocument`
  // app/some-path/route.ts
  // Endpoint will now be re-run on every request
  
  export const dynamic = 'force-dynamic'

  export const GET = () => {
    return Response.json(
      {
        message: 'hello from app router',
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  }
`

export const apiAppRouterGetRequest = syntaxDocument`
  // app/some-path/route.ts
  // Endpoint will now be re-run on every request
  
  export const GET = (request: Request) => {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    return Response.json(
      {
        id,
        message: 'hello from app router',
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  }
`

export const apiAppRouterGetDynamicFunction = syntaxDocument`
  // app/some-path/route.ts
  // Endpoint will now be re-run on every request

  import { cookies } from 'next/headers'

  export const GET = () => {
    const cookieStore = cookies()

    return Response.json(
      {
        cookie: cookieStore.get('nextjs') ?? 'no cookie',
        message: 'hello from app router',
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  }
`

export const apiPagesRouterGet = syntaxDocument`
  // app/api/some-name.ts
  // Endpoint will be re-run on every request

  import type { NextApiRequest, NextApiResponse } from 'next'

  type ResponseData = {
    message: string
    timestamp: string
  }

  const handler = (_: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    res.status(200).json({
      message: 'hello from pages router',
      timestamp: new Date().toISOString(),
    })
  }

  export default handler
`

export const apiPagesRouterGetCache = syntaxDocument`
  // app/api/some-name.ts
  // Endpoint will be cached for 60 seconds

  import type { NextApiRequest, NextApiResponse } from 'next'

  type ResponseData = {
    message: string
    timestamp: string
  }

  const handler = (_: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=60')
    res.status(200).json({
      message: 'hello from pages router',
      timestamp: new Date().toISOString(),
    })
  }

  export default handler
`
