import { Fragment } from "../Fragment"
import { jsxFactory } from "utils"

export interface DataItem<T> {
  metadata: T
}

type ComponentType<P> = (props: P) => JSX.Element

interface WithItemsProps<T, P> {
  data: DataItem<T>[]
  layout: (
    item: DataItem<T>
  ) => { [key: string]: string | number }[]
  componentProps: (item: DataItem<T>) => P
}

interface ExtendedProps extends Record<string, any> {
  layout: (
    item: DataItem<any>
  ) => { [key: string]: string | number }[]
}

export function withItems<T, P extends ExtendedProps>(
  Component: ComponentType<P>
) {
  return function WrappedComponent({
    data,
    componentProps,
  }: WithItemsProps<T, P>) {
    return (
      <Fragment>
        {data.map((item, index) => {
          const newLayout = componentProps(item).layout

          const props = {
            item,
            ...componentProps(item),
            layout: newLayout(item)[index],
          }

          return <Component key={index} {...props} />
        })}
      </Fragment>
    )
  }
}
