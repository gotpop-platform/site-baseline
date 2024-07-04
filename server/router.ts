import { getSubdomainDirectories } from "./getSubdomainDirectoryNames"
import { BASE } from "./serve"

const NOT_FOUND_RESPONSE = new Response("Not Found", {
  status: 404,
})
const MODULE_NOT_FOUND_RESPONSE = new Response(
  "Module not found",
  { status: 404 }
)
const INTERNAL_SERVER_ERROR_RESPONSE = new Response(
  "Internal Server Error",
  { status: 500 }
)
const ERROR_GENERATING_RESPONSE = new Response(
  "Error generating response",
  { status: 500 }
)

const getBaseDomain = (hostname: string): string => {
  return hostname.startsWith("www.")
    ? hostname.substring(4)
    : hostname
}

const getRouterPath = async (
  fullSubdomain: string,
  baseDomain: string
): Promise<string> => {
  const subdomainNames = await getSubdomainDirectories()
  const isSubdomain = subdomainNames.includes(
    "/" + fullSubdomain
  )
  return isSubdomain
    ? `/src/pages/subdomains/${fullSubdomain}`
    : "/src/pages"
}

const importModule = async (
  filePath: string
): Promise<any> => {
  try {
    return await import(filePath)
  } catch (e) {
    console.error("Import failed:", e)
    return null
  }
}

export const handleGetPages = async (
  request: Request
): Promise<Response> => {
  try {
    const url = new URL(request.url)
    const baseUrl = new URL(BASE)
    const baseDomain = getBaseDomain(baseUrl.hostname)
    const fullSubdomain = url.hostname.replace(
      `.${baseDomain}`,
      ""
    )
    const routerPath = await getRouterPath(
      fullSubdomain,
      baseDomain
    )
    const dir = process.cwd() + routerPath

    const router = new Bun.FileSystemRouter({
      style: "nextjs",
      dir,
    })

    const route = router.match(request)

    if (!route) {
      return NOT_FOUND_RESPONSE
    }

    const module = await importModule(route.filePath)

    if (!module) {
      return MODULE_NOT_FOUND_RESPONSE
    }

    if (typeof module.default !== "function") {
      console.error(
        "Default export is not a function:",
        module.default
      )
      return INTERNAL_SERVER_ERROR_RESPONSE
    }

    const response = await module
      .default(route.query)
      .catch((e: any) => {
        console.error("Error calling default export:", e)
        return null
      })

    if (!response) {
      return ERROR_GENERATING_RESPONSE
    }

    return new Response(response, {
      headers: { "Content-Type": "text/html" },
    })
  } catch (e) {
    console.error("Unexpected error:", e)
    return INTERNAL_SERVER_ERROR_RESPONSE
  }
}
