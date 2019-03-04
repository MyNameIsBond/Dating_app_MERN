import { USER_TYPING } from './types'
import socketIOClient from 'socket.io-client'
const url = 'http://localhost:8080'
const socket = socketIOClient(url)

export const userTyping = e => dispatch => {
  socket.emit(USER_TYPING, { user: 'Tony' })
  dispatch({
    type: USER_TYPING,
    payload: { user: 'Tony', typing: true, message: e.value }
  })
}
