import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ComponentType, ReactElement, ReactNode } from 'react'

import { ThemeProvider } from '@/shared-components/theme-provider'
import { AnimationProvider } from '@/shared-components/animation-provider'
import { cn } from '@/lib/utils'
import { fontSans, fontSerif } from '@/config/font'

import '@/app/globals.css'

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
