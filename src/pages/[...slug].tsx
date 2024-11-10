import {
  block,
  blockNotFoundPage,
  blockPageComponents,
  blockPageDocItem,
  blockPageFeaturePage,
  blockPageFeaturesIndex,
} from "blocks"

const pageIndex = async (data: {
  query: any
  scriptPaths: Record<string, string>[]
}): Promise<JSX.Element> => {
  const { slug } = data.query

  if (slug.startsWith("features")) {
    if (slug === "features") {
      return blockPageFeaturesIndex(data)
    } else {
      return blockPageFeaturePage(data)
    }
  }

  if (slug.startsWith("docs")) {
    return blockPageDocItem(data)
  }

  if (slug.startsWith("components")) {
    return blockPageComponents(data)
  }

  if (slug === "404") {
    return blockNotFoundPage(data)
  }

  return block(data)
}

export default pageIndex
