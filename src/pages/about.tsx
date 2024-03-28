import AppFull from "@layouts/app-full"
import Footer from "@components/Footer"
import Grid from "@components/Grid"
import Header from "@components/Header"
import h from "@utils/jsxFactory"

const aboutPage = async () => {
  const headerItem = await Header()
  return (
    <AppFull title="About">
      <Grid>
        {headerItem}
        <section class="intro">
          <h2>About us</h2>
        </section>
        <main>
          <section class="about">
            <h2>Our story</h2>
            <p>
              SingleMum is a single dependency framework for
              building web applications. It is a simple,
              fast, and light framework. It is designed for
              developers who want to build web applications
              with a single dependency.
            </p>
          </section>
          <section>
            <h2>Our mission</h2>
            <p>
              Our mission is to provide developers with a
              simple, fast, and light framework for building
              web applications. We want to make it easy for
              developers to build web applications without
              having to worry about the complexity of the
              framework.
            </p>
          </section>
          <section>
            <h2>Our vision</h2>
            <p>
              Our vision is to become the go-to framework
              for developers who want to build web
              applications with a single dependency. We want
              to make it easy for developers to build web
              applications without having to worry about the
              complexity of the framework.
            </p>
          </section>
        </main>
        <Footer />
      </Grid>
    </AppFull>
  )
}

export default aboutPage
