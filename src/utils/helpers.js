import {
  CURRENT_DATE,
  END_YEAR,
  FULL_URL,
  _MS_PER_DAY,
  DEFAULT_NAME,
} from './Constants'

export function capitalizeName(text) {
  if (typeof text !== 'string') return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const convertToDays = () => {
  const utc1 = Date.UTC(
    CURRENT_DATE.getFullYear(),
    CURRENT_DATE.getMonth(),
    CURRENT_DATE.getDate()
  )
  const utc2 = Date.UTC(
    END_YEAR.getFullYear(),
    END_YEAR.getMonth(),
    END_YEAR.getDate()
  )
  return Math.floor((utc2 - utc1) / _MS_PER_DAY)
}

export const generateTitle = () => {
  const diffDate = convertToDays()
  return diffDate === 0
    ? `Today is the end of the ${CURRENT_DATE.getFullYear()} year,`
    : diffDate === 1
    ? `The year ${CURRENT_DATE.getFullYear()} ends in a ${diffDate} day,`
    : diffDate > 1
    ? `The year ${CURRENT_DATE.getFullYear()} ends in ${diffDate} days,`
    : false
}

export const getName = () => {
  const updatedUrl = FULL_URL.replace('&', '')
  if (updatedUrl.includes('?name')) {
    let tempName = decodeURIComponent(
      updatedUrl.slice(updatedUrl.indexOf('?') + 6, updatedUrl.length)
    )
    if (tempName === ' ' || tempName === '') {
      return capitalizeName(DEFAULT_NAME)
    } else {
      return capitalizeName(tempName)
    }
  } else {
    return capitalizeName(DEFAULT_NAME)
  }
}
