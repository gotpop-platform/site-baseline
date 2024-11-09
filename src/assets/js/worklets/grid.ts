/// <reference path="../../../types/houdini.d.ts" />

if (typeof registerPaint !== "undefined") {
  class GridPainter {
    static get inputProperties() {
      return [
        "--root-grid-size",
        "--grid-gap",
        "--grid-base-color",
        "--animation-progress",
        "--stagger-delay",
        "--even-odd",
      ]
    }

    paint(
      ctx: {
        beginPath: () => void
        moveTo: (arg0: number, arg1: number) => void
        lineTo: (arg0: number, arg1: number) => void
        strokeStyle: any
        stroke: () => void
      },
      geom: { width: number; height: number },
      properties: {
        get: (arg0: string) => { (): any; new (): any; toString: { (): string; new (): any } }
      }
    ) {
      const baseColor =
        properties.get("--grid-base-color").toString().trim() || "rgba(115, 92, 221, 0.4)"

      const gridSize = parseInt(properties.get("--root-grid-size").toString()) || 16

      // Calculate horizontal offset for vertical lines
      let offset = (geom.width % gridSize) / 2

      // Get the --even-odd property
      const evenOdd = properties.get("--even-odd").toString().trim() || "even"

      // Calculate the number of vertical lines
      let numLinesX = Math.floor((geom.width - 2 * offset) / gridSize) + 1

      // Determine desired parity (0 for even, 1 for odd)
      const desiredParity = evenOdd === "odd" ? 1 : 0

      // Adjust offset if numLinesX parity doesn't match desiredParity
      if (numLinesX % 2 !== desiredParity) {
        offset -= gridSize / 2
        numLinesX = Math.floor((geom.width - 2 * offset) / gridSize) + 1
      }

      // Draw vertical grid lines
      for (let x = offset; x <= geom.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, geom.height)
        ctx.strokeStyle = baseColor
        ctx.stroke()
      }

      // Draw horizontal grid lines
      for (let y = 0; y <= geom.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(geom.width, y)
        ctx.strokeStyle = baseColor
        ctx.stroke()
      }
    }

    rgbToRgba(rgb: string, alpha: any) {
      const rgbValues = rgb.match(/\d+/g)
      if (rgbValues === null || rgbValues.length !== 3) {
        throw new Error("Invalid RGB color format")
      }
      const [r, g, b] = rgbValues.map(Number)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    adjustColorBrightness(rgb: string, factor: number) {
      const rgbValues = rgb.match(/\d+/g)
      if (rgbValues === null || rgbValues.length !== 3) {
        throw new Error("Invalid RGB color format")
      }
      let [r, g, b] = rgbValues.map(Number)
      r = Math.max(0, Math.min(255, Math.round(r * factor)))
      g = Math.max(0, Math.min(255, Math.round(g * factor)))
      b = Math.max(0, Math.min(255, Math.round(b * factor)))
      return `rgb(${r}, ${g}, ${b})`
    }
  }

  registerPaint("grid", GridPainter)
}
