import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { isNotEmail } from 'sane-email-validation'
import { Row, Input, Icon, Button } from 'react-materialize'
import { renderField } from './renderField'
import { Link } from 'react-router-dom'
import { registerAction } from '../actions/registerAction'

const Ad_card = () => {
  return (
    <div>
      <Icon>account_circle</Icon>
      <h4>Something cool</h4>
    </div>
  )
}

const Ad_card2 = () => {
  return (
    <div>
      <Icon>account_circle</Icon>
      <h4>Something cool</h4>
    </div>
  )
}

const Ad_card3 = () => {
  return (
    <div>
      <Icon>account_circle</Icon>
      <h4>Something cool</h4>
    </div>
  )
}

const Advertisement = () => {
  return (
    <div className="ad_card">
      <ul>
        <li>
          <Ad_card />
        </li>
        <li>
          <Ad_card2 />
        </li>
        <li>
          <Ad_card3 />
        </li>
      </ul>
    </div>
  )
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (isNotEmail(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length <= 7) {
    errors.password = 'Password should be more than 8 characters'
  }
  if (!values.password2) {
    errors.password2 = 'Required'
  } else if (values.password2.length <= 7) {
    errors.password2 = 'Password should be more than 8 characters'
  }
  return errors
}

const Regiser = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <div className="container login_style">
        <h4>REGISTER</h4>
        <div className="login_inner">
          <form onSubmit={handleSubmit(registerAction)}>
            <Icon>person</Icon>

            <Field
              name="username"
              type="text"
              component={renderField}
              label="Username"
            />
            <Icon>mail</Icon>

            <Field
              name="email"
              type="email"
              component={renderField}
              label="Email"
            />
            <Icon>lock</Icon>

            <Field
              name="password"
              type="password"
              component={renderField}
              label="password"
            />
            <Icon>lock</Icon>

            <Field
              name="password2"
              type="password"
              component={renderField}
              label="Repeat Password"
            />
            <button
              className="waves-effect waves-light btn"
              type="submit"
              disabled={submitting}
            >
              Register
            </button>
          </form>
          <Link to="/login" id="register-link">
            Login
          </Link>
        </div>
      </div>
      <Advertisement />
    </div>
  )
}

export default reduxForm({
  form: 'Register', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  renderField // <--- warning function given to redux-form
})(Regiser)
