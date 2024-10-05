import { surfaceStyles } from "./base"

export const stylesBlog = {
  "--background-colour": "var(--transparent)",
  // "--border-radius": "var(--radius-sm)",
  "--grid-column": "var(--grid-column-centre)",
  "--grid-row": "main",
  // "--grid-template-rows": "1rem 1fr 1rem",
}

export const stylesBlogInner = (id: string) => ({
  "--background-colour": "var(--slate-100)",
  "--padding": "var(--spacing-xl)",
  "--grid-column": "var(--grid-column-centre)",
  "--grid-row": "1",
  "--display": "block",
  "--border-radius": "var(--radius-sm)",
  "--transition-article": id,
})

export const stylesBlogSurfaceMain = {
  ...surfaceStyles,
  "--grid-template-rows": "repeat(3, 1fr)",
  "--background-colour": "var(--transparent)",
  "--grid-row": "main",
}
