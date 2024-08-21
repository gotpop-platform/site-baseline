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
          <style>
            {`@font-face {
  font-family: 'Monaspace';
  src: 
    url('https://assets.codepen.io/2585/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2') 
    format('woff2')
  ;
}

/* light theme */
@font-palette-values --kung-fury {
  font-family: "Monaspace";
  override-colors:
    0 hsl(225 100% 40%), /* curlies and tags */
    1 hsl(250 100% 80%), /* ? */
    2 hsl(225 100% 40%), /* function */
    3 hsl(225 100% 40%), /* ? */
    4 hsl(270 50% 40%),  /* () */
    5 hsl(210 40% 2%),   /* property name */ 
    6 hsl(210 10% 30%),  /* ? */
    7 hsl(327 100% 54%)  /* numbers */
  ;
}

@media (prefers-color-scheme: dark) {
  @font-palette-values --kung-fury {
    font-family: "Monaspace";
    override-colors:
      0 hsl(188 100% 75%), /* curlies and tags */
      1 hsl(250 100% 80%), /* ? */
      2 hsl(188 100% 75%), /* function */
      3 hsl(188 100% 75%), /* ? */
      4 hsl(250 100% 80%), /* () */
      5 hsl(210 40% 98%),  /* property name */ 
      6 hsl(210 40% 80%),  /* ? */
      7 hsl(300 100% 80%)  /* numbers */
    ;
  }
}

code {
  font-family: "Monaspace", monospace;
  font-palette: --kung-fury;
}

pre {
  min-width: 0;
  overflow-x: auto;
  padding: 2ch;
}






@layer support {
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    block-size: 100%;
    color-scheme: dark light;
  }

  body {
    min-block-size: 100%;
    font-family: system-ui, sans-serif;

    display: grid;
    place-content: center;
    gap: 5vmin;
  }
  
  p {
    max-inline-size: 40ch;
  }
}

.blog {
  width: 100%;
  grid-column: 1 / -1;
  background: hsl(0 0% 55%);
  padding: 4rem;
}

code {
  font-size: 1.25em;
  background: hsl(0 0% 20%);
  padding: 2rem;
  border-radius: 0.25em;
  display: flex;
}
`}
          </style>

          <section class="blog">
            <h1>Blog</h1>
            <pre>
              <code>{`@keyframes rounded-mask-reveal {
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
}`}</code>
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
