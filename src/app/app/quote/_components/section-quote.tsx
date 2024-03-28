'use client'

import { m } from 'framer-motion'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'

const OPTIONS = {
  renderNode: {
    [BLOCKS.QUOTE]: (_, children) => {
      return <blockquote>{children}</blockquote>
    },
  },
} satisfies Options

type SectionQuoteProps = {
  document: Document
  quotee: string
}

export const SectionQuote = ({ document, quotee }: SectionQuoteProps) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      {documentToReactComponents(document, OPTIONS)}
      <m.footer
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        — {quotee}
      </m.footer>
    </m.div>
  )
}
