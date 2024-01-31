import { GetStaticProps } from 'next'
import {
  Product,
  fetchCategories,
  fetchProducts,
} from '@/_shared-lib/datalayer/products'
import { TypographyH2, TypographyUL } from '@/_shared-components/ui/typography'

import { LayoutRootProps, getLayoutRoot } from '@/pages-components/layout-root'

interface PLPProps extends LayoutRootProps {
  products: Product[]
}

const PLP = (props: PLPProps) => {
  if (props.products.length === 0) {
    return <TypographyH2>No products found</TypographyH2>
  }
  return (
    <TypographyUL>
      {props.products.map((product) => {
        return <li key={product.id}>{product.title}</li>
      })}
    </TypographyUL>
  )
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
