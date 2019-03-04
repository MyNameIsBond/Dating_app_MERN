import { FETCH_USER } from './types'
import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const fetchUser = user => async dispatch => {
  dispatch(showLoading())
  const userID = await axios.get(`/profile/${user}`)
  dispatch({ type: FETCH_USER, payload: userID.data })
  dispatch(hideLoading())
}
