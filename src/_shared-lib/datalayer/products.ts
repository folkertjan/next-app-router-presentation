import { Special } from '@/types'

type Endpoint = 'products' | 'products/categories'
type QueryKey = 'limit'
type Query = Record<QueryKey, number | string>

const fetchFromApi = async <T>(endpoint: Endpoint, query?: Query) => {
  const searchParams = new URLSearchParams()

  if (query) {
    Object.entries(query).map(([key, value]) => {
      searchParams.set(key, String(value))
    })
  }

  const queryString = searchParams.toString()

  const response = await fetch(
    `https://fakestoreapi.com/${endpoint}${
      queryString ? `?${queryString}` : ''
    }`,
  )

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data as T
}

export type Category = Special<string, 'Category'>

export interface Product {
  id: number
  title: string
  price: number
  category: Category
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const fetchProducts = (query?: Query) => {
  return fetchFromApi<Product[]>('products', query)
}

const chunkArray = <T extends Array<any>>(array: T, size: number) => {
  if (!size || size === 0) return [array]

  const chunks: Array<T> = []

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    if (!chunk) return chunks
    chunks.push(chunk as T)
  }

  return chunks
}

export const fetchProductsByPage = async ({
  limit,
  page,
}: {
  limit: number
  page: number
}) => {
  const products = await fetchProducts()
  const productChunks = chunkArray(products, limit)

  return {
    products: productChunks[page - 1] ?? [],
    totalPages: productChunks.length,
    totalResults: products.length,
  }
}

export const fetchCategories = () => {
  return fetchFromApi<Category[]>('products/categories')
}
