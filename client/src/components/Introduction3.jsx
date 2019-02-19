import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { isNotEmail } from 'sane-email-validation'
import { Row, Input, Icon, Button } from 'react-materialize'
import { renderField } from './renderField'
import { Link } from 'react-router-dom'
import { registerAction } from '../actions/registerAction'
import { Breadcrumb, MenuItem } from 'react-materialize'

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
  if (!values.sex) {
    errors.sex = 'Required'
  }
  return errors
}

const RegiserLastPage = props => {
  const { handleSubmit, submitting } = props
  return (
    <div>
      <Breadcrumb className="breadAll breadcrumb-text">
        <MenuItem>Who you are</MenuItem>
        <MenuItem>More things about you</MenuItem>
        <MenuItem>Sum up</MenuItem>
      </Breadcrumb>
      <div className="login_style">
        <div className="login_inner">
          <form onSubmit={handleSubmit(registerAction)}>
            <Icon>person</Icon>

            <Field name="username" type="text" component={renderField} label="Username" />
            <Icon>mail</Icon>
            <Field name="email" type="email" component={renderField} label="Email" />
            <Icon>lock</Icon>
            <Field name="password" type="password" component={renderField} label="password" />
            <Icon>lock</Icon>

            <Field
              name="password2"
              type="password"
              component={renderField}
              label="Repeat Password"
            />
            <button className="waves-effect waves-light btn" type="submit" disabled={submitting}>
              Register
            </button>
          </form>
          <Link to="/login" id="register-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegiserLastPage)
