import { colour, emoji } from "./logging.style"

const error = (msg: string, error?: unknown) =>
  console.error(colour.red, msg, error)

const closing = (msg: string) => {
  let log = `\n${colour.dim}${msg}${colour.dim}${colour.red}  `
  log += `${emoji.cross}${colour.reset}\n`

  console.error(log)
}

const info = (msg: string) => console.info(msg)

const warn = (msg: string) => console.warn(msg)

const success = (msg: string) => console.log(colour.green, msg)

const listening = (msg1: string, msg2: string) => {
  let log = `${colour.green}${colour.italic}${msg1}${colour.reset}\n`
  log += `${colour.underscore}${msg2}${colour.reset} ${emoji.checkMark}\n`

  console.log(log)
}

const watching = (filePath: string) => {
  const repPath = filePath.replace("src/components/", "")
  let log = `${colour.grey}${emoji.watch} `
  log += `${colour.reset}${colour.grey}${repPath}${colour.reset}`

  console.log(log)
}

const updated = (msg: string) => {
  const theMsg = msg.replace("components/", "")
  console.log(colour.grey, theMsg, emoji.checkMark)
}

const log = {
  closing,
  error,
  info,
  listening,
  success,
  updated,
  warn,
  watching,
}

export { log }
