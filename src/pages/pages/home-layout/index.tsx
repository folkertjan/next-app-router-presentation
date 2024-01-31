import { GetStaticProps } from 'next'

import {
  Product,
  fetchCategories,
  fetchProducts,
} from '@/_shared-lib/datalayer/products'
import { TypographyH1 } from '@/_shared-components/ui/typography'
import { ProductList } from '@/_shared-components/scopes/products/product-list'

import { LayoutRootProps, getLayoutRoot } from '@/pages-components/layout-root'

interface HomePageProps extends LayoutRootProps {
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
  const [products, categories] = await Promise.all([
    fetchProducts({ limit: 3 }),
    fetchCategories(),
  ])

  return {
    props: { products, categories },
  }
}

Home.getLayout = getLayoutRoot

export default Home
