import { INCREASE, DECREASE } from '../constants/actionTypes'

const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })

export {
  increase,
  decrease,
}
