import { BackButton } from '@/app/_components/back-button'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/components/ui/typography'

interface ExampleProps extends React.PropsWithChildren {
  title: string
}

export const Example = ({ children, title }: ExampleProps) => {
  return (
    <>
      <div className="fixed grid grid-cols-3 left-0 top-0 w-full p-4 lg:p-6 bg-background border-b">
        <Button asChild variant="secondary" className="w-fit">
          <BackButton>Back</BackButton>
        </Button>

        <TypographyH3 className="ml-4 text-center" asChild>
          <h2>{title}</h2>
        </TypographyH3>
      </div>

      <div className="pt-16 w-fit mx-auto">{children}</div>
    </>
  )
}
