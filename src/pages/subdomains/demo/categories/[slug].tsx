import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/MegaMenu"
import { useCSSTheme } from "@hooks/useCSSTheme"
import AppFull from "@layouts/app-full"
import h from "@utils/jsxFactory"

const indexPage = async ({
  slug,
}: {
  slug: string
}): Promise<JSX.Element> => {
  // const { css } = useCSSTheme()

  return (
    <AppFull title="Home">
      <GridConfig>
        <MegaMenu />
        {/* <section class="main-box">
          <div class="intro">
            <h2>Intro {slug}</h2>
            <nav class="links">
              <a class="link" href="/gallery/1">
                Prev
              </a>
              <a class="link" href="/gallery/3">
                Next
              </a>
            </nav>
          </div>
          <div class="inner">
            <article>
              <h3>Text</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Sunt consectetur,
                provident perferendis cum repellat ea vero
                nostrum quis doloribus, saepe veritatis
                praesentium laborum distinctio deserunt
                debitis illo? Labore, ea voluptas?
              </p>
            </article>
            <article>
              <h3>Text</h3>
            </article>
            <article>
              <h3>Text</h3>
            </article>
            <article>
              <h3>Text</h3>
            </article>
            <article>
              <h3>Text</h3>
            </article>
            <article>
              <h3>Text</h3>
            </article>
          </div>
        </section>
        <Footer /> */}
      </GridConfig>
    </AppFull>
  )
}

export default indexPage
