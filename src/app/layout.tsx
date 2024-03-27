import type { Metadata } from 'next'
import { cn } from '@/_shared-lib/utils'
import { fontMono, fontSans, fontSerif } from '@/_shared-config/font'
import { ThemeProvider } from '@/_shared-components/theme-provider'
import { AnimationProvider } from '@/_shared-components/animation-provider'

import '@/_shared-styles/globals.css'

export const metadata: Metadata = {
  title: 'App Router Shenanigans',
  description: 'Episode 1: Data fetching',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontSerif.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider>
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
