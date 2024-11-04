import { block } from "src/blocks/Home/Home"
import { blockPageComponents } from "src/blocks/Components/Components"
import { blockPageDocItem } from "src/blocks/Docs/Docs"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

export const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageIndex = async (query: Record<string, string>): Promise<JSX.Element> => {
  console.log("query :", query)
  const { slug } = query
  // Handle home page

  // if (slug === "favicon.ico") {
  //   // Handle favicon.ico request
  //   return <Fragment></Fragment> // Return an empty fragment or handle it as needed
  // }

  // Handle home page
  if (slug === "favicon.ico") {
    return block({ slug: "/" })
  }

  if (slug.startsWith("docs")) {
    return blockPageDocItem(query)
  }

  if (slug.startsWith("components")) {
    return blockPageComponents(query)
  }

  return block(query)
}

export default pageIndex
