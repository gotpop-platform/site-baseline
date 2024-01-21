import type { FSWatcher } from "fs"
import { Glob } from "bun"
import buildClientJSFiles from "./build"
import { log } from "./logging"
import { watch } from "fs"

const glob = new Glob("**/*.client.ts")
let watchers: FSWatcher[] = []

log.info(`Watching client files:
`)
for await (const filePath of glob.scan(".")) {
  log.watching(filePath)

  const watcher = watch(filePath, (event, filename) => {
    if (event !== "change") return

    buildClientJSFiles(filePath, filename)
  })

  watchers.push(watcher)
}
log.info(`
Press Ctrl+C to stop
`)

process.on("SIGINT", () => {
  log.closing("Server stopped")

  for (const watcher of watchers) {
    watcher.close()
  }

  process.exit(0)
})
