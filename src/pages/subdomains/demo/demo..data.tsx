export interface Item {
  id: number
  name: string
  prev: string
  next: string
}

const dataDemo: Map<string, Item> = new Map([
  [
    "item-1",
    {
      id: 1,
      name: "Item 1",
      prev: "item-4",
      next: "item-2",
    },
  ],
  [
    "item-2",
    {
      id: 2,
      name: "Item 2",
      prev: "item-1",
      next: "item-3",
    },
  ],
  [
    "item-3",
    {
      id: 3,
      name: "Item 3",
      prev: "item-2",
      next: "item-4",
    },
  ],
  [
    "item-4",
    {
      id: 4,
      name: "Item 4",
      prev: "item-3",
      next: "item-1",
    },
  ],
])

export { dataDemo }
