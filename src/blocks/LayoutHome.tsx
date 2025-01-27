import {
  AppHome,
  Footer,
  GridGap,
  HeaderMegaMenu,
  jsxFactory,
} from "@gotpop-platform/package-baseline"

interface LayoutProps {
  children?: string | string[]
  title: string
  scriptPaths: Record<string, string>[]
  home?: boolean
}

export const LayoutHome = ({ children, title, scriptPaths, home = false }: LayoutProps) => {
  return (
    <AppHome title={title} scriptPaths={scriptPaths} home={home}>
      <GridGap isRoot>
        <HeaderMegaMenu />
        {children}
        <Footer />
      </GridGap>
    </AppHome>
  )
}
