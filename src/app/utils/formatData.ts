export function formatDate(originDate: string | Date) {
  const date = new Date(originDate)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  const formattedDate = `${date.getFullYear()}.${month}.${day}`
  return formattedDate
}
