// https://simpleicons.org/

import {
  IconCodepen,
  IconFaceBook,
  IconGoogle,
  IconSpotify,
} from "./IconsSVG"

import jsxFactory from "@utils/jsxFactory"

export type Brand = {
  name: string
  classData: string
  icon: JSX.Element
  tooltip: string
}

export const brandsData: Brand[] = [
  {
    name: "Apple",
    classData: "Apple",
    icon: <IconCodepen />,
    tooltip: "Apple Nope",
  },
  {
    name: "Google",
    classData: "Google",
    icon: <IconGoogle />,
    tooltip: "Google Nope",
  },
  {
    name: "Facebook",
    classData: "Facebook",
    icon: <IconFaceBook />,
    tooltip: "Facebook Nope",
  },
  {
    name: "Spotify",
    classData: "Spotify",
    icon: <IconSpotify />,
    tooltip: "Spotify Nope",
  },
]
