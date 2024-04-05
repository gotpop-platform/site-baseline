import Head from "@components/Head"
import h from "@utils/jsxFactory"

interface AppFullProps {
  children?: string | JSX.Element | JSX.Element[]
  title: string
}

const AppFull = ({ title, children }: AppFullProps) => {
  const titleAsClass = title.toLowerCase().replace(" ", "-")

  return (
    <html lang="en">
      <Head title={title} />
      <body class={`body ${titleAsClass}`}>{children}</body>
    </html>
  )
}

export default AppFull
