import {
  blockNotFoundPage,
  blockPageComponents,
  blockPageDocItem,
  blockPageFeaturePage,
  blockPageFeaturesIndex,
  homePage,
} from "../blocks"

import type { BlockDataProps } from "@/types"

const pageCatch = async (data: BlockDataProps): Promise<any> => {
  const { slug } = data.query

  switch (true) {
    case slug.startsWith("features"):
      if (slug === "features") {
        return blockPageFeaturesIndex(data)
      } else {
        return blockPageFeaturePage(data)
      }
    case slug.startsWith("docs"):
      return blockPageDocItem(data)
    case slug.startsWith("components"):
      return blockPageComponents(data)
    case slug === "404":
      return blockNotFoundPage(data)
    default:
      return homePage(data)
  }
}

export default pageCatch
