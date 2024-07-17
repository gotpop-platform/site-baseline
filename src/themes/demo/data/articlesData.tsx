type SectionItem = {
  title: string
  content: string[]
}

export type ArticleItem = {
  title: string
  href: string
  blurb: string
  section: SectionItem[]
}

const articlesArray = [
  {
    title: "Lorem ipsum 2",
    href: "/articles/article-1",
    icon: "arrow_circle_left",
    blurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
    ],
  },
  {
    title: "Laborum distinctio",
    href: "/articles/article-2",
    icon: "arrow_circle_left",
    blurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
    ],
  },
  {
    title: "Saepe veritatis laborum",
    href: "/articles/article-3",
    icon: "arrow_circle_left",
    blurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
    ],
  },
  {
    title: "Amet consectetur",
    href: "/articles/article-4",
    icon: "arrow_circle_left",
    blurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
    ],
  },
  {
    title: "Eritatis laborum",
    href: "/articles/article-5",
    icon: "arrow_circle_left",
    blurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
    ],
  },
  {
    title: "Eritatis laborum",
    href: "/articles/article-6",
    icon: "arrow_circle_left",
    blurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
        ],
      },
    ],
  },
]

const articlesData = new Map<string, ArticleItem>()

articlesArray.forEach((article) =>
  articlesData.set(article.href, article)
)

export { articlesData }
