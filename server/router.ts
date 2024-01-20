export const router = new Bun.FileSystemRouter({
    style: "nextjs",
    dir: "./src/pages",
    origin: "http://localhost:9000",
    assetPrefix: "public/",
})
