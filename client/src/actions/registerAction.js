import { SubmissionError } from 'redux-form'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import jwt from 'jsonwebtoken'
import { setCurrentUser } from '../actions/user_authentication'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const registerAction = async (values, dispatch, props) => {
  const settings = {
    method: 'post',
    body: JSON.stringify({ values }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await fetch('/login/register', settings)
    dispatch(showLoading())
    const json = await res.json()
    if (json.error) {
      console.log(json.error)
      const errors = json.error.regError
      throw errors
    }
    localStorage.setItem('token', json.token)
    setAuthorizationToken(json.token)
    dispatch(setCurrentUser(jwt.decode(json.token)))
    props.history.push('/')
    dispatch(hideLoading())
    window.Materialize.toast('Your accound was created.', 10000)
  } catch (error) {
    throw new SubmissionError(error)
  }
}
