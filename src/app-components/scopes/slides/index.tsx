import {
  SyntaxHighlighter,
  syntaxDocument,
} from '@/app-components/elements/syntax-highlighter'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/_shared-components/ui/avatar'
import {
  TypographyBlockQuote,
  TypographyH1,
  TypographyH4,
  TypographyInlineCode,
  TypographyP,
  TypographyUL,
} from '@/_shared-components/ui/typography'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/_shared-components/ui/table'
import { Button } from '@/_shared-components/ui/button'
import { Iframe } from '@/app-components/primitives/iframe'

const SlideIntro = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Next App Router Shenanigans</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <h3>Episode 1: What and Why?</h3>
      </TypographyBlockQuote>

      <div className="inline-flex items-center justify-center mt-16">
        <Avatar>
          <AvatarImage
            src="https://github.com/folkertjan.png"
            alt="@folkertjan"
          />
          <AvatarFallback>FJ</AvatarFallback>
        </Avatar>
        <TypographyP className="flex-grow text-center text-balance md:w-3/5 ml-2">
          By Folkert
        </TypographyP>
      </div>
    </div>
  )
}

const SlideTopics = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Topics</h2>
      </TypographyH1>

      <div className="mt-16">
        <TypographyUL>
          <li>The pages router problem</li>
          <li>React server vs client components</li>
          <li>NextJS layouts and pages</li>
          <li>Does it solve the pages router problem?</li>
        </TypographyUL>
      </div>
    </div>
  )
}

const SlidePagesProblem = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>The pages router problem</h2>
      </TypographyH1>
    </div>
  )
}

const SlidePagesPageHome = () => {
  return <Iframe src="/pages/home" className="w-5/6 mx-auto h-[80svh]" />
}

const slidePagesPageHomeCode = `
  interface HomePageProps {
    products: Product[]
  }

  const Home = ({ products }: HomePageProps) => {
    return (        
      <ProductList products={products} />
    )
  }

  export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const products = await fetchProducts({ limit: 3 })

    return {
      props: { products },
    }
  }

  export default Home
`

const SlidePagesPageHomeCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slidePagesPageHomeCode} />
    </div>
  )
}

const SlidePagesPageHomeLayout = () => {
  return <Iframe src="/pages/home-layout" className="w-5/6 mx-auto h-[80svh]" />
}

const slidePagesPageHomeLayoutLayoutBaseCode = `
  interface LayoutProps extends React.PropsWithChildren {}

  const Layout = ({ children }: LayoutProps) => {
    return (
      <>   
        <Menu />
        {children}
      </>
    )
  }

  export const getLayout = (page) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
`

const slidePagesPageHomeLayoutAppBaseCode = `
  const App = ({ Component, pageProps }: LayoutProps) => {
    const getLayout = Component.getLayout || ((page) => page)

    return (
      <>   
        {getLayout(<Component {...pageProps} />)}
      </>
    )
  }

  export default App
`

const slidePagesPageHomeLayoutBaseCode = `
  interface HomePageProps {
    products: Product[]
  }

  const Home = ({ products }: HomePageProps) => {
    return (        
      <ProductList products={products} />
    )
  }

  export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const products = await fetchProducts({ limit: 3 })

    return {
      props: { products },
    }
  }

  Home.getLayout = getLayout

  export default Home
`

const slidePagesPageHomeLayoutLayoutCode = `
  interface LayoutProps extends React.PropsWithChildren {
    categories: Category[]
  }

  const Layout = ({ categories, children }: LayoutProps) => {
    return (
      <>   
        <Menu categories={categories} />
        {children}
      </>
    )
  }

  export const getLayout = (page, pageProps) => {
    return (
      <Layout {...pageProps}>
        {page}
      </Layout>
    )
  }
`

const slidePagesPageHomeLayoutAppCode = `
  const App = ({ Component, pageProps }: LayoutProps) => {
    const getLayout = Component.getLayout || ((page) => page)

    return (
      <>   
        {getLayout(<Component {...pageProps} />, pageProps)}
      </>
    )
  }

  export default App
`

const slidePagesPageHomeLayoutCode = `
  interface HomePageProps {
    products: Product[]
  }

  const Home = ({ products }: HomePageProps) => {
    return (        
      <ProductList products={products} />
    )
  }

  export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const products = await fetchProducts({ limit: 3 })
    const categories = await fetchCategories()

    return {
      props: { products, categories },
    }
  }

  Home.getLayout = getLayout

  export default Home
`

