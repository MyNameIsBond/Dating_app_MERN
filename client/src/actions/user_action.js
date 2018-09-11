import fetch from 'cross-fetch'
import axios from 'axios'
import { FETCH_USERS } from './types'
export const fetchUsers = () => async dispatch => {
  const users = await axios.get('/users')

  dispatch({
    type: FETCH_USERS,
    payload: users.data
  })
}
