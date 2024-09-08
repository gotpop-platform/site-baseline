import { handleGetAssets } from "./handleAssets"
import { handleGetPages } from "./router"
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

  return handleGetPages(request)
}

function startServer() {
  try {
    Bun.serve({
      hostname: "::",
      port: process.env.PORT ?? PORT,
      async fetch(request) {
        const match = router.match(request)
        if (match) {
          // Handle the matched route
          // You'll need to implement this part based on your specific needs

          return serve(request)
        } else {
          // No match found, return a 404 response
          return new Response(null, {
            status: 302,
            headers: {
              Location: "/404",
            },
          })
        }
      },
    })

    log.listening("Listening on port:", `${PORT}`)
  } catch (error) {
    log.error("Failed to start server:", error)
  }
}

startServer()
