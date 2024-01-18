import { syntaxDocument } from '@/components/elements/syntax-highlighter'

export const staticPagePageRouter = syntaxDocument`
  // pages/index.tsx
  // Cached untill next re-deploy

  type PageProps = {
    title: string
  }

  const HomePage = ({ title }) => {
    return <div>{title}</div>
  }

  export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return {
      props: {
        title
      },
    }
  }

  export default HomePage
`

export const staticPagePageRouterRevalidateTime = syntaxDocument`
  // pages/index.tsx
  // Cached for 30 seconds

  type PageProps = {
    title: string
  }

  const HomePage = ({ title }) => {
    return <div>{title}</div>
  }

  export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return {
      props: {
        title
      },
      revalidate: 30,
    }
  }

  export default HomePage
`

export const staticPagePageRouterRevalidateOnDemand = syntaxDocument`
  // pages/api/revalidate.ts

  import type { NextApiRequest, NextApiResponse } from 'next'

  type ResponseData = {
    message: string
    timestamp: string
  }

  const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    // should be full, exact path, e.g. \`/categories/9/recipe/my-custom-recipe\`
    const pathToRevalidate = req.query.path

    await res.revalidate(pathToRevalidate)

    res.status(200).json({
      path: pathToRevalidate,
      message: 'revalidated',
      timestamp: new Date().toISOString(),
    })
  }

  export default handler
`

export const staticPageAppRouter = syntaxDocument`
  // app/page.tsx
  // Cached forever (!)

  const HomePage = async () => {
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`

export const staticPageAppRouterStaticRevalidateTime = syntaxDocument`
  // app/page.tsx
  // Cached for 30 seconds

  export const revalidate = 30

  const HomePage = async () => {
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`

export const staticPageAppRouterStaticRevalidateOnDemand = syntaxDocument`
  // app/some-path/route.ts

  import { revalidatePath } from 'next/cache'

  export const POST = async (request: Request) => {
    const pathToRevalidate = request.searchParams.get('path')

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
`
