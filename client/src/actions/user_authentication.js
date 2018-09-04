import { SubmissionError } from 'redux-form'

const signInAction = async (value, props, history) => {
  const settings = {
    method: 'post'
  }
  try {
    const res = await fetch('/login/signin', settings)
    const json = await res.json()
    console.log(json)
    localStorage.setItem('user', json.data.token)
    history.push('/')
  } catch (error) {
    throw new SubmissionError({
      password: 'Login failed!'
    })
  }
}

export default signInAction
