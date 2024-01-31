import { GetServerSideProps } from 'next'
import Link from 'next/link'
import {
  Product,
  fetchCategories,
  fetchProductsByPage,
} from '@/_shared-lib/datalayer/products'
import { TypographyUL } from '@/_shared-components/ui/typography'
import { Button } from '@/_shared-components/ui/button'
import { LayoutRootProps, getLayoutRoot } from '@/pages-components/layout-root'

interface PLPProps extends LayoutRootProps {
  products: Product[]
  totalPages: number
  totalResults: number
  currentPage: number
}

const PLP = (props: PLPProps) => {
  const hasPreviousPage = props.currentPage > 1

  const hasNextPage = props.currentPage < props.totalPages
  return (
    <>
      <TypographyUL>
        {props.products.map((product) => {
          return <li key={product.id}>{product.title}</li>
        })}
      </TypographyUL>
      <div className="mt-4">Results: {props.totalResults}</div>
      <div>Pages: {props.totalPages}</div>
      <p>Current page: {props.currentPage}</p>

      <div className="flex gap-2">
        <Link
          href={`/pages/plp-pages/?page=${props.currentPage - 1}`}
          {...{ inert: !hasPreviousPage ? '' : undefined }}
        >
          <Button variant={hasPreviousPage ? 'secondary' : 'outline'}>
            Previous page
          </Button>
        </Link>

        <Link
          href={`/pages/plp-pages/?page=${props.currentPage + 1}`}
          {...{ inert: !hasNextPage ? '' : undefined }}
        >
          <Button variant={hasNextPage ? 'secondary' : 'outline'}>
            Next page
          </Button>
        </Link>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<PLPProps> = async (ctx) => {
  const currentPage = Number(ctx.query.page ?? 1) || 1
  const [{ products, totalPages, totalResults }, categories] =
    await Promise.all([
      fetchProductsByPage({
        limit: 5,
        page: currentPage,
      }),
      fetchCategories(),
    ])

  return {
    props: { products, totalPages, totalResults, currentPage, categories },
  }
}

PLP.getLayout = getLayoutRoot

export default PLP
