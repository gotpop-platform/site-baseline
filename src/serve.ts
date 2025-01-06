import { createCopyFilesPlugin, startServer } from "@gotpop-platform/package-baseline"
import { join, resolve } from "path"

import { BuildConfig } from "bun"
import { env } from "process"

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
} as const

const ALLOWED_EXTENSIONS = [".js", ".css", ".woff2", ".png", ".jpg", ".svg", ".ico"]
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const ROOT = env.PROJECT_ROOT ?? resolve(__dirname, "../..")
const ROOT_SRC = resolve(ROOT, "src")
const DIR_PUBLIC = resolve(ROOT, env.npm_package_config_dir_public || "dist")
const DIR_INPUT = resolve(ROOT_SRC, "assets")
const DIR_OUTPUT = resolve(DIR_PUBLIC, "assets")

const buildConfig = {
  entrypoints: [
    // Bun is still not ready to bundle CSS files
    // join(ROOT_SRC, "assets", "styles", "index.css"),
    join(ROOT_SRC, "assets", "scripts", "script.ts"),
    join(ROOT_SRC, "assets", "scripts", "worklets", "worklet.grid.ts"),
    join(ROOT_SRC, "assets", "scripts", "worklets", "worklet.hero.ts"),
  ],
  outdir: DIR_PUBLIC,
  root: ROOT_SRC,
  naming: "[dir]/[name]-[hash].[ext]",
  experimentalCss: true,
  minify: true,
  watch: env.NODE_ENV === "development",
  plugins: [
    createCopyFilesPlugin({
      inputDir: DIR_INPUT,
      outputDir: DIR_OUTPUT,
      directories: ["fonts", "styles", "img"],
      preserveStructure: true,
      verbose: false,
      silent: true,
      onFile: async (src, dest) => {
        console.log(`Processing: ${src}`)
      },
    }),
  ],
} as BuildConfig

const serverConfig = {
  development: env.NODE_ENV === "development",
  hostname: "::",
  port: Number(env.npm_package_config_server_port),
  silent: true,
  watchPaths: ["src/types", "src/blocks", "src/pages", "src/assets"],
  watchPathsExcluded: ["node_modules", ".git", "dist"],
  mimeTypes: MIME_TYPES,
  allowedExtensions: ALLOWED_EXTENSIONS,
  maxFileSize: MAX_FILE_SIZE,
}

startServer({ buildConfig, serverConfig })
