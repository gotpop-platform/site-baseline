import Head from "@components/Head"
import jsxFactory from "@utils/jsxFactory"

interface AppProps {
  children?: string | JSX.Element | JSX.Element[]
  title: string
}

const App = ({
  title,
  children,
}: AppProps) => {
  const doc = "<!DOCTYPE html>"

  return (
    doc +
    (
      <html lang="en">
        <Head title={title} />
        <body class="body">{children}</body>
      </html>
    )
  )
}

export default App
