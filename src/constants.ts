// Define and export constants

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
    PORT: process.env.PORT ?? 2000,
    PUBLIC_DIR: "./dist",
    ROUTER_STYLE: "nextjs" as const,
    DIR_CONTENT: process.cwd() + "/src/blocks",
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
