import { Glob } from "bun"

async function liam() {
  const glob = new Glob("**/*.client.ts")
  console.log("glob :", glob.scan("."))

  let arr = []
  // Scans the current working directory and each of its sub-directories recursively
  for await (const file of glob.scan(".")) {
    console.log(file)
    arr.push(file)
  }

  const build = await Bun.build({
    entrypoints: arr, // Adjust this line as per your project structure
    outdir: "./dist",
  })

  const style = `\x1b[32m%s\x1b[0m`
  const error = `\x1b[31m%s\x1b[0m`

  if (build.success) {
    console.log(style, "Build succeeded")
  } else {
    console.log(error, "Build failed")
  }
}

liam()
