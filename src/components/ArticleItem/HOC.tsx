import { jsxFactory, type StyleObjProps } from "utils"
import { Fragment } from "../Fragment"

type ComponentProps<T, L> = {
  markdownFile: T
  layout: L
}

type WithItemsProps<T, L> = {
  data: T[]
  componentProps: (item: T) => {
    markdownFile: T
    layout: L
  }
}

export function withItems<T, L extends StyleObjProps | StyleObjProps[]>(
  Component: (props: ComponentProps<T, L>) => JSX.Element
) {
  return function WrappedComponent({
    data,
    componentProps,
  }: WithItemsProps<T, L>) {
    const listOfComponents = data.map((item, index) => {
      const props = componentProps(item)

      const layout = Array.isArray(props.layout) 
        ? props.layout[index % props.layout.length]
        : props.layout

      return <Component {...props} markdownFile={item} layout={layout as L} />
    })

    return <Fragment>{listOfComponents}</Fragment>
  }
}

