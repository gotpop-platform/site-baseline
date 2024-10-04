export const layoutArticlesSlugSurface = {
  "--background-colour": "var(--white)",
  "--grid-column": "center",
  "--grid-template-rows": "1rem 1fr 1rem",
  "--border-radius": "var(--radius-sm)",
  "--grid-row": "main",
}

export const layoutArticlesSlugToc = {
  "--background-colour": "var(--grey-300)",
  "--display": "block",
  "--padding": "var(--spacing-sm)",
  "--grid-column": "1 col-start / 2 col-end",
  "--grid-row": "2",
  "--border-radius": "var(--radius-md) 0 0 var(--radius-md)",
}

export const layoutArticlesSlugContent = (id: string) => ({
  "--background-colour": "var(--grey-400)",
  "--display": "block",
  "--padding": "var(--spacing-lg)",
  "--grid-column": "3 col-start / -1 col-end",
  "--grid-row": "2",
  "--border-radius": "0 var(--radius-md) var(--radius-md) 0",
  "--transition-article": id,
})
