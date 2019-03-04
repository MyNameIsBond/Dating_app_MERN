import { SEND_MESSAGE } from '../actions/types'
const initialState = { user: {}, message: {} }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, user: action.payload.user, message: action.payload.message }
    default:
      return state
  }
}
