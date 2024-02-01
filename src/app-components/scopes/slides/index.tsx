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

      <Button className="mt-8" variant="secondary">
        Demo
      </Button>
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
              <TableHead>React (19)</TableHead>
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
        <h2>React (19) land</h2>
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
        <div>React (19) feature</div>
      </TypographyBlockQuote>

      <div className="mt-16">
        <SyntaxHighlighter document={slideServer} />
      </div>
    </div>
  )
}

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
        <div>React (19) feature</div>
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
          <SyntaxHighlighter document={slideServer} />

          <SyntaxHighlighter document={slideClient} />
        </div>
        <div className="flex gap-8">
          <div className="flex-grow">
            <TypographyUL>
              <li>Renders on server</li>
              <li>Does not hydrate on client (no client js)</li>
            </TypographyUL>
          </div>
          <div className="flex-grow">
            <TypographyUL>
              <li>Renders on server</li>
              <li>Hydrates on client (client js)</li>
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
        <h2>The app router solution</h2>
      </TypographyH1>

      <Button className="mt-8" variant="secondary">
        Demo
      </Button>
    </div>
  )
}

export const slides = [
  SlideIntro,
  SlideTopics,
  SlidePagesProblem,
  SlideReactNext,
  SlideReactLand,
  SlideServer,
  SlideClient,
  SlideServerVsClient,
  SlideNextLand,
  SlideNextPage,
  SlideNextLayout,
  SlideNextLayoutTwo,
  SlideNextLayoutThree,
  SlideNextLayoutFile,
  SlideAppDemo,
]
