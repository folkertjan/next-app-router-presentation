import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import { SlideProps } from './types'

export const Intro = (_: SlideProps) => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-lg mx-auto"
      >
        <h2>React App Router Shenanigans</h2>
      </TypographyH1>

      <div className="inline-flex items-center justify-center mt-8">
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
