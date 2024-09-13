export const formattedDate = (
  date: string | number | Date
) =>
  new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
