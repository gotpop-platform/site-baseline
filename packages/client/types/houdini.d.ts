declare class PaintWorkletGlobalScope {
  registerPaint(name: string, paintCtor: { new (): any }): void
}

declare function registerPaint(name: string, paintCtor: { new (): any }): void

declare module "*.md" {
  const content: string

  export { content }
}
