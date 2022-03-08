import { useState } from 'react'
import { tips } from '../utils/Constants'

const myArr = []
export const useTip = (curTip) => {
  const [tip, setTip] = useState(curTip)

  myArr.push(tip)
  const diffArr = tips.filter((x) => !myArr.includes(x))
  const random = Math.floor(Math.random() * diffArr.length)

  return [diffArr?.length > 0 ? diffArr[random] : null, setTip]
}
