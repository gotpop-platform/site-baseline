import { BlockDataProps } from "src/types/types"
import { block } from "blocks"

const pageIndex = async (data: BlockDataProps): Promise<JSX.Element> => {
  // console.log("data :", data)
  const { slug } = data.query

  // // Handle home page
  // if (slug === "/") {
  //   return block({ slug: "/" })
  // }

  return block(data)
}

export default pageIndex
