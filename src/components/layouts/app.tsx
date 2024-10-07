import { Head } from "@gotpop-platform/package-components"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

interface AppProps {
  children?: string | JSX.Element | JSX.Element[]
  title: string
}

export const AppTheme = ({ title, children }: AppProps) => {
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
