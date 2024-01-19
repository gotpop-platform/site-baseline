import { Glob, type BuildArtifact } from "bun"

async function liam() {
  const glob = new Glob("**/*.client.ts")

  let arr = []
  for await (const file of glob.scan(".")) {
    // console.log(file, glob.scan("."))
    arr.push(file)
  }

  const build = await Bun.build({
    entrypoints: arr, // Adjust this line as per your project structure
    outdir: "./dist",
  })

  const style = `\x1b[32m%s\x1b[0m`
  const error = `\x1b[31m%s\x1b[0m`
  const orange = `\x1b[33m%s\x1b[0m`
  const purple = `\x1b[35m%s\x1b[0m`
  const greyAndBold = `\x1b[1m\x1b[30m%s\x1b[0m`
  const truckEmoji = `\x1b[1m\x1b[30m🚚\x1b[0m`
  const checkEmoji = `\x1b[1m\x1b[30m✅\x1b[0m`
  const hashEmoji = `\x1b[1m\x1b[30m📦\x1b[0m`
  const greenCheckEmoji = `\x1b[1m\x1b[30m✅\x1b[0m`
  const redXEmoji = `\x1b[1m\x1b[30m❌\x1b[0m`

  if (build.success) {
    // console.log("build.outputs :", build.outputs)

    const root = process.cwd().toString()
    for await (const output of build.outputs) {
      const liam = output.path.replace(root + "/dist", "")

      // Create an object with the properties you want to display
      const tableData = {
        hash: output.hash,
        output: liam,
      }

      // Log the object as a table
      console.table(tableData)
    }

    // const root = process.cwd().toString()

    // for await (const output of build.outputs) {
    //   const liam = output.path.replace(root + "/dist", "")

    //   console.log("#", greyAndBold, output.hash)
    //   console.log(hashEmoji, orange, liam)
    // }
    // console.log("=========================")
    console.log(style, "Build succeeded", checkEmoji)
  } else {
    console.log(error, "Build failed", redXEmoji)
  }
}

liam()
