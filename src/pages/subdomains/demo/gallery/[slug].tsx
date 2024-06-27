import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/MegaMenu"
import { useCSSTheme } from "@hooks/useCSSTheme"
import AppFull from "@layouts/app-full"
import h from "@utils/jsxFactory"
import { dataDemo, type Item } from "../demo..data"

// const liam = (slug: any) => {
//   switch (slug) {
//     case value:
//       break

//     default:
//       break
//   }
// }

const indexPage = async ({
  slug,
}: {
  slug: string
}): Promise<JSX.Element> => {
  const { css } = useCSSTheme()

  function findPrevAndNext(slug: string) {
    const item = dataDemo.get(slug)
    const init = {
      prev: "item-4",
      next: "item-2",
    }

    if (item) {
      return { prev: item?.prev, next: item?.next }
    } else {
      return init
    }
  }

  const { prev, next } = findPrevAndNext(slug)

  return (
    <AppFull title="Home">
      <GridConfig>
        <MegaMenu />
        <section class="main-box">
          <div class="intro">
            <h2>Intro {slug}</h2>
            <nav class="links">
              <a class="link" href={`/gallery/${prev}`}>
                Prev
              </a>
              <a class="link" href={`/gallery/${next}`}>
                Next
              </a>
            </nav>
          </div>
          <div class="inner">
            <article>
              <h3>Lorem ipsum</h3>
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
              <h3>Laborum distinctio</h3>
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
              <h3>Saepe veritatis laborum</h3>
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
              <h3>Amet consectetur</h3>
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
              <h3>Eritatis laborum</h3>
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
              <h3>Eritatis laborum</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Sunt consectetur,
                provident perferendis cum repellat ea vero
                nostrum quis doloribus, saepe veritatis
                praesentium laborum distinctio deserunt
                debitis illo? Labore, ea voluptas?
              </p>
            </article>
          </div>
        </section>
        <Footer />
      </GridConfig>
    </AppFull>
  )
}

export default indexPage
