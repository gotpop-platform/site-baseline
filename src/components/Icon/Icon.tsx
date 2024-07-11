import type { IconName } from "./Icon.types"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { readFileSync } from "fs"
import { useCSS } from "src/hooks/useCSS"

type IconProps = {
  iconName?: IconName
  type?: IconTypes
}

export enum IconTypes {
  filled = "filled",
  outlined = "outlined",
  round = "round",
  sharp = "sharp",
  twoTone = "two-tone",
}

const Icon = ({
  iconName = "home",
  type = IconTypes.filled,
}: IconProps) => {
  const { css } = useCSS({ meta: import.meta })
  const theRoot = process.cwd()
  const thePath = `${theRoot}/src/components/Icon/svg/${type}/${iconName}.svg`

  let theSVG
  try {
    theSVG = readFileSync(thePath, "utf-8")
  } catch (error) {
    console.error("Error reading SVG file:", error)
    theSVG = "" // or any default value you want to assign in case of an error
  }

  const cl = mkClass(import.meta.file)

  return (
    <span class={`${cl} ${cl}-${iconName}`}>
      <style>{css}</style>
      {theSVG}
    </span>
  )
}

export default Icon
