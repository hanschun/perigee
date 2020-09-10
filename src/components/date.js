import React from 'react'
import {parseISO, format} from 'date-fns'

export default function Date({dateString}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'h:mm a LLLL d, yyyy')}</time>
}