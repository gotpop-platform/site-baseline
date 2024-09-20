import { jsxFactory, type StyleObjProps } from "utils"
import { Fragment } from "../Fragment"

type ComponentProps<T, L> = {
  markdownFile: T
  layout: L
}

type WithItemsProps<T, L> = {
  markdownItems: T[]
  componentProps: (item: T) => {
    markdownFile: T
    layout: L
  }
}

export function withItems<
  T,
  L extends StyleObjProps | StyleObjProps[]
>(Component: (props: ComponentProps<T, L>) => JSX.Element) {
  return function WrappedComponent({
    markdownItems,
    componentProps,
  }: WithItemsProps<T, L>) {
    const listOfComponents = markdownItems.map((markdownItem, index) => {
      const { layout, ...otherProps } = componentProps(markdownItem)
      
      const finalLayout = Array.isArray(layout)
        ? layout[index % layout.length]
        : layout

      return (
        <Component
          {...otherProps}
          markdownFile={markdownItem}
          layout={finalLayout as L}
        />
      )
    })

    return <Fragment>{listOfComponents}</Fragment>
  }
}
