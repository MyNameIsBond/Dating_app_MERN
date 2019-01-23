import { USER_TYPING } from './types'

export const userTyping = () => dispatch => {
  // Socket code for userTyping
  dispatch({
    type: USER_TYPING,
    user: 'Tony',
    typing: true
  })
}
