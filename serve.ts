import { PORT } from "src/constants"
import { contentMap } from "@gotpop-platform/package-markdown"
import { logger } from "@gotpop-platform/package-logger"
import { servePagesOrAssets } from "@gotpop-platform/package-server"

type ContentMap = Map<string, any>

export const BASE = process.env.BASE_SITE_URL ?? ""
export let allContent: ContentMap

async function startServer() {
  try {
    // Cache the content map
    allContent = await contentMap()

    Bun.serve({
      hostname: "::",
      port: process.env.PORT ?? PORT,
      async fetch(request) {
        return servePagesOrAssets(request)
      },
    })

    logger(
      { msg: "Server started:", styles: ["green", "bold"] },
      { msg: "http://localhost:2000", styles: ["dim"] }
    )
  } catch (error) {
    logger({ msg: String(error), styles: ["bold", "red"] })
  }
}

startServer()
