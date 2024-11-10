import { block } from "blocks"
// import { scriptPaths } from "build"

const pageIndex = async (data): Promise<JSX.Element> => {
  const { slug } = data.query

  // Handle home page
  if (slug === "/") {
    return block({ slug: "/" })
  }

  return block(data)
}

export default pageIndex
