import { BASE } from "./serve"

export const handleGetPages = async (request: Request) => {
  const url = new URL(request.url)
  const baseUrl = new URL(BASE)

  const subdomain = url.hostname.split(".")[0]
  const isOrigin =
    subdomain === baseUrl.hostname ||
    subdomain === "localhost" ||
    subdomain === "gotpop"

  console.log("subdomain :", subdomain)
  console.log("isOrigin :", isOrigin)

  const routerPath = isOrigin
    ? "/src/pages"
    : `/src/pages/subdomains/${subdomain}`

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

  const module = await import(route.filePath)
  const response = await module.default(route.query)

  return new Response(response, {
    headers: { "Content-Type": "text/html" },
  })
}
