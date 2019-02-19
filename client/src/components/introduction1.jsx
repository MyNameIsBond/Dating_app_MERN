import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField } from './renderField'
import { Input, Breadcrumb, MenuItem, Icon } from 'react-materialize'
import Row from 'react-materialize/lib/Row'

const renderDateTimePicker = ({ input: { onChange, value }, meta: { touched, error } }) => {
  ;<Row>
    <label>Date of Birth</label>
    <input
      type="date"
      name="date"
      onChange={(e, value) => {
        console.log(e.target.value)
      }}
    />
    {touched &&
      ((error && (
        <div className="error_div">
          <Icon>report</Icon>
          <span>{error}</span>
        </div>
      )) ||
        (error && <span>{error}</span>))}
  </Row>
}

const RegisterFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="login_style">
      <Breadcrumb className="breadAll breadcrumb-text">
        <MenuItem>Who you are</MenuItem>
      </Breadcrumb>
      <div className="login_inner">
        <Field name="username" type="text" component={renderField} label="Username" />

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
