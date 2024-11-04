import { blockPageDocItem } from "src/blocks/Docs/Docs"

const pageDocItem = async (query: Record<string, string>): Promise<JSX.Element> => {
  return blockPageDocItem(query)
}

export default pageDocItem
