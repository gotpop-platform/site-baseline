export const layoutArticlesSlugSurface = {
  "--background-colour": "var(--transparent)",
  "--grid-column": "center",
  "--grid-template-rows": "1fr",
  "--border-radius": "var(--radius-sm)",
  "--grid-row": "main",
}

export const layoutArticlesSlugToc = {
  "--background-colour": "var(--grey-200)",
  "--display": "block",
  "--padding": "var(--spacing-sm)",
  "--grid-column": "1 gutter-start / 3 col-end",
  "--border-radius": "var(--radius-md) 0 0 var(--radius-md)",
}

export const layoutArticlesSlugContent = (id: string) => ({
  "--background-colour": "var(--grey-100)",
  "--display": "block",
  "--padding": "var(--spacing-lg) var(--spacing-xxl)",
  "--grid-column": "4 gutter-start / -1 gutter-end",
  "--border-radius": "0 var(--radius-md) var(--radius-md) 0",
  "--transition-article": id,
})
