import { useState } from 'react'
import { TIPS } from '../utils/Constants'

const myArr = []
export const useTip = (curTip) => {
  const [tip, setTip] = useState(curTip)

  myArr.push(tip)
  const diffArr = TIPS.filter((x) => !myArr.includes(x))
  const random = Math.floor(Math.random() * diffArr.length)

  return [diffArr?.length > 0 ? diffArr[random] : null, setTip]
}
