import { delay } from '@/_shared-lib/utils'

type Context = {
  params: {
    endpoint?: any
  }
}

export const dynamic = 'force-dynamic'

export const GET = async (request: Request, ctx: Context) => {
  if (!ctx.params.endpoint || typeof ctx.params.endpoint !== 'string') {
    return new Response('Invalid request', { status: 400 })
  }
  const url = new URL(request.url)
  const delayMs = url.searchParams.get('delay')
    ? parseInt(url.searchParams.get('delay') as string)
    : 0

  const params = new URLSearchParams(url.searchParams)
  params.delete('delay')
  const queryString = params.toString()

  if (delayMs) {
    await delay(delayMs)
  }

  const response = await fetch(
    `https://fakestoreapi.com/${ctx.params.endpoint}${
      queryString ? `?${queryString}` : ''
    }`,
  )

  if (!response.ok) {
    return new Response(response.statusText, { status: response.status })
  }

  const json = await response.json()

  return Response.json(json, { status: 200 })
}
