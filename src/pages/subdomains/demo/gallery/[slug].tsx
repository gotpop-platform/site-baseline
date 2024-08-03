import AppTheme from "@layouts/app-theme"
import Footer from "@components/Footer"
import { GalleryIntro } from "@themes/demo/components/GalleryIntro"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@themes/demo/components/Surface"
import h from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

// export const Articles = () => (
//   <div class="inner">
//     {articlesData.map((article) => (
//       <ArticleItem {...article} />
//     ))}
//   </div>
// )

const pageGalleryItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <GalleryIntro slug={slug} />
          {/* <Articles /> */}
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGalleryItem
