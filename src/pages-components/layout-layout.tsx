import { TypographyH1 } from '@/shared-components/ui/typography'
import { LayoutRoot } from './layout-root'

interface LayoutLayoutProps extends React.PropsWithChildren {
  title: string
}

const LayoutLayout = ({ title, children }: LayoutLayoutProps) => {
  return (
    <>
      <div className="pt-32">
        <TypographyH1 asChild>
          <p>Layout: {title}</p>
        </TypographyH1>

        <label className="mt-4">
          This input retains state through page transitions
          <input type="text" className="border ml-2" />
        </label>
      </div>

      <div className="pt-8">{children}</div>
    </>
  )
}

export const getLayoutLayout = (page: any, props: LayoutLayoutProps) => {
  return (
    <LayoutRoot {...props}>
      <LayoutLayout {...props}>{page}</LayoutLayout>
    </LayoutRoot>
  )
}
