import { Head } from "@components/Head/Head"
import h from "@utils/jsxFactory"

interface AppProps {
  children?: any
}

const title = "My Title"

const App = ({ children }: AppProps) => {
  return (
    <html lang="en">
      {Head({ title })}
      <body class="body">
        <div>{children}</div>
      </body>
    </html>
  )
}

export default App
