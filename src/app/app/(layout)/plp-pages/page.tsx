import { fetchProductsByPage } from '@/_shared-lib/datalayer/products'
import { ProductList } from '@/_shared-components/scopes/products/product-list'
import { PaginationStats } from '@/_shared-components/scopes/products/pagination-stats'
import { PaginationLink } from '@/_shared-components/scopes/products/pagination-link'

interface PLPProps {
  searchParams: {
    page?: string
  }
}

const PLP = async ({ searchParams: { page } }: PLPProps) => {
  const currentPage = page ? parseInt(page) : 1
  const { products, totalResults, totalPages } = await fetchProductsByPage({
    limit: 5,
    page: currentPage,
  })

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
          basePath="/app/plp-pages/"
          page={currentPage}
          disabled={!hasPreviousPage}
          backward
        >
          Previous page
        </PaginationLink>

        <PaginationLink
          basePath="/app/plp-pages/"
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
