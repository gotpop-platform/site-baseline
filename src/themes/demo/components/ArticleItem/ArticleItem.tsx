import Icon from "@components/Icon"
import { IconTypes } from "@components/Icon/Icon"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

interface ArticleItemProps {
  title: string
  content: string
  href: string
  style?: string
}

function ArticleItem({
  title,
  content,
  href,
  style,
}: ArticleItemProps): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <article
      class={mkClass(import.meta.file)}
      style={style}
    >
      <style>{css}</style>
      <a href={href}>
        <h3>
          <span>{title}</span>
          <Icon
            type={IconTypes.outlined}
            iconName="add_alert"
          />
        </h3>
      </a>
      <p>{content}</p>
    </article>
  )
}

export default ArticleItem
