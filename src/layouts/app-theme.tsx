import Head from "@components/Head"
import h from "@utils/jsxFactory"

interface AppThemeProps {
  children?: string | JSX.Element | JSX.Element[]
  title: string
}

const AppTheme = ({ title, children }: AppThemeProps) => {
  const titleAsClass = title.toLowerCase().replace(" ", "-")

  return (
    <html lang="en">
      <Head
        title={title}
        theme="src/themes/demo/styles/global.css"
      />
      <body class={`body ${titleAsClass}`}>{children}</body>
    </html>
  )
}

export default AppTheme
