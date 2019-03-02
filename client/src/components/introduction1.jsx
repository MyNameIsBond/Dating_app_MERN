import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField, renderDateTimePicker } from './renderField'
import { Breadcrumb, MenuItem } from 'react-materialize'

const RegisterFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="login_style">
      <Breadcrumb className="breadAll breadcrumb-text">
        <MenuItem>Who you are</MenuItem>
      </Breadcrumb>
      <div className="login_inner">
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="date" type="date" component={renderDateTimePicker} label="Date" />
        <div>
          <button type="submit" className="btn next ">
            Next <i class="material-icons right">keyboard_arrow_right</i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegisterFormFirstPage)
