import { Glob } from "bun"
import type { FSWatcher } from "fs"
import { watch } from "fs"
import buildClientJSFiles from "./build"
import { log } from "./logging"

const glob = new Glob("**/*.client.ts")
let watchers: FSWatcher[] = []

log.info(`Watching client files:
`)
for await (const file of glob.scan(".")) {
  log.watching(file)

  const watcher = watch(file, (event, filename) => {
    if (event !== "change") return

    // log.updated(`${filename}: updated`)

    buildClientJSFiles()
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
