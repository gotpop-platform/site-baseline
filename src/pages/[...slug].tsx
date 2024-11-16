import {
  block,
  blockNotFoundPage,
  blockPageComponents,
  blockPageDocItem,
  blockPageFeaturePage,
  blockPageFeaturesIndex,
} from "blocks"

import { BlockDataProps } from "src/types/types"

const pageCatch = async (data: BlockDataProps): Promise<JSX.Element> => {
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

export default pageCatch
