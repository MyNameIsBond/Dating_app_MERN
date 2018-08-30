import React from 'react'
import App from '../styles/App.css'
import { Field, reduxForm } from 'redux-form'
import { Icon } from 'react-materialize'
import { isNotEmail } from 'sane-email-validation'
import { renderField } from './renderField.jsx'
import { Link } from 'react-router-dom'
const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (isNotEmail(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="container login_style" style={App.something}>
      <h4>LOGIN</h4>
      <div className="login_inner">
        <form onSubmit={handleSubmit}>
          <Icon>mail</Icon>
          <Field name="email" type="email" component={renderField} label="Email" />
          <Icon>lock</Icon>
          <Field name="password" type="password" component={renderField} label="Password" />
          <button type="submit" className="waves-effect waves-light btn" disabled={submitting}>
            Login
          </button>
        </form>
        <Link to="/register" id="register-link">
          Register
        </Link>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'SyncValidationForm',
  validate,
  renderField
})(SyncValidationForm)
