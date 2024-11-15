import { BuildOutput } from "bun"
import { createCopyFilesPlugin } from "@gotpop-platform/bun-plugin-copy-assets"

const buildResponse = await Bun.build({
  entrypoints: [
    "src/assets/js/script.ts",
    "src/assets/js/worklets/worklet.grid.ts",
    "src/assets/js/worklets/worklet.hero.ts",
  ],
  outdir: "dist",
  root: "./src",
  naming: "[dir]/[name]-[hash].[ext]",
  experimentalCss: true,
  plugins: [
    createCopyFilesPlugin({
      inputDir: "src/assets",
      outputDir: "dist/assets",
      directories: ["fonts", "img", "styles"],
      preserveStructure: true,
      verbose: false,
      silent: true,
      onFile: async (src, dest) => {
        console.log(`Processing: ${src}`)
      },
    }),
  ],
})

// Get relative paths from build output
const getRelativePaths = (buildResponse: BuildOutput) => {
  const baseDir = process.cwd() + "/dist"

  return buildResponse.outputs.map((output) => {
    // Remove base directory path and leading slash
    const rootPath = output.path.replace(baseDir, "/").replace(/^\//, "")
    // console.log("rootPath :", rootPath)

    // Get original entry point name
    const entryPoint =
      output.path
        .split("/")
        .pop()
        ?.replace(/-[a-z0-9]+\.js$/, ".ts") || ""

    // Determine type based on filename pattern
    const type = output.path.includes("worklet.") ? "worklet" : "script"

    return {
      entryPoint,
      hashedPath: rootPath,
      type,
    }
  })
}

export const scriptPaths: Record<string, string>[] = getRelativePaths(buildResponse)

// console.log("paths :", scriptPaths)
