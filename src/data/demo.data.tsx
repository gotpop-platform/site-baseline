export interface GalleryItem {
  id: number
  name: string
  prev: string
  next: string
  text: string
}

const dataDemo: Map<string, GalleryItem> = new Map([
  [
    "item-1",
    {
      id: 1,
      name: "Item 1",
      prev: "item-4",
      next: "item-2",
      text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    },
  ],
  [
    "item-2",
    {
      id: 2,
      name: "Item 2",
      prev: "item-1",
      next: "item-3",
      text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    },
  ],
  [
    "item-3",
    {
      id: 3,
      name: "Item 3",
      prev: "item-2",
      next: "item-4",
      text: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    },
  ],
  [
    "item-4",
    {
      id: 4,
      name: "Item 4",
      prev: "item-3",
      next: "item-1",
      text: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur, provident perferendis cum repellat ea vero nostrum quis doloribus, saepe veritatis praesentium laborum distinctio deserunt debitis illo? Labore, ea voluptas?",
    },
  ],
])

export { dataDemo }
