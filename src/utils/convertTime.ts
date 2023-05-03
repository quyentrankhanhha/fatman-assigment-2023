const convertTime = (timestamp: string) => {
  const dateObj = new Date(timestamp)

  const day = dateObj.getUTCDate().toString().padStart(2, '0')
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = dateObj.getUTCFullYear().toString()

  const dateStr = `${month}.${day}.${year}`

  const hour = dateObj.getUTCHours().toString().padStart(2, '0')
  const minute = dateObj.getUTCMinutes().toString().padStart(2, '0')

  const timeStr = `${hour}:${minute}`

  const formattedStr = `${dateStr} ${timeStr}`
  return formattedStr
}

export default convertTime
