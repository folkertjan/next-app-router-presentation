import { TypographyH1 } from '@/components/ui/typography'
import { LayoutRoot } from './layout-root'

interface LayoutLayoutProps extends React.PropsWithChildren {
  time: string
  cloudflare: string
}

const LayoutLayout = ({ time, cloudflare, children }: LayoutLayoutProps) => {
  return (
    <>
      <div className="pt-32">
        <TypographyH1 asChild>
          <p>Layout</p>
        </TypographyH1>
        <div className="mt-8">
          <div>Time: {time}</div>
          <div className="mt-2">Cloudflare fetched timestamp: {cloudflare}</div>
        </div>

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
