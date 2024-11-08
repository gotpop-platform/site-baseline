import { PAGES_DIR, PORT, ROUTER_STYLE } from "src/constants"

import { contentMap } from "@gotpop-platform/package-markdown"
import { handleGetAssets } from "./router/handleAssets"
import { handleGetPages } from "./router/router"
import { logger } from "./logging"

type ContentMap = Map<string, any>

export const BASE = process.env.BASE_SITE_URL ?? ""
export let allContent: ContentMap

export const router = new Bun.FileSystemRouter({
  style: ROUTER_STYLE,
  dir: PAGES_DIR,
})

const assetExtensions = new Set(["jpg", "jpeg", "png", "gif", "svg", "css", "js", "woff", "woff2"])

async function servePagesOrAssets(request: Request) {
  const url = new URL(request.url)
  const extension = url.pathname.split(".").pop()?.toLowerCase()

  if (extension && assetExtensions.has(extension)) {
    return handleGetAssets(url)
  }

  return handleGetPages(request)
}

async function startServer() {
  try {
    // Cache the content map
    allContent = await contentMap()

    Bun.serve({
      hostname: "::",
      port: process.env.PORT ?? PORT,
      async fetch(request) {
        return servePagesOrAssets(request)
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
