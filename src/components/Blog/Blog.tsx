import PopOverImage from "@components/PopOverImage"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type BlogProps = { title?: string; children?: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Blog = async ({ title, children }: BlogProps) => {
  const { css } = useCSS({ meta: import.meta })

  const popOverImageItem = await PopOverImage({
    title: "Pop Over Image",
    text: "This is a pop over image component.",
    width: 1600,
  })

  return (
    <main class={useName}>
      <style>{css}</style>
      <section class="intro">
        <div class="inner">
          <h2>About us</h2>
          <p>
            SingleMum is a single dependency framework for
            building web applications. It is a simple, fast,
            and light framework. It is designed for
            developers who want to build web applications
            with a single dependency.
          </p>
        </div>
      </section>
      <div class="wrap">
        <section class="about">
          <div class="text">
            <h2>Our story</h2>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
          </div>
        </section>
        <div class="callout">
          <h3>Our values</h3>
          <ul>
            <li>Simple</li>
            <li>Fast</li>
            <li>Light</li>
          </ul>
        </div>
      </div>
      <img
        class="banner"
        loading="lazy"
        src="https://picsum.photos/1800/300"
        width="1800"
        height="300"
        alt="Hero image"
      />
      <div class="wrap">
        <section class="about">
          <div class="text">
            <h2>Our story</h2>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
          </div>
        </section>
        <div class="callout">
          <h3>Our values</h3>
          <ul>
            <li>Simple</li>
            <li>Fast</li>
            <li>Light</li>
          </ul>
        </div>
        <div class="callout2">
          <h3>Our values</h3>
          <ul>
            <li>Simple</li>
            <li>Fast</li>
            <li>Light</li>
          </ul>
        </div>
      </div>
      <section class="mission">
        <h2>Our mission</h2>
        <p>
          Our mission is to provide developers with a
          simple, fast, and light framework for building web
          applications. We want to make it easy for
          developers to build web applications without
          having to worry about the complexity of the
          framework.
        </p>
      </section>
      <section>
        <h2>Our vision</h2>
        <p>
          Our vision is to become the go-to framework for
          developers who want to build web applications with
          a single dependency. We want to make it easy for
          developers to build web applications without
          having to worry about the complexity of the
          framework.
        </p>
      </section>
    </main>
  )
}

export default Blog
