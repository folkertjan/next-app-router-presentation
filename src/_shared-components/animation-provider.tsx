'use client'

import { LazyMotion, MotionConfig } from 'framer-motion'

const lazyLoadFeatures = async () => {
  const { FEATURES } = await import('@/_shared-config/animation-framer')

  return FEATURES
}

export const AnimationProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <LazyMotion strict features={lazyLoadFeatures}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
