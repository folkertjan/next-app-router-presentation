import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Prose,
  TypographyBlockQuote,
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography'
import next from 'next'
import { headers } from 'next/headers'

export const SlideIntro = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>React App Router Shenanigans</h2>
      </TypographyH1>

      <TypographyBlockQuote
        asChild
        className="text-center text-balance max-w-lg mx-auto mt-6"
      >
        <h3>Episode 1: Data fetching & revalidation</h3>
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

export const SlidePagesRouterData = () => {
  return (
    <div className="h-full p-2 pt-4 flex flex-col items-center justify-start relative">
      <TypographyH3
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h3>Pages router: Data fetching</h3>
      </TypographyH3>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>Route level ("page")</h4>
              </TypographyH4>
              <ul>
                <li>
                  <code>getStaticProps()</code>
                </li>
                <li>
                  <code>getServerSideProps()</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>API route</h4>
              </TypographyH4>
              <ul>
                <li>
                  <code>/api/some-path.ts</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>Client side</h4>
              </TypographyH4>
              <ul>
                <li>
                  <code>useSWR()</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const SlidePagesRouterCache = () => {
  return (
    <div className="h-full p-2 pt-4 flex flex-col items-center justify-start relative">
      <TypographyH3
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h3>Pages router: Cache & Revalidation</h3>
      </TypographyH3>

      <div className="grid grid-cols-3 gap-4 mt-8 px-4">
        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>Route level (getStaticProps)</h4>
              </TypographyH4>
              <p>Cached per deploy, revalidate with time or on-demand</p>
              <ul>
                <li>
                  getStaticProps() return property: <code>revalidate: 60</code>
                </li>
                <li>
                  api route: <code>res.revalidate(path)</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>Route level (getServerSideProps)</h4>
              </TypographyH4>

              <p>No revalidate, cache with response header.</p>
              <ul>
                <li>
                  In getServerSideProps():{' '}
                  <code>res.setHeader('Cache-Control', 's-maxage=60')</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>API Route</h4>
              </TypographyH4>

              <p>No revalidate, cache with response header.</p>
              <ul>
                <li>
                  In api route handler:{' '}
                  <code>res.setHeader('Cache-Control', 's-maxage=60')</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const SlideAppRouterData = () => {
  return (
    <div className="h-full p-2 pt-4 flex flex-col items-center justify-start relative">
      <TypographyH3
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h3>App router: Data fetching</h3>
      </TypographyH3>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>In pages (COMPONENTS)</h4>
              </TypographyH4>
              <ul>
                <li>
                  <code>/some-path/page.tsx</code>
                </li>
                <li>
                  <code>fetch()</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>API route</h4>
              </TypographyH4>
              <ul>
                <li>
                  <code>/some-path/route.ts</code>
                </li>
                <li>
                  <code>fetch()</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>Client side</h4>
              </TypographyH4>
              <ul>
                <li>
                  <code>useSWR()</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const SlideAppRouterCache = () => {
  return (
    <div className="h-full p-2 pt-4 flex flex-col items-center justify-start relative">
      <TypographyH3
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h3>App router: Cache & Revalidation</h3>
      </TypographyH3>

      <div className="grid grid-cols-3 gap-4 mt-8 px-4">
        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>Route level (route config) (page.tsx / route.ts)</h4>
              </TypographyH4>
              <p>
                Config for all underlying fetches, revalidate with time or
                on-demand
              </p>
              <ul>
                <li>
                  <code>export const revalidate = 60</code>
                </li>
                <li>
                  <code>export const dynamic = 'force-dynamic'</code>
                </li>
                <li>
                  <code>revalidatePath(path)</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>Fetch level</h4>
              </TypographyH4>

              <p>Per-fetch config, revalidate with time or on demand</p>
              <ul>
                <li>
                  <code>fetch(_, {"{ next: { tags: ['some-tag'] }}"})</code>
                </li>
                <li>
                  <code>fetch(_, {'{ next: { revalidate: 30 }}'})</code>
                </li>
                <li>
                  <code>revalidateTag(tag)</code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Prose className="pt-6">
              <TypographyH4 asChild>
                <h4>API Route</h4>
              </TypographyH4>

              <p>Response can be cached with response header:</p>
              <ul>
                <li>
                  <code>
                    Response.json({},{' '}
                    {"{ headers: { 'Cache-Control', 's-maxage=60' }}"})
                  </code>
                </li>
              </ul>
            </Prose>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
