import { Config } from "src/constants"

// types.ts
export interface PageProps {
  siteConfig: Pick<typeof Config, "APP" | "FORMATS">
}

// For truly global items like API endpoints, ports
export const GlobalConfig = {
  SERVER: Config.SERVER,
  PAGES: Config.PAGES,
}

// // pages/index.tsx
// const Page = ({ siteConfig }: PageProps) => {
//   return <h1>{siteConfig.APP.SITE_NAME}</h1>
// }

export type BlockDataProps = {
  query: Record<string, string>
  allContent: Map<string, any>
  scriptPaths: Record<string, string>[]
}
