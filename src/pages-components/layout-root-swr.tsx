import { TypographyH4 } from '@/_shared-components/ui/typography'
import { fetchCategories } from '@/_shared-lib/datalayer/products'
import { delay } from '@/_shared-lib/utils'
import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr'

export interface LayoutRootSwrProps extends React.PropsWithChildren {}

const fetcher = async () => {
  return fetchCategories()
}

export const LayoutRootSwr = ({ children }: LayoutRootSwrProps) => {
  const { data: categories } = useSWR('categories', fetcher)
  return (
    <main className="min-h-screen px-4 pt-28 pb-16 lg:px-10">
      <div className="fixed flex items-center left-0 top-0 w-full p-4 lg:p-6 bg-background border-b">
        <TypographyH4>
          <Link href="/pages/home-layout-swr">Acme studios</Link>
        </TypographyH4>

        <div className="w-fit ml-auto">
          {categories && categories.length > 0 ? (
            <ul className="flex  gap-3">
              {categories.map((category) => (
                <li key={category} className="underline">
                  <Link href="/pages/plp-pages-loading">{category}</Link>
                </li>
              ))}
            </ul>
          ) : (
            'loading...'
          )}
        </div>
      </div>

      {children}
    </main>
  )
}

export const getLayoutRootSwr = (page: any, props: LayoutRootSwrProps) => {
  return <LayoutRootSwr {...props}>{page}</LayoutRootSwr>
}
