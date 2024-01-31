import { GetServerSideProps } from 'next'
import Link from 'next/link'
import useSWR, { SWRConfig, unstable_serialize } from 'swr'

import {
  Product,
  fetchCategories,
  fetchProductsByPage,
} from '@/_shared-lib/datalayer/products'
import { TypographyUL } from '@/_shared-components/ui/typography'
import { Button } from '@/_shared-components/ui/button'
import {
  LayoutRootSwrProps,
  getLayoutRootSwr,
} from '@/pages-components/layout-root-swr'
import { useRouter } from 'next/router'
import { delay } from '@/_shared-lib/utils'

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
  await delay(1000)

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

const PLP = (_: PLPProps) => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = assertPage(page)

  const {
    data: { products = [], totalPages = 0, totalResults = 0 } = {},
    isLoading,
    isValidating,
  } = useSWR(['plp-products', currentPage], fetcher)

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  const isBusy = (isLoading || isValidating) && products.length === 0
  const hasNoResults = !isBusy && products.length === 0
  const hasResults = !isBusy && products.length > 0

  return (
    <>
      {hasResults ? (
        <TypographyUL>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>
          })}
        </TypographyUL>
      ) : null}

      {hasNoResults ? <div>No results</div> : null}

      {isBusy ? <div>Loading...</div> : null}

      <div className="mt-4">Results: {totalResults}</div>
      <div>Pages: {totalPages}</div>
      <p>Current page: {currentPage}</p>

      <div className="flex gap-2">
        <Link
          shallow
          href={`/pages/plp-pages-swr/?page=${currentPage - 1}`}
          {...{ inert: !hasPreviousPage ? '' : undefined }}
        >
          <Button variant={hasPreviousPage ? 'secondary' : 'outline'}>
            Previous page
          </Button>
        </Link>

        <Link
          shallow
          href={`/pages/plp-pages-swr/?page=${currentPage + 1}`}
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
