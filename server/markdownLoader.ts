import type { BunPlugin } from "bun"
// import { BunPlugin } from "bun"
import { parseMarkdownFileLoader } from "@gotpop-platform/package-markdown"
import { plugin } from "bun"
import { readFileSync } from "fs"

await plugin({
  name: "markdownLoader",
  async setup(build) {
    build.onLoad({ filter: /\.md$/ }, async (args) => {
      // Read file content
      const text = await Bun.file(args.path).text()

      // Parse markdown
      const parsedContent = await parseMarkdownFileLoader(args.path)

      // Return with proper exports object
      return {
        exports: {
          default: parsedContent,
          content: parsedContent,
        },
        loader: "object",
      }
    })
  },
})
