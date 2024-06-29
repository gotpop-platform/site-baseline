import Head from "@components/Head"
import h from "@utils/jsxFactory"

interface AppThemeProps {
  children?: string | JSX.Element | JSX.Element[]
  title: string
  subdomain?: string
}

const AppTheme = ({
  title,
  subdomain,
  children,
}: AppThemeProps) => {
  const titleAsClass = title.toLowerCase().replace(" ", "-")
  const subdomainPath = `src/themes/${subdomain}/styles/global.css`

  return (
    <html lang="en">
      <Head title={title} theme={subdomainPath} />
      <body class={`body ${titleAsClass}`}>{children}</body>
    </html>
  )
}

export default AppTheme
