import { Callout, Callout2 } from "./Blog.callouts"
import {
  ourMission,
  ourVision,
  textContent,
} from "./Blog.data"

import jsxFactory from "@utils/jsxFactory"

export const Intro = ({
  title,
  text,
}: {
  title: string
  text: string
}) => (
  <section class="intro">
    <div class="inner">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </section>
)

export const OurStory = ({
  title,
  text,
}: {
  title: string
  text: string
}) => (
  <div class="wrap">
    <section class="about">
      <div class="text">
        <h2>Our story</h2>
        {textContent.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
    <Callout />
  </div>
)

export const OurStory2 = ({
  title,
  text,
}: {
  title: string
  text: string
}) => (
  <div class="wrap">
    <section class="about">
      <div class="text">
        <h2>Our story</h2>
        {textContent.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
    <Callout />
    <Callout2 />
  </div>
)

export const Banner = ({
  title,
  text,
}: {
  title: string
  text: string
}) => (
  <img
    class="banner"
    loading="lazy"
    src="https://picsum.photos/1800/300"
    width="1800"
    height="300"
    alt="Hero image"
  />
)

export const Mission = ({
  title,
  text,
}: {
  title: string
  text: string
}) => (
  <section class="mission">
    <h2>{ourMission.title}</h2>
    {ourMission.text.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </section>
)

export const Vision = ({
  title,
  text,
}: {
  title: string
  text: string
}) => (
  <section class="vision">
    <h2>{ourVision.title}</h2>
    {ourVision.text.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </section>
)
