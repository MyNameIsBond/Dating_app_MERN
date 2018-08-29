import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
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

export default store
