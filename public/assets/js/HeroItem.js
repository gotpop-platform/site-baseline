class CheckerboardPainter {
  static get inputProperties() {
    return [
      "--checkerboard-spacing",
      "--checkerboard-size",
      "--colour-1",
      "--colour-2",
      "--colour-3",
    ]
  }

  paint(ctx, geom, properties) {
    const size = parseFloat(properties.get("--checkerboard-size").toString())
    const spacing = parseFloat(properties.get("--checkerboard-spacing").toString())
    const colors = [
      properties.get("--colour-1").toString(),
      properties.get("--colour-2").toString(),
      properties.get("--colour-3").toString(),
    ]

    for (let y = 0; y < geom.height / size; y++) {
      for (let x = 0; x < geom.width / size; x++) {
        ctx.fillStyle = colors[(x + y) % colors.length]
        ctx.beginPath()
        ctx.rect(x * (size + spacing), y * (size + spacing), size, size)
        ctx.fill()
      }
    }
  }
}

registerPaint("checkerboard", CheckerboardPainter)
