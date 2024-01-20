import { build } from "bun"
import buildClientJSFiles from "./build"
import { watch } from "fs"

const url = process.cwd() + "/src"

const watcher = watch(
    url,
    { recursive: true },
    (event, filename) => {
        buildClientJSFiles()
        console.log(`Detected ${event} in ${filename}`)
    }
)

process.on("SIGINT", () => {
    // close watcher when Ctrl-C is pressed
    console.log(" Closing watcher...")
    watcher.close()

    process.exit(0)
})
