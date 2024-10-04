import { surfaceStyles } from "./base"

export const stylesBlog = {
  "--background-colour": "var(--white)",
  "--grid-column": "center",
  "--border-radius": "var(--radius-sm)",
  "--grid-template-rows": "1rem 1fr 1rem",
  "--grid-row": "main",
}

export const stylesBlogInner = (id: string) => ({
  "--background-colour": "var(--slate-200)",
  "--padding": "var(--spacing-lg)",
  "--grid-column": "var(--grid-column-span)",
  "--grid-row": "2",
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
