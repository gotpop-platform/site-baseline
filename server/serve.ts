import { handleGetAssets } from "./handleAssets"
import { handleGetPages } from "./router"
import { log } from "./logging"

const PORT = 2000
export const BASE = process.env.BASE_SITE_URL ?? ""

async function serve(request: Request) {
  const url = new URL(request.url)
  const isAssets =
    url.pathname.startsWith("/assets") ||
    url.pathname.startsWith("/themes")

  if (isAssets) {
    return handleGetAssets(url)
  }

  return handleGetPages(request)
}

function startServer() {
  try {
    Bun.serve({
      hostname: "::",
      port: process.env.PORT ?? PORT,
      async fetch(request) {
        return serve(request)
      },
    })

    log.listening("Listening on port:", `${PORT}`)
  } catch (error) {
    log.error("Failed to start server:", error)
  }
}

startServer()
