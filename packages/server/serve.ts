import { createCopyFilesPlugin, startServer } from "@gotpop-platform/package-baseline"

import { env } from "process"

const buildConfig = {
  entrypoints: [
    "src/assets/js/script.ts",
    "src/assets/js/worklets/worklet.grid.ts",
    "src/assets/js/worklets/worklet.hero.ts",
    // "src/assets/styles/index.css", // CSS parsing is still patchy
  ],
  outdir: env.npm_package_config_dir_public,
  root: env.npm_package_config_root,
  naming: "[dir]/[name]-[hash].[ext]",
  experimentalCss: true,
  plugins: [
    createCopyFilesPlugin({
      inputDir: "../client/src/assets",
      outputDir: "../client/dist/assets",
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
