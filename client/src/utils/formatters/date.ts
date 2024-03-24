export const basicFullDate = (d: Date): string => {
  if (!d) return ''
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }
  return d.toLocaleDateString('en-US', options)
}
