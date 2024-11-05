import { block } from "src/blocks/Home/Home"
import { blockPageComponents } from "src/blocks/Components/Components"
import { blockPageDocItem } from "src/blocks/Docs/Docs"
import { blockPageFeaturePage } from "src/blocks/Features/FeaturesPage"
import { blockPageFeaturesIndex } from "src/blocks/Features/FeaturesIndex"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

export const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageIndex = async (query: Record<string, string>): Promise<JSX.Element> => {
  const { slug } = query

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

  if (slug.startsWith("features")) {
    if (slug === "features") {
      return blockPageFeaturesIndex(query)
    } else {
      return blockPageFeaturePage(query)
    }
  }

  return block(query)
}

export default pageIndex
