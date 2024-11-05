import { block } from "src/blocks/Home/Home"
import { blockNotFoundPage } from "src/blocks/NotFound/404"
import { blockPageComponents } from "src/blocks/Components/Components"
import { blockPageDocItem } from "src/blocks/Docs/Docs"
import { blockPageFeaturePage } from "src/blocks/Features/FeaturesPage"
import { blockPageFeaturesIndex } from "src/blocks/Features/FeaturesIndex"

export const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageIndex = async (query: Record<string, string>): Promise<JSX.Element> => {
  const { slug } = query

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

  if (slug === "404") {
    return blockNotFoundPage(query)
  }

  return block(query)
}

export default pageIndex
