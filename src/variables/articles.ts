export const layoutArticlesSlugSurface = {
  "--background-colour": "white",
  "--grid-column": "center",
  "--grid-template-rows": "1rem 1fr 1rem",
  "--border-radius": "0.5rem",
}

export const layoutArticlesSlugToc = {
  "--background-colour": "lightblue",
  "--padding": "2rem",
  "--grid-column": "1 col-start / 2 col-end",
  "--grid-row": "2",
  "--border-radius": "0.5rem  0 0 0.5rem",
}

export const layoutArticlesSlugContent = (id: string) => ({
  "--background-colour": "lightblue",
  "--display": "block",
  "--padding": "4rem",
  "--grid-column": "3 col-start / -1 col-end",
  "--grid-row": "2",
  "--border-radius": "0 0.5rem 0.5rem 0",
  "--transition-article": id,
})
