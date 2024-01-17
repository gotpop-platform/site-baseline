import { content } from "./item"

const main = async () => {
  const data = `It was the best of times, it was the worst of times.`
  
  await Bun.write("index.html", content)
}


main()