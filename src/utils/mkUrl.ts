export const mkUrl = (relative: string | URL) =>
  new URL(relative, process.env.BASE_SITE_URL).href
