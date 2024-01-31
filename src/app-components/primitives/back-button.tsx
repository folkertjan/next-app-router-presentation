'use client'

import { useRouter } from 'next/navigation'
import { type HTMLProps } from 'react'

interface BackButtonProps
  extends React.PropsWithChildren<Omit<HTMLProps<HTMLButtonElement>, 'type'>> {}

export const BackButton = ({ children, ...props }: BackButtonProps) => {
  const router = useRouter()

  return (
    <button
      {...props}
      onClick={() => {
        router.back()
      }}
    >
      {children}
    </button>
  )
}
