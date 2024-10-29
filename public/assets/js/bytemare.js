/* global registerPaint */

if (typeof registerPaint !== "undefined") {
  registerPaint(
    "bytemare",
    class {
      static get inputProperties() {
        return [
          "--bytemare-tile-size",
          "--bytemare-gap",
          "--bytemare-color",
          "--bytemare-probability",
          "--animation-progress",
          "--stagger-delay",
        ]
      }

      paint(ctx, geom, properties) {
        const tileSize = parseInt(properties.get("--bytemare-tile-size")) || 16
        const gap = parseInt(properties.get("--bytemare-gap")) || 1
        const color = properties.get("--bytemare-color").toString().trim() || "#735cdd"
        const animationProgress = parseFloat(properties.get("--animation-progress")) || 0
        const staggerDelay = parseFloat(properties.get("--stagger-delay")) || 0.05

        const geomTileHeight = geom.height / tileSize
        const geomTileWidth = geom.width / tileSize

        for (let y = 0; y < geomTileHeight; y++) {
          const yOffset = y * tileSize - 16

          for (let x = 0; x < geomTileWidth; x++) {
            const xOffset = x * tileSize

            const delay = (x + y) * staggerDelay
            const progress = (((animationProgress - delay) % 1) + 1) % 1
            // const opacity = progress
            const opacity = Math.min(1, x / geomTileWidth - progress)
            const rgbaColor = this.rgbToRgba(color, opacity)

            ctx.fillStyle = rgbaColor
            ctx.beginPath()
            ctx.rect(xOffset + gap, yOffset + gap, tileSize - gap, tileSize - gap)
            ctx.fill()
          }
        }
      }

      rgbToRgba(rgb, alpha) {
        const rgbValues = rgb.match(/\d+/g)

        // if (alpha < 0 || alpha > 1 || rgbValues === null || alpha === isNaN(alpha)) {
        //   return `rgb(${r}, ${g}, ${b})`
        // }

        if (rgbValues.length !== 3) {
          throw new Error("Invalid RGB color format")
        }

        const [r, g, b] = rgbValues

        return `rgba(${r}, ${g}, ${b}, ${alpha})`
      }
    }
  )
}
