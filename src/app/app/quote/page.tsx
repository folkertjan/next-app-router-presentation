import { BLOCKS } from '@contentful/rich-text-types'
import { SectionQuote } from './_components/section-quote'

const QuotePage = () => {
  return (
    <main className="grid place-content-center min-h-svh">
      <div className="w-fit max-w-md text-xl">
        <SectionQuote
          document={{
            nodeType: BLOCKS.DOCUMENT,
            data: {},
            content: [
              {
                nodeType: BLOCKS.QUOTE,
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'When I wrote this code, only God and I understood what I did. Now only God knows.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          }}
          quotee={'Plato, probably'}
        />
      </div>
    </main>
  )
}

export default QuotePage
