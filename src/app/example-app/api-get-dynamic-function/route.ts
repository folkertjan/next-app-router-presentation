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
