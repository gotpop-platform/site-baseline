const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./src/pages",
  origin: "http://localhost:9000",
  assetPrefix: "public/",
})

const server = Bun.serve({
  port: 9000,
  async fetch(request) {
    const route = router.match(request)

    if (!route) {
      return new Response("Not Found", { status: 404 })
    }

    const module = await import(route.filePath)
    const response = await module.default

    return new Response(response(), {
      headers: { "Content-Type": "text/html" },
    })
  },
})

console.log(`\x1b[32m%s\x1b[0m`, `Listening on http://localhost:${server.port} ...`)
