import Grid from "@components/Grid"
import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type BlockProps = {
  children?: JSX.Element | JSX.Element[] | string | string[]
  tag: string
}

const Block = ({ children: grandChildren, tag }: BlockProps) => {
  const { css } = useCSS({ meta: import.meta })
  const { file } = import.meta
  const useName = file.split(".").shift()?.toLowerCase()

  const children = [<style>{css}</style>, <Grid>{grandChildren}</Grid>]

  const generatedTag = jsxFactory(tag, { class: useName }, ...children)

  return generatedTag
}

export default Block
