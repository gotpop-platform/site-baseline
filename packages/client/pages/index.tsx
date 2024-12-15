import { BlockDataProps } from "@gotpop-platform/types"
import { block } from "../blocks"

const pageIndex = async (data: BlockDataProps): Promise<string> => {

  return block(data)
}

export default pageIndex
