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
  const subdomainPath = `/themes/${subdomain}/styles/index.css`
  const doc = "<!DOCTYPE html>"

  return (
    doc +
    (
      <html lang="en">
        <Head title={title} theme={subdomainPath} />
        <body class="body">{children}</body>
      </html>
    )
  )
}

export default AppTheme
