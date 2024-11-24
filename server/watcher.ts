import { getRelativePaths, rebuildFiles, scriptPaths } from "."

import type { ServerWebSocket } from "bun"
import { logger } from "@gotpop-platform/package-logger"
import { watch } from "fs/promises"

export async function watcher({
  allContent,
  clients,
  loadContent,
}: {
  allContent: Map<string, any>
  clients: Set<ServerWebSocket<unknown>>
  loadContent: () => Promise<any>
}) {
  const watcher = watch(".", { recursive: true })

  for await (const event of watcher) {
    if (event.filename?.includes("src")) {
      logger({ msg: `Content changed: ${event.filename}`, styles: ["yellow"] })

      if (event.filename.match(/\.(css|js|ts)$/)) {
        const { success, buildResponse } = await rebuildFiles()

        if (success) {
          logger({ msg: "Build successful", styles: ["green"] })
          scriptPaths.length = 0

          if (buildResponse) {
            scriptPaths.push(...getRelativePaths(buildResponse))
          }
        }
      }

      allContent = await loadContent()

      for (const client of clients) {
        client.send("reload")
      }
    }
  }
}
