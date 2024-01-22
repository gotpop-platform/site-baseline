import { Glob } from "bun"
import type { FSWatcher } from "fs"
import { watch } from "fs"
import buildClientJSFiles from "./build"
import { log } from "./logging"

const glob = new Glob("**/*.client.ts")
let watchers: FSWatcher[] = []

log.watchStart()

for await (const filePath of glob.scan(".")) {
  log.watching(filePath)

  buildClientJSFiles(filePath)

  const watcher = watch(filePath, (event) => {
    if (event !== "change") return

    buildClientJSFiles(filePath)
  })

  watchers.push(watcher)
}

log.watchEnd()

process.on("SIGINT", () => {
  log.closing("Server stopped")

  for (const watcher of watchers) {
    watcher.close()
  }

  process.exit(0)
})
