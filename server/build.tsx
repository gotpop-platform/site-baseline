import { Glob } from "bun"
import { log } from "./logging"
import path from "path"

const buildClientJSFiles = async () => {
  const glob = new Glob("**/*.client.ts")
  let arr = []

  for await (const file of glob.scan(".")) {
    console.log("file :", file)
    const parentDir = path.dirname(file)
    console.log("parent directory :", parentDir)
    arr.push(file)

    const build = await Bun.build({
      entrypoints: [file],
      outdir: parentDir,
      target: "browser",
      format: "esm",
      minify: true,
    })

    if (build.success) {
      const root = process.cwd().toString()

      for await (const output of build.outputs) {
        const thePath = output.path.replace(root + "/dist", "")

        const tableData = {
          hash: output.hash,
          output: thePath,
        }

        console.table(tableData)
      }

      log.success("Build successful")
    } else {
      log.error("Build failed")
    }
  }
}

export default buildClientJSFiles
