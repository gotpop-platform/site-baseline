export const layoutBlog = (props: any) => [
  {
    type: "section",
    styles: {
      "--background-color": "lightblue",
      "--padding": "4rem",
      "--grid-column": "3 / -3",
      "--grid-row": "2",
      "--border-radius": "0 0.5rem 0.5rem 0",
    },
    props: {
      ...props,
    },
    component: PageContent,
  },
]
