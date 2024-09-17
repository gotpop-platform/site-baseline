import {
  jsxFactory,
  type MetaData,
  type styleObj,
} from "utils"
import { Fragment } from "../Fragment"

interface DataItem<T> {
  metadata: MetaData
  content: string
}

type ComponentType<P> = (props: P) => JSX.Element

interface WithItemsProps<T, P> {
  data: DataItem<T>[]
  componentProps: (item: DataItem<T>) => P
}

type Obj<T> = {
  item: T
  layout: styleObj[]
}

export function withItems<T, P extends Obj<T>>(
  Component: ComponentType<
    Omit<P, "layout"> & { layout: styleObj }
  >
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
