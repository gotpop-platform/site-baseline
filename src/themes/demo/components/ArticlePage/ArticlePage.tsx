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
      <Icon
        type={IconTypes.outlined}
        iconName="add_circle_outline"
      />
      <a class="link-header" href={href}>
        <h3>
          <span>{title}</span>
        </h3>
      </a>
      <p>{content}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestias accusamus voluptas, sapiente odit
        quas eos nostrum iste veniam illum cupiditate at
        omnis. Ipsa labore libero iusto explicabo doloribus
        consectetur quas.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestias accusamus voluptas, sapiente odit
        quas eos nostrum iste veniam illum cupiditate at
        omnis. Ipsa labore libero iusto explicabo doloribus
        consectetur quas.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestias accusamus voluptas, sapiente odit
        quas eos nostrum iste veniam illum cupiditate at
        omnis. Ipsa labore libero iusto explicabo doloribus
        consectetur quas.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestias accusamus voluptas, sapiente odit
        quas eos nostrum iste veniam illum cupiditate at
        omnis. Ipsa labore libero iusto explicabo doloribus
        consectetur quas.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestias accusamus voluptas, sapiente odit
        quas eos nostrum iste veniam illum cupiditate at
        omnis. Ipsa labore libero iusto explicabo doloribus
        consectetur quas.
      </p>
    </article>
  )
}

export default ArticleItem
