import { inspect, styleText } from "util"

type ForegroundColors =
  | "black"
  | "blackBright"
  | "blue"
  | "blueBright"
  | "cyan"
  | "cyanBright"
  | "gray"
  | "green"
  | "greenBright"
  | "grey"
  | "magenta"
  | "magentaBright"
  | "red"
  | "redBright"
  | "white"
  | "whiteBright"
  | "yellow"
  | "yellowBright"
// https://nodejs.org/docs/latest/api/util.html#background-colors
type BackgroundColors =
  | "bgBlack"
  | "bgBlackBright"
  | "bgBlue"
  | "bgBlueBright"
  | "bgCyan"
  | "bgCyanBright"
  | "bgGray"
  | "bgGreen"
  | "bgGreenBright"
  | "bgGrey"
  | "bgMagenta"
  | "bgMagentaBright"
  | "bgRed"
  | "bgRedBright"
  | "bgWhite"
  | "bgWhiteBright"
  | "bgYellow"
  | "bgYellowBright"
// https://nodejs.org/docs/latest/api/util.html#modifiers
type Modifiers =
  | "blink"
  | "bold"
  | "dim"
  | "doubleunderline"
  | "framed"
  | "hidden"
  | "inverse"
  | "italic"
  | "overlined"
  | "reset"
  | "strikethrough"
  | "underline"

type StyleType =
  | ForegroundColors
  | BackgroundColors
  | Modifiers
  | Array<ForegroundColors | BackgroundColors | Modifiers>

export const logObject = (obj: Record<string, string>) => {
  const { styles } = inspect

  styles.string = "green"
  styles.number = "blue"
  styles.boolean = "red"
  styles.date = "magenta"
  styles.null = "bgCyan"
  styles.undefined = "bgYellow"

  console.log(inspect(obj, { colors: true }))
}

type LoggerType = Array<{ msg: string; styles: StyleType[] }>

export const logger = (...items: LoggerType) =>
  console.log(
    items
      .map(({ msg, styles }, index) => {
        const withNewlines =
          (index === 0 ? "\n" : "") + msg + (index === items.length - 1 ? "\n" : "")
        return styles.reduce((text, style) => styleText(style, text), withNewlines)
      })
      .join(" ")
  )
