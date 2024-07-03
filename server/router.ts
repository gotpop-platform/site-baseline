import { getSubdomainDirectories } from "./getSubdomainDirectoryNames"
import { BASE } from "./serve"

export const handleGetPages = async (request: Request) => {
  const url = new URL(request.url)
  const baseUrl = new URL(BASE)

  const baseDomain = baseUrl.hostname.startsWith("www.")
    ? baseUrl.hostname.substring(4)
    : baseUrl.hostname

  const fullSubdomain = url.hostname.replace(
    `.${baseDomain}`,
    ""
  )

  const subdomainNames = await getSubdomainDirectories()
  const isLocalhost =
    baseDomain === "localhost" || baseDomain === "127.0.0.1"

  const isSubdomain = subdomainNames.includes(
    "/" + fullSubdomain
  )
  console.log("subdomainNames :", subdomainNames)

  console.log("baseDomain :", baseDomain)
  console.log("fullSubdomain :", fullSubdomain)
  console.log("isSubdomain :", isSubdomain + "\n")

  const test = "gotpop.co"

  const lastIndex = test.lastIndexOf(".")
  const subdomainWithoutExtension = test.substring(
    0,
    lastIndex
  )

  console.log(
    "subdomainWithoutExtension :",
    subdomainWithoutExtension
  )

  const routerPath = isSubdomain
    ? `/src/pages/subdomains/${fullSubdomain}`
    : "/src/pages"

  console.log("routerPath :", routerPath)
  const dir = process.cwd() + routerPath

  const router = new Bun.FileSystemRouter({
    style: "nextjs",
    dir,
  })

  const route = router.match(request)

  if (!route) {
    return new Response("Not Found", {
      status: 404,
    })
  }

  const module = await import(route.filePath).catch((e) =>
    console.error("Import failed:", e)
  )

  if (!module) {
    return new Response("Module not found", { status: 404 })
  }

  if (typeof module.default !== "function") {
    console.error(
      "Default export is not a function:",
      module.default
    )
    return new Response("Internal Server Error", {
      status: 500,
    })
  }

  const response = await module
    .default(route.query)
    .catch((e: any) =>
      console.error("Error calling default export:", e)
    )

  if (!response) {
    return new Response("Error generating response", {
      status: 500,
    })
  }

  return new Response(response, {
    headers: { "Content-Type": "text/html" },
  })
}
