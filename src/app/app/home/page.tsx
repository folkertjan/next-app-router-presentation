import { fetchProducts } from '@/_shared-lib/datalayer/products'
import {
  TypographyH1,
  TypographyH2,
  TypographyUL,
} from '@/_shared-components/ui/typography'
import { ProductList } from '@/_shared-components/scopes/products/product-list'

const Home = async () => {
  const products = await fetchProducts({ limit: 3 })
  return (
    <div className="p-4">
      <TypographyH1 className="mb-8">Home</TypographyH1>

      <ProductList products={products} />
    </div>
  )
}

export default Home
