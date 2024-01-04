'use client'
import Link, { LinkProps } from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

interface BackLinkProps
  extends React.PropsWithChildren<Omit<LinkProps, 'href'>> {}

const BackLinkBase = ({ children, ...rest }: BackLinkProps) => {
  const queryParams = useSearchParams()
  const back = queryParams.get('back')

  const href = typeof back === 'string' ? `/?slide=${back}` : '/'
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}

export const BackLink = (props: BackLinkProps) => {
  return (
    <Suspense>
      <BackLinkBase {...props} />
    </Suspense>
  )
}
