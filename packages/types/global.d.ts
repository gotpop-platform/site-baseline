declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      key?: string | number
    }

    interface IntrinsicElements {
      [elemName: string]: {
        id?: string
        class?: string
        className?: string
        style?: string | Record<string, string | number>
        children?: string | string[]
        [key: string]: string
      }
    }
  }
}

export {}
