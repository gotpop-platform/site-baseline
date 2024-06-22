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
  const { css } = useCSSTheme()

  return (
    <AppFull title="Home">
      <GridConfig>
        <MegaMenu />
        <section class="main-box">
          <div class="intro">
            <h2>Intro {slug}</h2>
          </div>
          <div class="inner">
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
            <article>
              <h3>Text</h3>
            </article>
          </div>
        </section>
        <Footer />
      </GridConfig>
    </AppFull>
  )
}

export default indexPage
