import { USER_LOGGEDIN } from '../actions/types'
const initialState = {
  loggedinusers: {}
}
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGEDIN:
      return {
        ...state,
        loggedinusers: action.payload
      }
    default:
      return state
  }
}
