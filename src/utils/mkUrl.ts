const isDev = process.env.NODE_ENV === "development"
const live = process.env.RAILWAY_PUBLIC_DOMAIN
const dev = process.env.BASE_URL

export const mkUrl = (relative: string | URL) => {
  const baseUrl = isDev ? dev : live
  if (!baseUrl) {
    throw new Error("Base URL is not defined")
  }
  return new URL(relative, baseUrl).href
}
