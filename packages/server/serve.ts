import { createCopyFilesPlugin, startServer } from "@gotpop-platform/package-baseline"
import { join, resolve } from "path"

import { env } from "process"

const ROOT = env.PROJECT_ROOT ?? resolve(__dirname, "../..")
const ROOT_CLIENT = resolve(ROOT, "packages/client/src")
const DIR_PUBLIC = resolve(ROOT, env.npm_package_config_dir_public || "dist")
const DIR_INPUT = resolve(ROOT_CLIENT, "assets")
const DIR_OUTPUT = resolve(DIR_PUBLIC, "assets")

const buildConfig = {
  entrypoints: [
    join(ROOT_CLIENT, "assets", "scripts", "script.ts"),
    join(ROOT_CLIENT, "assets", "scripts", "worklets", "worklet.grid.ts"),
    join(ROOT_CLIENT, "assets", "scripts", "worklets", "worklet.hero.ts"),
  ],
  outdir: DIR_PUBLIC,
  root: ROOT_CLIENT,
  naming: "[dir]/[name]-[hash].[ext]",
  experimentalCss: true,
  plugins: [
    createCopyFilesPlugin({
      inputDir: DIR_INPUT,
      outputDir: DIR_OUTPUT,
      directories: ["fonts", "styles", "img"],
      preserveStructure: true,
      verbose: false,
      silent: false,
      onFile: async (src, dest) => {
        console.log(`Processing: ${src}`)
      },
    }),
  ],
}

const watchPaths = ["packages/client/src", "packages/server"]

startServer({ buildConfig, watchPaths })
