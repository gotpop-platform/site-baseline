// cache.ts
const store = new Map<string, { content: JSX.Element; expires: number }>()

export const cache = {
  get: async (key: string) => {
    const item = store.get(key)
    if (!item) return null
    if (Date.now() > item.expires) {
      store.delete(key)
      return null
    }
    return item.content
  },

  set: async (key: string, content: JSX.Element, ttl: number) => {
    store.set(key, {
      content,
      expires: Date.now() + ttl * 1000,
    })
  },

  clear: () => store.clear(),
}

// const pageIndex = async ({
//   query,
//   scriptPaths,
// }: {
//   query: Record<string, string>
//   scriptPaths: Record<string, string>
// }): Promise<JSX.Element> => {
//   const { slug = "/" } = query

//   // Try to get from cache first
//   const cachedContent = await cache.get(slug)
//   if (cachedContent) {
//     return cachedContent
//   }

//   // Generate content
//   const content = slug === "/" ? await block({ slug: "/" }) : await block(query)

//   // Cache the result
//   await cache.set(slug, content, CACHE_TTL)

//   return content
// }

// // Preload common routes
// const preloadRoutes = async () => {
//   const commonRoutes = ["/", "/about", "/contact"]
//   await Promise.all(
//     commonRoutes.map((route) => pageIndex({ query: { slug: route }, scriptPaths: {} }))
//   )
// }

// // Call on app startup
// preloadRoutes()

// export default pageIndex
