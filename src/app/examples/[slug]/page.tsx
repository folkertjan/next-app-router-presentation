import { ExampleDynamicPage } from './_components/example-dynamic-page'
import { ExampleLayout } from './_components/example-layout'
import { ExampleStaticPage } from './_components/example-static-page'

interface ExamplePageProps {
  params?: {
    slug?: string
  }
}

const COMPONENTS_MAP = {
  'static-page': ExampleStaticPage,
  'dynamic-page': ExampleDynamicPage,
  'layout': ExampleLayout,
} as const

const isValidSlug = (slug?: string): slug is keyof typeof COMPONENTS_MAP =>
  typeof slug === 'string' && slug in COMPONENTS_MAP

const ExamplePage = ({ params: { slug } = {} }: ExamplePageProps) => {
  if (!isValidSlug(slug)) return null

  const Component = COMPONENTS_MAP[slug]

  return (
    <main className="min-h-screen px-16 py-16 lg:px-20">
      <Component />
    </main>
  )
}

export default ExamplePage
