import { Config } from "src/config"

// types.ts
export interface PageProps {
  siteConfig: Pick<typeof Config, "APP" | "FORMATS">
}

// For truly global items like API endpoints, ports
export const GlobalConfig = {
  SERVER: Config.SERVER,
  PAGES: Config.PAGES,
}

export type BlockDataProps = {
  query: Record<string, string>
  allContent: Map<string, any>
  scriptPaths: Record<string, string>[]
  Config: typeof Config
}
