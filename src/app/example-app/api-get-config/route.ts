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
