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
  TypographyOL,
  TypographyP,
  TypographyUL,
} from '@/_shared-components/ui/typography'
import { Card, CardContent } from '@/_shared-components/ui/card'
import { CodeSlide, FrameSlide, ImageSlide, TextSlide } from './variants'

import excalidrawSite from './screens/excalidraw-site.png'
import excalidrawPages from './screens/excalidraw-pages.png'
import excalidrawApp from './screens/excalidraw-app.png'

const HeroSlide = () => {
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
        <h3>Episode 2: Server vs Client</h3>
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

const serverVsClientServer = syntaxDocument`
  const Component = ({ title }: { title: string }) => {
    return (        
      <div>{title}</div>
    )
  }


`

const serverVsClientClient = syntaxDocument`
  'use client'

  const Component = ({ title }: { title: string }) => {
    return (        
      <div>{title}</div>
    )
  }
`

const ServerVsClientSlide = () => {
  return (
    <TextSlide title="Server vs Client component" maxWidth="none">
      <div className="flex gap-8">
        <TypographyH4 className="text-center flex-grow">
          Server component
        </TypographyH4>
        <TypographyH4 className="text-center flex-grow">
          Client component
        </TypographyH4>
      </div>
      <div className="flex gap-8">
        <div className="flex-grow">
          <SyntaxHighlighter document={serverVsClientServer} />
        </div>
        <div className="flex-grow">
          <SyntaxHighlighter document={serverVsClientClient} />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-grow">
          <TypographyUL>
            <li>Renders on server / build</li>
            <li>Does not hydrate on client</li>
            <li className="italic">Use: Fetch data</li>
            <li className="italic">
              Use: Heavy libraries into static content (RichText, etc)
            </li>
            <li className="italic">Should be default</li>
          </TypographyUL>
        </div>
        <div className="flex-grow">
          <TypographyUL>
            <li>Renders on server / build</li>
            <li>Hydrates on client</li>
            <li className="italic">Use: Client-side interactivity</li>
          </TypographyUL>
        </div>
      </div>
    </TextSlide>
  )
}

const CareSlide = () => (
  <TextSlide title={'Why should we care again?'} maxWidth="lg">
    <Card>
      <CardContent className="pt-4">
        <TypographyOL>
          <li className="text-xl">
            Performance: Reduces javascript bundle / document size
          </li>
          <li className="text-xl">
            State management: Reduces client-side data fetching
          </li>
        </TypographyOL>

        <p className="italic mt-8 text-lg">
          Improve client-side load, runtime performance - thus should improve
          user experience
        </p>
      </CardContent>
    </Card>
  </TextSlide>
)

const ClientCodeIntroSlide = () => (
  <TextSlide title={"Today's Topic: Performance"}>
    <p className="text-center text-lg">
      Load & runtime performance: how server and client components reduce
      javascript bundles / document size
    </p>
  </TextSlide>
)

const ClientCodeSiteSlide = () => {
  return (
    <ImageSlide
      src={excalidrawSite}
      alt="Image of site in excalidraw"
      title={'Example site'}
      heightClassName="h-[70svh]"
    >
      <p className="text-center">
        Design that serves as our example ({' '}
        <a
          className="underline"
          target="_blank"
          href="https://excalidraw.com/#json=opRrR0wMNujDWImugdwEH,wdohwW0xxH9Q1UbdroitGw"
        >
          interactive
        </a>{' '}
        )
      </p>
    </ImageSlide>
  )
}

const ClientCodeSitePagesIntroSlide = () => (
  <TextSlide title={'Example site - Pages router'}>
    <p className="text-lg text-center">
      Which elements of that design would load javascript in pages router?
    </p>
  </TextSlide>
)

const ClientCodeSitePagesSlide = () => {
  return (
    <ImageSlide
      src={excalidrawPages}
      alt="Image of site in excalidraw - all areas are marked red to signal they load client-side javascript"
      title={'Example site - Pages router'}
      heightClassName="h-[70svh]"
    >
      <p className="text-center">All of them.</p>
    </ImageSlide>
  )
}

const ClientCodeSitePagesDataSlide = () => (
  <TextSlide title={"And that's not all..."}>
    <p className="text-lg text-center">
      All of these components add json to the html page - which is used in
      hydration to resume client-side from the server state.
    </p>
  </TextSlide>
)

const ClientCodeSiteAppIntroSlide = () => (
  <TextSlide title={'Example site - App router'}>
    <p className="text-lg text-center">
      Which elements of that design <span className="italic">need</span> to load
      javascript? ({' '}
      <a
        className="underline"
        target="_blank"
        href="https://excalidraw.com/#json=opRrR0wMNujDWImugdwEH,wdohwW0xxH9Q1UbdroitGw"
      >
        interactive
      </a>{' '}
      )
    </p>
  </TextSlide>
)

const ClientCodeSiteAppSlide = () => {
  return (
    <ImageSlide
      src={excalidrawApp}
      alt="Image of site in excalidraw - a small amount of areas are marked red to signal they load client-side javascript"
      title={'Example site - App router'}
      heightClassName="h-[70svh]"
    >
      <p className="text-center">Goal: As few areas as possible</p>
    </ImageSlide>
  )
}

const AppCodeHeaderIntroSlide = () => (
  <TextSlide title={"Let's code"}></TextSlide>
)

const appCodeHeaderInitialCode = syntaxDocument`
  'use client'
  
  import { useCustomer } from './hooks/useCustomer'
  import { useCart } from './hooks/useCart'

  export const Header = () => {
    const { isLoggedIn } = useCustomer()
    const { totalQuantity } = useCart()

    return ( 
      <header>
        <nav aria-label="primary">
          <ul>
            <li>
              <a href="/">
                <span className="sr-only">Home</span>
                <img src="/logo.svg" alt="Logo" />
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="secondary">
          <ul>
            <li>
              <a href="/cart">Cart {totalQuantity > 0 ? \`(\${ totalQuantity })\` : null}</a>
            </li>
            <li>
              <a href={isLoggedIn ? '/logout' : '/login'}>{isLoggedIn ? 'Log out' : 'Log in'}</a>
            </li>
          </ul>
        </nav>
      </header>       
    )
  }
`

const AppCodeHeaderInitial = () => (
  <CodeSlide document={appCodeHeaderInitialCode} />
)

const appCodeHeaderImprovedCode = syntaxDocument`
  import { CartCounter } from './CartCounter'
  import { AuthLink } from './AuthLink'

  export const Header = () => {
    return ( 
      <header>
        <nav aria-label="primary">
          <ul>
            <li>
              <a href="/">
                <span className="sr-only">Home</span>
                <img src="/logo.svg" alt="Logo" />
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="secondary">
          <ul>
            <li>
              <a href="/cart">
                Cart <CartCounter />
              </a>
            </li>
            <li>
              <AuthLink />
            </li>
          </ul>
        </nav>
      </header>       
    )
  }
`

const appCodeHeaderImprovedImprovedCode = syntaxDocument`
  import { CartLinkWithCounter } from './CartLinkWithCounter'
  import { AuthLink } from './AuthLink'

  export const Header = () => {
    return ( 
      <header>
        <nav aria-label="primary">
          <ul>
            <li>
              <a href="/">
                <span className="sr-only">Home</span>
                <img src="/logo.svg" alt="Logo" />
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="secondary">
          <ul>
            <li>
              <CartLinkWithCounter />
            </li>
            <li>
              <AuthLink />
            </li>
          </ul>
        </nav>
      </header>       
    )
  }
`

const appCodeHeaderCartCounterCode = syntaxDocument`
  'use client'

  import { useCart } from './hooks/useCart'

  export const CartCounter = () => {
    const { totalQuantity } = useCart()

    return totalQuantity > 0 ? \`( \${ totalQuantity } )\` : null
  }
`

const appCodeHeaderAuthLinkCode = syntaxDocument`
  'use client'

  import { useCustomer } from './hooks/useCustomer'

  export const AuthLink = () => {
    const { isLoggedIn } = useCustomer()

    return (
      <a href={isLoggedIn ? '/logout' : '/login'}>{isLoggedIn ? 'Log out' : 'Log in'}</a>
    )
  }
`

const AppCodeHeaderCartCounter = () => (
  <CodeSlide document={appCodeHeaderCartCounterCode} />
)

const AppCodeHeaderAuthLink = () => (
  <CodeSlide document={appCodeHeaderAuthLinkCode} />
)

const AppCodeHeaderImproved = () => (
  <CodeSlide document={appCodeHeaderImprovedCode} />
)

const AppCodeHeaderImprovedImproved = () => (
  <CodeSlide document={appCodeHeaderImprovedImprovedCode} />
)

export const slides = [
  HeroSlide,
  ServerVsClientSlide,
  CareSlide,
  ClientCodeIntroSlide,
  ClientCodeSiteSlide,
  ClientCodeSitePagesIntroSlide,
  ClientCodeSitePagesSlide,
  ClientCodeSitePagesDataSlide,
  ClientCodeSiteAppIntroSlide,
  ClientCodeSiteAppSlide,
  AppCodeHeaderIntroSlide,
  AppCodeHeaderInitial,
  AppCodeHeaderCartCounter,
  AppCodeHeaderAuthLink,
  AppCodeHeaderImproved,
  AppCodeHeaderImprovedImproved,
]
