import type { FSWatcher } from "fs"
import { Glob } from "bun"
import buildPagesFiles from "./renderPage"
import { log } from "./logging"
import { watch } from "fs"

const glob = new Glob("src/pages/*.ts")
let watchers: FSWatcher[] = []

for await (const filePath of glob.scan(".")) {
  log.watching(filePath)

  buildPagesFiles(filePath)

  const watcher = watch(filePath, (event) => {
    if (event !== "change") return

    buildPagesFiles(filePath)
  })

  watchers.push(watcher)
}
