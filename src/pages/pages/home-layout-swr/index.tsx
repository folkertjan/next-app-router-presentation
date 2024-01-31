import { GetStaticProps } from 'next'
import { Product, fetchProducts } from '@/_shared-lib/datalayer/products'
import {
  TypographyH1,
  TypographyH2,
  TypographyUL,
} from '@/_shared-components/ui/typography'
import {
  LayoutRootSwrProps,
  getLayoutRootSwr,
} from '@/pages-components/layout-root-swr'

interface HomePageProps extends LayoutRootSwrProps {
  products: Product[]
}

const Home = (props: HomePageProps) => {
  return (
    <>
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
