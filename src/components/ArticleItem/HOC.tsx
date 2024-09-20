import { jsxFactory, type StyleObjProps } from "utils"
import { Fragment } from "../Fragment"

type ComponentProps<T> = {
  markdownFile: T
  layout: StyleObjProps | StyleObjProps[]
}

type WithItemsProps<T> = {
  data: T[]
  componentProps: (item: T) => Omit<ComponentProps<T>, 'layout'>
}

export function withItems<T>(
  Component: (props: ComponentProps<T>) => JSX.Element
) {
  return function WrappedComponent({
    data,
    componentProps,
  }: WithItemsProps<T>) {
    const listOfComponents = data.map((item, index) => {
      const props = componentProps(item)
      console.log('props1 :', props);
      // console.log('props :', props.layout);
      // const layout = props.layout[index % props.layout.length]

      const layout = Array.isArray(props.layout) 
      ? props.layout[index % props.layout.length]
      : props.layout

      return <Component {...props} item={item} layout={layout} />
    })

    return <Fragment>{listOfComponents}</Fragment>
  }
}

