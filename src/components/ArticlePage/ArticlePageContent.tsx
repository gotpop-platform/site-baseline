import { Fragment } from "@components/Fragment"
import { Heading } from "@components/Heading"
import { jsxFactory } from "@utils/jsxFactory"

const level = (index: number) => (index === 0 ? 1 : 2)

export const pageContent = (
  section: { title: string; content: string[] }[]
) =>
  section.map(({ title, content }, index) => (
    <Fragment>
      <Heading level={level(index)} index={index}>
        {title}
      </Heading>
      {content.map((p) => (
        <p>{p}</p>
      ))}
    </Fragment>
  ))
