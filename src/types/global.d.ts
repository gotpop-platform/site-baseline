declare global {
  namespace JSX {
    interface Element {
      type?: any
      props?: any
    }

    interface IntrinsicElements {
      [elemName: string]: {
        id?: string
        class?: string
        className?: string
        style?: string | Record<string, string | number>
        children?: string | string[] | Element[]
        [key: string]: any
      }
    }

    interface IntrinsicAttributes {
      key?: string | number
      id?: string
      class?: string
    }
  }
}

export {}
