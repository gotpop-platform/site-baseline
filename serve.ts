import { handleGetPages, handleStaticAssets } from "@gotpop-platform/package-server"

import { Config } from "./src/constants"
import { contentMap } from "@gotpop-platform/package-markdown"
import { logger } from "@gotpop-platform/package-logger"
import { scriptPaths } from "./build"

type ContentMap = Map<string, any>

export const BASE = process.env.BASE_SITE_URL ?? ""
let allContent: ContentMap

async function startServer() {
  try {
    // Cache the content map
    allContent = await contentMap()

    Bun.serve({
      hostname: "::",
      development: process.env.NODE_ENV === "development",
      port: Config.SERVER.PORT,
      async fetch(request) {
        const url = new URL(request.url)

        if (url.pathname.startsWith("/assets/")) {
          const assetResponse = await handleStaticAssets({
            path: url.pathname,
            publicDir: Config.SERVER.PUBLIC_DIR,
          })

          if (assetResponse) return assetResponse
        }

        return handleGetPages({ request, allContent, scriptPaths, Config })
      },
    })

    logger(
      { msg: "Server started:", styles: ["green", "bold"] },
      { msg: "http://localhost:2000", styles: ["dim"] }
    )
  } catch (error) {
    logger({ msg: String(error), styles: ["bold", "red"] })
  }
}

startServer()
