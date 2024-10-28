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
        ]
      }

      paint(ctx, geom, properties) {
        const tileSize = parseInt(properties.get("--bytemare-tile-size")) || 16
        const gap = parseInt(properties.get("--bytemare-gap")) || 1
        const color = properties.get("--bytemare-color").toString().trim() || "#735cdd"

        const probability = parseFloat(properties.get("--bytemare-probability")) || 0.375
        const geomTileHeight = geom.height / tileSize
        const geomTileWidth = geom.width / tileSize

        for (let y = -4; y < geomTileHeight; y++) {
          const yOffset = y * tileSize

          for (let x = -4; x < geomTileWidth; x++) {
            const xOffset = x * tileSize

            const randomNumber = Math.floor(Math.random() * 100) + 1
            const rgbaColor = this.rgbToRgba(color, randomNumber)

            ctx.fillStyle = rgbaColor // Change fill to the base color
            // ctx.fillStyle = color // Change fill to the base color
            ctx.beginPath() // Start new path
            ctx.rect(xOffset + gap, yOffset + gap, tileSize - gap, tileSize - gap) // Draw a rectangle
            ctx.fill() // Fill shape
          }
        }
      }

      rgbToRgba(rgb, alpha) {
        // Extract the RGB values from the input string
        const rgbValues = rgb.match(/\d+/g)

        if (rgbValues.length !== 3) {
          throw new Error("Invalid RGB color format")
        }

        const [r, g, b] = rgbValues

        // Return the RGBA color string
        return `rgba(${r}, ${g}, ${b}, ${alpha}%)`
      }

      isValidHexColor(hex) {
        return /^#?(?:[0-9a-f]{3}){1,2}$/i.test(hex)
      }

      hexToRgb(hex) {
        if (/^#/i.test(hex)) {
          hex = hex.replace("#", "")
        }

        if (hex.length === 3) {
          const rHex = hex.substring(0, 1)
          const gHex = hex.substring(1, 2)
          const bHex = hex.substring(2, 3)

          hex = `${rHex}${rHex}${gHex}${gHex}${bHex}${bHex}`
        }

        const rDec = parseInt(hex.substring(0, 2), 16)
        const gDec = parseInt(hex.substring(2, 4), 16)
        const bDec = parseInt(hex.substring(4, 6), 16)

        return `rgb(${rDec},${gDec},${bDec})`
      }

      darkenColor(colorString, amt) {
        let rgbString = this.isValidHexColor(colorString) ? this.hexToRgb(colorString) : colorString
        rgbString = rgbString
          .replace(/rgba?\(/g, "")
          .replace(/\)/g, "")
          .replace(/\s/g, "")
        let rgbParts = rgbString.split(",")

        for (let i = 0; i < rgbParts.length; i++) {
          rgbParts[i] = rgbParts[i] - amt

          if (rgbParts[i] < 0) {
            rgbParts[i] = 0
          }
        }

        return `rgb(${rgbParts[0]}, ${rgbParts[1]}, ${rgbParts[2]})`
      }
    }
  )
}
