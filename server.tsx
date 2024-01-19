import { Glob, type BuildArtifact } from "bun"

async function liam() {
  const glob = new Glob("**/*.client.ts")

  let arr = []
  for await (const file of glob.scan(".")) {
    console.log(file, glob.scan("."))
    arr.push(file)
  }

  const build = await Bun.build({
    entrypoints: arr, // Adjust this line as per your project structure
    outdir: "./dist",
  })

  const style = `\x1b[32m%s\x1b[0m`
  const error = `\x1b[31m%s\x1b[0m`
  const orange = `\x1b[33m%s\x1b[0m`
  const purple = `\x1b[35m%s\x1b[0m`

  if (build.success) {
    // console.log("build.outputs :", build.outputs)

    const root = process.cwd().toString()

    for await (const output of build.outputs) {
      const liam = output.path.replace(root, "")

      console.log(purple, output.hash, orange, liam)
    }
    console.log(style, "Build succeeded")
  } else {
    console.log(error, "Build failed")
  }
}

liam()

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
    const response = await module.default()

    return new Response(response, {
      headers: { "Content-Type": "text/html" },
    })
  },
})

const style = `\x1b[32m%s\x1b[0m`
const msg = `Listening on http://localhost:${server.port} ...`
console.log(style, msg)
