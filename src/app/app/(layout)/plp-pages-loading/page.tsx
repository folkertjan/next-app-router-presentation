import { fetchProductsByPage } from '@/_shared-lib/datalayer/products'
import { ProductList } from '@/_shared-components/scopes/products/product-list'
import { PaginationStats } from '@/_shared-components/scopes/products/pagination-stats'
import { PaginationLink } from '@/_shared-components/scopes/products/pagination-link'
import { Suspense } from 'react'
import { TypographyUL } from '@/_shared-components/ui/typography'

interface PLPProps {
  searchParams: {
    page?: string
  }
}

const PLPProductList = async ({ page }: { page: number }) => {
  const { products } = await fetchProductsByPage({
    limit: 5,
    page,
  })

  return <ProductList products={products} />
}

const PLP = async ({ searchParams: { page } }: PLPProps) => {
  const currentPage = page ? parseInt(page) : 1

  const { totalResults, totalPages } = await fetchProductsByPage({
    limit: 5,
    page: 1,
  })

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  const placeholders = Array.from({ length: 5 }).map((_, i) => i)

  return (
    <>
      <Suspense
        key={currentPage}
        fallback={
          <TypographyUL>
            {placeholders.map((placeholder) => {
              return <li key={placeholder}>Loading...</li>
            })}
          </TypographyUL>
        }
      >
        <PLPProductList page={currentPage} />
      </Suspense>

      <div className="my-4 px-4 py-2 border rounded-sm w-fit">
        <PaginationStats
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      </div>

      <div className="flex gap-2">
        <PaginationLink
          basePath="/app/plp-pages-loading/"
          page={currentPage}
          disabled={!hasPreviousPage}
          backward
        >
          Previous page
        </PaginationLink>

        <PaginationLink
          basePath="/app/plp-pages-loading/"
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

export default PLP
