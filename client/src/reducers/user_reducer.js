import { FETCH_USERS } from '../actions/types'
import { AUTHENTICATED } from '../actions/types'
import { UNAUTHENTICATED } from '../actions/types'
import { AUTHENTICATION_ERROR } from '../actions/types'
const initialState = { items: [], item: {} }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, items: action.payload }
    case AUTHENTICATED:
      return { ...state, authenticated: true }
    case UNAUTHENTICATED:
      return { ...state, authenticated: false }
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
