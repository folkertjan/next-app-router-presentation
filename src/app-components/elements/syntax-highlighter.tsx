import { PrismLight } from 'react-syntax-highlighter'

import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import {
  solarizedlight,
  tomorrow,
} from 'react-syntax-highlighter/dist/esm/styles/prism'

// synthwave84
// a11yDark
// atomDark
// okaida
// solarizedlight

const style = tomorrow

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

const highlightLine = (
  line: number,
  lines: Array<number>,
): React.HTMLProps<HTMLElement> => {
  const style: React.CSSProperties = { display: 'block' }
  if (lines.includes(line)) {
    style.opacity = 1
  } else {
    style.opacity = 0.5
  }
  return { style }
}

interface CodeProps {
  document: string
  highlightLines?: Array<number>
  wrapLongLines?: boolean
}

export const SyntaxHighlighter = ({
  document,
  highlightLines = [],
  wrapLongLines,
}: CodeProps) => {
  return (
    <PrismLight
      language="jsx"
      style={style}
      codeTagProps={{
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--syntax-font-size, 1em)',
        },
      }}
      customStyle={{
        borderRadius: 'var(--radius)',
      }}
      wrapLines={true}
      wrapLongLines={wrapLongLines}
      showLineNumbers={true}
      lineProps={(line) => {
        if (highlightLines?.length === 0) return {}
        return highlightLine(line, highlightLines)
      }}
    >
      {document}
    </PrismLight>
  )
}
