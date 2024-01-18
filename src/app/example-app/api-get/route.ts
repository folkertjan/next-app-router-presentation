export const GET = () => {
  return Response.json(
    {
      message: 'hello from app router',
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  )
}
