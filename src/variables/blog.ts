export const stylesBlog = {
  "--background-colour": "var(--white)",
  "--grid-column": "center",
  "--border-radius": "var(--radius-sm)",
  "--grid-template-rows": "1rem 1fr 1rem",
}

export const stylesBlogInner = (id: string) => ({
  "--background-colour": "var(--slate-400)",
  "--padding": "var(--spacing-lg)",
  "--grid-column": "3 / -3",
  "--grid-row": "2",
  "--display": "block",
  "--border-radius": "var(--radius-sm)",
  "--transition-article": id,
})
