import { createCopyFilesPlugin, startServer } from "@gotpop-platform/package-baseline"

import { env } from "process"
import path from "path"

// Get absolute paths
const CLIENT_ROOT = path.resolve(__dirname, "../client/src")
const PUBLIC_DIR = path.resolve(env.PROJECT_ROOT || "", env.npm_package_config_dir_public || "dist")
// console.log("PUBLIC_DIR :", PUBLIC_DIR)
const INPUT_DIR = path.resolve(CLIENT_ROOT, "assets")
console.log("INPUT_DIR :", INPUT_DIR)
const OUTPUT_DIR = path.resolve(PUBLIC_DIR, "assets")
console.log("OUTPUT_DIR :", OUTPUT_DIR)

// path.join(env.PROJECT_ROOT || "", "packages/client/dist/assets")

const buildConfig = {
  entrypoints: [
    path.join(CLIENT_ROOT, "assets/js/script.ts"),
    path.join(CLIENT_ROOT, "assets/js/worklets/worklet.grid.ts"),
    path.join(CLIENT_ROOT, "assets/js/worklets/worklet.hero.ts"),
  ],
  outdir: PUBLIC_DIR,
  root: CLIENT_ROOT,
  naming: "[dir]/[name]-[hash].[ext]",
  experimentalCss: true,
  plugins: [
    createCopyFilesPlugin({
      inputDir: INPUT_DIR,
      outputDir: OUTPUT_DIR,
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

startServer({ buildConfig })
