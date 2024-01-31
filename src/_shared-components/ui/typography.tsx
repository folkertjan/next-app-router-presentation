import { cn } from '@/_shared-lib/utils'
import { Slot } from '@radix-ui/react-slot'

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

const createTypography = (tag: string, defaultClassName: string) => {
  return ({ children, asChild, className, ...restProps }: TypographyProps) => {
    const Comp = asChild ? Slot : tag
    return (
      <Comp className={cn(defaultClassName, className)} {...restProps}>
        {children}
      </Comp>
    )
  }
}

export const TypographyH1 = createTypography(
  'h1',
  'font-serif scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl',
)

export const TypographyH2 = createTypography(
  'h2',
  'scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0',
)

export const TypographyH3 = createTypography(
  'h3',
  'scroll-m-20 text-2xl font-semibold tracking-tight',
)

export const TypographyH4 = createTypography(
  'h4',
  'scroll-m-20 text-xl font-sans text-slate-200 font-semibold tracking-normal',
)

export const TypographyP = createTypography('p', 'leading-7')

export const TypographyBlockQuote = createTypography(
  'blockquote',
  ' border-l-2 pl-6 italic',
)

export const TypographyUL = createTypography('ul', 'ml-6 list-disc [&>li]:mt-2')

export const TypographyInlineCode = createTypography(
  'code',
  'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
)

export const TypographyLead = createTypography(
  'p',
  'text-xl text-muted-foreground',
)

export const TypographyLarge = createTypography('p', 'text-lg font-semibold')

export const TypographySmall = createTypography(
  'p',
  'text-sm font-medium leading-none',
)

export const TypographyMuted = createTypography(
  'p',
  'text-sm text-muted-foreground',
)

export const Prose = createTypography(
  'div',
  'prose dark:prose-invert lg:prose-lg',
)
