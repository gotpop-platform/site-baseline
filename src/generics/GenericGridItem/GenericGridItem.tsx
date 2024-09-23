import { jsxFactory, style, useCSS } from "utils";

export function GenerateElement({ item }) {
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

export const PageItems = ({
  config,
}: {
  config: Array<{
    type: string
    styles: Record<string, string>
    component: string
  }>
}) => {
  return config.map((item, index) => (
    <GenerateElement item={item} />
  ))
}