const SlidePagesPageHomeLayoutLayoutBaseCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slidePagesPageHomeLayoutLayoutBaseCode} />
    </div>
  )
}

const SlidePagesPageHomeLayoutAppBaseCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slidePagesPageHomeLayoutAppBaseCode} />
    </div>
  )
}

const SlidePagesPageHomeLayoutBaseCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter
        document={slidePagesPageHomeLayoutBaseCode}
        highlightLines={[20]}
      />
    </div>
  )
}

const SlidePagesPageHomeLayoutLayoutCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter
        document={slidePagesPageHomeLayoutLayoutCode}
        highlightLines={[6, 9, 15, 17]}
      />
    </div>
  )
}

const SlidePagesPageHomeLayoutAppCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slidePagesPageHomeLayoutAppCode} />
    </div>
  )
}

const SlidePagesPageHomeLayoutCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter
        document={slidePagesPageHomeLayoutCode}
        highlightLines={[14, 17, 21]}
      />
    </div>
  )
}

const SlidePagesPagePLP = () => {
  return <Iframe src="/pages/plp" className="w-5/6 mx-auto h-[80svh]" />
}

const slidePagesPagePLPCode = syntaxDocument`
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

  PLP.getLayout = getLayout

  export default PLP
`
const SlidePagesPagePLPCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slidePagesPagePLPCode} />
    </div>
  )
}

const slidePagesPageLayoutLayoutSWRCode = syntaxDocument`
  const Layout = ({ children }: LayoutProps) => {
    const { data: categories, isLoading } = useSWR('categories', fetchCategories)
    return (
      <>   
        <Menu categories={categories} isLoading={!categories && isLoading} />
        {children}
      </>
    )
  }

  export const getLayout = (page, pageProps) => {
    return (
      <Layout {...pageProps}>
        {page}
      </Layout>
    )
  }
`

const SlidePagesPageLayoutLayoutSWRCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter
        document={slidePagesPageLayoutLayoutSWRCode}
        highlightLines={[2, 5]}
      />
    </div>
  )
}

const SlidePagesPageHomeLayoutSWR = () => {
  return (
    <Iframe src="/pages/home-layout-swr" className="w-5/6 mx-auto h-[80svh]" />
  )
}

const SlidePagesPagePLPPages = () => {
  return <Iframe src="/pages/plp-pages" className="w-5/6 mx-auto h-[80svh]" />
}

const slidePagesPagePLPPagesCode = syntaxDocument`
  interface PLPProps extends LayoutRootProps {
    products: Product[]
    totalPages: number
    totalResults: number
    currentPage: number
  }

  const PLP = ({ products, totalResults, totalPages, currentPage }: PLPProps) => {
    const hasPreviousPage = currentPage > 1
    const hasNextPage = currentPage < totalPages

    return (
      <>
        <ProductList products={products} />

        <Pagination>
          <LinkPreviousPage>Previous</LinkPreviousPage>
          <LinkNextPage>Next</LinkNextPage>
        </Pagination>
      </>
    )
  }

  export const getServerSideProps: GetServerSideProps<PLPProps> = async (ctx) => {
    const currentPage = Number(ctx.query.page ?? 1) || 1
    const { products, totalPages, totalResults } = await fetchProductsByPage({
      limit: 5,
      page: currentPage,
    })

    return {
      props: { products, totalPages, totalResults, currentPage, categories },
    }
  }

  PLP.getLayout = getLayout

  export default PLP
`

const SlidePagesPagePLPPagesCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slidePagesPagePLPPagesCode} />
    </div>
  )
}

