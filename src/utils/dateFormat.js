export const dateFormat = (dateString) => {
  if (typeof dateString === 'string') {
    const [day, month, year] = dateString?.split('/')?.map(Number)

    return day ? new Date(year, month - 1, day) : null
  }
}

export const formatDateToDDMMYYYY = (date) => {
  const day = date?.getDate()
  const month = date?.getMonth() + 1
  const year = date?.getFullYear()

  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month

  return day && `${formattedDay}/${formattedMonth}/${year}`
}
