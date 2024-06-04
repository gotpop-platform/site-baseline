import Brands from "@components/Brands"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import { useName } from "@utils/class"

const Footer = async () => {
  const { css } = useCSS({ meta: import.meta })

  const brandsItem = await Brands({
    title: "Brands",
    text: "Brands",
  })

  return (
    <footer class={useName}>
      <style>{css}</style>
      <div class="inner">
        <h1>Footer</h1>
        {brandsItem}
      </div>
    </footer>
  )
}

export default Footer