const slidePagesPagePLPPagesCodeSWR = syntaxDocument`
interface PLPProps extends LayoutRootSwrProps {}

interface PLPSwrProps extends PLPProps {
  fallback: Record<
    string,
    {
      products: Product[]
      totalPages: number
      totalResults: number
    }
  >
}

const fetcher = async ([_, currentPage]: any[]) => fetchProductsByPage({
  limit: 5,
  page: pageAsNumber,
})

const placeholders = Array.from({ length: 5 }).map((_, i) => i)

const PLP = (_: PLPProps) => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = parseInt(page)

  const {
    data: { products = null, totalPages = 0, totalResults = 0 } = {},
    isLoading,
    isValidating,
  } = useSWR(['plp-products', currentPage], fetcher)

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  const isBusy = (isLoading || isValidating) && !products

  return (
    <>
      <ProductList products={products} isLoading={isBusy} />

      <Pagination>
        <LinkPreviousPage shallow>Previous</LinkPreviousPage>
        <LinkNextPage shallow>Next</LinkNextPage>
      </Pagination>
    </>
  )
}

const PLPSwr = ({ fallback, ...restProps }: PLPSwrProps) => {
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      <PLP {...restProps} />
    </SWRConfig>
  )
}

PLPSwr.getLayout = getLayoutRootSwr

export const getServerSideProps: GetServerSideProps<PLPSwrProps> = async (
  ctx,
) => {
  const currentPage = Number(ctx.query.page ?? 1) || 1
  const [{ products, totalPages, totalResults }, categories] =
    await Promise.all([
      fetchProductsByPage({
        limit: 5,
        page: currentPage,
      }),
      fetchCategories(),
    ])

  return {
    props: {
      fallback: {
        [unstable_serialize(['plp-products', currentPage])]: {
          products,
          totalPages,
          totalResults,
        },
      },
    },
  }
}

export default PLPSwr

`

const SlidePagesPagePLPPagesCodeSWR = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slidePagesPagePLPPagesCodeSWR} />
    </div>
  )
}

const SlidePagesPagePLPPagesLoading = () => {
  return (
    <Iframe
      src="/pages/plp-pages-loading"
      className="w-5/6 mx-auto h-[80svh]"
    />
  )
}

const SlidePagesProblemDefinition = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Why is this a problem?</h2>
      </TypographyH1>
      <TypographyUL className="mt-16">
        <li>Easy to fetch the same thing in multiple pages</li>
        <li>Client-side fetch + loading for global data</li>
        <li>Hard-to-read client-side js code with data fallbacks</li>
        <li>Probably needs api routes for swr</li>
      </TypographyUL>
    </div>
  )
}

const SlideAppRouter = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>App router + RSC to the rescue</h2>
      </TypographyH1>
    </div>
  )
}

const SlideReactNext = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>React vs Next land</h2>
      </TypographyH1>

      <div className="mt-16 flex gap-16 relative">
        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead>React</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Server components</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Client components</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="opacity-50">Server actions</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="h-full absolute w-px left-1/2 -translate-x-1/2 bg-slate-400"></div>

        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead>Next</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pages</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Layouts</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="opacity-50">Route handlers (api)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const SlideReactLand = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>React land</h2>
      </TypographyH1>
    </div>
  )
}

const slideServer = syntaxDocument`
  const Component = () => {
    return 'hello world'
  } 
`

const SlideServer = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Server component</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <div>React feature</div>
      </TypographyBlockQuote>

      <div className="mt-16">
        <SyntaxHighlighter document={slideServer} />
      </div>
    </div>
  )
}

const slideServerTall = syntaxDocument`
  const Component = () => {
    return 'hello world'
  } 


`

const slideClient = syntaxDocument`
  'use client'

  const Component = () => {
    return 'hello world'
  }
`

const SlideClient = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Client component</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <div>React feature</div>
      </TypographyBlockQuote>

      <div className="mt-16">
        <SyntaxHighlighter document={slideClient} />
      </div>
    </div>
  )
}

const SlideServerVsClient = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Server vs Client component</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <div>What can do what</div>
      </TypographyBlockQuote>

      <div className="mt-16">
        <div className="flex gap-8">
          <TypographyH4 className="text-center flex-grow">
            Server component
          </TypographyH4>
          <TypographyH4 className="text-center flex-grow">
            "Client" component
          </TypographyH4>
        </div>
        <div className="flex gap-8">
          <div className="flex-grow">
            <SyntaxHighlighter document={slideServerTall} />
          </div>
          <div className="flex-grow">
            <SyntaxHighlighter document={slideClient} />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex-grow">
            <TypographyUL>
              <li>Renders on server / build</li>
              <li>Does not hydrate on client</li>
              <li className="italic">No client state</li>
              <li className="italic">No client events</li>
            </TypographyUL>
          </div>
          <div className="flex-grow">
            <TypographyUL>
              <li>Renders on server / build</li>
              <li>Hydrates on client</li>
              <li className="italic">Client state</li>
              <li className="italic">Client events</li>
            </TypographyUL>
          </div>
        </div>
      </div>
    </div>
  )
}

