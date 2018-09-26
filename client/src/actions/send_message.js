import { SEND_MESSAGE } from './types'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import axios from 'axios'

export const send_message = () => async (values, dispatch) => {
  dispatch(showLoading())
  dispatch(hideLoading())
}
