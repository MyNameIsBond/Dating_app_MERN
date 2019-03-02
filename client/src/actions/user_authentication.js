import { SubmissionError } from 'redux-form'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import jwt from 'jsonwebtoken'
import { SET_CURRENT_USER } from './types'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}
export const logout = () => dispatch => {
  localStorage.removeItem('token')
  setAuthorizationToken(false)
  dispatch(setCurrentUser({}))
}
export const signInAction = async (values, dispatch, props) => {
  dispatch(showLoading())
  const settings = {
    method: 'post',
    body: JSON.stringify({ values }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await fetch('/login', settings)
    const json = await res.json()
    if (json.error) {
      console.log(json.error)
      throw json.error
    }
    localStorage.setItem('token', json.token)
    setAuthorizationToken(json.token)
    dispatch(setCurrentUser(jwt.decode(json.token)))
    props.history.push('/')
    dispatch(hideLoading())
    window.Materialize.toast(` you just logged in.`, 10000)
  } catch (error) {
    throw new SubmissionError(error)
  }
}