const slideServerFetch = syntaxDocument`
const Component = async () => {
  const data = await fetch('...')

  const adaptedData = adapt(data)

  return adaptedData.title
}




`

const slideClientState = syntaxDocument`
'use client'

const Component = () => {
  const [state, setState] = useState(0);

  return (
    <button onClick={() => setState(state => state + 1)}>
      {state}
    </button>
    )
}
`

const SlideServerVsClientTwo = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <div>
        <div className="flex gap-8">
          <TypographyH4 className="text-center flex-grow">
            Server component
          </TypographyH4>
          <TypographyH4 className="text-center flex-grow">
            "Client" component
          </TypographyH4>
        </div>
        <div className="flex gap-8">
          <div className="flex-grow w-1/2">
            <SyntaxHighlighter document={slideServerFetch} />
          </div>
          <div className="flex-grow w-1/2">
            <SyntaxHighlighter document={slideClientState} />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex-grow">
            <TypographyUL>
              <li>Fetch / modify data</li>
              <li>Non-interactive content</li>
              <li>Should be most</li>
            </TypographyUL>
          </div>
          <div className="flex-grow">
            <TypographyUL>
              <li>Interaction</li>
              <li>Client-side state</li>
              <li>Should be least</li>
            </TypographyUL>
          </div>
        </div>
      </div>
    </div>
  )
}

const SlideNextLand = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Next land</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <div>What react 19 unlocks for next</div>
      </TypographyBlockQuote>
    </div>
  )
}

const slideNextPage = syntaxDocument`
  const MyPage = () => {
    return 'hello world'
  }

  export default MyPage


`

const slideNextPageFetch = syntaxDocument`
  const MyPage = async () => {
    const data = await fetch('...')

    return data.timestamp
  }

  export default MyPage
`

const SlideNextPage = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Page file</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <div>Next.js app router feature</div>
      </TypographyBlockQuote>

      <div className="mt-16">
        <div className="w-fit mx-auto">
          <TypographyInlineCode>/app/my-page/page.tsx</TypographyInlineCode>{' '}
          {'>'} <TypographyInlineCode>/my-page</TypographyInlineCode>
        </div>
        <div className="grid grid-cols-2 gap-8 p-4 border rounded-md mt-4 relative ">
          <div className="peer opacity-50 hover:opacity-100 transition-opacity duration-200 row-start-1 row-end-1 col-start-2 col-end-3">
            <TypographyP className="text-center">With Data</TypographyP>
            <SyntaxHighlighter
              document={slideNextPageFetch}
              highlightLines={[1, 2, 4]}
            />
            <div className="mt-4 p-4 bg-slate-600 text-slate-200">
              <TypographyP>{Date.now()}</TypographyP>
            </div>
          </div>
          <div className="peer-hover:opacity-50 transition-opacity duration-200 row-start-1 row-end-1 col-start-1 col-end-2">
            <TypographyP className="text-center">Default</TypographyP>

            <SyntaxHighlighter document={slideNextPage} />
            <div className="mt-4 p-4 bg-slate-600 text-slate-200">
              <TypographyP>Hello world</TypographyP>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const layoutFolderStructureOne = `app/
  page-1/
    page.tsx
  page-2/ 
    page.tsx
`

const SlideNextLayout = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Layout</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <div>Next.js app router feature</div>
      </TypographyBlockQuote>

      <div className="mt-16">
        <div className="p-4 border rounded-md">
          <pre>{layoutFolderStructureOne}</pre>
        </div>
        <div className="grid grid-cols-2 gap-8 p-4 border rounded-md mt-4 relative ">
          <div className="p-4 bg-slate-600 text-slate-200">
            <TypographyP>Page 1</TypographyP>
          </div>
          <div className="p-4 bg-slate-600 text-slate-200 min-w-40">
            <TypographyP>Page 2</TypographyP>
          </div>
        </div>
      </div>
    </div>
  )
}

const layoutFolderStructureTwo = `app/
  page-1/
    page.tsx
  page-2/ 
    page.tsx
  layout.tsx
`

