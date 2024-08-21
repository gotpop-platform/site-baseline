import AppTheme from "@layouts/app"
import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import jsxFactory from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <section class="blog">
            <h1>Blog</h1>
            <pre>
              <code>
                {`
@keyframes rounded-mask-reveal {
  from {
    clip-path: inset(10% 10% 10% 10% round 30px);
  }
  to {
    clip-path: inset(0% 0% 0% 0% round 30px);
  }
}

video {
  animation: rounded-mask-reveal linear both;
  animation-timeline: view();
  animation-range: cover 0% cover 50%;
}
                `}
              </code>
            </pre>

            <p>
              It's always been annoying to have highlighting
              with inline code tags too... but not anymore!
              See, I can say <code>function rad() {}</code>{" "}
              or <code>{`a { color: red; }`}</code>
            </p>

            <p>Holy cow!</p>
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
