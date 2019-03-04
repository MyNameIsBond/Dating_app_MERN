import axios from 'axios'
import { FETCH_USERS } from './types'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const fetchUsers = () => async dispatch => {
  dispatch(showLoading())
  const users = await axios.get('/users')
  dispatch({ type: FETCH_USERS, payload: users.data })
  dispatch(hideLoading())
}
