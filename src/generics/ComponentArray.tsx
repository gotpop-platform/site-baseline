import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { type MarkdownFileProps, type StyleObjProps } from "@gotpop-platform/package-markdown"

type ComponentProps = {
  markdownItems: MarkdownFileProps[]
  layout: (markdownItem: MarkdownFileProps) => StyleObjProps[]
}

type WrappedProps = {
  markdownFile: MarkdownFileProps
  layout: StyleObjProps
}

export function withItems(Component: (props: WrappedProps) => JSX.Element) {
  return function WrappedComponent({ markdownItems, layout }: ComponentProps) {
    return markdownItems.map((markdownItem, index) => (
      <Component markdownFile={markdownItem} layout={layout(markdownItem)[index]} />
    ))
  }
}
