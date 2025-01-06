export const getDirectoriesAndSlug = (
  slug: string | undefined,
  defaultPath: string[],
  compareValue: string,
  defaultSlug: string = "button"
) => {
  const segments = slug === compareValue ? defaultPath : slug?.split("/") || defaultPath
  const [root, ...rest] = segments
  const componentSlug = rest.pop() || defaultSlug

  return { directories: rest, componentSlug }
}

export const getCurrentLevel = (allComponents: Map<string, any>, directories: string[]) => {
  let currentLevel: Map<string, any> | undefined = allComponents

  for (const dir of directories) {
    currentLevel = currentLevel.get(dir)

    if (!currentLevel) {
      throw new Error(`Directory "${dir}" not found`)
    }
  }

  return currentLevel
}
