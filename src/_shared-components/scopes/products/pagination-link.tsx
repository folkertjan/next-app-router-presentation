import { Button } from '@/_shared-components/ui/button'
import Link from 'next/link'

interface PaginationLinkBaseProps extends React.PropsWithChildren {
  basePath: string
  disabled: boolean
  page: number
  shallow?: boolean
}

interface PaginationLinkForwardProps extends PaginationLinkBaseProps {
  forward: true
  backward?: never
}

interface PaginationLinkBackwardProps extends PaginationLinkBaseProps {
  forward?: never
  backward: true
}

type PaginationLinkProps =
  | PaginationLinkForwardProps
  | PaginationLinkBackwardProps

export const PaginationLink = ({
  basePath,
  disabled,
  page,
  forward,
  shallow,
}: PaginationLinkProps) => {
  const direction = forward ? 1 : -1
  const label = forward ? 'Next' : 'Previous'
  return (
    <Link
      shallow={shallow}
      href={`${basePath}?page=${page + direction}`}
      {...{ inert: disabled ? '' : undefined }}
    >
      <Button variant={disabled ? 'outline' : 'secondary'}>{label} page</Button>
    </Link>
  )
}
