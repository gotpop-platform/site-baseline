import { join, relative } from "path"
import { type BunPlugin } from "bun"
import { promises as fs } from "fs"
import { styleText as sty } from "util"
import { logger } from "../server/logging"

// Function to copy files and directories recursively
async function copyFiles(source: string, destination: string) {
  const sourcePath = join(process.cwd(), source)
  const destinationPath = join(process.cwd(), destination)
  const relativePath = relative(process.cwd(), sourcePath)

  console.log(
    sty("italic", "Copying from ") + `${sty("red", relativePath)} to ${sty("green", destination)}\n`
  )

  await fs.mkdir(destinationPath, { recursive: true })
  const entries = await fs.readdir(sourcePath, { withFileTypes: true })

  for (const entry of entries) {
    const sourceEntryPath = join(sourcePath, entry.name)
    const destinationEntryPath = join(destinationPath, entry.name)
    const relativeSourcePath = relative(process.cwd(), sourceEntryPath)

    if (entry.isDirectory()) {
      console.log(`Entering directory: ${relativeSourcePath}\n`)
      await copyFiles(relativeSourcePath, join(destination, entry.name))
    } else {
      await fs.copyFile(sourceEntryPath, destinationEntryPath)
      console.log(`Copied file: ${relativeSourcePath}\n`)
    }
  }
}

interface CopyFilesPluginOptions {
  // Source and destination configuration
  inputDir?: string
  outputDir?: string
  directories: string[]

  // File handling options
  patterns?: string[]
  exclude?: string[]

  // Processing options
  preserveStructure?: boolean
  flatten?: boolean

  // Hooks
  onFile?: (source: string, dest: string) => Promise<void>
  onDir?: (source: string, dest: string) => Promise<void>

  // Logging options
  verbose?: boolean
  silent?: boolean
}

export const createCopyFilesPlugin = (options: CopyFilesPluginOptions): BunPlugin => ({
  name: "copy-assets",
  async setup(build) {
    const {
      inputDir = "src",
      outputDir = "dist",
      directories,
      patterns = ["**/*"],
      exclude = [],
      preserveStructure = true,
      flatten = false,
      onFile,
      onDir,
      verbose = false,
      silent = false,
    } = options

    if (!silent) logger({ msg: "Copying assets...", styles: ["bold", "bgYellowBright"] })

    try {
      for (const directory of directories) {
        const destination = join(
          outputDir,
          preserveStructure ? directory.replace(inputDir, "") : ""
        )

        // Call custom directory hook if provided
        if (onDir) await onDir(directory, destination)

        await copyFiles("/" + inputDir + "/" + directory, "/" + destination)

        if (verbose) {
          console.log(`Processed directory: ${directory}`)
        }
      }

      if (!silent) logger({ msg: "Finished copying assets", styles: ["bold", "bgGreenBright"] })
    } catch ({ message }) {
      logger({ msg: message, styles: ["bold", "red"] })
    }
  },
})
