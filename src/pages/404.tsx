import { blockNotFoundPage } from "src/blocks/NotFound/404"

const NotFoundPage = async (query: Record<string, string>): Promise<JSX.Element> => {
  return blockNotFoundPage(query)
}

export default NotFoundPage
