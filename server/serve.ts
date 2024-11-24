import { buildResponse, getRelativePaths, rebuildFiles, scriptPaths } from "./build"
import { handleGetPages, handleStaticAssets } from "@gotpop-platform/package-server"

import { Config } from "../src/config"
import { ServerWebSocket } from "bun"
// import { buildResponse } from "./build"
import { contentMap } from "@gotpop-platform/package-markdown"
import { log } from "console"
import { logger } from "@gotpop-platform/package-logger"
import { watch } from "fs/promises"

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

// Watch for file changes
const watcher = watch(".", { recursive: true })

// for await (const event of watcher) {
//   if (event.filename?.includes("src")) {
//     logger({ msg: `Content changed: ${event.filename}`, styles: ["yellow"] })

//     // Reload content
//     allContent = await loadContent()

//     //  logger({ msg: "buildResponse", styles: ["green"] })

//     console.log("buildResponse", buildResponse)

//     // Notify clients
//     for (const client of clients) {
//       client.send("reload")
//     }
//   }
// }

// In serve.ts, modify the watcher:
for await (const event of watcher) {
  if (event.filename?.includes("src")) {
    logger({ msg: `Content changed: ${event.filename}`, styles: ["yellow"] })

    // Rebuild if JS/TS files changed
    if (event.filename.match(/\.(css|js|ts)$/)) {
      const { success, buildResponse } = await rebuildFiles()

      if (success) {
        logger({ msg: "Build successful", styles: ["green"] })
        // Update script paths
        scriptPaths.length = 0

        if (buildResponse) {
          scriptPaths.push(...getRelativePaths(buildResponse))
        }
      }
    }

    // Reload content
    allContent = await loadContent()

    // Notify clients only if build succeeded or no build was needed
    for (const client of clients) {
      client.send("reload")
    }
  }
}

logger(
  { msg: "Server running at:", styles: ["green", "bold"] },
  { msg: `http://localhost:${Config.SERVER.PORT}`, styles: ["dim"] }
)
