function h(
  type: string | Function,
  props = {},
  ...children: any
) {
  if (typeof type === "function") {
    const childArr = [...children].flat(Infinity).join("")

    return type({
      ...props,
      children: childArr,
    })
  } else {
    const mapProps = Object.entries(props || {})
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ")

    const childArr = children.flat(Infinity).join("")
    let element = `<${type} ${mapProps}>${childArr}</${type}>`

    // Special case for <!DOCTYPE html>
    if (type === "!DOCTYPE html") {
      element = `<!DOCTYPE html>${childArr}`
    }
    return element
  }
}

export default h
