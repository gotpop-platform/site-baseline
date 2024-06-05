import AppFull from "@layouts/app-full"
import Articles from "@components/Articles"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Header from "@components/Header"
import Hero from "@components/Hero"
import Points from "@components/Points"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const heroData = {
    title: "single dependency template",
    text: "Singleton is a single dependency framework for building web applications.",
  }

  const components = [
    Header,
    Hero,
    Points,
    Articles,
    Footer,
  ]
  const data = [null, heroData, {}, null, null]

  // const componentDataMap = new Map([
  //   [Header, null],
  //   [Hero, heroData],
  //   [Points, {}],
  //   [Articles, null],
  //   [Footer, null],
  // ])

  return (
    <AppFull title="Home">
      <GridFull>
        {await Promise.all(
          components.map(async (Component, index) =>
            Component(data[index])
          )
        )}
      </GridFull>
    </AppFull>
  )
}

export default indexPage
