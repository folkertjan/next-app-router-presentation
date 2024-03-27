import { TypographyH1, TypographyH2 } from '@/_shared-components/ui/typography'
import {
  SyntaxHighlighter,
  syntaxDocument,
} from '@/app-components/elements/syntax-highlighter'
import { Iframe } from '@/app-components/primitives/iframe'
import Image, { StaticImageData } from 'next/image'
import screen1 from '@/public/screens/screen-1.png'
import { document } from 'postcss'
import { cn } from '@/_shared-lib/utils'

export const CodeSlide = ({ title = '', document = syntaxDocument`` }) => {
  return (
    <div>
      {title ? (
        <TypographyH2 className="text-center font-serif text-balance max-w-md mx-auto border-b-0">
          {title}
        </TypographyH2>
      ) : null}

      <div className="w-5/6 mx-auto grid content-center h-[80svh]">
        <SyntaxHighlighter document={document} />
      </div>
    </div>
  )
}

export const FrameSlide = ({ title = '', src = '/pages/home' }) => {
  return (
    <div>
      {title ? (
        <TypographyH2 className="text-center font-serif text-balance max-w-md mx-auto border-b-0">
          {title}
        </TypographyH2>
      ) : null}

      <Iframe src={src} className="w-5/6 mx-auto h-[75svh]" />
    </div>
  )
}

export const ImageSlide = ({
  title = '',
  src,
  alt,
  children,
  heightClassName,
}: React.PropsWithChildren<{
  src: StaticImageData
  alt: string
  title?: string
  heightClassName?: string
}>) => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      {title ? (
        <TypographyH2
          asChild
          className="text-center font-serif text-balance max-w-md mx-auto border-b-0"
        >
          <h2>{title}</h2>
        </TypographyH2>
      ) : null}

      <div
        className={cn(
          'relative w-5/6 mx-auto h-[75svh] grid items-center',
          heightClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {children && <div className="mt-4 max-w-sm mx-auto">{children}</div>}
    </div>
  )
}

export const TextSlide = ({
  title = '',
  maxWidth = 'sm',
  children,
}: React.PropsWithChildren<{
  title?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'none'
}>) => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      {title ? (
        <TypographyH2
          asChild
          className="text-center font-serif text-balance max-w-md mx-auto"
        >
          <h2>{title}</h2>
        </TypographyH2>
      ) : null}
      <div
        className={cn(
          'mt-16 mx-auto',
          maxWidth === 'sm' && 'max-w-sm',
          maxWidth === 'md' && 'max-w-md',
          maxWidth === 'lg' && 'max-w-lg',
        )}
      >
        {children}
      </div>
    </div>
  )
}
