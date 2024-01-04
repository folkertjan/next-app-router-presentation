import { PrismLight } from 'react-syntax-highlighter'

import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// synthwave84
// a11yDark
// atomDark

PrismLight.registerLanguage('jsx', jsx)

export const syntaxDocument = (
  strs: TemplateStringsArray,
  ...values: string[]
) => {
  const str = strs
    .reduce((s, part, i) => s + values[i - 1] + part)
    .replace(/^\n/, '')
  const level = str.length - str.replace(/^ +/, '').length
  return str
    .split('\n')
    .map((line) => line.slice(level))
    .join('\n')
}

interface CodeProps {
  document: string
}

export const SyntaxHighlighter = ({ document }: CodeProps) => (
  <PrismLight
    language="jsx"
    style={atomDark}
    codeTagProps={{
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--syntax-font-size, 1em)',
      },
    }}
    customStyle={{
      backgroundColor: 'hsl(var(--muted))',
    }}
    wrapLines={true}
    showLineNumbers={true}
  >
    {document}
  </PrismLight>
)
