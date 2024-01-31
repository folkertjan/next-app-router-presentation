import { GetStaticProps } from 'next'
import { Product, fetchProducts } from '@/_shared-lib/datalayer/products'
import {
  TypographyH1,
  TypographyH2,
  TypographyUL,
} from '@/_shared-components/ui/typography'

interface HomePageProps {
  products: Product[]
}

const Home = (props: HomePageProps) => {
  return (
    <div className="p-4">
      <TypographyH1 className="mb-8">Home</TypographyH1>

      {props.products.length === 0 ? (
        <TypographyH2>No products found</TypographyH2>
      ) : null}

      {props.products.length > 0 ? (
        <TypographyUL>
          {props.products.map((product) => {
            return <li key={product.id}>{product.title}</li>
          })}
        </TypographyUL>
      ) : null}
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = await fetchProducts({ limit: 3 })

  return {
    props: { products },
  }
}

export default Home
