import { INTERNAL_SERVER_ERROR_RESPONSE, NOT_FOUND_RESPONSE, importModule } from "./routerHelpers"

import { logger } from "../logging"
import { router } from "../serve"

export const handleGetPages = async (request: Request): Promise<Response> => {
  try {
    const route = router.match(request)

    if (!route) {
      return NOT_FOUND_RESPONSE
    }

    const module = await importModule(route.filePath)

    if (!module) {
      return NOT_FOUND_RESPONSE
    }

    if (typeof module.default !== "function") {
      logger({ msg: "Default export is not a function:", styles: ["bold", "red"] })

      return INTERNAL_SERVER_ERROR_RESPONSE
    }

    const response = await module.default(route.query).catch((error: Error) => {
      logger({ msg: String(error), styles: ["bold", "red"] })

      return null
    })

    if (!response) {
      return NOT_FOUND_RESPONSE
    }

    return new Response(response, {
      headers: { "Content-Type": "text/html" },
    })
  } catch (error) {
    logger({ msg: String(error), styles: ["bold", "red"] })

    return INTERNAL_SERVER_ERROR_RESPONSE
  }
}
