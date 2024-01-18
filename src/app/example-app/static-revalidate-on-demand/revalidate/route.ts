import { revalidatePath } from 'next/cache'

export const POST = async (request: Request) => {
  const url = new URL(request.url)
  const pathToRevalidate = url.searchParams.get('path')

  if (typeof pathToRevalidate !== 'string') {
    return Response.json(
      {
        message: 'no path provided',
        timestamp: new Date().toISOString(),
      },
      { status: 400 },
    )
  }

  await revalidatePath(pathToRevalidate)

  return Response.json(
    {
      path: pathToRevalidate,
      message: 'revalidated',
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  )
}
