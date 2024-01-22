function h(type: string | Function, props = {}, ...children: string[]) {
  if (typeof type === "function") {
    const childArr = [...children].flat(Infinity).join("")
    console.log("childArr :", childArr)

    // if (!childArr) return

    return type({
      ...props,
      children: childArr,
    })
  } else {
    const mapProps = Object.entries(props || {})
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ")

    let element = `<${type} ${mapProps}>${children.join("")}</${type}>`

    return element
  }
}

export default h
