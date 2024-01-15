import { syntaxDocument } from '@/components/elements/syntax-highlighter'

export const staticPagePageRouter = syntaxDocument`
  // pages/index.tsx
  // Cached untill next re-deploy

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

  export default HomePage
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
