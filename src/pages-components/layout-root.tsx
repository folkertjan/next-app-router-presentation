import { TypographyH4 } from '@/_shared-components/ui/typography'
import { Category } from '@/_shared-lib/datalayer/products'
import Link from 'next/link'

export interface LayoutRootProps extends React.PropsWithChildren {
  categories: Category[]
}

export const LayoutRoot = ({ categories, children }: LayoutRootProps) => {
  return (
    <main className="min-h-screen px-4 pt-28 pb-16 lg:px-10">
      <div className="fixed flex items-center left-0 top-0 w-full p-4 lg:p-6 bg-background border-b">
        <TypographyH4>
          <Link href="/pages/home-layout">Acme studios</Link>
        </TypographyH4>

        <ul className="flex ml-auto gap-3">
          {categories.map((category, index) => (
            <li key={category} className="underline">
              <Link href={index === 0 ? '/pages/plp' : '/pages/plp-pages'}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {children}
    </main>
  )
}

export const getLayoutRoot = (page: any, props: LayoutRootProps) => {
  return <LayoutRoot {...props}>{page}</LayoutRoot>
}
