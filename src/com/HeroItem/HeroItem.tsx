import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { useCSS } from "@gotpop-platform/package-utilities"

export function HeroItem({
  children,
  isMain = false,
  hasInner = false,
  ...rest
}: {
  children?: string | JSX.Element | (string | JSX.Element)[]
  isMain?: boolean
  hasInner?: boolean
  [key: string]: any
}): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div
      class="hero-item"
      {...rest}
    >
      <style>{css}</style>
      <section>
        <h1>Precision layouts for the discerning developer</h1>
        <p>A modern build system.</p>
      </section>
      <div class="hero-box">
        <svg
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          style={{ display: "block", margin: "0 auto" }}
        >
          {Array.from({ length: 81 }, (_, index) => (
            <rect
              key={index}
              x={(index % 9) * 33.33} // Adjusted for 9 columns
              y={Math.floor(index / 9) * 33.33} // Adjusted for 9 rows
              width="33.33" // Adjusted width for square shape
              height="33.33" // Adjusted height for square shape
              fill={[
                "#D3D3D3", "#ADD8E6", "#90EE90", "#F08080", "#FAFAD2",
                "#FFB6C1", "#20B2AA", "#FFA07A", "#B0C4DE",
                "#E0FFFF", "#FFD700", "#FFFFE0", "#E6E6FA", "#FFA500",
                "#EE82EE", "#800000", "#000080", "#008080", "#808000",
                "#A52A2A", "#F5F5DC", "#FFE4B5", "#98FB98", "#E6E6FA",
                "#F0E68C", "#DDA0DD", "#DA70D6", "#F0FFFF", "#B0E0E6",
                "#F5DEB3", "#D2691E", "#008080", "#FF69B4", "#FF4500",
                "#FF6347", "#7FFF00", "#ADFF2F", "#FFB6C1", "#DDA0DD",
                "#FFDEAD", "#FFE4E1", "#F0E68C", "#D8BFD8", "#E0FFFF",
                "#F5F5F5", "#B0C4DE", "#FFB6C1", "#D3D3D3", "#F08080",
                "#B0E0E6", "#FF69B4",
                "#F5DEB3", "#D2691E", "#008080", "#FF69B4", "#FF4500",
                "#FF6347", "#7FFF00", "#ADFF2F", "#FFB6C1", "#DDA0DD",
                "#FFDEAD", "#FFE4E1", "#F0E68C", "#D8BFD8", "#E0FFFF",
                "#F5F5F5", "#B0C4DE", "#FFB6C1", "#D3D3D3", "#F08080",
                "#B0E0E6", "#FF69B4", "#E0FFFF",
                "#F5F5F5", "#B0C4DE", "#FFB6C1", "#D3D3D3", "#F08080",
                "#B0E0E6", "#FF69B4",
              ][index]} // Unique colors for each square
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
