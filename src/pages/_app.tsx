import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

import { ThemeProvider } from '@/_shared-components/theme-provider'
import { AnimationProvider } from '@/_shared-components/animation-provider'
import { cn } from '@/_shared-lib/utils'
import { fontSans, fontSerif } from '@/_shared-config/font'

import '@/_shared-styles/globals.css'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement, props: any) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeProvider>
      <AnimationProvider>
        <div
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
            fontSerif.variable,
          )}
        >
          {getLayout(<Component {...pageProps} />, pageProps)}
        </div>
      </AnimationProvider>
    </ThemeProvider>
  )
}

export default MyApp
