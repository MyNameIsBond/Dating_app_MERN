import { FETCH_USERS } from '../actions/types'
const initialState = { items: [], item: {} }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}
