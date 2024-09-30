import { surfaceStyles } from "./base"

export const styleMain = {
  "--display": "grid",
  "--grid-column": "center",
  "--grid-template-columns": "subgrid",
  "--row-gap": "2rem",
}

export const styleHero = {
  ...surfaceStyles,
}

export const styleSurfaceMain = {
  ...surfaceStyles,
  "--grid-template-rows": "1rem repeat(3, 1fr 1rem)",
}
