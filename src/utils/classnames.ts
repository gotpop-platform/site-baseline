type Value = string | boolean | undefined | null
type Mapping = string | { [key: string]: boolean }
interface ArgumentArray extends Array<Argument> {}
interface ReadonlyArgumentArray
  extends ReadonlyArray<Argument> {}
type Argument =
  | Value
  | Mapping
  | ArgumentArray
  | ReadonlyArgumentArray

const hasOwn = {}.hasOwnProperty

export function classNames(...args: ArgumentArray): string {
  let classes = ""

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg) {
      classes = appendClass(classes, parseValue(arg))
    }
  }

  return classes
}

export const cn = classNames

function parseValue(arg: Argument): string {
  if (typeof arg === "string") {
    return arg
  }

  if (typeof arg !== "object") {
    return ""
  }

  if (Array.isArray(arg)) {
    return classNames.apply(null, arg)
  }

  if (
    arg?.toString !== Object.prototype.toString &&
    !arg?.toString.toString().includes("[native code]")
  ) {
    return arg?.toString() || ""
  }

  let classes = ""

  if (isMapping(arg)) {
    for (const key in arg) {
      if (hasOwn.call(arg, key) && arg[key]) {
        classes = appendClass(classes, key)
      }
    }
  }
  return classes
}

function isMapping(arg: any): arg is Mapping {
  return typeof arg === "object" && !Array.isArray(arg)
}

function appendClass(value: string, newClass: string) {
  if (!newClass) {
    return value
  }

  return value ? value + " " + newClass : newClass
}
