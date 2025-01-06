import type { BlockDataProps } from "@/types"
import { homePage } from "../blocks"

const pageIndex = async (data: BlockDataProps): Promise<any> => homePage(data)

export default pageIndex
