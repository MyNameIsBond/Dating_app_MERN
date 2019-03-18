import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './actions/user_authentication'
import jwt from 'jsonwebtoken'

const initialState = {}

const middleware = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware, loadingBarMiddleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

if (localStorage.token) {
  setAuthorizationToken(localStorage.token)
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)))
}

export default store
