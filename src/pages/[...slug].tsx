import {
  block,
  blockNotFoundPage,
  blockPageComponents,
  blockPageDocItem,
  blockPageFeaturePage,
  blockPageFeaturesIndex,
} from "blocks"

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
