import { Glob } from "bun"

export const getPages = async () => {
  const glob = new Glob("./src/pages/*.tsx")

  let arr: string[] = []

  for await (const filePath of glob.scan(".")) {
    arr.push(filePath)
  }

  return arr
}
