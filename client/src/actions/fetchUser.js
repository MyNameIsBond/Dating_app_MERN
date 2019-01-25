import { FETCH_USER } from './types'
import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const fetchUser = () => async (dispatch, props) => {
  dispatch(showLoading())
  // const userID = await axios.get(`/profile/${userID}`)
  const us = props.getState().user
  console.log(us)
  dispatch({ type: FETCH_USER, payload: '5bcc0dfffd6bfc15b19ab6a3' })
  dispatch(hideLoading())
}
