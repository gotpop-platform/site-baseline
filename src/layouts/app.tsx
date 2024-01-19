import Head from "@components/Head"
import Header from "@components/Header"
import h from "@utils/jsxFactory"

interface AppProps {
  children?: string | JSX.Element | JSX.Element[]
  title: string
}

const App = ({ title, children }: AppProps) => {
  return (
    <html lang="en">
      <Head title={title} />
      <body class="body">
        <div class="site">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

export default App
