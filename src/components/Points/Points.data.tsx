import type { IconName } from "@components/Icon/Icon.types"

export type Article = {
  iconName: IconName
  heading: string
  text: string
  style: string
}

export const articles: Article[] = [
  {
    iconName: "home",
    style: "--theme: light; --grid-column: span 3",
    heading: "Lorem ipsum dolor",
    text: "Sit amet consectetur adipisicing elit. Earum corporis tempora dolor maiores aliquid accusamus est illum maxime, perferendis incidunt molestiae cumque ea, cum et sit ex, veritatis expedita repellendus.",
  },
  {
    iconName: "child_care",
    style: "--theme: dark; --grid-column: span 3",
    heading: "Lorem ipsum dolor",
    text: "Sit amet consectetur adipisicing elit. Earum corporis tempora dolor maiores aliquid accusamus est illum maxime, perferendis incidunt molestiae cumque ea, cum et sit ex, veritatis expedita repellendus.",
  },
  {
    iconName: "home",
    style: "--theme: light; --grid-column: span 3",
    heading: "Lorem ipsum dolor",
    text: "Sit amet consectetur adipisicing elit. Earum corporis tempora dolor maiores aliquid accusamus est illum maxime, perferendis incidunt molestiae cumque ea, cum et sit ex, veritatis expedita repellendus.",
  },
  {
    iconName: "child_care",
    style: "--theme: dark ; --grid-column: span 3",
    heading: "Lorem ipsum dolor",
    text: "Sit amet consectetur adipisicing elit. Earum corporis tempora dolor maiores aliquid accusamus est illum maxime, perferendis incidunt molestiae cumque ea, cum et sit ex, veritatis expedita repellendus.",
  },
  {
    iconName: "home",
    style: "--theme: light; --grid-column: span 6",
    heading: "Lorem ipsum dolor",
    text: "Sit amet consectetur adipisicing elit. Earum corporis tempora dolor maiores aliquid accusamus est illum maxime, perferendis incidunt molestiae cumque ea, cum et sit ex, veritatis expedita repellendus.",
  },
  {
    iconName: "child_care",
    style: "--theme: light ; --grid-column: span 6",
    heading: "Lorem ipsum dolor",
    text: "Sit amet consectetur adipisicing elit. Earum corporis tempora dolor maiores aliquid accusamus est illum maxime, perferendis incidunt molestiae cumque ea, cum et sit ex, veritatis expedita repellendus.",
  },
]
