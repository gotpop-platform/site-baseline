import { Fragment } from "../Fragment"
import { jsxFactory } from "utils"

// Define a generic type for data items
export interface DataItem<T> {
  metadata: T
}

// Define a generic type for the component props
type ComponentType<P> = (props: P) => JSX.Element

// Define a generic interface for the HOC props
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

// Define the HOC function with generic types
export function withItems<T, P extends ExtendedProps>(
  Component: ComponentType<P>
) {
  return function WrappedComponent({
    data,
    componentProps,
  }: // componentProps,
  WithItemsProps<T, P>) {
    return (
      <Fragment>
        {data.map((item, index) => {
          //   console.log("layout :", layout)
          //   console.log("componentProps :", componentProps)
          const newLayout = componentProps(item).layout
          console.log("newLayout :", newLayout)

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
