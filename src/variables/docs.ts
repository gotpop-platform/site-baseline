import type { MarkdownFileProps } from "@gotpop-platform/package-markdown"

export const stylesDocs = {
  "--background-colour": "var(--transparent)",
  "--border-radius": "unset",
  "--grid-column": "center",
  "--grid-row": "main",
  "--grid-template-rows": "repeat(5, 1fr)",
}

export const stylesDocsBody = {
  "--background-colour": "var(--transparent)",
  "--border-radius": "unset",
  "--grid-column": "15 / -1",
  "--grid-row": "1",
  "--padding": "var(--spacing-lg)",
  "--display": "block",
}

export const stylesDocsNav = {
  "--background-colour": "var(--transparent)",
  "--border-radius": "unset",
  "--grid-column": "1 / span 12",
  "--grid-row": "1",
  "--padding": "var(--spacing-md)",
  "--display": "block",
}

const style = {
  "--padding": "var(--spacing-md)",
}

export const stylesDocsLayout = ({ pageMetadata }: { pageMetadata: Record<string, string> }): Record<string, string>[] => [
  {
    ...style,
    "--background-colour": "var(--grey-100)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 12",
    "--grid-row": "2",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "1 / span 12",
    "--grid-row": "3",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0",
    "--grid-column": "1 / span 12",
    "--grid-row": "4",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-400)",
    "--border-radius": "0",
    "--grid-column": "1 / span 12",
    "--grid-row": "5",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-500)",
    "--border-radius": "0 0 0 var(--radius-lg) ",
    "--grid-column": "1 / span 12",
    "--grid-row": "6",
    "--transition-article": pageMetadata?.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-600)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "1 / span 12",
    "--grid-row": "7",
    "--transition-article": pageMetadata?.id ?? "",
  },
]
