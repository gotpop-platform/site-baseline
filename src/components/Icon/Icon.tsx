import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import type { IconName } from "./Icon.types"

type IconProps = {
  iconName?: IconName
  fill?: "1" | "0"
  weight?: "400" | "500" | "600" | "700"
  grad?: number
  opsz?: number
}

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Icon = ({
  iconName = "home",
  fill = "1",
  weight = "700",
  grad = 0,
  opsz = 48,
}: IconProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <span
      class={`${useName} ${useName}-${iconName}`}
      style={`font-variation-settings: 'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grad}, 'opsz' ${opsz};`}
    >
      <style>{css}</style>
      <span class="material-symbols-outlined">
        {iconName}
      </span>
    </span>
  )
}

export default Icon
