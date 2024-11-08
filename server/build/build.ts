import { createCopyFilesPlugin } from "../../plugins/copy-assets"

await Bun.build({
  entrypoints: ["src/assets/js/script.ts", "src/assets/js/worklets/grid.ts"],
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
      verbose: true,
      onFile: async (src, dest) => {
        console.log(`Processing: ${src}`)
      },
    }),
  ],
})
