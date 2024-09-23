import { jsxFactory } from "utils"

const PageContent = ({
  htmlContent,
}: {
  htmlContent: string
}) => htmlContent

const TableOfContents = ({
  toc,
}: {
  toc?: { id: string; text: string }[]
}) => (
  <nav>
    <ul>
      {toc?.map(({ id, text }) => (
        <li>
          <a href={"#" + id}>{text}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export const layoutPages = (props: any) => [
  {
    type: "aside",
    styles: {
      "--background-color": "lightblue",
      "--padding": "1rem",
      "--grid-column": "3 / 7",
      "--grid-row": "2",
      "--border-radius": "0.5rem  0 0 0.5rem",
    },
    props: {
      ...props,
    },
    component: TableOfContents,
  },
  {
    type: "section",
    styles: {
      "--background-color": "lightblue",
      "--padding": "1rem",
      "--grid-column": "9 / 37",
      "--grid-row": "2",
      "--border-radius": "0 0.5rem 0.5rem 0",
    },
    props: {
      ...props,
    },
    component: PageContent,
  },
]
