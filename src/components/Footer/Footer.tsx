import Nav from "@components/Nav"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

function Footer() {
  const { css, useName } = useCSS({ meta: import.meta })

  // const brandsItem = await Brands({
  //   title: "Brands",
  //   text: "Brands",
  // })

  return (
    <footer class={useName}>
      <style>{css}</style>
      <div class="inner">
        <h1>Footer</h1>
        {/* {brandsItem} */}
        <Nav />
      </div>
    </footer>
  )
}

// const Footer = await createFooter()

export default Footer
