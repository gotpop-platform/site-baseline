const toSentenceCase = (str: string) => {
  return str.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}

export const title = (title = "", SITE_NAME: string) =>
  SITE_NAME + " | " + toSentenceCase(title.trim().replace(/[-\/]/g, " "))
