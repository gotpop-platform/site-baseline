import {
  cn,
  jsxFactory,
  mkClass,
  style,
  useCSS,
} from "utils"

type GridItemsProps = {
  isRoot?: boolean
  children?: string
}

const Items = [
  {
    elementType: "div",
    props: {
      class: "grid-item",
      style: style({
        backgroundColor: "red",
      }),
    },
    children: "Item 1",
  },
]

export const GridItems = ({
  isRoot = false,
  children,
}: GridItemsProps) => {
  const { css } = useCSS({ meta: import.meta })
  const cl = mkClass(import.meta.file)

  return (
    <div
      class={cn(cl, {
        "root-grid": isRoot,
      })}
    >
      <style>{css}</style>
      {children}
    </div>
  )
}
