import { SEND_MESSAGE } from './types'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import socketIOClient from 'socket.io-client'
const url = 'http://localhost:8080'
const socket = socketIOClient(url)

export const send_message = values => dispatch => {
  dispatch(showLoading())
  console.log('send Message')
  dispatch({ type: SEND_MESSAGE, user: 'Tonyyy' })
  socket.emit(SEND_MESSAGE, { user: 'Tony', message: values.message })
  dispatch(hideLoading())
}
