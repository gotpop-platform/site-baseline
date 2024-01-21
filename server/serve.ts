import { log } from "./logging"
import { router } from "./router"

const PORT = 9000

try {
  Bun.serve({
    port: PORT,
    async fetch(request) {
      const url = new URL(request.url)

      // If the URL starts with /public, serve static files from the public directory
      if (url.pathname.startsWith("/public")) {
        const path = `.${url.pathname}`
        const file = await Bun.file(path)
        return new Response(file)
      }

      const route = router.match(request)

      if (!route) {
        return new Response("Not Found", { status: 404 })
      }

      const module = await import(route.filePath)
      const response = await module.default()

      return new Response(response, {
        headers: { "Content-Type": "text/html" },
      })
    },
  })

  log.listening("Listening on:", `http://localhost:${PORT}`)
} catch (error) {
  log.error("Failed to start server:", error)
}
