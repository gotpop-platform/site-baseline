import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/MegaMenu"
import AppFull from "@layouts/app-full"
import h from "@utils/jsxFactory"
import Surface from "src/themes/demo/components/Surface"

const indexPage = async ({
  slug,
}: {
  slug: string
}): Promise<JSX.Element> => {
  return (
    <AppFull title="Home">
      <GridConfig>
        <MegaMenu />
        <Surface slug={slug} />
        <Footer />
      </GridConfig>
    </AppFull>
  )
}

export default indexPage
