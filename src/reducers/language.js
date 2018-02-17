import { SET_LANGUAGE } from '../constants/actionTypes'

const initialLanguage = 'en'

const language = (state = initialLanguage, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language

    default:
      return state
  }
}

export default language
