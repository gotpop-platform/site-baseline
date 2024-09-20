import { jsxFactory, type StyleObjProps } from "utils"
import { Fragment } from "../Fragment"

type ComponentType<P> = (
  props: P & { layout: StyleObjProps }
) => JSX.Element

interface WithItemsProps<T, P> {
  data: T[]
  componentProps: (item: T) => P
}

type Obj<T> = {
  item: T
  layout: StyleObjProps[]
}

export function withItems<T, P extends Obj<T>>(
  Component: ComponentType<P>
) {
  return function WrappedComponent({
    data,
    componentProps,
  }: WithItemsProps<T, P>) {
    const listOfComponents = data.map((item, index) => {
      const props = componentProps(item)
      const layout =
        props.layout[index % props.layout.length]

      return <Component {...props} layout={layout} />
    })

    return <Fragment>{listOfComponents}</Fragment>
  }
}
