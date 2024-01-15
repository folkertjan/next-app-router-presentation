import { Detail } from '@/app/_components/detail'
import { DynamicPageDetailPage } from '@/components/scopes/dynamic-page/detail-page'
import { LayoutDetailPage } from '@/components/scopes/layout/detail-page'
import { StaticPageDetailPage } from '@/components/scopes/static-page/detail-page'
import { notFound } from 'next/navigation'

const COMPONENT_MAP = {
  'static-page': {
    title: 'Static Page',
    component: StaticPageDetailPage,
  },
  'dynamic-page': {
    title: 'Dynamic Page',
    component: DynamicPageDetailPage,
  },
  'layout': {
    title: 'Layout',
    component: LayoutDetailPage,
  },
} as const

const isValidComponentKey = (
  key: unknown,
): key is keyof typeof COMPONENT_MAP => {
  return typeof key === 'string' && key in COMPONENT_MAP
}

interface DetailPageParams {
  params: {
    slug?: string
  }
}

const DetailPage = ({ params: { slug } = {} }: DetailPageParams) => {
  if (!isValidComponentKey(slug)) {
    return notFound()
  }

  const { component: Component, title } = COMPONENT_MAP[slug]

  return (
    <Detail title={title}>
      <Component />
    </Detail>
  )
}

export default DetailPage
