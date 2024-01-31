import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import useSWR, { SWRConfig, unstable_serialize } from 'swr'

import {
  Product,
  fetchCategories,
  fetchProductsByPage,
} from '@/_shared-lib/datalayer/products'
import { TypographyUL } from '@/_shared-components/ui/typography'
import { PaginationLink } from '@/_shared-components/scopes/products/pagination-link'
import { ProductList } from '@/_shared-components/scopes/products/product-list'
import { PaginationStats } from '@/_shared-components/scopes/products/pagination-stats'

import {
  LayoutRootSwrProps,
  getLayoutRootSwr,
} from '@/pages-components/layout-root-swr'
import { useEffect, useRef } from 'react'

interface PLPProps extends LayoutRootSwrProps {}

interface PLPSwrProps extends PLPProps {
  fallback: Record<
    string,
    {
      products: Product[]
      totalPages: number
      totalResults: number
    }
  >
}

const fetcher = async ([_, currentPage]: any[]) => {
  if (!currentPage) {
    return {
      products: [],
      totalPages: 0,
      totalResults: 0,
    }
  }
  const pageAsNumber = parseInt(currentPage)

  return fetchProductsByPage({
    limit: 5,
    page: pageAsNumber,
  })
}

const assertPage = (page: unknown) => {
  if (typeof page !== 'string') {
    if (typeof page === 'number') return page
    return 1
  }
  const parsed = parseInt(page)

  return parsed
}

const placeholders = Array.from({ length: 5 }).map((_, i) => i)

const PLP = (_: PLPProps) => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = assertPage(page)

  const {
    data: { products = null, totalPages = 0, totalResults = 0 } = {},
    isLoading,
    isValidating,
  } = useSWR(['plp-products', currentPage], fetcher)

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  const isBusy = (isLoading || isValidating) && !products

  return (
    <>
      {!isBusy && products ? <ProductList products={products} /> : null}

      {isBusy && !products ? (
        <TypographyUL>
          {placeholders.map((placeholder) => {
            return <li key={placeholder}>Loading...</li>
          })}
        </TypographyUL>
      ) : null}

      <div className="my-4 px-4 py-2 border rounded-sm">
        <PaginationStats
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      </div>

      <div className="flex gap-2">
        <PaginationLink
          basePath="/pages/plp-pages-loading/"
          page={currentPage}
          disabled={!hasPreviousPage || isBusy}
          backward
          shallow
        >
          Previous page
        </PaginationLink>

        <PaginationLink
          basePath="/pages/plp-pages-loading/"
          page={currentPage}
          disabled={!hasNextPage || isBusy}
          forward
          shallow
        >
          Next page
        </PaginationLink>
      </div>
    </>
  )
}

const PLPSwr = ({ fallback, ...restProps }: PLPSwrProps) => {
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      <PLP {...restProps} />
    </SWRConfig>
  )
}

PLPSwr.getLayout = getLayoutRootSwr

export const getServerSideProps: GetServerSideProps<PLPSwrProps> = async (
  ctx,
) => {
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
    props: {
      fallback: {
        [unstable_serialize(['plp-products', currentPage])]: {
          products,
          totalPages,
          totalResults,
        },
      },
    },
  }
}

export default PLPSwr