const SlideNextLayoutTwo = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <div>
        <div className="p-4 border rounded-md">
          <pre>{layoutFolderStructureTwo}</pre>
        </div>

        <div className="p-4 border rounded-md mt-4 relative ">
          <div className="grid p-4 border border-slate-400  rounded-md">
            <TypographyP>Layout</TypographyP>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-slate-600 text-slate-200">
                <TypographyP>Page 1</TypographyP>
              </div>
              <div className="p-4 bg-slate-600 text-slate-200 min-w-40">
                <TypographyP>Page 2</TypographyP>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const layoutFolderStructureThree = `app/
  page-1/
    page.tsx
  page-2/ 
    page.tsx
    layout.tsx
  layout.tsx
`

const SlideNextLayoutThree = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <div>
        <div className="p-4 border rounded-md">
          <pre>{layoutFolderStructureThree}</pre>
        </div>

        <div className="p-4 border rounded-md mt-4 relative ">
          <div className="p-4 border border-slate-400  rounded-md">
            <TypographyP>Layout</TypographyP>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-slate-600 text-slate-200">
                <TypographyP>Page 1</TypographyP>
              </div>

              <div className=" p-4 border border-slate-400 rounded-md">
                <TypographyP>Layout</TypographyP>

                <div className="mt-4 p-4 bg-slate-600 text-slate-200 min-w-40">
                  <TypographyP>Page 2</TypographyP>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const slideNextLayoutFile = syntaxDocument`
const MyLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      {children}
    </div>
  )
}

export default MyLayout


`

const slideNextLayoutFileFetch = syntaxDocument`
const MyLayout = async ({ children }) => {
  const data = await fetch('...')

  return (
    <div style={{ backgroundColor: data.color }}>
      {children}
    </div>
  )
}

export default MyLayout
`

const SlideNextLayoutFile = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Layout file</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <div>Next.js app router feature</div>
      </TypographyBlockQuote>

      <div className="mt-16">
        <div className="w-fit mx-auto">
          <TypographyInlineCode>/app/layout.tsx</TypographyInlineCode>
        </div>
        <div className="grid grid-cols-2 gap-8 p-4 border rounded-md mt-4 relative ">
          <div className="peer opacity-50 hover:opacity-100 transition-opacity duration-200 row-start-1 row-end-1 col-start-2 col-end-3">
            <TypographyP className="text-center">With Data</TypographyP>

            <SyntaxHighlighter
              document={slideNextLayoutFileFetch}
              highlightLines={[1, 2, 5]}
            />
          </div>
          <div className="peer-hover:opacity-50 transition-opacity duration-200 row-start-1 row-end-1 col-start-1 col-end-2">
            <TypographyP className="text-center">Default</TypographyP>

            <SyntaxHighlighter document={slideNextLayoutFile} />
          </div>
        </div>
      </div>
    </div>
  )
}

const SlideAppDemo = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>The improved (?) situation</h2>
      </TypographyH1>

      <Button className="mt-8" variant="secondary">
        Demo
      </Button>
    </div>
  )
}

const SlideAppPageHome = () => {
  return <Iframe src="/app/home-layout" className="w-5/6 mx-auto h-[80svh]" />
}

const slideAppPageLayoutCode = syntaxDocument`
interface LayoutRootProps extends React.PropsWithChildren {}

const Layout = async ({ children }: LayoutRootProps) => {
  const categories = await fetchCategories()
  return (
    <>
      <Menu categories={categories} />
      {children}
    </>
  )
}

export default Layout
`

const SlideAppPageLayoutCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slideAppPageLayoutCode} />
    </div>
  )
}

const slideAppPageHomeCode = syntaxDocument`
const Home = async () => {
  const products = await fetchProducts({ limit: 3 })

  return (
    <ProductList products={products} />
  )
}

export default Home
`

const SlideAppPageHomeCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slideAppPageHomeCode} />
    </div>
  )
}

const slideAppPagePLPCode = syntaxDocument`
interface PLPProps {
  searchParams: {
    page?: string
  }
}

const PLP = async ({ searchParams: { page } }: PLPProps) => {
  const currentPage = page ? parseInt(page) : 1
  const { products, totalResults, totalPages } = await fetchProductsByPage({
    limit: 5,
    page: currentPage,
  })

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <>
      <ProductList products={products} />
      
      <Pagination>
        <LinkPreviousPage>Previous</LinkPreviousPage>
        <LinkNextPage>Next</LinkNextPage>
      </Pagination>
    </>
  )
}

export default PLP
`
const SlideAppPagePLPCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter document={slideAppPagePLPCode} />
    </div>
  )
}

