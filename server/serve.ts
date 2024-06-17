import { log } from "./logging"
import { handleGetPages } from "./router"

const PORT = 9000
export const BASE = process.env.BASE_URL ?? ""

function handleGetAssets(url: URL) {
  const pathRenamedToPublic = `./public${url.pathname}`
  const file = Bun.file(pathRenamedToPublic)
  const headers = {
    "Cache-Control": "max-age=31536000",
  }

  const res = file
    ? {
        body: file,
        headers,
      }
    : {
        body: "Not Found",
        status: 404,
      }

  const { body, status } = res

  return new Response(body, {
    status: status,
    headers: headers,
  })
}

async function serve(request: Request) {
  const url = new URL(request.url)
  const isAssets = url.pathname.startsWith("/assets")

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
