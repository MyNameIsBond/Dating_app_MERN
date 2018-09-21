import { USER_TYPING } from '../actions/types'
const initialState = { user: {}, typing: false }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_TYPING:
      return { ...state, typing: action.typing, user: action.user }
    default:
      return state
  }
}
