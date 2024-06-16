export const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: process.cwd() + "/src/pages",
})

export const routerDemo = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: process.cwd() + "/src/pages/demo",
})
