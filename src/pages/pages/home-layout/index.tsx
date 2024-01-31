import { GetStaticProps } from 'next'
import {
  Product,
  fetchCategories,
  fetchProducts,
} from '@/_shared-lib/datalayer/products'
import {
  TypographyH1,
  TypographyH2,
  TypographyUL,
} from '@/_shared-components/ui/typography'
import { LayoutRootProps, getLayoutRoot } from '@/pages-components/layout-root'

interface HomePageProps extends LayoutRootProps {
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
