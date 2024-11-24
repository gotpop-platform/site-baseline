import { getRelativePaths, rebuildFiles, scriptPaths } from "."

import { logger } from "@gotpop-platform/package-logger"
import { watch } from "fs/promises"

export async function watcher(allContent, clients, loadContent) {
  // Watch for file changes
  const watcher = watch(".", { recursive: true })

  // In serve.ts, modify the watcher:
  for await (const event of watcher) {
    if (event.filename?.includes("src")) {
      logger({ msg: `Content changed: ${event.filename}`, styles: ["yellow"] })

      // Rebuild if JS/TS files changed
      if (event.filename.match(/\.(css|js|ts)$/)) {
        const { success, buildResponse } = await rebuildFiles()

        if (success) {
          logger({ msg: "Build successful", styles: ["green"] })
          // Update script paths
          scriptPaths.length = 0

          if (buildResponse) {
            scriptPaths.push(...getRelativePaths(buildResponse))
          }
        }
      }

      // Reload content
      allContent = await loadContent()

      // Notify clients only if build succeeded or no build was needed
      for (const client of clients) {
        client.send("reload")
      }
    }
  }
}
