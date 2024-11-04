import { blockPageArticles } from "src/blocks/Features/FeaturesIndex"

const pageArticles = async (query: Record<string, string>): Promise<JSX.Element> => {
  return blockPageArticles(query)
}

export default pageArticles
