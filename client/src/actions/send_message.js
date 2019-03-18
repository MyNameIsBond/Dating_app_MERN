import { SEND_MESSAGE } from './types'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
// import socketIOClient from 'socket.io-client'
// const url = 'http://localhost:8080'
// const socket = socketIOClient(url)

export const send_message = values => (dispatch, props) => {
  dispatch(showLoading())
  // dispatch({ type: SEND_MESSAGE, payload: { user: 'Tony', message: `${values}` } })
  // socket.emit(SEND_MESSAGE, { user: 'Tony', message: `${values}` })
  dispatch(hideLoading())
}
