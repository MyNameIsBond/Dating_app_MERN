import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField, renderRadioButton } from './renderField'
import { Row, Breadcrumb, MenuItem } from 'react-materialize'

const RegiserFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit} className="login_style">
      <Breadcrumb className="breadAll breadcrumb-text">
        <MenuItem>Who you are</MenuItem>
        <MenuItem>More things about you</MenuItem>
      </Breadcrumb>
      <div className="login_inner">
        <Row>
          <Field name="email" type="email" component={renderField} label="Email" />
        </Row>
        <div>
          <Row>
            <label>What is your gender</label>
            <Field name="gender" component={renderRadioButton} />
          </Row>
        </div>
        <div>
          <button
            type="button"
            className="previous waves-effect waves-light btn"
            onClick={previousPage}
          >
            <i class="material-icons left">keyboard_arrow_left</i>
            Previous
          </button>
          <button type="submit" className="next waves-effect waves-light btn">
            <i class="material-icons right">keyboard_arrow_right</i>
            Next
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
})(RegiserFormSecondPage)
