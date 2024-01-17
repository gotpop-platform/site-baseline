import { content } from "./item"

const server = Bun.serve({
  port: 9000,
  fetch(req: Request) {
    // return new Response(content.join(''), {
    //   headers: { "Content-Type": "text/html" },
    // })
    return new Response(Bun.file("index.html"), {
      headers: { "Content-Type": "text/html" },
    })
  },
})

console.log(`\x1b[32m%s\x1b[0m`, `Listening on http://localhost:${server.port} ...`);
