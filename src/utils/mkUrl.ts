const isDev = process.env.NODE_ENV === "development"
const live = process.env.RAILWAY_PUBLIC_DOMAIN
const dev = process.env.BASE_URL

export const mkUrl = (relative: string | URL) =>
  new URL(relative, isDev ? dev : live).href
