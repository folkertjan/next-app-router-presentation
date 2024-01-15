import { syntaxDocument } from '@/components/elements/syntax-highlighter'

export const dynamicPagePageRouter = syntaxDocument`
  // pages/index.tsx
  // Route will now be re-build on every request

  const HomePage = ({ title }) => {
    return <div>{title}</div>
  }

  export const getServerSideProps = async ({ query: { q }}) => {
    const res = await fetch(
      \`https://this-returns-a-title.com?q=\${q}\`
    )
    const { title } = await res.json()

    return {
      props: {
        title
      },
    }
  }

  export default HomePage
`

export const dynamicPageAppRouterSearchParams = syntaxDocument`
  // app/page.tsx - with search params
  // Route will now be re-build on every request

  const HomePage = async ({ searchParams: { q }}) => {
    const res = await fetch(
      \`https://this-returns-a-title.com?q=\${q}\`
    )
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`

export const dynamicPageAppRouterDynamicParams = syntaxDocument`
  // app/page.tsx - with search params
  // Route will now be re-build on every request

  const HomePage = async ({ params: { id }}) => {
    const res = await fetch(
      \`https://this-returns-a-title.com?id=\${id}\`
    )
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`

export const dynamicPageAppRouterRouteConfig = syntaxDocument`
  // app/page.tsx - with route config
  // Route will now be re-build on every request

  export const dynamic = 'force-dynamic'

  const HomePage = async () => {
    const res = await fetch(
      'https://this-returns-a-title.com'
    )
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`
