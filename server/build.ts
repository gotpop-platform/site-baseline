import { BuildOutput } from "bun"
import { clients } from "./serve"
import { createCopyFilesPlugin } from "@gotpop-platform/bun-plugin-copy-assets"
import { logger } from "@gotpop-platform/package-logger"

export const buildResponse = await Bun.build({
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
      silent: false,
      onFile: async (src, dest) => {
        console.log(`Processing: ${src}`)
      },
    }),
  ],
})

export const getRelativePaths = (buildResponse: BuildOutput) => {
  const baseDir = process.cwd() + "/dist"

  return buildResponse.outputs.map((output) => {
    const rootPath = output.path.replace(baseDir, "/").replace(/^\//, "")

    const entryPoint =
      output.path
        .split("/")
        .pop()
        ?.replace(/-[a-z0-9]+\.js$/, ".ts") || ""

    const type = output.path.includes("worklet.") ? "worklet" : "script"

    // Notify clients
    // for (const client of clients) {
    //   client.send("reload")
    // }

    logger({ msg: "Build complete", styles: ["green", "bold"] })
    logger({ msg: "Output:", styles: ["dim"] }, { msg: rootPath, styles: ["blue"] })

    return {
      entryPoint,
      hashedPath: rootPath,
      type,
    }
  })
}

export const scriptPaths: Record<string, string>[] = getRelativePaths(buildResponse)

export async function rebuildFiles() {
  try {
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
          silent: false,
        }),
      ],
    })
    return { success: true, buildResponse }
  } catch (error) {
    logger({ msg: `Build failed: ${error}`, styles: ["red"] })
    return { success: false, error }
  }
}
