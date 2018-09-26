import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user_reducer from './user_reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import user_auth from './user_auth'
import loggedIn_reducer from './loggedIn_reducer'
import userTyping from './userTyping'
import send_message from './send_message'
export default combineReducers({
  users: user_reducer,
  loadingBar: loadingBarReducer,
  form: formReducer,
  user_auth,
  loggedIn_reducer,
  userTyping,
  send_message
})
