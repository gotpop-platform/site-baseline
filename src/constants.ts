// Define and export constants

export const PAGES_DIR = process.cwd() + "/src/pages"
export const PORT = 2000
export const PUBLIC_DIR = "./dist"
export const ROUTER_STYLE = "nextjs"
export const SITE_NAME = "Baseline"

export const DATE_FORMAT_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

export type DateFormatOptions = {
  year: "numeric"
  month: "long"
  day: "numeric"
}

export const Config = {
  PAGES: {
    DIR: process.cwd() + "/src/pages",
  },
  SERVER: {
    PORT: 2000,
    dist_DIR: "./dist",
    ROUTER_STYLE: "nextjs" as const,
  },
  APP: {
    SITE_NAME: "Baseline",
  },
  FORMATS: {
    DATE: {
      year: "numeric",
      month: "long",
      day: "numeric",
    } satisfies DateFormatOptions,
  },
} as const
