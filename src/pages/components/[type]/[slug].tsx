import { blockPageComponents } from "src/blocks/Components/Components"

const pageComponents = async (query: Record<string, string>): Promise<JSX.Element> => {
  return blockPageComponents(query)
}

export default pageComponents
