import { FETCH_USER } from './types'
import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const fetchUser = user => async dispatch => {
  dispatch(showLoading())
  const userID = await axios.get(`/profile/${user}`)
  console.log(userID)
  dispatch({ type: FETCH_USER, payload: user })
  dispatch(hideLoading())
  // const e = props.params.user
  // console.log(e)
}
