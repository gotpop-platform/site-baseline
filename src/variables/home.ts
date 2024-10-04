import { surfaceStyles } from "./base"

export const styleMain = {
  "--display": "grid",
  "--grid-column": "center",
  "--grid-template-columns": "subgrid",
  "--grid-template-rows": "1rem min-content 1rem repeat(3, min-content) 1rem",
  // "--row-gap": "var(--spacing-md)",
  "--background-colour": "var(--white)",
  "--border-radius": "var(--radius-md)",
}

// export const styleHero = {
//   ...surfaceStyles,
//   "--grid-row": "2",
//   "--background-colour": "var(--transparent)",
// }

export const styleSurfaceMain = {
  ...surfaceStyles,
  "--grid-template-rows": "1rem repeat(3, 1fr 1rem)",
  "--background-colour": "var(--transparent)",
}
