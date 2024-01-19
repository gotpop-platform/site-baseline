const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./src/pages",
  origin: "http://localhost:9000",
  assetPrefix: "public/",
})

const build = await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: "./out",
})

const style = `\x1b[32m%s\x1b[0m`
const msg = `Listening on http://localhost:${build} ...`
console.log(style, msg)
