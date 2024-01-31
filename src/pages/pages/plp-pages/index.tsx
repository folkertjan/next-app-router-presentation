import { GetServerSideProps } from 'next'

import {
  Product,
  fetchCategories,
  fetchProductsByPage,
} from '@/_shared-lib/datalayer/products'
import { ProductList } from '@/_shared-components/scopes/products/product-list'
import { PaginationStats } from '@/_shared-components/scopes/products/pagination-stats'
import { PaginationLink } from '@/_shared-components/scopes/products/pagination-link'

import { LayoutRootProps, getLayoutRoot } from '@/pages-components/layout-root'

interface PLPProps extends LayoutRootProps {
  products: Product[]
  totalPages: number
  totalResults: number
  currentPage: number
}

const PLP = ({ products, totalResults, totalPages, currentPage }: PLPProps) => {
  const hasPreviousPage = currentPage > 1

  const hasNextPage = currentPage < totalPages
  return (
    <>
      <ProductList products={products} />

      <div className="my-4 px-4 py-2 border rounded-sm w-fit">
        <PaginationStats
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      </div>

      <div className="flex gap-2">
        <PaginationLink
          basePath="/pages/plp-pages/"
          page={currentPage}
          disabled={!hasPreviousPage}
          backward
        >
          Previous page
        </PaginationLink>

        <PaginationLink
          basePath="/pages/plp-pages/"
          page={currentPage}
          disabled={!hasNextPage}
          forward
        >
          Next page
        </PaginationLink>
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
