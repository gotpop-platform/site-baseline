// concurrent.ts
import { spawn } from "bun"

async function startServer() {
  return spawn({
    cmd: ["bun", "serve"],
    stdout: "inherit",
    stderr: "inherit",
  })
}

async function startBuildWatch() {
  return spawn({
    cmd: ["bun", "build", "--watch"],
    stdout: "inherit",
    stderr: "inherit",
  })
}

async function main() {
  try {
    console.log("🚀 Starting development environment...")
    const [server, builder] = await Promise.all([startServer(), startBuildWatch()])

    // Handle process termination
    process.on("SIGINT", () => {
      server.kill()
      builder.kill()
      process.exit(0)
    })
  } catch (error) {
    console.error("Failed to start:", error)
    process.exit(1)
  }
}

main()
