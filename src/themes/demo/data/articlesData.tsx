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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
    ],
  },
  {
    title: "Laborum distinctio",
    href: "/articles/article-2",
    icon: "arrow_circle_left",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
    ],
  },
  {
    title: "Saepe veritatis laborum",
    href: "/articles/article-3",
    icon: "arrow_circle_left",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
    ],
  },
  {
    title: "Amet consectetur",
    href: "/articles/article-4",
    icon: "arrow_circle_left",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
    ],
  },
  {
    title: "Eritatis laborum",
    href: "/articles/article-5",
    icon: "arrow_circle_left",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
    ],
  },
  {
    title: "Eritatis laborum",
    href: "/articles/article-6",
    icon: "arrow_circle_left",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
    section: [
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
        ],
      },
      {
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi.",
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
