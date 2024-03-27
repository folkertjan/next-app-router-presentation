import { TypographyH4 } from '@/_shared-components/ui/typography'
import { Category, fetchCategories } from '@/_shared-lib/datalayer/products'
import Link from 'next/link'

interface LayoutRootProps extends React.PropsWithChildren {}

const links = [
  '/app/plp',
  '/app/plp-pages',
  '/app/plp-pages-loading',
  '/app/plp-pages-loading-cache',
]

const Layout = async ({ children }: LayoutRootProps) => {
  const categories = await fetchCategories()
  return (
    <main className="min-h-screen px-4 pt-28 pb-16 lg:px-10">
      <div className="fixed flex items-center left-0 top-0 w-full p-4 lg:p-6 bg-background border-b">
        <TypographyH4>
          <Link href="/app/home-layout">Acme studios</Link>
        </TypographyH4>

        {categories && categories.length > 0 ? (
          <ul className="flex ml-auto gap-3">
            {categories.map((category, index) => (
              <li key={category} className="underline">
                <Link href={links[index] ?? '/app/plp'}>{category}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {children}
    </main>
  )
}

export default Layout
