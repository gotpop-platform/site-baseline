export const NOT_FOUND_RESPONSE = new Response(null, {
  status: 302,
  headers: {
    Location: "/404",
  },
})

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
