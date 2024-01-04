'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { Children, Suspense, cloneElement, useState } from 'react'
import { useQueryParamControls } from '../_hooks/use-query-param-controls'
import { useSearchParams } from 'next/navigation'
import { TabsContentProps } from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const possibleGridClassNames = [
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
]

export interface CodeTabsProps extends React.PropsWithChildren {
  tabs: string[]
  className?: string
}

const CodeTabsBase = ({ tabs = [], children, className }: CodeTabsProps) => {
  const params = useSearchParams()
  const [mountDefaultValue] = useState(params.get('tab') ?? '')
  const defaultValue = tabs.includes(mountDefaultValue)
    ? mountDefaultValue
    : tabs[0]

  const { set } = useQueryParamControls()

  const gridClassName = possibleGridClassNames[tabs.length - 1]

  return (
    <Tabs
      defaultValue={defaultValue}
      onValueChange={(value) => set('tab', value)}
      className={className}
    >
      <TabsList className={cn('grid w-full', gridClassName)}>
        {tabs.map((tab) => {
          return (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          )
        })}
      </TabsList>

      {Children.map(children, (child, i) => {
        return cloneElement(child as React.ReactElement, {
          value: tabs[i],
        })
      })}
    </Tabs>
  )
}

export const CodeTabs = (props: CodeTabsProps) => {
  return (
    <Suspense>
      <CodeTabsBase {...props} />
    </Suspense>
  )
}

interface CodeTabsTabProps extends Omit<TabsContentProps, 'value'> {
  value?: string
}

export const CodeTabsTab = ({ children, value, ...rest }: CodeTabsTabProps) => {
  return (
    <TabsContent value={value || ''} {...rest}>
      {children}
    </TabsContent>
  )
}