const SlideAppPagePLP = () => {
  return <Iframe src="/app/plp-pages" className="w-5/6 mx-auto h-[80svh]" />
}

const slideAppPagePLPLoadingCode = syntaxDocument`
interface PLPProps {
  searchParams: {
    page?: string
  }
}

const PLPProductList = async ({ page }) => {
  const { products, totalResults, totalPages } = await fetchProductsByPage({
    limit: 5,
    page: page,
  })

  return (
    <ProductList products={products} />
  )
}

const PLP = async ({ searchParams: { page } }: PLPProps) => {
  const currentPage = page ? parseInt(page) : 1
  const { products, totalResults, totalPages } = await fetchProductsByPage({
    limit: 5,
    page: 1,
  })

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <>
      <Suspense key={page} fallback={'loading...'}>
        <ProductList page={page} />
      </Suspense>
      
      <Pagination>
        <LinkPreviousPage>Previous</LinkPreviousPage>
        <LinkNextPage>Next</LinkNextPage>
      </Pagination>
    </>
  )
}

export default PLP
`

const SlideAppPagePLPLoadingCode = () => {
  return (
    <div className="w-5/6 mx-auto grid content-center h-[80svh]">
      <SyntaxHighlighter
        document={slideAppPagePLPLoadingCode}
        highlightLines={[22, 30, 31, 32, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
      />
    </div>
  )
}

const SlideAppPagePLPLoading = () => {
  return (
    <Iframe src="/app/plp-pages-loading" className="w-5/6 mx-auto h-[80svh]" />
  )
}

const SlideConclusion = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>Comparison</h2>
      </TypographyH1>
      <div className="mt-16">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pages router</TableHead>
              <TableHead>App Router</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Fetch same thing in multiple pages</TableCell>
              <TableCell>
                No duplicate fetches - even if, gets deduplicated
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Client side fetch / loading global data</TableCell>
              <TableCell>No client side fetches</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hard to reason about code for pagination</TableCell>
              <TableCell>Declarative server-side code</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Probably needs api routes for swr</TableCell>
              <TableCell>No api routes needed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const SlideFin = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>That's all folks</h2>
      </TypographyH1>
    </div>
  )
}

export const slides = [
  SlideIntro,
  SlideTopics,
  SlidePagesProblem,
  SlidePagesPageHome,
  SlidePagesPageHomeCode,
  SlidePagesPageHomeLayout,
  SlidePagesPageHomeLayoutLayoutBaseCode,
  SlidePagesPageHomeLayoutAppBaseCode,
  SlidePagesPageHomeLayoutBaseCode,
  SlidePagesPageHomeLayoutCode,
  SlidePagesPageHomeLayoutLayoutCode,
  SlidePagesPageHomeLayoutAppCode,
  SlidePagesPageHomeLayout,
  SlidePagesPagePLP,
  SlidePagesPagePLPCode,
  SlidePagesPageLayoutLayoutSWRCode,
  SlidePagesPageHomeLayoutSWR,
  SlidePagesPagePLPPages,
  SlidePagesPagePLPPagesCode,
  SlidePagesPagePLPPages,
  SlidePagesPagePLPPagesCodeSWR,
  SlidePagesPagePLPPagesLoading,
  SlidePagesProblemDefinition,
  SlideAppRouter,
  SlideReactNext,
  SlideReactLand,
  SlideServer,
  SlideClient,
  SlideServerVsClient,
  SlideServerVsClientTwo,
  SlideNextLand,
  SlideNextPage,
  SlideNextLayout,
  SlideNextLayoutTwo,
  SlideNextLayoutThree,
  SlideNextLayoutFile,
  SlideAppDemo,
  SlideAppPageHome,
  SlideAppPageLayoutCode,
  SlideAppPageHomeCode,
  SlideAppPagePLPCode,
  SlideAppPagePLP,
  SlideAppPagePLPLoadingCode,
  SlideAppPagePLPLoading,
  SlideConclusion,
  SlideFin,
]
