import type {
  MarkdownFileProps,
  MetaData,
} from "./markdown.types"

import { Glob } from "bun"
import { join } from "path"
import { parseMarkdownFile } from "./markdown"

export const findMarkdownFiles = async (
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

export const markdownFilesInDir = async (
  dir: string
): Promise<MarkdownFileProps[]> => {
  const foundFiles: string[] = await findMarkdownFiles(dir)

  const mapFiles = foundFiles.map(
    async (filePath): Promise<MarkdownFileProps> => {
      const path = filePath.replace(/\.md$/, "")
      const { metadata, content } = parseMarkdownFile(
        dir,
        path
      )

      const typedMetadata: MetaData = {
        title: metadata.title,
        slug: metadata.slug,
        author: metadata.author,
        description: metadata.description,
        date: metadata.date,
        prev: metadata.prev,
        next: metadata.next,
        id: metadata.id,
      }

      return { metadata: typedMetadata, content }
    }
  )

  const parsedFiles: MarkdownFileProps[] =
    await Promise.all(mapFiles)

  return parsedFiles
}
