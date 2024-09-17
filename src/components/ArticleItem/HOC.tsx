import {
  jsxFactory,
  type MetaData,
  type styleObj,
} from "utils"
import { Fragment } from "../Fragment"

interface DataItem<T> {
  metadata: MetaData
  content: string
  toc?: { level: number; id: string; text: string }[]
}

type ComponentType<P> = (props: P) => JSX.Element

interface WithItemsProps<T, P> {
  data: DataItem<T>[]
  componentProps: (item: DataItem<T>) => P
}

export function withItems<
  T,
  P extends {
    item: T
    layout: styleObj[]
  }
>(
  Component: ComponentType<
    Omit<P, "layout"> & { layout: styleObj }
  >
) {
  return function WrappedComponent({
    data,
    componentProps,
  }: WithItemsProps<T, P>) {
    return (
      <Fragment>
        {data.map((item, index) => {
          const props = componentProps(item)
          const layout =
            props.layout[index % props.layout.length]
          return (
            <Component
              key={index}
              {...props}
              layout={layout}
            />
          )
        })}
      </Fragment>
    )
  }
}
