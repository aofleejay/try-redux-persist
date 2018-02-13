import { INCREASE, DECREASE } from '../constants/actionTypes'

const initialCounter = 0

const counter = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1
    
    case DECREASE:
      return state - 1
  
    default:
      return state
  }
}

export default counter
