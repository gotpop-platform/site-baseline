import { BlockDataProps } from "src/types/types"
import { block } from "blocks"

const pageIndex = async (data: BlockDataProps): Promise<JSX.Element> => {

  return block(data)
}

export default pageIndex
