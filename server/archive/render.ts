// import { Glob } from "bun"
// import type { FSWatcher } from "fs"
// import { log } from "./logging"
// import buildPagesFiles from "./renderPage"

// const glob = new Glob("src/pages/*.tsx")
// console.log("glob :", glob)
// let watchers: FSWatcher[] = []

// for await (const filePath of glob.scan(".")) {
//   log.watching(filePath)

//   buildPagesFiles(filePath)
// }
