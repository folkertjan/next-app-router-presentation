import { fetchProducts } from '@/_shared-lib/datalayer/products'

import { ProductList } from '@/_shared-components/scopes/products/product-list'

const PLP = async () => {
  const products = await fetchProducts()
  return <ProductList products={products} />
}

export default PLP
