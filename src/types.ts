import { Config } from "./constants"

export interface ScriptPath {
  entryPoint: string
  hashedPath: string
  type: "script" | "worklet"
}

export interface PageProps {
  query: {
    slug: string
    [key: string]: string
  }
  scriptPaths: ScriptPath[]
  Config: typeof Config
  allContent: Map<string, any>
}
