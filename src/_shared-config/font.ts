import { Lora, Noto_Sans, Noto_Sans_Mono } from 'next/font/google'

export const fontSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const fontSerif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
})
