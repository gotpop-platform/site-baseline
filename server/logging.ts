import { colour } from "./logging.style";

const { red, underscore } = colour

const error = (msg: string, error: unknown) => console.error(red, msg, error)

const info = (msg: string) => console.info(msg)

const warn = (msg: string) => console.warn(msg)

const success = (msg: string) => console.log(underscore, red, msg)


const log = {
    error,
    info,
    warn,
    success,
}

export {
    log
}