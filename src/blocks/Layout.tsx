import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  jsxFactory,
} from "@gotpop-platform/package-baseline"

interface LayoutProps {
  children?: string | string[]
  title: string
  scriptPaths: Record<string, string>[]
}

export const Layout = ({ children, title, scriptPaths }: LayoutProps) => {
  return (
    <AppTheme title={title} scriptPaths={scriptPaths}>
      <GridGap isRoot>
        <HeaderMegaMenu />
        {children}
        <Footer />
      </GridGap>
    </AppTheme>
  )
}
