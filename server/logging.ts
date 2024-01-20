import { colour, emoji } from "./logging.style";

const { red, underscore } = colour

const error = (msg: string, error?: unknown) => console.error(red, msg, error)

const info = (msg: string) => console.info(msg)

const warn = (msg: string) => console.warn(msg)

const success = (msg: string) => console.log(red, msg)

const updated = (msg: string) => {
    const theMsg = msg.replace("components/", "")
    console.log(colour.grey, theMsg, emoji.checkMark)
}

const log = {
    error,
    info,
    warn,
    success,
    updated
}

export {
    log
}