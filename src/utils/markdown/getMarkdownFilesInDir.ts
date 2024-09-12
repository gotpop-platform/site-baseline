import { Glob } from "bun"
import { join } from "path"
import { parseMarkdownFile } from "./markdown"

interface MetaData {
  title: string
  slug: string
  author: string
  date: string
}

interface ParsedFile {
  metadata: MetaData
  content: string
}

export const markdownFiles = async (
  file: string
): Promise<string[]> => {
  const glob = new Glob("**/*.md")
  const markdownFiles: string[] = []

  const contentDir = join(
    process.cwd(),
    "src/content/",
    file
  )

  for await (const file of glob.scan(contentDir)) {
    markdownFiles.push(file)
  }

  return markdownFiles
}

export const markdownFilesInDir = async (dir: string) => {
  const awaitFiles = await markdownFiles(dir)

  const parsedFiles = await Promise.all(
    awaitFiles.map(async (filePath) => {
      const path = filePath.replace(/\.md$/, "")
      const { metadata, content } = await parseMarkdownFile(
        dir,
        path
      )

      return { metadata, content }
    })
  )

  return parsedFiles
}
