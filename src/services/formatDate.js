export const formatDate = (rawDate) => {
  const date = new Date(rawDate)
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const zero = seconds < 10 ? "0" : ""
  if (hours === 0 || hours === 12) {
    hours += 12
  }
  const time =
    hours < 12
      ? `${hours}:${minutes}:${zero}${seconds} AM`
      : `${hours - 12}:${minutes}:${zero}${seconds} PM`

  const monthDayYear = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`

  return [monthDayYear, time]
}
