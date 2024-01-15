'use client'

import { useRouter } from 'next/navigation'
import { HTMLProps } from 'react'

interface RefreshProps
  extends React.PropsWithChildren<Omit<HTMLProps<HTMLButtonElement>, 'type'>> {}

export const Refresh = (props: RefreshProps) => {
  const router = useRouter()

  return (
    <button
      {...props}
      onClick={(e) => {
        props.onClick?.(e)
        router.refresh()
      }}
    >
      Refresh
    </button>
  )
}
