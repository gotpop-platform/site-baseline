import { Subprocess } from "bun"
import { logger } from "@gotpop-platform/package-logger"
import { watch } from "fs"

let serverProcess: Subprocess<"ignore", "inherit", "inherit">
let buildProcess: Subprocess<"ignore", "inherit", "inherit">

const startBuild = () => {
  buildProcess?.kill()
  buildProcess = Bun.spawn(["bun", "run", "server/build.ts"], {
    stdout: "inherit",
    stderr: "inherit",
  })
  return buildProcess
}

const startServer = () => {
  serverProcess?.kill()
  serverProcess = Bun.spawn(["bun", "run", "server/serve.ts"], {
    stdout: "inherit",
    stderr: "inherit",
  })
  return serverProcess
}

const handleChange = (path: string) => {
  logger({ msg: "Change detected:", styles: ["yellow"] }, { msg: path, styles: ["dim"] })
  startBuild()
  startServer()
}

// Initial start
startBuild()
startServer()

// Watch both directories
watch("./server", { recursive: true }, (_event, filename) => {
  handleChange(`server/${filename}`)
})

watch("./src", { recursive: true }, (_event, filename) => {
  handleChange(`src/${filename}`)
})

process.on("SIGINT", () => {
  buildProcess?.kill()
  serverProcess?.kill()
  process.exit()
})

logger(
  { msg: "Development mode:", styles: ["green", "bold"] },
  { msg: "watching for changes...", styles: ["dim"] }
)
