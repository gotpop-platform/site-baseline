import GridType from "@components/GridType"
import { useCSSTheme } from "@hooks/useCSSTheme"
import AppFull from "@layouts/app-full"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const { css } = useCSSTheme()

  return (
    <AppFull title="Home">
      <GridType>
        <div class="container">
          <div class="main-col">
            <h1>Lorem ipsum dolor sit&nbsp;amet</h1>
            <p>
              Consectetur adipisicing elit, alias at autem
              magna aliquid <a href="#">quam proident</a>{" "}
              quis aliquam. temporibus minus eius veniam
              cupidatat ex, voluptas fuga, quos, mollitia
              incidunt do officia facilis. molestiae
              consequat excepturi laborum perferendis tempor
              minim eiusmod minim minus quia&nbsp;sint.
            </p>
            <p>
              Quos atque officia quod.{" "}
              <i>Suscipit delectus</i> cupidatat, quia nulla
              numquam aute cillum proident. Maiores iusto
              culpa molestias quam id tenetur saepe impedit
              reiciendis itaque ducimus itaque nostrud.
              Tempor aliquip, culpa earum itaque sed
              consequatur minus aliquip reprehenderit nihil
              veniam tempora do maxime omnis reiciendis
              elit&nbsp;tempora.
            </p>
          </div>
          <div class="main-col">
            <h1>Lorem ipsum dolor sit&nbsp;amet</h1>
            <p>
              Consectetur adipisicing elit, alias at autem
              magna aliquid <a href="#">quam proident</a>{" "}
              quis aliquam. temporibus minus eius veniam
              cupidatat ex, voluptas fuga, quos, mollitia
              incidunt do officia facilis. molestiae
              consequat excepturi laborum perferendis tempor
              minim eiusmod minim minus quia&nbsp;sint.
            </p>
            <p>
              Quos atque officia quod.{" "}
              <i>Suscipit delectus</i> cupidatat, quia nulla
              numquam aute cillum proident. Maiores iusto
              culpa molestias quam id tenetur saepe impedit
              reiciendis itaque ducimus itaque nostrud.
              Tempor aliquip, culpa earum itaque sed
              consequatur minus aliquip reprehenderit nihil
              veniam tempora do maxime omnis reiciendis
              elit&nbsp;tempora.
            </p>
          </div>
        </div>
      </GridType>
    </AppFull>
  )
}

export default indexPage
