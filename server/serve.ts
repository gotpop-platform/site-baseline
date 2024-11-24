import { getRelativePaths, rebuildFiles, scriptPaths, watcher } from "."
import { handleGetPages, handleStaticAssets } from "@gotpop-platform/package-server"

import { Config } from "../src/config"
import { ServerWebSocket } from "bun"
import { contentMap } from "@gotpop-platform/package-markdown"
import { logger } from "@gotpop-platform/package-logger"

export const clients = new Set<ServerWebSocket<unknown>>()
let currentContent: Map<string, any>

// Initial content load
const loadContent = async () => {
  currentContent = await contentMap({ DIR_CONTENT: Config.SERVER.DIR_CONTENT })
  return currentContent
}

// Load initial content
let allContent = await loadContent()

const server = Bun.serve({
  hostname: "::",
  development: process.env.NODE_ENV === "development",
  port: Config.SERVER.PORT,
  async fetch(request: Request, server) {
    // WebSocket upgrade handling
    if (request.headers.get("upgrade") === "websocket") {
      const success = server.upgrade(request)

      if (success) return undefined
    }

    const url = new URL(request.url)

    // Static assets handling
    if (url.pathname.startsWith("/assets/")) {
      const assetResponse = await handleStaticAssets({
        path: url.pathname,
        publicDir: Config.SERVER.PUBLIC_DIR,
      })

      if (assetResponse) return assetResponse
    }

    // Use current content for page rendering
    return handleGetPages({ request, allContent, scriptPaths, Config })
  },
  websocket: {
    open(ws) {
      clients.add(ws)
      logger({ msg: "Client connected", styles: ["green"] })
    },
    close(ws) {
      clients.delete(ws)
    },
    message(ws, message) {
      logger({ msg: `Received: ${message}`, styles: ["dim"] })
    },
  },
})

watcher(allContent, clients, loadContent)

logger(
  { msg: "Server running at:", styles: ["green", "bold"] },
  { msg: `http://localhost:${Config.SERVER.PORT}`, styles: ["dim"] }
)
