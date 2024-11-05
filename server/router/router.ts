import * as util from "node:util"

import { BASE, router } from "../serve"
import {
  INTERNAL_SERVER_ERROR_RESPONSE,
  NOT_FOUND_RESPONSE,
  getBaseDomain,
  importModule,
} from "./routerHelpers"
import { inspect, styleText } from "node:util"

// type StyleArrayType =

// const styledLog = (stylesArray , message: string) => {
//   const styles = stylesArray.map((style) => styleText(style, message))

export const handleGetPages = async (request: Request): Promise<Response> => {
  try {
    const url = new URL(request.url)
    const baseUrl = new URL(BASE)
    const baseDomain = getBaseDomain(baseUrl.hostname)

    const route = router.match(request)

    if (!route) {
      return NOT_FOUND_RESPONSE
    }

    const module = await importModule(route.filePath)

    if (!module) {
      return NOT_FOUND_RESPONSE
    }

    if (typeof module.default !== "function") {
      console.error("Default export is not a function:", module.default)
      return INTERNAL_SERVER_ERROR_RESPONSE
    }

    // Customize the styles
    util.inspect.styles.string = "green"
    util.inspect.styles.number = "blue"
    util.inspect.styles.boolean = "red"
    util.inspect.styles.date = "magenta"
    util.inspect.styles.null = "bgCyan"
    // util.inspect.styles.null = "blue"
    util.inspect.styles.undefined = "bgYellow"

    // Example object
    const obj = {
      name: "Alice",
      age: 30,
      names: null,
      isAdmin: true,
    }

    // Inspect the object with custom styles
    console.log(inspect(obj, { colors: true }))

    const successMessage = styleText("green", "Success!")
    console.log(successMessage)

    const testMessage = styleText("bgMagenta", styleText("italic", "My italic underlined message"))
    console.table(testMessage)

    const response = await module.default(route.query).catch((e: Error) => {
      console.error("Error calling default export:", e)

      return null
    })

    if (!response) {
      return NOT_FOUND_RESPONSE
    }

    return new Response(response, {
      headers: { "Content-Type": "text/html" },
    })
  } catch (e) {
    console.error("Unexpected error:", e)

    return INTERNAL_SERVER_ERROR_RESPONSE
  }
}
