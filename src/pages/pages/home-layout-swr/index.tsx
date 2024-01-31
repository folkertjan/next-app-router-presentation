import { GetStaticProps } from 'next'

import { Product, fetchProducts } from '@/_shared-lib/datalayer/products'
import { TypographyH1 } from '@/_shared-components/ui/typography'
import { ProductList } from '@/_shared-components/scopes/products/product-list'

import {
  LayoutRootSwrProps,
  getLayoutRootSwr,
} from '@/pages-components/layout-root-swr'

interface HomePageProps extends LayoutRootSwrProps {
  products: Product[]
}

const Home = ({ products }: HomePageProps) => {
  return (
    <>
      <TypographyH1 className="mb-8">Home</TypographyH1>

      <ProductList products={products} />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = await fetchProducts({ limit: 3 })

  return {
    props: { products },
  }
}

Home.getLayout = getLayoutRootSwr

export default Home
