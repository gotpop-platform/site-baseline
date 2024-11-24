import { getRelativePaths, rebuildFiles, scriptPaths } from "."
import { handleGetPages, handleStaticAssets } from "@gotpop-platform/package-server"

import { Config } from "../src/config"
import { ServerWebSocket } from "bun"
import { contentMap } from "@gotpop-platform/package-markdown"
import { logger } from "@gotpop-platform/package-logger"
import { watch } from "fs/promises"

type ContentMap = Map<string, unknown>
type WSMessage = string | Buffer
interface ServerConfig {
  hostname: string
  development: boolean
  port: number
}

// State
const clients = new Set<ServerWebSocket<unknown>>()
let currentContent: ContentMap

// Content loading with error handling
const loadContent = async (): Promise<ContentMap> => {
  try {
    currentContent = await contentMap({ DIR_CONTENT: Config.SERVER.DIR_CONTENT })
    return currentContent
  } catch (error) {
    logger({ msg: `Error loading content: ${error}`, styles: ["red"] })
    return new Map()
  }
}

// Websocket handlers
const handleWSOpen = (ws: ServerWebSocket<unknown>): void => {
  clients.add(ws)
  logger({ msg: "Client connected", styles: ["green"] })
}

const handleWSClose = (ws: ServerWebSocket<unknown>): void => {
  clients.delete(ws)
  logger({ msg: "Client disconnected", styles: ["yellow"] })
}

const handleWSMessage = (ws: ServerWebSocket<unknown>, message: WSMessage): void => {
  logger({ msg: `Received: ${message}`, styles: ["dim"] })
}

// Server configuration
const serverConfig: ServerConfig = {
  hostname: "::",
  development: process.env.NODE_ENV === "development",
  port:
    typeof Config.SERVER.PORT === "string" ? parseInt(Config.SERVER.PORT, 10) : Config.SERVER.PORT,
}

let allContent = await loadContent()

const server = Bun.serve({
  ...serverConfig,
  async fetch(request: Request, server) {
    const url = new URL(request.url)

    // Websocket upgrade
    if (request.headers.get("upgrade") === "websocket") {
      const success = server.upgrade(request)
      if (!success) {
        return new Response("Websocket upgrade failed", { status: 400 })
      }
      return undefined
    }

    // Static assets
    if (url.pathname.startsWith("/assets/")) {
      const assetResponse = await handleStaticAssets({
        path: url.pathname,
        publicDir: Config.SERVER.PUBLIC_DIR,
      })
      if (assetResponse) return assetResponse
    }

    // Page handling
    try {
      return await handleGetPages({ request, allContent, scriptPaths, Config })
    } catch (error) {
      logger({ msg: `Error handling page: ${error}`, styles: ["red"] })

      return new Response("Internal Server Error", { status: 500 })
    }
  },
  websocket: {
    open: handleWSOpen,
    close: handleWSClose,
    message: handleWSMessage,
  },
})

watcher({ allContent, clients, loadContent })

logger(
  { msg: "Server running at:", styles: ["green", "bold"] },
  { msg: `http://localhost:${Config.SERVER.PORT}`, styles: ["dim"] }
)

async function watcher({
  clients,
  loadContent,
}: {
  allContent: Map<string, any>
  clients: Set<ServerWebSocket<unknown>>
  loadContent: () => Promise<any>
}) {
  const watcher = watch(".", { recursive: true })

  for await (const event of watcher) {
    if (event.filename?.includes("src")) {
      logger({ msg: `Content changed: ${event.filename}`, styles: ["yellow"] })

      if (event.filename.match(/\.(css|js|ts)$/)) {
        const { success, buildResponse } = await rebuildFiles()

        if (success) {
          logger({ msg: "Build successful", styles: ["green"] })
          scriptPaths.length = 0

          if (buildResponse) {
            scriptPaths.push(...getRelativePaths(buildResponse))
          }
        }
      }

      allContent = await loadContent()

      for (const client of clients) {
        client.send("reload")
      }
    }
  }
}
