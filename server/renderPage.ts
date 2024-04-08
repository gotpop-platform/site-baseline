import type { BuildConfig } from "bun"

const buildPagesFiles = async (filePath: string) => {
  const url = new URL(filePath, import.meta.url)
  let outDir = "./public"

  const buildConfig: BuildConfig = {
    entrypoints: [filePath],
    outdir: outDir,
    target: "browser",
    format: "esm",
    minify: true,
  }

  await Bun.build(buildConfig)
}

export default buildPagesFiles
