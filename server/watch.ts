import type { FSWatcher } from "fs"
import { Glob } from "bun"
import buildClientJSFiles from "./build"
import { log } from "./logging"
import { watch } from "fs"

const glob = new Glob("**/*.client.ts")
let watchers: FSWatcher[] = []

for await (const file of glob.scan(".")) {
    console.log('Watching:', file);

    const watcher = watch(file, (event, filename) => {
        if (event !== 'change') return

        log.updated(`${filename}: updated`);
        buildClientJSFiles();
    });

    watchers.push(watcher)
}

process.on("SIGINT", () => {
    console.log("Closing watchers...");

    for (const watcher of watchers) {
        watcher.close();
    }

    process.exit(0);
});
