import { handleGetAssets } from "./router/handleAssets"
import { handleGetPages } from "./router/router"
import { log } from "./logging"

const PORT = 2000
export const BASE = process.env.BASE_SITE_URL ?? ""

export const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: process.cwd() + "/src/pages",
})

async function serve(request: Request) {
  const url = new URL(request.url)
  const isAssets = url.pathname.startsWith("/assets")

  if (isAssets) {
    return handleGetAssets(url)
  }

  // console.log("request :", request)

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
