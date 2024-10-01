const isDev = process.env.NODE_ENV === "development"
const live = process.env.RAILWAY_PUBLIC_DOMAIN
const dev = process.env.BASE_URL

export const mkUrl = (relative: string | URL) => {
  const baseUrl = isDev ? dev : live
  if (!baseUrl) {
    throw new Error("Base URL is not defined")
  }

  // Ensure baseUrl includes protocol
  const formattedBaseUrl = baseUrl.startsWith("http")
    ? baseUrl
    : `https://${baseUrl}`

  // Ensure relative URL is correctly formatted
  const formattedRelative = relative
    .toString()
    .startsWith("/")
    ? relative
    : `/${relative}`

  return new URL(formattedRelative, formattedBaseUrl).href
}
