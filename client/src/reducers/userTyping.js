import { USER_TYPING } from '../actions/types'
const initialState = { user: {}, typing: false, message: '' }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_TYPING:
      return {
        ...state,
        typing: action.payload.typing,
        user: action.payload.user,
        message: action.payload.message
      }
    default:
      return state
  }
}
