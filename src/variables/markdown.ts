import type { StyleProps } from "types"

const style = {
  "--padding": "var(--spacing-md)",
}

export const stylesLayout = ({ pageMetadata }: { pageMetadata: StyleProps }): StyleProps[] => [
  {
    ...style,
    "--background-colour": "oklch(0.9 0 0 / 0.6)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 18",
    "--grid-row": "3",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.96 0 0 / 0.6)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "21 / -1",
    "--grid-row": "3",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.93 0 0 / 0.6)",
    "--border-radius": "0",
    "--grid-column": "1 / span 15",
    "--grid-row": "5",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.91 0 0 / 0.6)",
    "--border-radius": "0",
    "--grid-column": "18 / -1",
    "--grid-row": "5",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.92 0 0 / 0.6)",
    "--border-radius": "0 0 0 var(--radius-lg) ",
    "--grid-column": "1 / span 21",
    "--grid-row": "9",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.95 0 0 / 0.6)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "24 / -1",
    "--grid-row": "9",
    "--transition-article": pageMetadata?.id ?? "",
  },
]

export const stylesArticlesLayout = ({
  pageMetadata,
}: {
  pageMetadata: StyleProps
}): StyleProps[] => [
  {
    ...style,
    "--background-colour": "var(--grey-100)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 15",
    "--grid-row": "1",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "18 / -1",
    "--grid-row": "1",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0",
    "--grid-column": "1 / span 12",
    "--grid-row": "3",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-400)",
    "--border-radius": "0",
    "--grid-column": "15 / -1",
    "--grid-row": "3",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-500)",
    "--border-radius": "0 0 0 var(--radius-lg) ",
    "--grid-column": "1 / span 21",
    "--grid-row": "5",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "24 / -1",
    "--grid-row": "5",
    "--transition-article": pageMetadata?.id ?? "",
  },
]
