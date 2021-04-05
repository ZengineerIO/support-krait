export function timePasedSince(date) {
  let seconds = Math.floor((Date.now() - date) / 1000)

  const hoursPast = Math.floor(seconds / 60 / 60)
  const minutesPast = Math.floor(seconds / 60) % 60
  seconds = (seconds % 60) % 60

  return `${hoursPast}h${minutesPast < 10 ? '0' : ''}${minutesPast}m${
    seconds < 10 ? '0' : ''
  }${seconds}s ago`
}
