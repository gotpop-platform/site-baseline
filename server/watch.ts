import { Glob } from "bun"
import buildClientJSFiles from "./build"
import { log } from "./logging"
import { watch } from "fs"

const glob = new Glob("**/*.client.ts")

for await (const file of glob.scan(".")) {
    console.log('Watching:', file);
    watch(file, (event, filename) => {
        if (event === 'change') {
            log.updated(`${filename}: updated`);
            buildClientJSFiles();
        }
    });
}


// const url = process.cwd() + "/src"

// const watcher = watch(
//     url,
//     { recursive: true },
//     (event, filename) => {
//         // buildClientJSFiles()
//         log.updated(`${filename}: updated`)
//     }
// )

process.on("SIGINT", () => {
    console.log(" Closing watcher...")
    watcher.close()

    process.exit(0)
})
