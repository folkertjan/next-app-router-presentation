'use client'

import { useRouter } from 'next/navigation'

const stitch = ({
  path,
  query,
  hash,
}: {
  path: string
  query?: string
  hash?: string
}) => {
  const formattedQuery = query
    ? query.startsWith('?')
      ? query
      : '?' + query
    : ''
  const formattedHash = hash ? (hash.startsWith('#') ? hash : '#' + hash) : ''
  return path + formattedQuery + formattedHash
}

export const useQueryParamControls = () => {
  const router = useRouter()

  const replace = (url: URL, params: URLSearchParams) => {
    router.replace(
      stitch({
        path: url.pathname,
        query: params.toString(),
        hash: url.hash,
      }),
      {
        scroll: false,
      },
    )
  }

  const set = (name: string, value: string) => {
    const url = new URL(window.location.href)
    const searchParams = new URLSearchParams(url.search)

    searchParams.set(name, value)

    replace(url, searchParams)
  }

  const remove = (name: string) => {
    const url = new URL(window.location.href)
    const searchParams = new URLSearchParams(url.search)

    searchParams.delete(name)

    replace(url, searchParams)
  }

  const setMany = (params: Record<string, string>) => {
    const url = new URL(window.location.href)
    const searchParams = new URLSearchParams()

    for (const [name, value] of Object.entries(params)) {
      searchParams.set(name, value)
    }

    replace(url, searchParams)
  }

  return { set, setMany, remove }
}
