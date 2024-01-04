import { Button } from '@/components/ui/button'
import { TypographyH2, TypographyH3 } from '@/components/ui/typography'
import Link from 'next/link'
import { BackLink } from './back-link'

interface ExampleProps extends React.PropsWithChildren {
  title: string
}

export const Example = ({ children, title }: ExampleProps) => {
  return (
    <>
      <div className="fixed flex items-center left-0 top-0 w-full p-4 lg:p-6 bg-background border-b">
        <Button asChild variant="secondary">
          <BackLink>Back</BackLink>
        </Button>

        <TypographyH3 className="ml-4" asChild>
          <h2>{title}</h2>
        </TypographyH3>
      </div>

      <div className="pt-16">{children}</div>
    </>
  )
}
