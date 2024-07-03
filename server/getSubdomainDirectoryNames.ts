import { Glob } from "bun"

export const getSubdomainDirectories = async (): Promise<
  string[]
> => {
  let directories = new Set<string>()

  const basePath = "./src/pages/subdomains"
  const globSubDirectories = new Glob(
    basePath + "/*/index.tsx"
  )

  const addUniquePath = (file: string) => {
    const directoryPath = file
      .substring(0, file.lastIndexOf("/"))
      .replace(basePath, "")

    directories.add(directoryPath)
  }

  for await (const file of globSubDirectories.scan(".")) {
    addUniquePath(file)
  }

  return Array.from(directories)
}
