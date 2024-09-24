import { jsxFactory, style, useCSS } from "utils";

interface Item {
  type: any;
  styles: any;
  props: any;
  component: any;
}

export function GenerateElement({ item }: { item: Item }) {
  const { type, styles, props, component } = item

  const DynamicComponentWrapper = type

  const Component = component

  const { css } = useCSS({ meta: import.meta })

  return (
    <DynamicComponentWrapper
      class="dynamic-element"
      style={style(styles)}
    >
          <style>{css}</style>
      <Component {...props} />
    </DynamicComponentWrapper>
  )
}

