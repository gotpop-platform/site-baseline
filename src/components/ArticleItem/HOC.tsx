import { jsxFactory } from "utils"
import { Fragment } from "../Fragment"

export type DataItem<T> = T

type ComponentType<P> = (props: P) => JSX.Element

interface WithItemsProps<T, P> {
  data: DataItem<T>[]
  componentProps: (item: DataItem<T>) => P
}

export function withItems<
  T,
  P extends {
    item: T
    layout: { [key: string]: string | number }[]
  }
>(Component: ComponentType<P>) {
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
