import {
  TypographyH1,
  TypographyH2,
  TypographyUL,
} from '@/_shared-components/ui/typography'
import { Product } from '@/_shared-lib/datalayer/products'

interface ProductListProps {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.length === 0 ? <div>No products found</div> : null}

      {products.length > 0 ? (
        <TypographyUL>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>
          })}
        </TypographyUL>
      ) : null}
    </>
  )
}
