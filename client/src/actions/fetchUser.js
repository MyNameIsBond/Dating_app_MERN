import { FETCH_USER } from './types'
import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const fetchUser = () => async dispatch => {
  dispatch(showLoading())
  console.log(localStorage.token)
  const userID = await axios.get(`/profile/${user}`)
  console.log(userID)
  dispatch({ type: FETCH_USER, payload: userID })
  dispatch(hideLoading())
}
