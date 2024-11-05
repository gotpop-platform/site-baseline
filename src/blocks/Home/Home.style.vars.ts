export const surfaceStyles = {
  "--grid-template-rows": "1rem 1fr 1rem",
  "--grid-column": "center",
  "--background-colour": "var(--slate-400)",
  "--border-radius": "var(--radius-lg)",
}

export const styleMain = {
  "--display": "grid",
  "--grid-column": "center",
  "--grid-template-columns": "subgrid",
  "--grid-row": "main",
  "--grid-template-rows":
    "min-content var(--spacing-md) min-content 1rem min-content 1rem min-content",
  "--background-colour": "var(--transparent)",
  "--border-radius": "var(--radius-md)",
}

export const styleSurfaceMain = {
  ...surfaceStyles,
  "--grid-template-rows": "1rem repeat(3, 1fr 1rem)",
  "--background-colour": "var(--transparent)",
}

export const styleArticlesSurfaceMain = {
  ...surfaceStyles,
  "--grid-row": "main",
  "--grid-template-rows": "min-content 1rem min-content 1rem min-content",
  "--background-colour": "var(--transparent)",
}
