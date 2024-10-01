export const stylesBlog = {
  "--background-colour": "var(--white)",
  "--grid-column": "center",
  "--border-radius": "0.5rem",
  "--grid-template-rows": "1rem 1fr 1rem",
}

export const stylesBlogInner = (id: string) => ({
  "--background-colour": "var(--slate-400)",
  "--padding": "4rem",
  "--grid-column": "3 / -3",
  "--grid-row": "2",
  "--display": "block",
  "--border-radius": "0.5rem",
  "--transition-article": id,
})
