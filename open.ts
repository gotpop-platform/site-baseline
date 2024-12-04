// cli.ts
import { closeTabsWithUrl, openBrowser } from "@gotpop-platform/package-baseline"

const url = process.argv[2] || "http://localhost:2000"
const browser = process.argv[3]

openBrowser(url, { browser: browser as "chrome" | "firefox" | "safari" })
// Close tabs with matching URL and open new one

// Just close tabs with matching URL
await closeTabsWithUrl("http://localhost:3000")
