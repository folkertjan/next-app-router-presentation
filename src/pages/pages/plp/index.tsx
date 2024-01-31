import { GetStaticProps } from 'next'

import {
  Product,
  fetchCategories,
  fetchProducts,
} from '@/_shared-lib/datalayer/products'
import { ProductList } from '@/_shared-components/scopes/products/product-list'

import { LayoutRootProps, getLayoutRoot } from '@/pages-components/layout-root'

interface PLPProps extends LayoutRootProps {
  products: Product[]
}

const PLP = ({ products }: PLPProps) => {
  return <ProductList products={products} />
}

export const getStaticProps: GetStaticProps<PLPProps> = async () => {
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ])

  return {
    props: { products, categories },
  }
}

PLP.getLayout = getLayoutRoot

export default PLP
