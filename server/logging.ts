import * as path from "path"

import { colour, emoji } from "./logging.style"

const { red, dim, reset, green, bright, grey, italic, underscore } = colour

const info = (msg: string) => console.info(msg)
const warn = (msg: string) => console.warn(msg)
const success = (msg: string) => console.log(green + msg)

const error = (msg: string, error?: unknown) => {
  console.error(red + msg + error)
}

const listening = (msg1: string, msg2: string) => {
  let log = "\n" + green + italic + msg1 + reset + "\n"
  log += underscore + msg2 + reset + " " + emoji.check + "\n"

  console.log(log)
}

const watchStart = () => {
  const log = bright + "Watching client files:\n" + reset

  console.log(log)
}

const watching = (filePath: string) => {
  const url = new URL(`file://${path.resolve(process.cwd(), filePath)}`)
  const pathname = url.pathname
  const filename = pathname.split("/").pop()

  let log = grey + filename + reset + " " + emoji.watch

  console.log(log)
}

const watchEnd = () => {
  const log = bright + "\nPress Ctrl+C to stop\n" + reset

  console.log(log)
}

const updated = (msg: string) => {
  const theMsg = msg.replace("components/", "")

  console.log(grey + theMsg + emoji.checkMark)
}

const closing = (msg: string) => {
  let log = "\n" + dim + msg + dim + red + "  "
  log += emoji.cross + reset + "\n"

  console.error(log)
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
  watchStart,
  watchEnd,
}

export { log }
