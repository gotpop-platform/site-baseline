import PopOverImage from "@components/PopOverImage";
import jsxFactory from "@utils/jsxFactory";
import { useCSS } from "src/hooks/useCSS";

type GalleryProps = { title: string; content: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Gallery = async ({
  title,
  content,
}: GalleryProps) => {
  const { css } = useCSS({ meta: import.meta })
  const popOverImageItem = await PopOverImage({
    title: "Nice image",
    text: "Nice image",
  })

  return (
    <section class={useName}>
      <style>{css}</style>
      <div class="wrap" id="liam">
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
        {popOverImageItem}
      </div>
    </section>
  )
}

export default Gallery
