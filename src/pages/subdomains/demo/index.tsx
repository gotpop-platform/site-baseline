import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Header from "@components/Header"
import Hero from "@components/Hero"
import Points from "@components/Points"
import { heroData } from "@data/data.hero"
import { useCSSTheme } from "@hooks/useCSSTheme"
import AppFull from "@layouts/app-full"
import { getPages } from "@utils/getPages"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const pages = await getPages()
  const { css } = useCSSTheme()

  return (
    <AppFull title="Home">
      <GridFull>
        <Header pages={pages} />
        <Hero {...heroData} />
        <Points styleOverride={css} />
        <Footer />
      </GridFull>
    </AppFull>
  )
}

export default indexPage
