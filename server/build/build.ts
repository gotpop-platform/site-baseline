import { build } from "bun"

const results = await build({
  entrypoints: [process.cwd() + "/src/assets/styles/index.css"],
  outdir: "./dist",
  // experimentalCss: true,
})

console.log(results)
