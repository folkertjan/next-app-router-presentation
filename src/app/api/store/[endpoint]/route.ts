import { delay } from '@/_shared-lib/utils'

import products from './products.json'

const categories = [...new Set(products.map((product) => product.category))]

export const dynamic = 'force-dynamic'

type Context = {
  params: {
    endpoint?: any
  }
}

export const GET = async (request: Request, ctx: Context) => {
  if (!ctx.params.endpoint || typeof ctx.params.endpoint !== 'string') {
    return new Response('Invalid request', { status: 400 })
  }
  const endpoint = ctx.params.endpoint

  const url = new URL(request.url)
  const delayMs = url.searchParams.get('delay')
    ? parseInt(url.searchParams.get('delay') as string)
    : 0

  const params = new URLSearchParams(url.searchParams)
  params.delete('delay')

  if (delayMs) {
    await delay(delayMs)
  }

  const data = (() => {
    switch (endpoint) {
      case 'products':
        if (params.get('limit')) {
          const limit = parseInt(params.get('limit') as string)
          return products.slice(0, limit)
        }
        return products
      case 'categories':
        return categories
      default:
        return null
    }
  })()

  if (!data) {
    return new Response('Unsupported endpoint', { status: 400 })
  }

  return Response.json(data, { status: 200 })
}
