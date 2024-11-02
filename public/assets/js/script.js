// Register the custom property using CSS Typed OM
// if (typeof CSS !== "undefined" && typeof CSS.registerProperty === "function") {
//   CSS.registerProperty({
//     name: "--root-font-size",
//     syntax: "*",
//     inherits: true,
//     initialValue: 16, // Default value
//   })
// }

// Function to handle screen width adjustments
function handleResize(entries) {
  for (let entry of entries) {
    const width = entry.contentRect.width
    // console.log(`Screen width: ${width}px`)

    // Get the root font size using computedStyleMap
    const rootFontSize = entry.target.computedStyleMap().get("font-size").value
    console.log("rootFontSize :", rootFontSize)

    // Set the custom property using CSS Typed OM
    entry.target.attributeStyleMap.set("--root-grid-size", rootFontSize)
  }
}

// Create a ResizeObserver instance
const resizeObserver = new ResizeObserver(handleResize)

// Observe the document's root element
resizeObserver.observe(document.documentElement)
