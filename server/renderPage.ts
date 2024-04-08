import type { BuildConfig } from "bun"

const buildPagesFiles = async (filePath: string) => {
  const url = new URL(filePath, import.meta.url)
  let outDir = "./public"

  if (url.pathname.endsWith(".ts")) {
    outDir = "./public/assets/js"
  }

  const buildConfig: BuildConfig = {
    entrypoints: [filePath],
    outdir: outDir,
    target: "browser",
    format: "esm",
    minify: true,
  }

  const build = await Bun.build(buildConfig)
  const arr = new Map()

  for (const output of build.outputs) {
    const rootDir = process.cwd() + "/public/assets"
    const thePath = output.path.replace(rootDir, "")

    arr.set(thePath, output.hash)
  }

  const tableData = Array.from(arr, ([key, value]) => ({
    Path: key,
    Hash: value,
  }))

  console.table(tableData)
}

export default buildPagesFiles
