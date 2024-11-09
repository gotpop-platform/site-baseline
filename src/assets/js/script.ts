function handleResize(entries: any) {
  for (let entry of entries) {
    const width = entry.contentRect.width

    const rootFontSize = entry.target.computedStyleMap().get("font-size").value

    entry.target.attributeStyleMap.set("--root-grid-size", rootFontSize)
  }
}

const resizeObserver = new ResizeObserver(handleResize)

resizeObserver.observe(document.documentElement)
