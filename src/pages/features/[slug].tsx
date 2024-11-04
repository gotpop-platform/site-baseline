import { blockPageArticlePage } from "src/blocks/Features/FeaturesPage"

const pageArticlePage = async (query: Record<string, string>): Promise<JSX.Element> => {
  return blockPageArticlePage(query)
}

export default pageArticlePage
