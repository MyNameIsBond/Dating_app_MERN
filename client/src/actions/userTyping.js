import { USER_TYPING } from './types'
import socketIOClient from 'socket.io-client'

export const userTyping = e => dispatch => {
  // socket.emit(USER_TYPING, { user: 'Tony' })
  // dispatch({
  //   type: USER_TYPING,
  //   payload: { user: 'Tony', typing: true, message: e.value }
  // })
}
