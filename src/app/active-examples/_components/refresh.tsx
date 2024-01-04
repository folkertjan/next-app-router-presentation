'use client'

import { useRouter } from 'next/navigation'

export const Refresh = () => {
  const router = useRouter()

  return <button onClick={() => router.refresh()}>Refresh</button>
}
