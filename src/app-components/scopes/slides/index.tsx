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
import excalidrawQuoteImprovement from './screens/excalidraw-quote-improvement.png'
import excalidrawHeroImprovement from './screens/excalidraw-hero-improvement.png'
import excalidrawHeaderImprovement from './screens/excalidraw-header-improvement.png'
import excalidrawPageImprovement from './screens/excalidraw-page-improvement.png'

const Hero = () => {
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

const ServerVsClient = () => {
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

const ServerClientMixing = () => (
  <TextSlide title="Server vs Client component - Mixing" maxWidth="lg">
    <Card>
      <CardContent className="pt-4 text-lg">
        <p className="mb-8">
          Server and client components can be mixed together
        </p>
        <TypographyUL>
          <li>
            Everything <span className="italic">imported</span> in a client
            component will load client-side
          </li>
          <li>
            Server components can be passed as props to client components - this
            will not load client-side
          </li>
          <li>Client components can be imported in server components safely</li>
          <li>Basically: Watch out with client-component imports ‼️</li>
        </TypographyUL>
      </CardContent>
    </Card>
  </TextSlide>
)

const serverClientMixingDo = syntaxDocument`
  import { ClientComponent } from './ClientComponent' // ✅ - the imported client-component will load its own javascript + serialized props, but this server component will not load anything

  const ServerComponent = ({ title }: { title: string }) => {
    return (
      <div>
        <h1>{title}</h1>
        <ClientComponent />
      </div>
    )
  }
`

const serverClientMixingDont = syntaxDocument`
  'use client'

  import { ServerComponent } from './ServerComponent' // ❌ - this server component will now trigger load of client-side javascript + serialized props for itself, even though it does not have 'use client' itself

  const ClientComponent = ({ title }: { title: string }) => {
    return (
      <div>
        <h1>{title}</h1>
        <ServerComponent />
      </div>
    )
  }
`

const ServerClientMixingDo = () => (
  <CodeSlide
    title="Server vs Client component - Mixing - Do"
    document={serverClientMixingDo}
  />
)

const ServerClientMixingDont = () => (
  <CodeSlide
    title="Server vs Client component - Mixing - Don't"
    document={serverClientMixingDont}
  />
)

const Care = () => (
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

const ClientCodeIntro = () => (
  <TextSlide title={"Today's Topic: Performance"}>
    <p className="text-center text-lg">
      Load & runtime performance: how server and client components reduce
      javascript bundles / document size
    </p>
  </TextSlide>
)

const ClientCodeSiteImage = () => {
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

const ClientCodeSitePagesIntro = () => (
  <TextSlide title={'Example site - Pages router'}>
    <p className="text-lg text-center">
      Which elements of that design would load javascript in pages router?
    </p>
  </TextSlide>
)

const ClientCodeSitePagesImage = () => {
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

const ClientCodeSitePagesData = () => (
  <TextSlide title={"And that's not all..."}>
    <p className="text-lg text-center">
      All of these components need to serialize their props and add them as JSON
      to the html page - which is used in hydration to resume client-side from
      the server state.
    </p>
  </TextSlide>
)

const pagesRouterCodePage = syntaxDocument`
  import { Header } from './Header'
  import { Hero } from './Hero'
  import { FeaturedProducts } from './FeaturedProducts'
  import { Quote } from './Quote'

  const HomePage = ({ story }) => {
    return (
      <main>
        <Header />
        <Hero {...story.content.hero} />
        <FeaturedProducts {...story.content.featuredProducts} />
        <Quote {...story.content.quote} />
      </main>
    )
  }

  export const getStaticProps = async () => {
    const story = await fetch('...')

    // story shape:
    // {
    //   content: {
    //     hero: { ... },
    //     instagramFeedThatIsNotUsedAnymore: { ... },
    //     featuredProducts: { ... },
    //     quote: { ... }
    //     footerThatIsNotUsedAnymore: { ... }
    //     ...
    //   }
    //   metadata: { ... }
    //   ...
    // }

    return {
      props: {
        story
      },
    }
  }

  export default HomePage
`

const PagesRouterCodePage = () => {
  return (
    <CodeSlide
      title="Example site - Pages router - React"
      document={pagesRouterCodePage}
    />
  )
}

const pagesRouterCodePageSource = syntaxDocument`
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
  </head>

  <body>
    <div id="__next">
      <header>
        <h1>Home</h1>
        
        <nav>
          <ul>
            <li><a>...</a></li>
            <li><a>...</a></li>
            <li><a>...</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <div>
            <h2>Hero</h2>
            <p>...</p>
          </div>
        </section>

        <section>
          <div>
            <h2>New in</h2>
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Quote</h2>
          <blockquote>
            <p>...</p>
          </blockquote>
          <footer>...</footer>
        </section>
      </main>
    </div>
  </body>
</html>
`

const pagesRouterCodePageSourceWithData = syntaxDocument`
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
  </head>

  <body>
    <div id="__next">
      <header>
        <h1>Home</h1>
        
        <nav>
          <ul>
            <li><a>...</a></li>
            <li><a>...</a></li>
            <li><a>...</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <div>
            <h2>Hero</h2>
            <p>...</p>
          </div>
        </section>

        <section>
          <div>
            <h2>New in</h2>
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Quote</h2>
          <blockquote>
            <p>...</p>
          </blockquote>
          <footer>...</footer>
        </section>
      </main>

      <script id="__NEXT_DATA__" type="application/json">
        {"props":{"pageProps":{"data":{"name":"Home","id":54795328,"uuid":"826f9dc6-9ff2-4734-91aa-483d7b52cc33","slug":"home","full_slug":"pages/home","first_published_at":"2021-06-11T07:46:20.000Z","content":{"seo":{"title":"Home | Aubade Jewelry","og_image":"","og_title":"","description":"Shop a carefully curated selection of fine jewelry, featuring unique gold and diamond pieces from leading jewelry brands around the world.","twitter_image":"","twitter_title":"","og_description":"","twitter_description":"","key":"17993a20-2ad6-4938-a1d2-3704d1bbd547"},"slides":[{"link":{"type":"internal","href":"/collections/ramadan-edit","hash":""},"title":"Ramadan Edit","assets":[{"key":"53802e00-1d37-4a0a-806f-2ed1b3751b21","type":"image","asset":{"id":14940105,"alt":"","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_private":false,"is_external_url":false,"dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/09e5e5dba1/dsc00164.jpg"},"component":"image"},{"key":"990e4932-e645-4554-b959-df7d65b653d4","type":"image","asset":{"id":14934786,"alt":"","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_private":false,"is_external_url":false,"dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/42def00eb2/dsc00136.jpeg"},"component":"image"}],"subtitle":"Explore our","backgroundColor":{"hex":"","key":"1b6c9c00-4965-47ad-9835-b28921f6ec64"},"forcedHeaderColor":"light","forcedHeaderColorLarge":"light","forcedTextColor":"light","forcedTextColorLarge":"light","assetPortrait":{"key":"c912a0ce-8b64-4fc3-a19e-cc286984cf4e","type":"image","asset":{"id":14934872,"alt":"","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_private":false,"is_external_url":false,"dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/64589c0a4d/dsc00164.jpeg"},"component":"image"},"gradient":true,"variant":"fullSplit","_editable":null,"component":"heroSlide","key":"dfecbaab-e8e0-4efd-8745-39e271d39305"},{"link":{"type":"external","href":"https://www.aubadejewelry.com/categories/all?designers=noor-fares","target":"_blank","rel":"noopener noreferrer"},"title":"Noor Fares","assets":[{"key":"2cdb6ba4-74f4-4793-ba06-79d29dd640d1","type":"image","asset":{"id":14934876,"alt":"","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_private":false,"is_external_url":false,"dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/1b03bbd4b9/dsc00218.jpeg"},"component":"image"},{"key":"3e14e432-d69a-4957-a2a1-1642eb9a2d72","type":"image","asset":{"id":14934875,"alt":"","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_private":false,"is_external_url":false,"dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/4de08964ee/dsc00216.jpeg"},"component":"image"}],"subtitle":"Introducing","backgroundColor":{"hex":"#cec2b5","key":"27ceb3de-f4b6-4b35-934f-fb4f4c7065fc"},"forcedHeaderColor":"light","forcedHeaderColorLarge":"dark","forcedTextColor":"light","forcedTextColorLarge":"dark","assetPortrait":{"key":"bcbd487b-9ac9-469b-b80c-c87572875bdf","type":"image","asset":{"id":14934876,"alt":"","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_private":false,"is_external_url":false,"dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/1b03bbd4b9/dsc00218.jpeg"},"component":"image"},"gradient":true,"variant":"compactEqual","_editable":null,"component":"heroSlide","key":"cc84335a-18e2-405e-b972-c8ee2923b472"},{"link":{"type":"internal","href":"/collections/lettre-de-lumiere","hash":""},"title":"Sophie Bille Brahe","assets":[{"key":"0be777d5-928d-4b32-8a8b-4c36c5ff6156","type":"image","asset":{"id":14631289,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/672e2508ea/dsc00043_3.JPEG"},"component":"image"}],"subtitle":"Discover Lettre de Lumière by","backgroundColor":{"hex":"","key":"60228238-9c16-41ef-ba38-2740103d4d1b"},"forcedHeaderColor":"light","forcedHeaderColorLarge":"light","forcedTextColor":"light","forcedTextColorLarge":"light","assetPortrait":null,"gradient":true,"variant":"fullSingle","_editable":null,"component":"heroSlide","key":"bf4bcbd6-220f-44a8-9733-ded8001a6857"},{"link":{"type":"internal","href":"/categories/all?designers=ascher","hash":""},"title":"Ascher","assets":[{"key":"663e7bb6-a384-43b1-8baa-394137b0117a","type":"image","asset":{"id":14041076,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/60fc5b564f/dsc00030_1.jpg"},"component":"image"},{"key":"3671d6cb-1397-4e3a-9f1c-ea61d55b218a","type":"image","asset":{"id":14041093,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/ebc54bff4d/dsc02649.jpg"},"component":"image"}],"subtitle":"New arrivals by","backgroundColor":{"hex":"#3b392a","key":"534bf4b7-e007-4776-83d8-81edb6c6a938"},"forcedHeaderColor":"light","forcedHeaderColorLarge":"light","forcedTextColor":"light","forcedTextColorLarge":"light","assetPortrait":null,"gradient":true,"variant":"compactEqual","_editable":null,"component":"heroSlide","key":"87fe15f9-9aff-4bd1-83a4-d8146901821d"}],"sections":[{"title":"New Arrivals","products":[{"uuid":"a191ed5c-3b03-4d03-8eb7-a3d35c87ebfe","slug":"nf90","name":"Rhombus Earrings ","firstPublishedAt":"2024-03-20T00:00:00.000Z","media":[{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":4632,"height":6176,"ratio":0.75},"focus":{"x":2316,"xPercent":50,"y":3088,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4632x6176/452b3722f9/noor-fares-earrings-14dgs.png"}},"title":"","headerColor":"dark","slideColors":"dark","variant":"product","_editable":null,"component":"asset","key":"30f7b0e6-5ba8-440a-b434-afde7ac8df30"},{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":6336,"height":8448,"ratio":0.75},"focus":{"x":3168,"xPercent":50,"y":4224,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x8448/d9dcafdce8/dsc00040.jpg"}},"title":"","headerColor":"dark","slideColors":"light","variant":"model","_editable":null,"component":"asset","key":"bfe24694-7ad2-4606-833b-8559c7b1359d"}],"isExclusive":false,"isComingSoon":false,"isBackInStock":false,"hasBeenInStock":null,"designerName":"Noor Fares","designerSlug":"noor-fares","commerceId":"9013281653036","commerceHandle":"nf90","commerceSelectedOptions":{},"commerceStatus":"active","key":"a191ed5c-3b03-4d03-8eb7-a3d35c87ebfe"},{"uuid":"4846428e-3c3c-436b-8c91-52a9aef373a1","slug":"ml123","name":"Eye Protect Rainbow Scapular on Spiga Chain","firstPublishedAt":"2024-03-24T10:41:13.937Z","media":[{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":4632,"height":6176,"ratio":0.75},"focus":{"x":2316,"xPercent":50,"y":3088,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4632x6176/a500f221bc/ml-00774_scapular-eye-will-rainbow-chaine-spiga-50_front.png"}},"title":"","headerColor":"dark","slideColors":"dark","variant":"product","_editable":null,"component":"asset","key":"77dccdc3-2583-4cf3-acda-f9244eb18be8"},{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":6336,"height":8448,"ratio":0.75},"focus":{"x":3168,"xPercent":50,"y":4224,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x8448/e6e208a6e5/dsc00047.jpg"}},"title":"","headerColor":"dark","slideColors":"light","variant":"model","_editable":null,"component":"asset","key":"b60499fd-4d83-420f-abec-d24704d73ffa"},{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":4632,"height":6176,"ratio":0.75},"focus":{"x":2316,"xPercent":50,"y":3088,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4632x6176/51cad85ecb/ml-00774_scapular-eye-will-rainbow-chaine-spiga-50_closeup_front.png"}},"title":"","headerColor":"dark","slideColors":"dark","variant":"product","_editable":null,"component":"asset","key":"aef5c670-07dd-4aee-8965-8fc88911eba0"},{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":4632,"height":6176,"ratio":0.75},"focus":{"x":2316,"xPercent":50,"y":3088,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4632x6176/bcd7f933d2/ml-00774_scapular-eye-will-rainbow-chaine-spiga-50_closeup_back.png"}},"title":"","headerColor":"dark","slideColors":"dark","variant":"product","_editable":null,"component":"asset","key":"0a861b47-94f6-47e5-b22b-4ed97fb06c3d"}],"isExclusive":false,"isComingSoon":false,"isBackInStock":false,"hasBeenInStock":null,"designerName":"Marie Lichtenberg","designerSlug":"marie-lichtenberg","commerceId":"8836128702764","commerceHandle":"ml123","commerceSelectedOptions":{},"commerceStatus":"active","key":"4846428e-3c3c-436b-8c91-52a9aef373a1"},{"uuid":"0ccf5ba9-d5fc-4e3c-84f6-40ff546c7fc4","slug":"sbb018","name":"Ensemble Letter B Ring ","firstPublishedAt":"2024-03-15T00:00:00.000Z","media":[{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":4632,"height":6176,"ratio":0.75},"focus":{"x":2316,"xPercent":50,"y":3088,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4632x6176/f3e4b25de7/b.PNG"}},"title":"","headerColor":"dark","slideColors":"dark","variant":"product","_editable":null,"component":"asset","key":"0667c45e-e473-4c66-b5d3-b670bef1dccb"},{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":6336,"height":8448,"ratio":0.75},"focus":{"x":3168,"xPercent":50,"y":4224,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x8448/2c70037954/dsc00023_1.jpg"}},"title":"","headerColor":"dark","slideColors":"light","variant":"model","_editable":null,"component":"asset","key":"d60b29f0-780e-4ddf-90c8-9218dfe381ab"}],"isExclusive":false,"isComingSoon":false,"isBackInStock":false,"hasBeenInStock":null,"designerName":"Sophie Bille Brahe","designerSlug":"sophie-bille-brahe","commerceId":"9024174915884","commerceHandle":"sbb018","commerceSelectedOptions":{},"commerceStatus":"active","key":"0ccf5ba9-d5fc-4e3c-84f6-40ff546c7fc4"},{"uuid":"cf18be00-2596-4ff9-8896-3eea85c08d0e","slug":"ja285","name":"3 Row Diamond Pave Rectangle Mini Hoop","firstPublishedAt":"2024-02-27T00:00:00.000Z","media":[{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":4632,"height":6176,"ratio":0.75},"focus":{"x":2316,"xPercent":50,"y":3088,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4632x6176/ac356baee6/yg-3-row-pave-dia-rectangle-mini-hoop.png"}},"title":"","headerColor":"dark","slideColors":"dark","variant":"product","_editable":null,"component":"asset","key":"a8b1bd56-41ea-4267-970c-208144d8abd3"},{"asset":{"type":"image","asset":{"alt":"","dimensions":{"width":6336,"height":8448,"ratio":0.75},"focus":{"x":3168,"xPercent":50,"y":4224,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x8448/67f886969a/dsc00079.jpg"}},"title":"","headerColor":"dark","slideColors":"light","variant":"model","_editable":null,"component":"asset","key":"4076a619-6027-424a-b74e-fef13ad295ff"}],"isExclusive":false,"isComingSoon":false,"isBackInStock":false,"hasBeenInStock":null,"designerName":"Jacquie Aiche","designerSlug":"jacquie-aiche","commerceId":"8987233386796","commerceHandle":"ja285","commerceSelectedOptions":{},"commerceStatus":"active","key":"cf18be00-2596-4ff9-8896-3eea85c08d0e"}],"cta":{"label":"Shop new arrivals","link":{"href":"/new-in","type":"internal","hash":""}},"assetVariant":"model","_editable":null,"component":"sectionNewArrivals","key":"a84ed82b-a116-4e6a-a2bb-577504340ccd"},{"title":"Follow designers \u0026 studios you love","description":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Save your favorite designers by clicking on the star icon and we will be the first to show you more from these brands.","type":"text","marks":[{"type":"styled","attrs":{"class":""}}]}]},{"type":"paragraph","content":[{"type":"hard_break"}]}]},"designers":[{"uuid":"f84b587f-70de-4e28-aed7-7cab1a027cdd","slug":"anita-ko","name":"Anita Ko","asset":{"type":"image","asset":{"id":4384597,"alt":"Designer Anita Ko","name":"","title":"Designer Anita Ko","copyright":"","fieldtype":"asset","dimensions":{"width":1500,"height":1792,"ratio":0.8370535714285714},"focus":{"x":825,"xPercent":55,"y":452,"yPercent":25.22},"filename":"https://a.storyblok.com/f/116756/1500x1792/56843dfcce/anita-ko.jpg"}},"key":"f84b587f-70de-4e28-aed7-7cab1a027cdd"},{"uuid":"11185f5c-6bd1-40ac-929b-57e9f89b6fe9","slug":"carolina-bucci","name":"Carolina Bucci","asset":{"type":"image","asset":{"id":4384716,"alt":"Designer Carolina Bucci","name":"","title":"Designer Carolina Bucci","copyright":"","fieldtype":"asset","dimensions":{"width":5455,"height":3637,"ratio":1.49986252405829},"focus":{"x":3469,"xPercent":63.59,"y":677,"yPercent":18.61},"filename":"https://a.storyblok.com/f/116756/5455x3637/5f090144e5/carolina-bucci.jpeg"}},"key":"11185f5c-6bd1-40ac-929b-57e9f89b6fe9"},{"uuid":"53c8c273-5933-4e4e-8ca8-211626e53c2b","slug":"jacquie-aiche","name":"Jacquie Aiche","asset":{"type":"image","asset":{"id":4384947,"alt":"Designer Jacquie Aiche","name":"","title":"Designer Jacquie Aiche","copyright":"","fieldtype":"asset","dimensions":{"width":3828,"height":3230,"ratio":1.1851393188854489},"focus":{"x":1891,"xPercent":49.39,"y":690,"yPercent":21.36},"filename":"https://a.storyblok.com/f/116756/3828x3230/14d668da40/jacquie-aiche.jpeg"}},"key":"53c8c273-5933-4e4e-8ca8-211626e53c2b"},{"uuid":"ae1ebcbb-31a7-4797-a48b-696aaaac3d7e","slug":"lizzie-mandler","name":"Lizzie Mandler","asset":{"type":"image","asset":{"id":7414943,"alt":"Lizzie Mandler","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1944,"height":2018,"ratio":0.9633300297324083},"focus":{"x":745,"xPercent":38.32,"y":315,"yPercent":15.6},"filename":"https://a.storyblok.com/f/116756/1944x2018/fc9c72bd19/lizzie_mandler_new_transformed-squooshed.jpeg"}},"key":"ae1ebcbb-31a7-4797-a48b-696aaaac3d7e"},{"uuid":"d3b91aba-da40-4925-be2e-06b4b695ba01","slug":"marie-lichtenberg","name":"Marie Lichtenberg","asset":{"type":"image","asset":{"id":4385343,"alt":"Image of Marie Lichtenberg","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":3561,"height":4551,"ratio":0.7824653922214898},"focus":{"x":2075,"xPercent":58.27,"y":1295,"yPercent":28.45},"filename":"https://a.storyblok.com/f/116756/3561x4551/b88487e7b6/marie-lichtenberg.jpg"}},"key":"d3b91aba-da40-4925-be2e-06b4b695ba01"},{"uuid":"c16ef02f-281d-498a-b316-825b82864a39","slug":"repossi","name":"Repossi","asset":{"type":"image","asset":{"id":7415931,"alt":"Gaia Repossi","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":2314,"height":3000,"ratio":0.7713333333333333},"focus":{"x":1139,"xPercent":49.22,"y":13,"yPercent":0.43},"filename":"https://a.storyblok.com/f/116756/2314x3000/a86a2cf8fa/gaia-transformed-squooshed.jpeg"}},"key":"c16ef02f-281d-498a-b316-825b82864a39"},{"uuid":"be362cdd-08c8-4860-ba04-0e354404947c","slug":"shay","name":"Shay","asset":{"type":"image","asset":{"id":4385415,"alt":"Designer Shay","name":"","title":"Designer Shay","copyright":"","fieldtype":"asset","dimensions":{"width":1548,"height":1068,"ratio":1.449438202247191},"focus":{"x":737,"xPercent":47.6,"y":4,"yPercent":0.37},"filename":"https://a.storyblok.com/f/116756/1548x1068/c01047b5ca/shay.jpg"}},"key":"be362cdd-08c8-4860-ba04-0e354404947c"},{"uuid":"197e068c-583d-4f6b-8a02-6c6fc7619ab1","slug":"spinelli-kilcollin","name":"Spinelli Kilcollin","asset":{"type":"image","asset":{"id":7415996,"alt":"Spinelli Kilcollin","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6240,"height":4160,"ratio":1.5},"focus":{"x":3073,"xPercent":49.24,"y":73,"yPercent":1.75},"filename":"https://a.storyblok.com/f/116756/6240x4160/f8660cf03e/spinelli-kilcollin-squooshed.jpeg"}},"key":"197e068c-583d-4f6b-8a02-6c6fc7619ab1"}],"ctaLabel":"View all designers","_editable":null,"component":"sectionFeaturedDesigners","key":"bff1e5d7-279d-49c4-b9fa-35821c2b5074"},{"title":"Looking for something specific?","description":"Shop by category to find your perfect piece of jewelry","_editable":null,"component":"sectionCategoryGuidance","key":"38983bcc-0f1f-454e-8eaa-4c983a295adf"},{"component":"sectionLiveConsultancyCard","key":"d84a9a6e-4fef-499f-86f1-67d3f2eb419d"},{"links":[{"asset":{"type":"image","asset":{"id":12290886,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/6cafbfbeec/img_1024.PNG"}},"link":{"label":"New Arrivals","link":{"type":"internal","href":"/new-in","hash":""},"_editable":null,"component":"link","key":"39200da7-a550-45a5-a31a-315a2e28af51"},"_editable":null,"component":"blockNavigationCard","key":"b82fc926-33ae-449c-b602-0160fcecf263"},{"asset":{"type":"image","asset":{"id":4385507,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":4800,"height":7199,"ratio":0.666759272121128},"focus":{"x":2400,"xPercent":50,"y":3599.5,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4800x7199/0f98847c45/venyx.jpg"}},"link":{"label":"Meet Our Designers","link":{"type":"internal","href":"/designers","hash":""},"_editable":null,"component":"link","key":"5a93fdc5-c858-4634-88c5-cb5081c95a8a"},"_editable":null,"component":"blockNavigationCard","key":"3632605e-9699-4625-90f4-79bced74fb9e"},{"asset":{"type":"image","asset":{"id":12290948,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1080,"height":1350,"ratio":0.8},"focus":{"x":540,"xPercent":50,"y":675,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1080x1350/7db7c1c2b0/studio-project-1.png"}},"link":{"label":"Curated Collections","link":{"type":"internal","href":"/collections","hash":""},"_editable":null,"component":"link","key":"30307978-4ebe-4ad0-9c39-d29ce7606c3f"},"_editable":null,"component":"blockNavigationCard","key":"de1a2202-86d6-4efa-a3a2-889a450a9e87"},{"asset":{"type":"image","asset":{"id":12290978,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":7952,"height":5296,"ratio":1.501510574018127},"focus":{"x":3976,"xPercent":50,"y":2648,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/7952x5296/1dce4c064e/1.jpeg"}},"link":{"label":"Gift Guides","link":{"type":"internal","href":"/gift-guides","hash":""},"_editable":null,"component":"link","key":"dc39ba7f-07b0-4893-a8bd-7faa894d6c49"},"_editable":null,"component":"blockNavigationCard","key":"7be08d9c-0836-416b-86ee-3264f12dec0a"}],"title":"What are you looking for?","component":"sectionNavigation","key":"72b638f0-a6f4-44d4-ad1e-303366bf99f4"},{"component":"sectionVirtualRingSizerCard","key":"6863e3fb-02ba-4b1c-aabe-40faa61c9fe0"},{"title":"From our Journal","articles":[{"name":"Meet the designers · Interview with Noor Fares","slug":"interview-noor-fares","date":"2024-03-17T09:12:00.000Z","categoryName":"Designer Interview","journalTypeSlug":"interviews","asset":{"type":"image","asset":{"id":4385386,"alt":"Designer Noor Fares","name":"","title":"Designer Noor Fares","copyright":"","fieldtype":"asset","dimensions":{"width":1100,"height":1650,"ratio":0.6666666666666666},"focus":{"x":426,"xPercent":38.72,"y":709,"yPercent":42.96},"filename":"https://a.storyblok.com/f/116756/1100x1650/2b89c59dd0/noor-fares.jpg"}},"key":"ade2a889-2592-48c7-8cff-bb7ac4ed6c56"},{"name":"The Ramadan Edit","slug":"the-ramadan-edit","date":"2024-03-27T07:10:50.855Z","categoryName":"Buyer's Edit","journalTypeSlug":"articles","asset":{"type":"image","asset":{"id":14934876,"alt":"","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_private":false,"is_external_url":false,"dimensions":{"width":6336,"height":9504,"ratio":0.6666666666666666},"focus":{"x":3168,"xPercent":50,"y":4752,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x9504/1b03bbd4b9/dsc00218.jpeg"}},"key":"6e492318-8afc-436d-976a-2f2389345822"}],"ctaLabel":"View more articles","_editable":null,"component":"sectionFeaturedArticles","key":"fc0d5989-f72e-41ec-be3e-231aca180115"},{"cta":"Get directions","asset":{"type":"image","asset":{"id":2750170,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1300,"height":1300,"ratio":1},"focus":{"x":650,"xPercent":50,"y":650,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1300x1300/dc0bd6d6c4/store.png"}},"title":"Visit our boutique in Qibla, Kuwait","addressLink":"https://g.page/aubadejewelry?share","addressStreet":"Mohammed Thunayan AlGhanim St","addressBuilding":"Salhiya Complex, Floor M1","countryWhitelist":{"items":["KW","US","NL"],"key":"176d406c-5fc6-4bf6-ac56-398e2018f558"},"component":"sectionStore","key":"4b216c4a-ac49-4fc6-b59e-ea6dac909a30"},{"title":"Visit our boutiques","stores":[],"component":"sectionStores","key":"db6909f4-b767-4c7b-ab65-04046f04aa22"},{"posts":[{"id":"https://www.instagram.com/p/Co7H_lmNA3-/","caption":"First Post","href":"https://www.instagram.com/p/Co7H_lmNA3-/","asset":{"type":"image","asset":{"id":7513431,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":6324,"ratio":1.0018975332068312},"focus":{"x":3168,"xPercent":50,"y":3162,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x6324/c12e7cb9d1/ig1.jpeg"}}},{"id":"https://www.instagram.com/p/CklEWVkjqRl/","caption":"Second post","href":"https://www.instagram.com/p/CklEWVkjqRl/","asset":{"type":"image","asset":{"id":7513459,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":6324,"ratio":1.0018975332068312},"focus":{"x":3168,"xPercent":50,"y":3162,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x6324/ed74e4edba/ig2.jpeg"}}},{"id":"https://www.instagram.com/p/CkqKHQHDsA2/","caption":"Third post","href":"https://www.instagram.com/p/CkqKHQHDsA2/","asset":{"type":"image","asset":{"id":7513478,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":6324,"ratio":1.0018975332068312},"focus":{"x":3168,"xPercent":50,"y":3162,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x6324/15c851afd3/ig3.jpeg"}}},{"id":"https://www.instagram.com/p/CfECKsHAPKx/","caption":"Fourth post","href":"https://www.instagram.com/p/CfECKsHAPKx/","asset":{"type":"image","asset":{"id":7513491,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":6324,"ratio":1.0018975332068312},"focus":{"x":3168,"xPercent":50,"y":3162,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x6324/5844b7745c/ig4.jpeg"}}},{"id":"https://www.instagram.com/p/Chjo7Rdg9Pz/","caption":"Fifth post","href":"https://www.instagram.com/p/Chjo7Rdg9Pz/","asset":{"type":"image","asset":{"id":7513497,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":6324,"ratio":1.0018975332068312},"focus":{"x":3168,"xPercent":50,"y":3162,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x6324/1e8a7d9c21/ig5.jpeg"}}},{"id":"https://www.instagram.com/p/CnwnK38Nw-P/","caption":"Sixth post","href":"https://www.instagram.com/p/CnwnK38Nw-P/","asset":{"type":"image","asset":{"id":7513536,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6336,"height":6324,"ratio":1.0018975332068312},"focus":{"x":3168,"xPercent":50,"y":3162,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6336x6324/fc33f8dc24/ig6.jpeg"}}}],"title":"Follow us on Instagram","hashtag":"@aubadejewelry","hashtagLink":"https://www.instagram.com/aubadejewelry/","_editable":null,"component":"sectionInstagram","key":"b4b52b5f-f5d7-4026-822d-56199f2fa91a"}],"component":"pageHome","key":"5128ab0d-97ef-470f-9c77-ec97130b200a"},"meta_data":null,"key":"826f9dc6-9ff2-4734-91aa-483d7b52cc33"},"fetchArgs":{"slug":"pages/home","params":{"resolve_relations":["detailPageProduct.designer","sectionNewArrivals.products","sectionFeaturedDesigners.designers","sectionFeaturedArticles.articles","sectionStores.stores","journalArticleInterview.designer","journalArticle.category","journalArticleStaffQA.teamMember"]},"preview":null},"preview":null,"categories":[{"slug":"all","name":"Shop All","asset":{"type":"image","asset":{"id":7682275,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1080,"height":1080,"ratio":1},"focus":{"x":540,"xPercent":50,"y":540,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1080x1080/f561617468/studio-project3-2.png"}},"key":"095581a3-2cc1-40bc-ba1d-840dc7daf1c8"},{"slug":"necklace","name":"Necklaces","asset":{"type":"image","asset":{"id":7813648,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/19ecdcaea5/9ea3585d-6d71-405b-b762-bf21644b0bb4.png"}},"key":"b88e80b9-a62a-4412-80e6-2cdb4ba8ec39"},{"slug":"earrings","name":"Earrings","asset":{"type":"image","asset":{"id":7821389,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/861b07f27f/e3202c4a-b55b-49c0-b017-9908dc5bea72.png"}},"key":"20d0d711-a3eb-420d-a0ac-836513b344bc"},{"slug":"rings","name":"Rings","asset":{"type":"image","asset":{"id":7810582,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/17a6dff779/75fc4c9c-1643-41f9-ae24-85daac6d4c8e.png"}},"key":"77766c73-17ba-4d83-af80-036fc05686a2"},{"slug":"bracelets","name":"Bracelets","asset":{"type":"image","asset":{"id":7811156,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/46e8c44dcc/896ae5bf-bccd-44f4-9e6d-3dc333124912.png"}},"key":"9a9d22cd-a1e4-49f2-bd48-9f3abd684418"},{"slug":"anklets","name":"Anklets","asset":{"type":"image","asset":{"id":7811861,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/aef331697a/6c3bed44-88e6-494b-9faf-5c16f581fee1.png"}},"key":"3ed2b334-1004-4386-937b-bc31bb5e579f"},{"slug":"chains","name":"Chains","asset":{"type":"image","asset":{"id":7813675,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/0a1cf163d5/077b889d-c3cf-4b97-b1cf-1452f8704536.png"}},"key":"c217a145-cc9c-4785-94ea-b50532e464ce"},{"slug":"charms","name":"Charms","asset":{"type":"image","asset":{"id":7811158,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/5c71493665/ece38c55-47d3-4051-bf40-a41c6997d830.png"}},"key":"ebd3f4f2-e422-4f89-b0ed-1027f7b6f9fb"},{"slug":"body-jewelry","name":"Body Jewelry","asset":{"type":"image","asset":{"id":7787911,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/41433ee7a2/img_5123.PNG"}},"key":"1f59e420-2893-4fe9-9543-cf2734bdd7ed"},{"slug":"lifestyle","name":"Lifestyle","asset":{"type":"image","asset":{"id":7766460,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":1536,"height":2048,"ratio":0.75},"focus":{"x":768,"xPercent":50,"y":1024,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1536x2048/6c9f9fa2b6/img_4964.PNG"}},"key":"0966f6f6-dfce-4afc-ad1b-cb3f56bdf40a"}],"stores":[{"slug":"kuwait","city":"Kuwait City","country":"Kuwait","countryCode":"KW","asset":{"key":"80804897-82af-4a47-8a3a-8abd4f464351","type":"image","asset":{"id":7476133,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":6682,"height":5200,"ratio":1.285},"focus":{"x":3341,"xPercent":50,"y":2600,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/6682x5200/ea5f9659b5/dsc08779.jpg"},"component":"image"},"key":"a69898d1-f852-4a22-a21d-3b02f43dee62"},{"slug":"dubai","city":"Dubai","country":"United Arab Emirates","countryCode":"AE","asset":{"key":"a222b10d-a1b0-4569-baf3-7051313e085e","type":"image","asset":{"id":7476114,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":2950,"height":1967,"ratio":1.4997458057956279},"focus":{"x":1475,"xPercent":50,"y":983.5,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/2950x1967/acc773cccf/g12a8493.jpg"},"component":"image"},"key":"143b0c70-9479-4105-8966-4e72afc888da"}],"liveConsultancyCard":{"asset":{"key":"80895d77-5b57-4cd3-90e7-6d682c14ef7c","type":"image","asset":{"id":12334068,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":9504,"height":6336,"ratio":1.5},"focus":{"x":4752,"xPercent":50,"y":3168,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/9504x6336/d52231bf4d/hd2.jpeg"},"component":"image"},"subtitle":"Expert advice","title":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Meet your personal ","type":"text"}]},{"type":"paragraph","content":[{"text":"jewelry expert","type":"text"}]}]},"description":"We are delighted to offer video consultations with our in-house jewelry specialists.","ctaLabel":"Book your consultation","component":"cardGlobalLiveConsultancy"},"ringSizerCard":{"asset":{"key":"705462f8-c68c-44a7-8f47-e5526ca5924f","type":"image","asset":{"id":3777057,"alt":"","name":"","title":"","copyright":"","fieldtype":"asset","dimensions":{"width":4387,"height":5850,"ratio":0.7499145299145299},"focus":{"x":2193.5,"xPercent":50,"y":2925,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/4387x5850/9b54c08c4d/ring-z.png"},"component":"image"},"assetObjectFit":"cover","title":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Find your perfect ring","type":"text"}]},{"type":"paragraph","content":[{"text":"size with our virtual","type":"text"}]},{"type":"paragraph","content":[{"text":"ring sizer","type":"text"}]}]},"subtitle":"Expert advice","description":"Grab a ring that fits, and have a credit card-sized card at hand. Next, we will determine your screen resolution.","linkText":"Try our virtual ring sizer","component":"cardGlobalRingSizer"},"instagramPosts":[{"id":null,"caption":"CHOOSE YOUR CHAIN: Whether it’s rope, herringbone or box, Zoe Chicco’s gold chains make for the perfect everyday layer. Tap the link in bio to shop at #AUBADEJEWELRY.","asset":{"type":"image","asset":{"id":14769383,"alt":"CHOOSE YOUR CHAIN: Whether it’s rope, herringbone or box, Zoe Chicco’s gold chains make for the perfect everyday layer. Tap the link in bio to shop at #AUBADEJEWELRY.","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_external_url":false,"dimensions":{"width":2000,"height":2000,"ratio":1},"focus":{"x":1000,"xPercent":50,"y":1000,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/2000x2000/e03783950f/instagram-post-17850482259160350.jpg"}},"href":"https://www.instagram.com/p/C4p9rB1NGTM/"},{"id":null,"caption":"SETTING SUN: Striking and mystical, discover Venyx’s beautiful and unique pieces inspired by nature and fantasy. Tap the link in bio to shop at #AUBADEJEWELRY.","asset":{"type":"image","asset":{"id":14677630,"alt":"SETTING SUN: Striking and mystical, discover Venyx’s beautiful and unique pieces inspired by nature and fantasy. Tap the link in bio to shop at #AUBADEJEWELRY.","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_external_url":false,"dimensions":{"width":2000,"height":2000,"ratio":1},"focus":{"x":1000,"xPercent":50,"y":1000,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/2000x2000/9fc91ca711/instagram-post-18029013745934274.jpg"}},"href":"https://www.instagram.com/p/C4ddlT-NllR/"},{"id":null,"caption":"ALL EYES ON YOU: This Ramadan, embrace intricate jewels with a bright pop of color to go perfectly with your kaftans. Tap the link in bio to explore our carefully curated edit for the season, only at #AUBADEJEWELRY.","asset":{"type":"image","asset":{"id":14576584,"alt":"ALL EYES ON YOU: This Ramadan, embrace intricate jewels with a bright pop of color to go perfectly with your kaftans. Tap the link in bio to explore our carefully curated edit for the season, only at #AUBADEJEWELRY.","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_external_url":false,"dimensions":{"width":2000,"height":2000,"ratio":1},"focus":{"x":1000,"xPercent":50,"y":1000,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/2000x2000/720cec2f8f/instagram-post-18002743541210640.jpg"}},"href":"https://www.instagram.com/p/C4Qng6gN3ud/"},{"id":null,"caption":"GENTLE GEOMETRY: Ascher’s Bubble collection plays with softer edges for a more summery feel. The latest launch showcases new styles in emerald, a stone that holds a special meaning to the designer. Head on over to stories to read more about the inspiration behind the collection.","asset":{"type":"image","asset":{"id":14416670,"alt":"GENTLE GEOMETRY: Ascher’s Bubble collection plays with softer edges for a more summery feel. The latest launch showcases new styles in emerald, a stone that holds a special meaning to the designer. Head on over to stories to read more about the inspiration behind the collection.","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_external_url":false,"dimensions":{"width":2000,"height":2000,"ratio":1},"focus":{"x":1000,"xPercent":50,"y":1000,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/2000x2000/8147682877/instagram-post-17914171043808853.jpg"}},"href":"https://www.instagram.com/p/C37uJYYtjDa/"},{"id":null,"caption":"Unveiling our Ramadan campaign, starting with these beautiful crystal earrings by NOOR FARES. Explore our Ramadan new arrivals in store and soon online. ✨","asset":{"type":"image","asset":{"id":14159828,"alt":"Unveiling our Ramadan campaign, starting with these beautiful crystal earrings by NOOR FARES. Explore our Ramadan new arrivals in store and soon online. ✨","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_external_url":false,"dimensions":{"width":2000,"height":2000,"ratio":1},"focus":{"x":1000,"xPercent":50,"y":1000,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/2000x2000/16f75bb7da/instagram-post-17913159644805383.jpg"}},"href":"https://www.instagram.com/p/C3kcWr0NQIH/"},{"id":null,"caption":"EMERALD EXCLUSIVE: Did you know that over the years we’ve collaborated with our brands for Aubade exclusives? Here, we created an exclusive piece with Spinelli Kilcollin, inspired by one of the most popular configurations ordered by our clients.","asset":{"type":"image","asset":{"id":14119926,"alt":"EMERALD EXCLUSIVE: Did you know that over the years we’ve collaborated with our brands for Aubade exclusives? Here, we created an exclusive piece with Spinelli Kilcollin, inspired by one of the most popular configurations ordered by our clients.","name":"","title":"","source":"","copyright":"","fieldtype":"asset","meta_data":{},"is_external_url":false,"dimensions":{"width":1703,"height":1703,"ratio":1},"focus":{"x":851.5,"xPercent":50,"y":851.5,"yPercent":50},"filename":"https://a.storyblok.com/f/116756/1703x1703/7e9556faa0/instagram-post-17948886941650214.jpg"}},"href":"https://www.instagram.com/p/C3Z8T_Mty8k/"}]},"__N_SSG":true},"page":"/","query":{},"buildId":"AFvTWNUaOo7OwUQb3KE2q","isFallback":false,"gsp":true,"scriptLoader":[]}
      </script>
    </div>
  </body>
</html>
`

const PagesRouterCodePageSource = () => (
  <CodeSlide
    document={pagesRouterCodePageSource}
    title="Example site - Pages router - HTML Source"
  />
)

const PagesRouterCodePageSourceWithData = () => (
  <CodeSlide
    document={pagesRouterCodePageSourceWithData}
    title="Example site - Pages router - Actual HTML Source"
    wrapLongLines
  />
)

const AppRouterIntro = () => (
  <TextSlide title={'Solution (?)'}>
    <p className="text-lg text-center">Server and client components!</p>
  </TextSlide>
)

const ClientCodeSiteAppIntro = () => (
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

const ClientCodeSiteAppImage = () => {
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

const AppCodeCodeIntro = () => (
  <TextSlide title={'Code patterns'}>
    <TypographyUL>
      <li>
        Header component example -{' '}
        <span className="italic">maximizing static</span>
      </li>
      <li>
        Quote component example -{' '}
        <span className="italic">minimize large libraries</span>
      </li>
      <li>
        Hero component example -{' '}
        <span className="italic">cross-component communication</span>
      </li>
    </TypographyUL>
  </TextSlide>
)

const AppCodeHeaderIntro = () => (
  <TextSlide title={'Example: Header'}>
    <p>About maximizing static html</p>
  </TextSlide>
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

const AppCodeHeaderInitialCode = () => (
  <CodeSlide
    document={appCodeHeaderInitialCode}
    title="Initial: Header - Pages router / fully client-side code"
  />
)

const appCodeHeaderImprovedCode = syntaxDocument`
  // removed "use client" directive
  import { CartLink } from './CartLink'
  import { AuthLink } from './AuthLink'

  export const Header = () => {
    // removed hooks
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
              <CartLink />
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

const appCodeHeaderCartLinkCode = syntaxDocument`
  'use client'

  import { useCart } from './hooks/useCart'

  export const CartLink = () => {
    const { totalQuantity } = useCart()

    return <a href="/cart">Cart{totalQuantity > 0 ? \` ( \${ totalQuantity } )\` : ''}</a>
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

const AppCodeHeaderCartLinkCode = () => (
  <CodeSlide document={appCodeHeaderCartLinkCode} title="Cart link" />
)

const AppCodeHeaderAuthLinkCode = () => (
  <CodeSlide document={appCodeHeaderAuthLinkCode} title="Auth link" />
)

const AppCodeHeaderCombinedCode = () => (
  <CodeSlide
    document={appCodeHeaderImprovedCode}
    title={'Improved: Header - Server / Client mixed code'}
    highlightLines={[1, 2, 3, 6, 23, 26]}
  />
)

const AppCodeHeaderImprovementImage = () => (
  <ImageSlide
    src={excalidrawHeaderImprovement}
    alt="Image of a hero component in excalidraw - a small amount of areas are marked red to signal they load client-side javascript"
    title={'Improved: Header graphic'}
    heightClassName="h-[70svh]"
  ></ImageSlide>
)

const AppCodeQuoteIntro = () => (
  <TextSlide title={'Example: Quote component'}>
    <p>About keeping heavy js libs on the server</p>
  </TextSlide>
)

const AppCodeQuoteFrame = () => (
  <FrameSlide src="/app/quote" title="RichText + Animation" />
)

const appCodeQuoteCode = syntaxDocument`
'use client'

import { m } from 'framer-motion'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'

const OPTIONS = {
  renderNode: {
    [BLOCKS.QUOTE]: (_, children) => {
      return <blockquote>{children}</blockquote>
    },
  },
} satisfies Options

type SectionQuoteProps = {
  document: Document
  quotee: string
}

export const SectionQuote = ({ document, quotee }: SectionQuoteProps) => {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {documentToReactComponents(document, OPTIONS)}
      <footer>— {quotee}</footer>
    </m.div>
  )
}
`

const AppCodeQuoteInitialCode = () => (
  <CodeSlide
    document={appCodeQuoteCode}
    title="Initial: Quote - Pages router / fully client-side code"
  />
)

const appCodeQuoteServerCode = syntaxDocument`
// removed "use client" directive
// removed framer-motion imports

import { BLOCKS, Document } from '@contentful/rich-text-types'
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'

const OPTIONS = {
  renderNode: {
    [BLOCKS.QUOTE]: (_, children) => {
      return <blockquote>{children}</blockquote>
    },
  },
} satisfies Options

export type SectionQuoteContentProps = {
  document: Document
  quotee: string
}

export const SectionQuoteContent = ({ document, quotee }: SectionQuoteContentProps) => {
  return (
    <>
      {documentToReactComponents(document, OPTIONS)}
      <footer>— {quotee}</footer>
    </>
  )
}
`

const AppCodeQuoteServerCode = () => (
  <CodeSlide
    document={appCodeQuoteServerCode}
    title="Server"
    highlightLines={[1, 2, 25, 28]}
  />
)

const appCodeQuoteClientCode = syntaxDocument`
'use client'

import { m } from 'framer-motion'

export const SectionQuoteAnimation = ({ children }: React.PropsWithChildren) => {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </m.div>
  )
}
`

const AppCodeQuoteClientCode = () => (
  <CodeSlide document={appCodeQuoteClientCode} title="Client" />
)

const appCodeQuoteCombinedCode = syntaxDocument`
import { SectionQuoteAnimation } from './SectionQuoteAnimation'
import { SectionQuoteContent, type SectionQuoteContentProps } from './SectionQuoteContent'


export const SectionQuote = (props: SectionQuoteContentProps) => {
  return (
    <SectionQuoteAnimation>
      <SectionQuoteContent {...props} />
    </SectionQuoteAnimation>
  )
}
`

const AppCodeQuoteCombinedCode = () => (
  <CodeSlide
    document={appCodeQuoteCombinedCode}
    title="Improved: Quote - Server / Client mixed code"
  />
)

const AppCodeQuoteImprovementImage = () => (
  <ImageSlide
    src={excalidrawQuoteImprovement}
    alt="Image of a quote component in excalidraw - a small amount of areas are marked red to signal they load client-side javascript"
    title={'Improved: Quote graphic'}
    heightClassName="h-[70svh]"
  ></ImageSlide>
)

const AppCodeHeroIntro = () => (
  <TextSlide title={'Example: Hero component - carousel'}>
    <p>About cross-component communication</p>
  </TextSlide>
)

const AppCodeHeroFrame = () => {
  return <FrameSlide src="/app/hero" title="Hero" />
}

const appCodeHeroCarouselCode = syntaxDocument`
'use client'

import { m, useMotionValueEvent } from 'framer-motion'
import { useRef } from 'react'

type CarouselProps = React.PropsWithChildren<{ x: MotionValue<number> }>

export const Carousel = ({ x, children }: CarouselProps) => {
  const ref = useRef<HTMLUListElement>(null)

  useMotionValueEvent(x, 'change', (latest) => {
    ref.current?.scrollTo({ left: latest, behavior: 'smooth' })
  })

  return (
    <ul
      ref={ref}
      className="grid grid-flow-col overflow-x-auto snap-x snap-mandatory"
    >
      {children}
    </ul>
  )
}

export const CarouselItem = ({ children }) => {
  return (
    <li className="snap-start snap-always">
      {children}
    </li>
  )
}
`

const AppCodeHeroCarouselInitialCode = () => (
  <CodeSlide
    document={appCodeHeroCarouselCode}
    title="Initial: Carousel - Pages router / fully client-side code"
  />
)

const appCodeHeroCode = syntaxDocument`
'use client'

import { useMotionValue } from 'framer-motion'

import { Carousel, CarouselItem } from './Carousel'

export const Hero = ({ slides }: { slides: number[] }) => {
  const x = useMotionValue(0)

  const paginate = (direction: number) => {
    // ...
  }

  const goTo = (slide: number) => {
    // ...
  }

  return (
    <div>
      <Carousel x={x}>
        {slides.map((slide) => (
          <CarouselItem key={slide}>
            {/* ... slide with expensive content ... */}
          </CarouselItem>
        ))}
      </Carousel>

      <button onClick={() => paginate(-1)}>Previous</button>
      <button onClick={() => paginate(1)}>Next</button>

      <ul>
        {slides.map((slide, index) => (
          <li key={slide}>
            <button onClick={() => goTo(index)}>
              {slide}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}    
`

const AppCodeHeroInitialCode = () => (
  <CodeSlide
    document={appCodeHeroCode}
    title="Initial: Hero - Pages router / fully client-side code"
  />
)

const appCodeHeroContextCode = syntaxDocument`
'use client'

import { createContext, useContext } from 'react'

const CarouselContext = createContext<{ 
  paginate: (direction: number) => void, 
  goTo: (index: number) => void 
}>({ 
  paginate: () => {}, 
  goTo: () => {}
})

export const CarouselContextProvider = ({ children }: React.PropsWithChildren) => {
  const x = useMotionValue(0)

  const paginate = (direction: number) => {
    // ...
  }

  const goTo = (index: number) => {
    // ...
  }

  return (
    <CarouselContext.Provider value={{ paginate, goTo, x }}>
      {children}
    </CarouselContext.Provider>
  )
}

export const useCarouselContext = () => useContext(CarouselContext)
`

const AppCodeHeroContextCode = () => (
  <CodeSlide document={appCodeHeroContextCode} title="Context" />
)

const appCodeHeroPaginateButtonCode = syntaxDocument`
'use client'

import { useCarouselContext } from './CarouselContext'

export const CarouselPaginationButton = ({ direction }: { direction: number }) => {
  const { paginate } = useCarouselContext()

  return (
    <button onClick={() => paginate(direction)}>
      {direction === -1 ? 'Previous' : 'Next'}
    </button>
  )
}
`

const appCodeHeroGoToButtonCode = syntaxDocument`
'use client'

import { useCarouselContext } from './CarouselContext'

export const CarouselGoToButton = ({ index }: { index: number }) => {
  const { goTo } = useCarouselContext()

  return (
    <button onClick={() => goTo(index)}>
      {index}
    </button>
  )
}
`

const appCodeHeroCarouselContextCode = syntaxDocument`
'use client'

import { m, useMotionValueEvent } from 'framer-motion'
import { useRef } from 'react'

import { useCarouselContext } from './CarouselContext'

type CarouselProps = React.PropsWithChildren

export const Carousel = ({ children }: CarouselProps) => {
  const { x } = useCarouselContext()

  const ref = useRef<HTMLUListElement>(null)

  useMotionValueEvent(x, 'change', (latest) => {
    ref.current?.scrollTo({ left: latest, behavior: 'smooth' })
  })

  return (
    <ul
      ref={ref}
      className="grid grid-flow-col overflow-x-auto snap-x snap-mandatory"
    >
      {children}
    </ul>
  )
}

export const CarouselItem = ({ children }) => {
  return (
    <li className="snap-start snap-always">
      {children}
    </li>
  )
}
`

const AppCodeHeroCarouselContextCode = () => (
  <CodeSlide
    document={appCodeHeroCarouselContextCode}
    title="Carousel"
    highlightLines={[6, 7, 8, 9, 10, 11]}
  />
)

const AppCodeHeroPaginateButton = () => (
  <CodeSlide document={appCodeHeroPaginateButtonCode} title="Paginate button" />
)

const AppCodeHeroGoToButton = () => (
  <CodeSlide document={appCodeHeroGoToButtonCode} title="GoTo button" />
)

const appCodeHeroCodeCombined = syntaxDocument`
// removed "use client" directive
import { Carousel, CarouselItem } from './Carousel'
import { CarouselContextProvider } from './CarouselContext'
import { CarouselGoToButton } from './CarouselGoToButton'
import { CarouselPaginationButton } from './CarouselPaginationButton'

export const Hero = ({ slides }: { slides: number[] }) => {
  // removed x
  // removed paginate
  // removed goTo
  return (
    <CarouselContextProvider>
      <div>
        <Carousel>
          {slides.map((slide) => (
            <CarouselItem key={slide}>
              {/* ... slide with expensive content ... */}
            </CarouselItem>
          ))}
        </Carousel>

        <CarouselPaginationButton direction={-1} />
        <CarouselPaginationButton direction={1} />

        <ul>
          {slides.map((slide, index) => (
            <li key={slide}>
              <CarouselGoToButton index={index} />
            </li>
          ))}
        </ul>
      </div>
    </CarouselContextProvider>
  )
}
`

const AppCodeHeroCodeCombined = () => (
  <CodeSlide
    document={appCodeHeroCodeCombined}
    title="Improved: Hero - Server / Client mixed code"
    highlightLines={[1, 2, 3, 4, 5, 8, 9, 10, 12, 22, 23, 28, 33]}
  />
)

const AppCodeHeroImprovementImage = () => (
  <ImageSlide
    src={excalidrawHeroImprovement}
    alt="Image of a hero component in excalidraw - a small amount of areas are marked red to signal they load client-side javascript"
    title={'Improved: Hero graphic'}
    heightClassName="h-[70svh]"
  ></ImageSlide>
)

const AppCodePageImprovement = () => (
  <TextSlide title={'Summary: Total page improvement'}>
    <p>How we improved the page</p>
  </TextSlide>
)

const AppCodePageInitialImage = () => (
  <ImageSlide
    src={excalidrawPages}
    alt="Image of a website's home page in excalidraw - a small amount of areas are marked red to signal they load client-side javascript"
    title={'Initial: Page graphic'}
    heightClassName="h-[70svh]"
  ></ImageSlide>
)

const AppCodePageImprovementImage = () => (
  <ImageSlide
    src={excalidrawPageImprovement}
    alt="Image of a website's home page in excalidraw - a small amount of areas are marked red to signal they load client-side javascript"
    title={'Improved: Page graphic'}
    heightClassName="h-[70svh]"
  ></ImageSlide>
)

const Approach = () => (
  <TextSlide title={'Approach'} maxWidth="lg">
    <Card>
      <CardContent className="pt-4">
        <TypographyUL className="text-lg">
          <li>Always start with server components</li>
          <li>Add "use client" only when necessary</li>
          <li>Move "use client" to leaf nodes - edges of the tree</li>
          <li>Watch out with imports in "use client" files</li>
          <li>Use context to share client-side state across components</li>
          <li>
            Pick your battles - prefer large optimizations over small ones, but
            don't let perfect be the enemy of good
          </li>
        </TypographyUL>
      </CardContent>
    </Card>
  </TextSlide>
)

const Review = () => (
  <TextSlide title={'Code reviews'} maxWidth="lg">
    <Card>
      <CardContent className="pt-4">
        <TypographyUL className="text-lg">
          <li>
            Seeing "use client" should trigger alarm bells in your head 🚨
          </li>
          <li>
            Review imports of client components thoroughly - can any of them be
            passed as props to render on the server?
          </li>
          <li>
            Critically assess composition of components - can interactive parts
            be moved to separate components to improve page staticness?
          </li>
          <li>
            Pick your battles - prefer large optimizations over small ones, but
            don't let perfect be the enemy of good
          </li>
        </TypographyUL>
      </CardContent>
    </Card>
  </TextSlide>
)

const Conclusion = () => (
  <TextSlide title={'Conclusion'} maxWidth="lg">
    <Card>
      <CardContent className="pt-4">
        <TypographyUL className="text-lg">
          <li>Server components should be the default</li>
          <li>Client components should be the exception</li>
          <li>Watch your imports!</li>
          <li>Pick your battles</li>
        </TypographyUL>
      </CardContent>
    </Card>
  </TextSlide>
)

const Outro = () => (
  <TextSlide title={'Thats all folks!'} maxWidth="lg">
    <p>Questions?</p>
  </TextSlide>
)

export const slides = [
  Hero,
  ServerVsClient,
  ServerClientMixing,
  ServerClientMixingDo,
  ServerClientMixingDont,
  Care,
  ClientCodeIntro,
  ClientCodeSiteImage,
  ClientCodeSitePagesIntro,
  ClientCodeSitePagesImage,
  ClientCodeSitePagesData,
  PagesRouterCodePage,
  PagesRouterCodePageSource,
  PagesRouterCodePageSourceWithData,
  AppRouterIntro,
  ClientCodeSiteImage,
  ClientCodeSiteAppIntro,
  ClientCodeSiteAppImage,
  AppCodeCodeIntro,
  AppCodeHeaderIntro,
  AppCodeHeaderInitialCode,
  AppCodeHeaderCartLinkCode,
  AppCodeHeaderAuthLinkCode,
  AppCodeHeaderCombinedCode,
  AppCodeHeaderImprovementImage,
  AppCodeQuoteIntro,
  AppCodeQuoteFrame,
  AppCodeQuoteInitialCode,
  AppCodeQuoteServerCode,
  AppCodeQuoteClientCode,
  AppCodeQuoteCombinedCode,
  AppCodeQuoteImprovementImage,
  AppCodeHeroIntro,
  AppCodeHeroFrame,
  AppCodeHeroCarouselInitialCode,
  AppCodeHeroInitialCode,
  AppCodeHeroContextCode,
  AppCodeHeroCarouselContextCode,
  AppCodeHeroPaginateButton,
  AppCodeHeroGoToButton,
  AppCodeHeroCodeCombined,
  AppCodeHeroImprovementImage,
  AppCodePageImprovement,
  AppCodePageInitialImage,
  AppCodePageImprovementImage,
  Approach,
  Review,
  Conclusion,
  Outro,
]
