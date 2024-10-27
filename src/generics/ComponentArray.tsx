import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import type { MarkdownFileProps } from "@gotpop-platform/package-markdown"

type ComponentProps = {
  markdownItems: MarkdownFileProps[]
  layout: (markdownItem: MarkdownFileProps) => Record<string, string | number>[]
}

type WrappedProps = {
  markdownFile: MarkdownFileProps
  layout: Record<string, string | number>
}

export function withItems(Component: (props: WrappedProps) => JSX.Element) {
  return function WrappedComponent({ markdownItems, layout }: ComponentProps) {
    return markdownItems.map((markdownItem, index) => (
      <Component markdownFile={markdownItem} layout={layout(markdownItem)[index]} />
    ))
  }
}
