import { USER_TYPING } from './types'

export const userTyping = e => dispatch => {
  // Socket code for userTyping
  dispatch({
    type: USER_TYPING,
    user: 'Tony',
    typing: true,
    message: e
  })
}
