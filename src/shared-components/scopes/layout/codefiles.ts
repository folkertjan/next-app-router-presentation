import { syntaxDocument } from '@/shared-components/elements/syntax-highlighter'

export const layoutPageRouterLayout = syntaxDocument`
  // components/layout.tsx

  const Layout = ({ title, children }) => {
    // fetch data client side here or rely on props
    return (
      <div>
        <h1>My app - {title}</h1>
        {children}
      </div>
    )
  }

  export const getLayout = (page, props) => {
    return <Layout {...props}>{page}</Layout>
  }
`

export const layoutPageRouterPage = syntaxDocument`
  // pages/index.tsx

  import { getLayout } from '@/components/layout'

  const HomePage = ({ title }) => {
    return <div>{title}</div>
  }

  export const getStaticProps = async () => {
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return {
      props: {
        title
      },
    }
  }

  HomePage.getLayout = getLayout

  export default HomePage
`

export const layoutPageRouterApp = syntaxDocument`
  // pages/_app.tsx

  const App = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page)
   
    return getLayout(<Component {...pageProps} />, pageProps)
  }

  export default App
`

export const layoutAppRouterLayout = syntaxDocument`
// app/layout.tsx
// (!) layout and pages can not pass props to eachother

const Layout = async ({ children }) => {
  const res = await fetch('https://this-returns-a-title.com')
  const { title } = await res.json()

  return (
    <div>
      <h1>My app - {title}</h1>
      {children}
    </div>
  )
}

export default Layout
`

export const layoutAppRouterPage = syntaxDocument`
  // app/page.tsx
  // (!) layout and pages can not pass props to eachother

  const HomePage = async () => {
    // Cached return, as layout already fetched this
    const res = await fetch('https://this-returns-a-title.com')
    const { title } = await res.json()

    return <div>{title}</div>
  }

  export default HomePage
`
