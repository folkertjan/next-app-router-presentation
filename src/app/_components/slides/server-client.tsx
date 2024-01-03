import { TypographyH1 } from '@/components/ui/typography'
import { SlideProps } from './types'

export const ServerClient = ({ index }: SlideProps) => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <TypographyH1
        asChild
        className="text-center text-balance max-w-md mx-auto"
      >
        <h2>{index}. Server vs Client</h2>
      </TypographyH1>
    </div>
  )
}
