import { Glob } from "bun"
import path from "path"

const buildClientJSFiles = async () => {
  const glob = new Glob("**/*.client.ts")
  let arr = new Map()

  for await (const file of glob.scan(".")) {
    const parentDir = path.dirname(file)

    const build = await Bun.build({
      entrypoints: [file],
      outdir: parentDir,
      target: "browser",
      format: "esm",
      minify: true,
    })

    for (const output of build.outputs) {
      const rootDir = path.dirname(output.path)
      const thePath = output.path.replace(rootDir, "")

      arr.set(thePath, output.hash)
    }
  }

  console.table(arr)
}

export default buildClientJSFiles
