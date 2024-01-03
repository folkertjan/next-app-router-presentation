'use client'

import {
  AnimatePresence as ClientAnimatePresence,
  AnimatePresenceProps,
} from 'framer-motion'

export const AnimatePresence = ({
  children,
  ...props
}: React.PropsWithChildren<AnimatePresenceProps>) => {
  return <ClientAnimatePresence {...props}>{children}</ClientAnimatePresence>
}
