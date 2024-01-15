import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { fontSans, fontSerif } from '@/config/font'
import { ThemeProvider } from '@/components/theme-provider'
import { AnimationProvider } from '@/components/animation-provider'

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
        )}
      >
        <ThemeProvider>
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
