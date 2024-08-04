
export const NOT_FOUND_RESPONSE = new Response(
  "Not Found",
  {
    status: 404,
  }
)
export const MODULE_NOT_FOUND_RESPONSE = new Response(
  "Module not found",
  { status: 404 }
)
export const INTERNAL_SERVER_ERROR_RESPONSE = new Response(
  "Internal Server Error",
  { status: 500 }
)
export const ERROR_GENERATING_RESPONSE = new Response(
  "Error generating response",
  { status: 500 }
)

export const getBaseDomain = (hostname: string): string => {
  return hostname.startsWith("www.")
    ? hostname.substring(4)
    : hostname
}

export const getRouterPath = async (
  fullSubdomain: string,
  baseDomain: string
): Promise<string> => {
  // const subdomainNames = await getSubdomainDirectories()
  // const isSubdomain = subdomainNames.includes(
  //   "/" + fullSubdomain
  // )
  // return isSubdomain
  //   ? `/src/pages/subdomains/${fullSubdomain}`
  //   : "/src/pages"

  return "/src/pages"
}

export const importModule = async (
  filePath: string
): Promise<any> => {
  try {
    return await import(filePath)
  } catch (e) {
    console.error("Import failed:", e)
    return null
  }
}
