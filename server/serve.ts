import { handleGetPages, handleStaticAssets } from "@gotpop-platform/package-server"

import { Config } from "../src/config"
import { contentMap } from "@gotpop-platform/package-markdown"
import { logger } from "@gotpop-platform/package-logger"
import { scriptPaths } from "./build"

async function startServer() {
  try {
    // Cache the content Map() for all markdown files
    const allContent = await contentMap({ DIR_CONTENT: Config.SERVER.DIR_CONTENT })

    Bun.serve({
      hostname: "::",
      development: process.env.NODE_ENV === "development",
      port: Config.SERVER.PORT,
      async fetch(request: Request) {
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
