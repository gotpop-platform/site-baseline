import { block } from "src/blocks/Home/Home"

const pageIndex = async (query: Record<string, string>): Promise<JSX.Element> => {
  return block(query)
}

export default pageIndex
