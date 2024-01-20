import { log } from "./logging"
import { router } from "./router"

try {
  Bun.serve({
    port: 9000,
    async fetch(request) {
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

  log.listening("Listening on:", "http://localhost:9000")
} catch (error) {
  log.error("Failed to start server:", error)
}
