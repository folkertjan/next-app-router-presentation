'use client'

import { MotionProps, m } from 'framer-motion'

interface AnimationProps extends React.PropsWithChildren<MotionProps> {
  className?: string
}

export const Animation = ({ children, ...props }: AnimationProps) => {
  return <m.div {...props}>{children}</m.div>
}
