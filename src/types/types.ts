import { Constants } from "src/constants"

// types.ts
export interface PageProps {
  siteConfig: Pick<typeof Constants, "APP" | "FORMATS">
}

// For truly global items like API endpoints, ports
export const GlobalConfig = {
  SERVER: Constants.SERVER,
  PAGES: Constants.PAGES,
}

// // pages/index.tsx
// const Page = ({ siteConfig }: PageProps) => {
//   return <h1>{siteConfig.APP.SITE_NAME}</h1>
// }
