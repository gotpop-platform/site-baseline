import { AppTheme } from "@layouts/app"
import { Footer } from "@components/Footer"
import { GridConfig } from "@components/GridConfig"
import { HeaderMegaMenu } from "@components/HeaderMegaMenu"
import { MobileMenuTrigger } from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import jsxFactory from "@utils/jsxFactory"
import { parseMarkdownFile } from "@utils/markdown"

type PageProps = {
  slug: string
}

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title, author },
    content: htmlContent,
  } = parseMarkdownFile("blog", slug)

  // Convert date string to Date object
  const dateObject = new Date(date)

  // Format the date for display
  const formattedDate = dateObject.toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <AppTheme title={`Baseline | ${title}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <section class="blog">
            <h1>{title}</h1>
            <aside>
              By <address>{author}</address> on{" "}
              <time dateTime={date}>{formattedDate}</time>
            </aside>
            {htmlContent}
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
