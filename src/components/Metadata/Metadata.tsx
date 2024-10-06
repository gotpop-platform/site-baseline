import { formattedDate, jsxFactory, mkClass, useCSS } from "utils"

export const Metadata = ({ date, author }: { date: string; author: string }) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <aside class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <small>
        <span>By</span>
        <address>{author}</address>
        <span>on</span>
      </small>
      <time dateTime={date}>{formattedDate(date)}</time>
    </aside>
  )
}
