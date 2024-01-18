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
