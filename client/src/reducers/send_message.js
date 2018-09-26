import { SEND_MESSAGE } from '../actions/types'
const initialState = { user: {}, message: {} }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, message: action.message, user: action.user }
    default:
      return state
  }
}
