import { BlockDataProps } from "@gotpop-platform/types"
import { homePage } from "../blocks"

const pageIndex = async (data: BlockDataProps): Promise<any> => homePage(data)

export default pageIndex
