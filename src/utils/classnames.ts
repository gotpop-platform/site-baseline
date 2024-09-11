// Shameless rip off of classnames package

type Value = string | boolean | undefined | null
type Mapping = Record<string, any>
interface ArgumentArray extends Array<Argument> {}
interface ReadonlyArgumentArray
  extends ReadonlyArray<Argument> {}
type Argument =
  | Value
  | Mapping
  | ArgumentArray
  | ReadonlyArgumentArray

const hasOwn = {}.hasOwnProperty

export default function classNames(
  ...args: ArgumentArray
): string {
  let classes = ""

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (arg) {
      classes = appendClass(classes, parseValue(arg))
    }
  }

  return classes
}

function parseValue(arg: any) {
  if (typeof arg === "string") {
    return arg
  }

  if (typeof arg !== "object") {
    return ""
  }

  if (Array.isArray(arg)) {
    return classNames.apply(arg)
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes("[native code]")
  ) {
    return arg.toString()
  }

  let classes = ""

  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key)
    }
  }

  return classes
}

function appendClass(value: string, newClass: string) {
  if (!newClass) {
    return value
  }

  return value ? value + " " + newClass : newClass
}
