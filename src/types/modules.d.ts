declare module "*.md" {
  const content: string

  export { content }
}

declare module "*.css" {
  const content: string

  export { content }
}

declare module "*.html" {
  const content: string

  export { content, default }
}
