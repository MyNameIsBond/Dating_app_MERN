import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user_reducer from './user_reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import user_auth from './user_auth'
import usersonline from './loggedIn_reducer'
export default combineReducers({
  users: user_reducer,
  loadingBar: loadingBarReducer,
  form: formReducer,
  user_auth,
  usersonline
})
