export const formatDate = (rawDate) => {
  let hours = rawDate.getHours()
  const minutes = rawDate.getMinutes()
  const seconds = rawDate.getSeconds()
  const zero = seconds < 10 ? "0" : ""
  if (hours === 0 || hours === 12) {
    hours += 12
  }
  const time =
    hours < 12
      ? `${hours}:${minutes}:${zero}${seconds} AM`
      : `${hours - 12}:${minutes}:${zero}${seconds} PM`

  const date = `${
    rawDate.getMonth() + 1
  }/${rawDate.getDate()}/${rawDate.getFullYear()}`

  return [date, time]
}
