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
  const isOrigin = subdomainNames.includes(fullSubdomain)

  // const isOrigin =
  //   fullSubdomain === "" ||
  //   fullSubdomain === "www" ||
  //   fullSubdomain === "gotpop.co" ||
  //   fullSubdomain === "gotpop" ||
  //   fullSubdomain === "localhost"

  console.log("baseDomain :", baseDomain)
  console.log("Full subdomain:", fullSubdomain)
  console.log("Is origin:", isOrigin)

  const routerPath = isOrigin
    ? "/src/pages"
    : `/src/pages/subdomains/${fullSubdomain}`

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
