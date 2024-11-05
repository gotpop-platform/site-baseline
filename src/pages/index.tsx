import { block } from "blocks"

const pageIndex = async (query: Record<string, string>): Promise<JSX.Element> => {
  const { slug } = query

  // Handle home page
  if (slug === "/") {
    return block({ slug: "/" })
  }

  return block(query)
}

export default pageIndex
