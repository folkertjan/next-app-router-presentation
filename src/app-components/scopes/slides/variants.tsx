import { TypographyH2 } from '@/_shared-components/ui/typography'
import {
  SyntaxHighlighter,
  syntaxDocument,
} from '@/app-components/elements/syntax-highlighter'
import { Iframe } from '@/app-components/primitives/iframe'
import Image from 'next/image'
import screen1 from '@/public/screens/screen-1.png'
import { document } from 'postcss'

export const CodeSlide = ({ title = '', document = syntaxDocument`` }) => {
  return (
    <div>
      {title ? (
        <TypographyH2 className="text-center font-serif border-b-0">
          {title}
        </TypographyH2>
      ) : null}

      <div className="w-5/6 mx-auto grid content-center h-[75svh]">
        <SyntaxHighlighter document={document} />
      </div>
    </div>
  )
}

export const FrameSlide = ({ title = '', src = '/pages/home' }) => {
  return (
    <div>
      {title ? (
        <TypographyH2 className="text-center font-serif border-b-0">
          {title}
        </TypographyH2>
      ) : null}

      <Iframe src={src} className="w-5/6 mx-auto h-[75svh]" />
    </div>
  )
}

export const ImageSlide = ({
  title = '',
  src = screen1,
  alt = 'screenshot of devtools network',
}) => {
  return (
    <div>
      {title ? (
        <TypographyH2 className="text-center font-serif border-b-0">
          {title}
        </TypographyH2>
      ) : null}

      <Image src={src} alt={alt} className="w-5/6 mx-auto h-[75svh]" />
    </div>
  )
}
