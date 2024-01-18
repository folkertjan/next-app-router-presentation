import { LayoutRoot } from './layout-root'

interface LayoutDefault extends React.PropsWithChildren {}

const LayoutDefault = ({ children }: LayoutDefault) => {
  return <div className="pt-8">{children}</div>
}

export const getLayoutDefault = (page: any, props: LayoutDefault) => {
  return (
    <LayoutRoot {...props}>
      <LayoutDefault {...props}>{page}</LayoutDefault>
    </LayoutRoot>
  )
}
