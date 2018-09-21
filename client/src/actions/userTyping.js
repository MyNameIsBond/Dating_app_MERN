import { USER_TYPING } from './types'

export const userTyping = () => dispatch => {
  dispatch({
    type: USER_TYPING,
    user: 'Tony',
    typing: true
  })
}
