// serve.ts
import { Config, PORT, PUBLIC_DIR } from "src/constants"

import { contentMap } from "@gotpop-platform/package-markdown"
import { file } from "bun"
import { join } from "path"
import { logger } from "@gotpop-platform/package-logger"
import { scriptPaths } from "./build"
import { servePagesOrAssets } from "@gotpop-platform/package-server"

type ContentMap = Map<string, any>

export const BASE = process.env.BASE_SITE_URL ?? ""
export let allContent: ContentMap

async function handleStaticAssets(path: string) {
  const fullPath = join(process.cwd(), PUBLIC_DIR, path)

  try {
    const asset = file(fullPath)

    if (await asset.exists()) {
      return new Response(asset)
    }
  } catch (error) {
    logger({ msg: `Asset not found: ${path}`, styles: ["red"] })
  }
  return null
}

async function startServer() {
  try {
    // Cache the content map
    allContent = await contentMap()

    Bun.serve({
      hostname: "::",
      development: process.env.NODE_ENV === "development",
      port: process.env.PORT ?? PORT,
      async fetch(request) {
        const url = new URL(request.url)

        // Handle static assets first
        if (url.pathname.startsWith("/assets/")) {
          const assetResponse = await handleStaticAssets(url.pathname)

          if (assetResponse) return assetResponse
        }

        return servePagesOrAssets<typeof Config>({ request, allContent, scriptPaths, Config })
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
